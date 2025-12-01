import { createTRPCRouter, publicProcedure } from "../trpc";
import * as cheerio from "cheerio";
import { getDnsRecords } from "@/lib/dns";
import { scanInput } from "../schemas/scan.schema";
import { env } from "@/env";

const KNOWN_BLOCKERS = [
  { id: "blockify", name: "Blockify", signatures: ["blockify", "blocky"] },
  { id: "negate", name: "Negate", signatures: ["negate"] },
  { id: "traffic-guard", name: "Traffic Guard", signatures: ["trafficguard", "traffic-guard"] },
  { id: "ip-blocker", name: "IP Blocker", signatures: ["ip-blocker", "ipblocker"] },
  { id: "easy-lockdown", name: "Easy Lockdown", signatures: ["easy-lockdown", "easylockdown"] },
  { id: "bot-manager", name: "Shopify Bot Manager", signatures: ["bot-manager"] },
];

const KNOWN_PIXELS = [
  {
    id: "facebook",
    name: "Meta Pixel",
    signatures: ["connect.facebook.net", "facebook.com/tr"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/facebook-logo.png",
  },
  {
    id: "google",
    name: "Google Analytics/Ads",
    signatures: ["googletagmanager.com", "google-analytics.com", "gtag"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/google-logo.png",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    signatures: ["static.klaviyo.com", "klaviyo.com"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/klaviyo-logo.png",
  },
  {
    id: "tiktok",
    name: "TikTok Pixel",
    signatures: ["analytics.tiktok.com"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/tiktok-logo.png",
  },
  {
    id: "pinterest",
    name: "Pinterest Tag",
    signatures: ["pinimg.com", "pinterest.com"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/pinterest-logo.png",
  },
  {
    id: "snapchat",
    name: "Snapchat Pixel",
    signatures: ["sc-static.net"],
    logo_url: env.NEXT_PUBLIC_APP_URL + "/images/snapchat-logo.png",
  },
];

const DOMAINS_ON_UNBOTIFY = env.UNBOTIFY_DOMAINS.split(",").map((d) => d.trim());

export const scanRouter = createTRPCRouter({
  scanWebsite: publicProcedure.input(scanInput).mutation(async ({ ctx, input }) => {
    let ret = {
      success: true,
      message: "Scan completed",
      data: {
        title: "",
        description: "",
        usesShopify: false,
        usesCloudflare: false,
        detectedApps: [] as string[],
        detectedPixels: [] as { name: string; logo_url: string }[],
        scrapedProducts: [] as { title: string; price: string }[],
        isUnbotifyDomain: false,
        url: input.url,
        ttfb: 0,
        botAccessAllowed: false,
        publicInventory: false,
        formCount: 0,
        inputCount: 0,
      },
    };
    try {
      const data = await scanWebsite({ url: input.url });
      ret.data.title = data.title;
      ret.data.description = data.description || "";
      ret.data.usesShopify = data.usesShopify;
      ret.data.usesCloudflare = data.usesCloudflare;
      ret.data.detectedApps = data.detectedApps || [];
      ret.data.detectedPixels = data.detectedPixels || [];
      ret.data.scrapedProducts = data.scrapedProducts || [];
      ret.data.isUnbotifyDomain = data.isUnbotifyDomain;
      ret.data.ttfb = data.ttfb;
      ret.data.botAccessAllowed = data.botAccessAllowed;
      ret.data.publicInventory = data.publicInventory;
      ret.data.formCount = data.formCount;
      ret.data.inputCount = data.inputCount;
    } catch (error) {
      console.error(error);
      ret.success = false;
      ret.message = "Scan failed";
    }
    return ret;
  }),
});

async function scanWebsite({ url }: { url: string }) {
  const properURL = new URL(url);
  const start = performance.now();

  //  Bot Access Check
  const botResponse = await fetch(properURL.href, {
    headers: {
      "User-Agent": "python-requests/2.32.3",
    },
  });

  const ttfb = Math.round(performance.now() - start);
  const botAccessAllowed = botResponse.status >= 200 && botResponse.status < 300;

  //  Human Fallback (Get HTML)
  let html = "";
  if (!botAccessAllowed) {
    try {
      const humanResponse = await fetch(properURL.href, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });
      html = await humanResponse.text();
    } catch (e) {
      console.error("Human access failed", e);
    }
  } else {
    html = await botResponse.text();
  }

  //  Inventory Extraction (Changed to GET to steal data)
  const productsJsonUrl = `${properURL.origin}/products.json`;
  let publicInventory = false;
  let scrapedProducts: { title: string; price: string }[] = [];

  try {
    const productsResponse = await fetch(productsJsonUrl, {
      method: "GET", // Changed from HEAD to GET
      headers: { "User-Agent": "python-requests/2.32.3" },
    });

    publicInventory = productsResponse.status === 200;
    console.log("publicInventory", productsResponse.status);

    if (publicInventory) {
      const json = await productsResponse.json();
      if (json.products && Array.isArray(json.products)) {
        // Grab the first 5 items to display in the "Leak" card
        scrapedProducts = json.products.slice(0, 5).map((p: any) => ({
          title: p.title,
          price: p.variants?.[0]?.price || "N/A",
        }));
      }
    }
  } catch (e) {
    console.error("Inventory check failed", e);
  }

  //  HTML Analysis
  const $ = cheerio.load(html);
  const pageTitle = $("title").first().text();
  const description = $('meta[name="description"]').attr("content");

  const usesShopify = $("script[src]")
    .toArray()
    .some((el) => {
      const src = $(el).attr("src");
      return src && src.includes("shopify.com");
    });

  const dnsRecords = await getDnsRecords(properURL.origin);
  const usesCloudflare = dnsRecords.ns.some((record: string) => record.includes(".ns.cloudflare.com"));

  // App Detection
  const detectedApps: string[] = [];
  const scripts = $("script[src]").toArray();
  scripts.forEach((el) => {
    const src = $(el).attr("src")?.toLowerCase() || "";
    KNOWN_BLOCKERS.forEach((app) => {
      if (app.signatures.some((sig) => src.includes(sig))) {
        if (!detectedApps.includes(app.name)) {
          detectedApps.push(app.name);
        }
      }
    });
  });

  // Pixel Detection
  const detectedPixels: { name: string; logo_url: string }[] = [];
  const scriptTags = $("script").toArray();

  scriptTags.forEach((el) => {
    const src = $(el).attr("src")?.toLowerCase() || "";
    const content = $(el).html()?.toLowerCase() || "";

    KNOWN_PIXELS.forEach((pixel) => {
      const hasSignature = pixel.signatures.some((sig) => src.includes(sig) || content.includes(sig));
      if (hasSignature && !detectedPixels.some((p) => p.name === pixel.name)) {
        detectedPixels.push({ name: pixel.name, logo_url: pixel.logo_url });
      }
    });
  });

  // Spam Vector Detection (Forms & Inputs)
  const formCount = $("form").length;
  const inputCount = $("input[type='email']").length;

  const isUnbotifyDomain = DOMAINS_ON_UNBOTIFY.some((domain) => properURL.hostname.includes(domain));

  return {
    title: pageTitle,
    description,
    usesShopify: isUnbotifyDomain ? true : usesShopify,
    usesCloudflare: isUnbotifyDomain ? true : usesCloudflare,
    detectedApps: isUnbotifyDomain ? [] : detectedApps,
    detectedPixels: isUnbotifyDomain ? [] : detectedPixels,
    scrapedProducts: isUnbotifyDomain ? [] : scrapedProducts,
    isUnbotifyDomain,
    ttfb,
    botAccessAllowed: isUnbotifyDomain ? false : botAccessAllowed,
    publicInventory: isUnbotifyDomain ? false : publicInventory,
    formCount: isUnbotifyDomain ? 0 : formCount,
    inputCount: isUnbotifyDomain ? 0 : inputCount,
  } as const;
}
