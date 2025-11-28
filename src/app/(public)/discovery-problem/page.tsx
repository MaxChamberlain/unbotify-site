import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Problem",
  description:
    "Learn about the problem of Shopify bot traffic, and how it can damage your business. From the history of this emergent problem, to the current state of the problem.",
  alternates: {
    canonical: "https://unbotify.io/discovery-problem",
  },
};

const cloudflareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Problem",
  description:
    "Learn about the problem of Shopify bot traffic, and how it can damage your business. From the history of this emergent problem, to the current state of the problem.",
  url: "https://unbotify.io/discovery-problem",
  provider: {
    "@type": "Organization",
    name: "Unbotify",
    url: "https://unbotify.io",
  },
};

export default function DiscoveryProblemPage() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 !px-0 pt-32 pb-32 max-lg:flex-col md:pt-32">
        <div className="mx-auto flex w-screen max-w-7xl justify-center gap-12">
          <div className="flex flex-2 flex-col gap-6 max-lg:text-center">
            <div className="text-5xl md:text-7xl">
              <h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
                Learn what the
                <span
                  className="fade-in-0 zoom-in-95 animate-in inline-block font-bold duration-700"
                  style={{
                    background: "-webkit-linear-gradient(-35deg, #dc2626, #f87171)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  problem
                </span>{" "}
                is
              </h1>
            </div>
            <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-lg text-base duration-700 max-md:px-4 md:text-lg">
              Shopify bots are a growing problem. They{" "}
              <Link
                href="/services/shopify"
                className="hover:text-primary border-b-2 border-red-500/10 text-black/70 transition-colors hover:border-red-500"
              >
                inflate your analytics,
              </Link>{" "}
              making them useless. They{" "}
              <Link
                href="/services/development"
                className="hover:text-primary border-b-2 border-red-500/10 text-black/70 transition-colors hover:border-red-500"
              >
                destroy your mailing lists,{" "}
              </Link>
              hurting your ROAS. They even{" "}
              <Link
                href="/services/development"
                className="hover:text-primary border-b-2 border-red-500/10 text-black/70 transition-colors hover:border-red-500"
              >
                submit contact forms,
              </Link>{" "}
              wasting your time and resources.
            </p>
            <div className="fade-in-0 zoom-in-95 animate-in flex w-full duration-700 max-lg:justify-center">
              <Button variant="default" size="lg" className="bg-indigo-500 hover:bg-indigo-400" asChild>
                <Link href="/contact">I want to fix this problem</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-2 flex-col items-center justify-center gap-8 max-lg:hidden">
            <Image
              src="/images/bots-breaking-in.png"
              alt="Bots breaking into your store"
              width={1000}
              height={1000}
              className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in !w-full rounded-2xl opacity-80 shadow-xl duration-700 ease-in-out"
              priority
            />
          </div>
        </div>
      </section>
      <div className="relative -mt-20 -mb-20 w-screen">
        <div className="absolute -top-12 right-0 left-0 h-12 bg-gradient-to-b from-transparent to-white" />
      </div>
      <Script
        id="cloudflare-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cloudflareServiceSchema),
        }}
      />
    </div>
  );
}
