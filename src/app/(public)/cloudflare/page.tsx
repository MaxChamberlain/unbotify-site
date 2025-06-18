import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cloudflare Configuration & Security Services",
  description:
    "Expert Cloudflare setup and configuration services. We manage DNS, Shopify integration, and enable powerful security features like WAF, DDoS protection, and rate limiting.",
  alternates: {
    canonical: "https://maxintegrations.net/cloudflare",
  },
};

const cloudflareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloudflare Configuration & Security",
  description:
    "Professional setup and management of Cloudflare instances, including DNS configuration, Web Application Firewall (WAF), DDoS protection, and rate limiting for all types of websites.",
  url: "https://maxintegrations.net/cloudflare",
  provider: {
    "@type": "Organization",
    name: "Max Integrations",
    url: "https://maxintegrations.net",
  },
  serviceType: "Cloudflare Configuration",
  areaServed: {
    "@type": "Country",
    name: "US",
  },
};

export default function CloudflareInstanceConfiguration() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 !px-0 pt-32 pb-32 max-lg:flex-col md:pt-32">
        <div className="mx-auto flex w-screen max-w-7xl justify-center gap-12">
          <div className="flex flex-2 flex-col gap-6 max-lg:text-center">
            <div className="text-5xl md:text-7xl">
              <h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
                Set up your
                <span
                  className="fade-in-0 zoom-in-95 animate-in inline-block font-bold duration-700"
                  style={{
                    background: "-webkit-linear-gradient(-35deg, #f97316, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Cloudflare
                </span>{" "}
                instance
              </h1>
            </div>
            <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-lg text-base duration-700 max-md:px-4 md:text-lg">
              We can set up your Cloudflare instance, whether you&apos;re using{" "}
              <Link href="/shopify" className="hover:text-primary underline transition-colors">
                Shopify
              </Link>{" "}
              or WordPress, or a even a completely{" "}
              <Link href="/development" className="hover:text-primary underline transition-colors">
                custom application
              </Link>
              . It doesn&apos;t matter if you want to transfer a domain, or set up a new one, we can help.
            </p>
            <div className="fade-in-0 zoom-in-95 animate-in flex w-full duration-700 max-lg:justify-center">
              <Button variant="default" size="lg" className="bg-indigo-500 hover:bg-indigo-400" asChild>
                <Link href="/contact?type=cloudflare&subType=general">Contact us about this service</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-2 flex-col items-center justify-center gap-8 max-lg:hidden">
            <Image
              src="/images/cloudflare-logo.png"
              alt="Cloudflare Logo"
              width={1000}
              height={1000}
              className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in w-96 duration-700 ease-in-out"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2">
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold">DNS Configuration</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Get your DNS configuration set up quickly and easily. We can set up your DNS configuration to ensure your
            site is always up and running. Have internal subdomains, like{" "}
            <code className="bg-muted rounded-md px-1 whitespace-nowrap">api.yourdomain.com</code>, or
            <code className="bg-muted rounded-md px-1 whitespace-nowrap">blog.yourdomain.com</code>? We can set that up
            for you too.
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=cloudflare&subType=dns">
              Ask us about Cloudflare DNS configuration
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex max-h-64 flex-col gap-4 overflow-hidden rounded-2xl border shadow-lg duration-700 ease-in-out">
          <Image
            src="/images/example-dns.png"
            alt="Cloudflare DNS Configuration"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </section>
      <Separator className="w-full" />
      <section
        className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2"
        id="shopify"
      >
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <div className="flex items-center gap-2">
            <Image src="/images/shopify-logo.png" alt="Shopify Logo" width={100} height={100} className="w-12" />
            <h2 className="text-2xl font-semibold">Shopify DNS Configuration</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Link your Cloudflare instance with Shopify&apos;s Cloudflare instance, creating a seamless integration
            between the two, and allowing you to use Cloudflare&apos;s powerful features like Web Application Firewall
            and DNS without interrupting Shopify&apos;s setup. With this setup, you can use Cloudflare&apos;s Web
            Application Firewall to stop those pesky bots from accessing your store
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=cloudflare&subType=shopify">
              Ask us about Shopify x Cloudflare
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex flex-col gap-4 overflow-hidden rounded-3xl border shadow-lg duration-700 ease-in-out">
          <Image
            src="/images/example-shopify-dns.png"
            alt="Example of DNS records for a Shopify and Cloudflare integration"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </section>
      <Separator className="w-full" />
      <section
        className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2"
        id="anti-attack"
      >
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold">Anti-attack protection</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With Cloudflare&apos;s Web Application Firewall, DDoS protection, Rate limiting, and other powerful
            features, you can protect your store from attacks. For anything from brute force attacks to DDoS attacks,
            and even intelligent bot attacks, we can get your site protected with Cloudflare&apos;s impressive catalog
            of anti-attack features.
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=cloudflare&subType=attack-protection">
              Ask us about attack protection
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex max-h-72 flex-col gap-4 overflow-hidden rounded-3xl border p-2 shadow-lg duration-700 ease-in-out">
          <Image
            src="/images/example-cloudflare-attack-protection.png"
            alt="A view of the Cloudflare Web Application Firewall (WAF) dashboard"
            width={1000}
            height={1000}
            className="w-full -translate-y-24"
          />
        </div>
      </section>
      <section className="flex w-screen justify-center bg-slate-100 py-16 md:!px-0">
        <div className="text-center">
          <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-center gap-6 text-center duration-700 ease-in-out">
            <h2 className="text-2xl font-semibold">Don&apos;t want to do it yourself?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We can set up your Cloudflare instance for you. Simply contact us, and we can work out all the details.
              Things can move even faster if you make a Cloudflare account ahead of time.
            </p>
            <Button variant="link" className="!p-0 !text-indigo-500" asChild>
              <Link href="/contact?type=cloudflare&subType=general">
                Let us do the work
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button className="!bg-indigo-500 hover:!bg-indigo-400" asChild>
              <Link href="https://dash.cloudflare.com/sign-up?utm_source=maxintegrations.net" target="_blank">
                Set up a Cloudflare account
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
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
