"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { scanInput } from "@/server/api/schemas/scan.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, ScanLine, ShieldCheck, AlertTriangle, XCircle, CheckCircle2, ArrowRight, Server } from "lucide-react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useForm } from "react-hook-form";
import type z from "zod";
import Image from "next/image";
import { cn } from "@/lib/utils";

// The "Fake" steps to build anticipation
const SCAN_STEPS = [
  "Resolving DNS Records...",
  "Analyzing Script Tags...",
  "Checking WAF Signatures...",
  "Identifying Placebo Apps...",
  "Finalizing Report...",
];

export default function Form() {
  const router = useRouter();
  const [scanStep, setScanStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanWebsite = api.scan.scanWebsite.useMutation({
    onSuccess: (data) => {
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
  const isVulnerable = data && (data.detectedApps.length > 0 || !data.usesCloudflare || !data.isUnbotifyDomain);

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
            <Card className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden border-slate-800 bg-slate-900 font-mono text-green-400 shadow-2xl">
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
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <Card
              className={cn(
                "gap-0 overflow-hidden border-2 !p-0",
                isVulnerable ? "border-red-100" : "border-green-100",
              )}
            >
              {/* Verdict Banner */}
              <div
                className={cn(
                  "flex items-center justify-center gap-2 p-3 text-center font-bold tracking-wider text-white uppercase",
                  isVulnerable ? "bg-blue-500" : "bg-green-500",
                )}
              >
                <ShieldCheck className="size-5" /> Unable to scan site
              </div>

              <CardContent className="p-0">
                <div className="text-muted-foreground flex items-center justify-between border-b bg-slate-100 p-3 text-xs">
                  <span className="max-w-[300px] truncate font-mono">{form.getValues("url")}</span>
                  <span className="font-semibold">{data.title.substring(0, 30)}...</span>
                </div>
                <div className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-4 text-center">
                      <span className="text-sm font-medium">
                        Unable to scan site. Either the site is already secure against bots (like the one used to
                        perform this scan!), or it doesn&apos;t exist.
                      </span>
                    </div>
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
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <Card
              className={cn(
                "gap-0 overflow-hidden border-2 !p-0",
                isVulnerable ? "border-red-100" : "border-green-100",
              )}
            >
              {/* Verdict Banner */}
              <div
                className={cn(
                  "flex items-center justify-center gap-2 p-3 text-center font-bold tracking-wider text-white uppercase",
                  isVulnerable ? "bg-yellow-500" : "bg-green-500",
                )}
              >
                {isVulnerable ? (
                  <>
                    <AlertTriangle className="size-5" /> Not On Shopify
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
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-4 text-center">
                      <Image src="/images/shopify-logo.png" alt="Shopify" width={32} height={32} />
                      <span className="text-sm font-medium">
                        {data.usesShopify ? "Shopify Detected" : "You do not use Shopify."}
                      </span>
                    </div>
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
        ) : showResults && data ? (
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <Card
              className={cn(
                "gap-0 overflow-hidden border-2 !p-0",
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-4 text-center">
                      <Image src="/images/shopify-logo.png" alt="Shopify" width={32} height={32} />
                      <span className="text-sm font-medium">
                        {data.usesShopify ? "Shopify Detected" : "Not Shopify"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-4 text-center">
                      {data.usesCloudflare ? (
                        <Image src="/images/cloudflare-logo.png" alt="CF" width={32} height={32} />
                      ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-slate-200">
                          <Server className="size-4 text-slate-500" />
                        </div>
                      )}
                      <span className={cn("text-sm font-medium", !data.usesCloudflare && "text-red-600")}>
                        {data.usesCloudflare ? "Cloudflare WAF" : "No Cloudflare"}
                      </span>
                    </div>
                    <div className="col-span-2 flex flex-col items-center gap-2 rounded-lg border bg-slate-50/50 p-4 text-center">
                      {data.isUnbotifyDomain ? (
                        <Image src="/images/logo.png" alt="Unbotify" width={32} height={32} />
                      ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-slate-200">
                          <Server className="size-4 text-slate-500" />
                        </div>
                      )}
                      <span className={cn("text-sm font-medium", !data.isUnbotifyDomain && "text-red-600")}>
                        {data.isUnbotifyDomain ? "You are on Unbotify!" : "You are not on Unbotify."}
                      </span>
                    </div>
                  </div>
                  {data.detectedApps.length > 0 ? (
                    <div className="space-y-3 rounded-lg border border-red-100 bg-red-50 p-4">
                      <div className="flex items-center gap-2 font-bold text-red-700">
                        <XCircle className="size-5" /> Placebo Apps Detected:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {data.detectedApps.map((app) => (
                          <Badge key={app} variant="destructive" className="text-sm">
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
                </div>
                <p className="text-muted-foreground mb-4 text-center text-xs">
                  Our scanner tool <i>is</i> a bot. If this tool ran, you are not secured against bots.
                </p>
                <div className="flex flex-col gap-3 border-t bg-slate-50 p-4">
                  <Button
                    onClick={() => router.push("/contact?website=" + form.getValues("url"))}
                    className="w-full !bg-indigo-600 shadow-md shadow-indigo-100 hover:!bg-indigo-700"
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
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            <Card className="border-muted shadow-lg">
              <CardHeader>
                <CardTitle>Inspect Store Vulnerability</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <div className="space-y-4">
                    <Input
                      label="Enter your site URL"
                      placeholder="example.com" // Remove the https:// from placeholder
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
                    <Button
                      type="submit"
                      className="w-full !bg-indigo-600"
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
