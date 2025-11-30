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

const DOMAINS_ON_UNBOTIFY = env.UNBOTIFY_DOMAINS.split(",");

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
        isUnbotifyDomain: false,
      },
    };
    try {
      const data = await scanWebsite({ url: input.url });
      ret.data.title = data.title;
      ret.data.description = data.description || "";
      ret.data.usesShopify = data.usesShopify;
      ret.data.usesCloudflare = data.usesCloudflare;
      ret.data.detectedApps = data.detectedApps || [];
      ret.data.isUnbotifyDomain = data.isUnbotifyDomain;
    } catch (error) {
      ret.success = false;
      ret.message = "Scan failed";
    }
    return ret;
  }),
});

async function scanWebsite({ url }: { url: string }) {
  const properURL = new URL(url);
  const response = await fetch(properURL.origin, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  const html = await response.text();
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
  const isUnbotifyDomain = DOMAINS_ON_UNBOTIFY.some((domain) => properURL.hostname.includes(domain));
  return {
    title: pageTitle,
    description,
    usesShopify,
    usesCloudflare,
    detectedApps,
    isUnbotifyDomain,
  } as const;
}
