"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { scanInput } from "@/server/api/schemas/scan.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  Loader2,
  ScanLine,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Server,
  Lock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useForm } from "react-hook-form";
import type z from "zod";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

// The "Fake" steps to build anticipation
const SCAN_STEPS = [
  "Resolving DNS Records...",
  "Analyzing Script Tags...",
  "Checking WAF Signatures...",
  "Testing Bot Access...",
  "Identifying Placebo Apps...",
  "Finalizing Report...",
];

export default function Form() {
  const router = useRouter();
  const [scanStep, setScanStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanWebsite = api.scan.scanWebsite.useMutation({
    onSuccess: (data) => {
      // Force a minimum wait time for the "Theater" effect
      setTimeout(() => setShowResults(true), 2000);
      posthog.capture("site_scan_completed", data.data);
    },
  });

  const handleSubmit = (data: z.infer<typeof scanInput>) => {
    setShowResults(false);
    setScanStep(0);
    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= SCAN_STEPS.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    posthog.capture("site_scan_form_submitted", { url: data.url });
    scanWebsite.mutate({ url: data.url });
  };

  const form = useForm<z.infer<typeof scanInput>>({
    resolver: zodResolver(scanInput),
    defaultValues: { url: "" },
  });

  // Derived state for the verdict
  const data = scanWebsite.data?.data;

  // UPDATED VULNERABILITY LOGIC:
  // If Bot Access is Allowed (200 OK), they are vulnerable regardless of Cloudflare status.
  const isVulnerable =
    data &&
    scanWebsite.data?.success &&
    (data.detectedApps.length > 0 || !data.usesCloudflare || !data.isUnbotifyDomain || data.botAccessAllowed); // <--- Critical Check

  return (
    <div className="mx-auto w-full max-w-2xl">
      <AnimatePresence mode="wait">
        {scanWebsite.isPending || (scanWebsite.isSuccess && !showResults) ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full"
          >
            <Card className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden border-slate-800 bg-slate-900 font-mono text-green-400 shadow-2xl max-md:rounded-none max-md:shadow-none">
              {/* Scanline Effect */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20"></div>

              <Loader2 className="mb-6 h-12 w-12 animate-spin text-green-500" />
              <div className="z-10 space-y-2 text-center">
                <p className="text-xl font-bold tracking-widest uppercase">System Scanning</p>
                <p className="animate-pulse text-sm text-green-400/80">{`> ${SCAN_STEPS[scanStep]}`}</p>
              </div>
            </Card>
          </motion.div>
        ) : showResults && data && !scanWebsite.data?.success ? (
          // ERROR STATE
          <motion.div key="error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <Card className="gap-0 overflow-hidden border-2 border-red-100 !p-0 max-md:rounded-none max-md:shadow-none">
              <div className="flex items-center justify-center gap-2 bg-blue-500 p-3 text-center font-bold tracking-wider text-white uppercase">
                <ShieldCheck className="size-5" /> Unable to scan site
              </div>
              <CardContent className="p-0">
                <div className="text-muted-foreground flex items-center justify-between border-b bg-slate-100 p-3 text-xs">
                  <span className="max-w-[300px] truncate font-mono">{form.getValues("url")}</span>
                </div>
                <div className="space-y-6 p-6">
                  <div className="text-center text-sm font-medium">
                    Unable to scan site. It may not exist or blocked our scanner (which is good!).
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-t bg-slate-50 p-4">
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setShowResults(false);
                      setScanStep(0);
                      scanWebsite.reset();
                      form.reset();
                    }}
                  >
                    Scan Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : showResults && data && !data.usesShopify ? (
          // NOT SHOPIFY STATE
          <motion.div
            key="not-shopify"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <Card className="gap-0 overflow-hidden border-2 border-yellow-100 !p-0 max-md:rounded-none max-md:shadow-none">
              <div className="flex items-center justify-center gap-2 bg-yellow-500 p-3 text-center font-bold tracking-wider text-white uppercase">
                <AlertTriangle className="size-5" /> Not On Shopify
              </div>
              <CardContent className="p-0">
                <div className="text-muted-foreground flex items-center justify-between border-b bg-slate-100 p-3 text-xs">
                  <span className="max-w-[300px] truncate font-mono">{form.getValues("url")}</span>
                  <span className="font-semibold">{data.title.substring(0, 30)}...</span>
                </div>
                <div className="p-6 text-center">
                  <Image
                    src="/images/shopify-logo.png"
                    alt="Shopify"
                    width={32}
                    height={32}
                    className="mx-auto mb-2 opacity-50 grayscale"
                  />
                  <p>This tool is optimized for Shopify stores.</p>
                </div>
                <div className="flex flex-col gap-3 border-t bg-slate-50 p-4">
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setShowResults(false);
                      setScanStep(0);
                      scanWebsite.reset();
                      form.reset();
                    }}
                  >
                    Scan Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : showResults && data ? (
          // SUCCESS RESULT STATE
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <Card
              className={cn(
                "gap-0 overflow-hidden border-2 !p-0 max-md:rounded-none max-md:shadow-none",
                isVulnerable ? "border-red-100" : "border-green-100",
              )}
            >
              {/* Verdict Banner */}
              <div
                className={cn(
                  "flex items-center justify-center gap-2 p-3 text-center font-bold tracking-wider text-white uppercase",
                  isVulnerable ? "bg-red-500" : "bg-green-500",
                )}
              >
                {isVulnerable ? (
                  <>
                    <AlertTriangle className="size-5" /> Vulnerability Detected
                  </>
                ) : (
                  <>
                    <ShieldCheck className="size-5" /> Site Secure
                  </>
                )}
              </div>

              <CardContent className="p-0">
                <div className="text-muted-foreground flex items-center justify-between border-b bg-slate-100 p-3 text-xs">
                  <span className="max-w-[300px] truncate font-mono">{form.getValues("url")}</span>
                  <span className="font-semibold">{data.title.substring(0, 30)}...</span>
                </div>

                <div className="space-y-6 p-6">
                  {/* TECH STACK GRID */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {/* Platform */}
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-3 text-center">
                      <Image src="/images/shopify-logo.png" alt="Shopify" width={32} height={32} />
                      <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">Platform</span>
                      <Badge variant="outline" className="bg-white">
                        Shopify
                      </Badge>
                    </div>
                    {/* Cloudflare */}
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-3 text-center">
                      {data.usesCloudflare ? (
                        <Image src="/images/cloudflare-logo.png" alt="CF" width={32} height={32} />
                      ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-slate-200">
                          <Server className="size-4 text-slate-500" />
                        </div>
                      )}
                      <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">DNS / WAF</span>
                      <Badge
                        variant={data.usesCloudflare ? "default" : "destructive"}
                        className={data.usesCloudflare ? "bg-green-600" : ""}
                      >
                        {data.usesCloudflare ? "Cloudflare" : "Standard"}
                      </Badge>
                    </div>
                    {/* Unbotify */}
                    <div
                      className={cn(
                        "col-span-2 flex flex-col items-center gap-2 rounded-lg border p-3 text-center md:col-span-1",
                        data.isUnbotifyDomain ? "border-orange-100 bg-orange-50" : "bg-slate-50/50",
                      )}
                    >
                      {data.isUnbotifyDomain ? (
                        <Image src="/images/logo.png" alt="Unbotify" width={32} height={32} />
                      ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-slate-200">
                          <Server className="size-4 text-slate-500" />
                        </div>
                      )}
                      <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">Bot Firewall</span>
                      <Badge
                        variant={data.isUnbotifyDomain ? "default" : "destructive"}
                        className={data.isUnbotifyDomain ? "!bg-orange-500" : ""}
                      >
                        {data.isUnbotifyDomain ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </div>

                  {/* NEW METRICS GRID */}
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                    {/* Metric 1: Bot Access Test */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                        Bot Access
                      </span>
                      {data.botAccessAllowed ? (
                        <Badge
                          variant="destructive"
                          className="flex items-center gap-1 border-red-200 bg-red-100 text-red-700 shadow-none hover:bg-red-200"
                        >
                          <Lock className="size-3" /> Allowed
                        </Badge>
                      ) : (
                        <Badge className="flex items-center gap-1 border-green-200 bg-green-100 text-green-700 shadow-none hover:bg-green-200">
                          <ShieldCheck className="size-3" /> Blocked
                        </Badge>
                      )}
                    </div>

                    {/* Metric 2: Inventory Exposure */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                        Inventory
                      </span>
                      {data.publicInventory ? (
                        <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700 shadow-none">
                          Exposed
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 shadow-none">
                          Hidden
                        </Badge>
                      )}
                    </div>

                    {/* Metric 3: Server Latency */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                        Latency
                      </span>
                      <span
                        className={cn(
                          "font-mono text-sm font-bold",
                          data.ttfb > 800 ? "text-red-600" : "text-slate-700",
                        )}
                      >
                        {data.ttfb}ms
                      </span>
                    </div>
                  </div>

                  {data.scrapedProducts && data.scrapedProducts.length > 0 && (
                    <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex size-6 items-center justify-center rounded-full border border-yellow-200 bg-yellow-100">
                          <span className="text-xs">📂</span>
                        </div>
                        <span className="text-xs font-bold tracking-wide text-yellow-800 uppercase">
                          Proof of Access: Last 5 Items
                        </span>
                      </div>

                      <div className="divide-y divide-slate-100 rounded border border-yellow-100 bg-white">
                        {data.scrapedProducts.map((product, i) => (
                          <div key={i} className="flex items-center justify-between p-2 text-xs">
                            <span className="max-w-[200px] truncate font-medium text-slate-700">{product.title}</span>
                            <span className="font-mono text-slate-500">
                              {/* Safe Price Rendering */}
                              {isNaN(Number(product.price)) ? product.price : `$${Number(product.price).toFixed(2)}`}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-2 text-[10px] text-yellow-700">
                        *Our scanner downloaded your inventory data in {data.ttfb}ms because it was exposed.
                      </p>
                    </div>
                  )}

                  {/* DETECTED APPS */}
                  {data.detectedApps.length > 0 ? (
                    <div className="space-y-3 rounded-lg border border-red-100 bg-red-50 p-4">
                      <div className="flex items-center gap-2 font-bold text-red-700">
                        <XCircle className="size-5" /> Placebo Apps Detected:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {data.detectedApps.map((app) => (
                          <Badge key={app} variant="destructive" className="px-2 py-1 text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-red-200/60 pt-2">
                        <p className="text-sm leading-relaxed text-red-800">
                          <strong>Why this is risky:</strong> Because {data.detectedApps[0]} relies on JavaScript, bots
                          load your site and fire pixels <em>before</em> the block happens.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-green-100 bg-green-50 p-4 text-center">
                      <div className="mb-1 flex items-center justify-center gap-2 font-bold text-green-700">
                        <CheckCircle2 className="size-5" /> No Client-Side Blockers
                      </div>
                      <p className="text-xs text-green-600">No common placebo apps detected in source code.</p>
                    </div>
                  )}

                  <p className="text-muted-foreground text-center text-xs">
                    Our scanner tool <i>is</i> a bot. If "Bot Access" is Allowed, you are not secured.
                  </p>
                </div>
                <div className="space-y-4 border-t border-slate-100 bg-slate-50/50 p-6">
                  <h4 className="mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Business Impact Analysis
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* PIXEL RISK */}
                    <div className="rounded-lg border bg-white p-3 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">Pixel Pollution</span>
                        <Badge
                          variant={data.botAccessAllowed && data.detectedPixels.length > 0 ? "destructive" : "outline"}
                          className="px-2 py-1 text-[10px]"
                        >
                          {data.detectedPixels.length} At Risk
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2 text-xs leading-tight">
                        Bots trigger these pixels, destroying your ad retargeting data:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {data.detectedPixels.length > 0 ? (
                          data.detectedPixels.map((p) => (
                            <div
                              key={p.name}
                              className="flex items-center gap-1 rounded border bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600"
                            >
                              {/* Ensure Image has fallback or conditional rendering if url is empty */}
                              {p.logo_url && (
                                <Image src={p.logo_url} width={16} height={16} alt={p.name} className="rounded-full" />
                              )}
                              {p.name}
                            </div>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">No pixels detected</span>
                        )}
                      </div>
                    </div>

                    {/* SPAM RISK */}
                    <div className="rounded-lg border bg-white p-3 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">Spam Vectors</span>
                        <Badge
                          variant={data.botAccessAllowed && data.formCount > 0 ? "destructive" : "outline"}
                          className="px-2 py-1 text-[10px]"
                        >
                          {data.formCount} Vulnerable
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2 text-xs leading-tight">
                        Exposed forms that bots use to flood your CRM and inflate bills:
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex-1 rounded border bg-slate-100 px-2 py-1.5 text-center text-xs">
                          <span className="block font-bold text-slate-900">{data.formCount}</span>
                          <span className="text-xs text-slate-500 uppercase">Forms</span>
                        </div>
                        <div className="flex-1 rounded border bg-slate-100 px-2 py-1.5 text-center text-xs">
                          <span className="block font-bold text-slate-900">{data.inputCount}</span>
                          <span className="text-xs text-slate-500 uppercase">Inputs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-t bg-slate-50 p-4">
                  <Button
                    onClick={() => router.push("/contact?website=" + form.getValues("url"))}
                    className="w-full !bg-orange-600 shadow-md shadow-orange-100 hover:!bg-orange-700"
                  >
                    {isVulnerable ? "Fix" : "Secure"} Vulnerabilities ($249) <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setShowResults(false);
                      setScanStep(0);
                      scanWebsite.reset();
                      form.reset();
                    }}
                  >
                    Scan Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* INPUT STATE */
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            <Card className="border-muted shadow-lg max-md:rounded-none max-md:shadow-none">
              <CardHeader>
                <CardTitle>Inspect Store Vulnerability</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        label="Enter your site URL"
                        placeholder="example.com"
                        required
                        type="text"
                        autoComplete="url"
                        {...form.register("url", {
                          onChange: (e) => {
                            const val = e.target.value;
                            if (val.startsWith("https://")) {
                              e.target.value = val.replace("https://", "");
                            } else if (val.startsWith("http://")) {
                              e.target.value = val.replace("http://", "");
                            }
                          },
                        })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full !bg-orange-600"
                      disabled={scanWebsite.isPending || !form.formState.isValid}
                    >
                      Run Security Audit <ScanLine className="ml-2 size-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
