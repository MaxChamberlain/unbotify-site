import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import type { Metadata } from "next";
import Form from "./_components/form";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Scan Your Site | Unbotify",
  description: "Scan your site and gain insight into its security against Shopify bot traffic.",
  alternates: {
    canonical: "https://unbotify.io/site-scan",
  },
};

export default function SiteScanPage() {
  return (
    <div className="relative pb-32">
      <div className="z-50 mx-auto flex w-screen max-w-7xl flex-col items-center justify-center gap-8 pt-12">
        <Badge className="fade-in-0 zoom-in-95 animate-in !bg-white !text-orange-500 duration-700">
          Use our <strong>free</strong> site scan!
        </Badge>
        <h1 className="fade-in-0 zoom-in-95 animate-in text-4xl font-bold duration-700">Scan Your Site</h1>
        <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-2xl text-center duration-700 max-lg:px-8 lg:whitespace-nowrap">
          Discover what your site uses and what it&apos;s missing to stop Shopify bot traffic.
        </p>
        <Suspense fallback={<div className="h-[432px] w-full" />}>
          <Form />
        </Suspense>
      </div>
      <Script
        id="site-scan-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Unbotify Shopify Security Scanner",
            url: "https://unbotify.io/site-scan",
            description:
              "A free diagnostic tool that scans Shopify stores to detect client-side security vulnerabilities and identify 'placebo' bot protection apps.",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free Security Audit",
            },
            featureList: [
              "Detects client-side blocking apps",
              "Verifies Cloudflare WAF configuration",
              "Identifies residential proxy vulnerabilities",
            ],
            provider: {
              "@type": "Organization",
              name: "Unbotify",
              url: "https://unbotify.io",
              logo: "https://unbotify.io/images/logo.png",
            },
          }),
        }}
      />
    </div>
  );
}
