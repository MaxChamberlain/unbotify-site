import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shopify Development",
  description:
    "Expert Shopify development services from Max Integrations. We extend your custom themes, build powerful apps, and optimize your storefront for maximum performance and sales.",
  alternates: {
    canonical: "https://maxintegrations.net/shopify",
  },
};

const shopifyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Development Services",
  description:
    "Expert Shopify development services including custom theme extensions, private admin apps, and performance optimization to enhance your e-commerce store.",
  url: "https://maxintegrations.net/shopify",
  provider: {
    "@type": "Organization",
    name: "Max Integrations",
    url: "https://maxintegrations.net",
  },
  serviceType: "Shopify Development",
  areaServed: {
    "@type": "Country",
    name: "US",
  },
};

export default function ShopifyDevelopment() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 !px-0 pt-32 pb-32 max-lg:flex-col md:pt-32">
        <div className="mx-auto flex w-screen max-w-7xl justify-center gap-12">
          <div className="flex flex-2 flex-col gap-6 max-lg:text-center">
            <div className="text-5xl md:text-7xl">
              <h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
                Customize your
                <span
                  className="fade-in-0 zoom-in-95 animate-in inline-block font-bold duration-700"
                  style={{
                    background: "-webkit-linear-gradient(-35deg, #10b981, #84cc16)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Shopify
                </span>{" "}
                experience
              </h1>
            </div>
            <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-lg text-base duration-700 max-md:px-4 md:text-lg">
              We can customize your Shopify experience to your liking. Whether you want to add a new feature to your
              theme, automate your business processes, or even build a completely custom{" "}
              <Link href="#custom-admin-app" className="hover:text-primary underline transition-colors">
                Shopify admin application
              </Link>
              , we can engineer a solution <strong>made for your store</strong>.
            </p>
            <div className="fade-in-0 zoom-in-95 animate-in flex w-full duration-700 max-lg:justify-center">
              <Button variant="default" size="lg" className="bg-indigo-500 hover:bg-indigo-400" asChild>
                <Link href="/contact?type=shopify&subType=general">Contact us about this service</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-2 flex-col items-center justify-center gap-8 max-lg:hidden">
            <Image
              src="/images/shopify-logo.png"
              alt="Shopify Logo"
              width={1000}
              height={1000}
              className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in w-72 duration-700 ease-in-out"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2">
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold">Theme development</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a theme you love, but there&apos;s just something missing? We can add new features to your theme,
            change its functionality, or even just modify that one thing that&apos;s been bugging you for so long.
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=shopify&subType=theme">
              Ask us about theme development
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex max-h-64 flex-col gap-4 overflow-hidden rounded-2xl border p-2 shadow-lg duration-700 ease-in-out">
          <Image src="/images/example-shopify.png" alt="Shopify theme" width={1000} height={1000} className="w-full" />
        </div>
      </section>
      <Separator className="w-full" />
      <section
        className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2"
        id="custom-admin-app"
      >
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold">Custom admin app</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A custom admin app can supercharge your Shopify store&apos;s backend. We can build custom tools, dashboards,
            and integrations right into your Shopify admin panel to streamline your workflows, automate repetitive
            tasks, and give you powerful new capabilities tailored to your business needs.
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=shopify&subType=app">
              Ask us about custom admin apps
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex max-h-72 flex-col gap-4 overflow-hidden rounded-3xl border shadow-lg duration-700 ease-in-out">
          <Image
            src="/images/example-shopify-app.png"
            alt="Shopify admin app"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </section>
      <Separator className="w-full" />
      <section
        className="mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 md:!px-0 lg:grid-cols-2"
        id="event-integration"
      >
        <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-start gap-6 text-start duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold">Event integration</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We can integrate with your Shopify store to trigger events when certain things happen, like when a new order
            is placed, or when a customer creates an account. We can then use these events to trigger actions in other
            apps, or even just log them for your own records.
          </p>
          <Button variant="link" className="!p-0 !text-indigo-500" asChild>
            <Link href="/contact?type=shopify&subType=event-integration">
              Ask us about event integration
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="fade-in-0 zoom-in-95 slide-in-from-left-12 animate-in border-border flex max-h-72 flex-col gap-4 overflow-hidden rounded-3xl border px-24 shadow-lg duration-700 ease-in-out">
          <Image
            src="/images/example-shopify-event-integration.png"
            alt="Shopify event integration"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </section>
      <section className="flex w-screen justify-center bg-slate-100 py-16 md:!px-0">
        <div className="text-center">
          <div className="fade-in-0 zoom-in-95 slide-in-from-right-12 animate-in flex max-w-xl flex-col items-center gap-6 text-center duration-700 ease-in-out">
            <h2 className="text-2xl font-semibold">Want your own customized solution?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We can build a custom solution for your Shopify store. Whatever you&apos;re missing, we&apos;ll build it.
            </p>
            <Button variant="link" className="!p-0 !text-indigo-500" asChild>
              <Link href="/contact?type=shopify&subType=general">
                Let us add what you&apos;re missing
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Script
        id="shopify-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyServiceSchema) }}
      />
    </div>
  );
}
