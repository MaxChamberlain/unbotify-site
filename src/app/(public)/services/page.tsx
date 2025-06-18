import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCard from "../_components/feature-card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, Shopify & Cloudflare Solutions",
  description:
    "Explore the expert services offered by Max Integrations. We specialize in custom full-stack applications, Shopify development, Cloudflare security, and advanced analytics.",
  alternates: {
    canonical: "https://maxintegrations.net/services",
  },
};

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 pt-32 pb-32 max-lg:flex-col md:pt-32">
        <div className="flex flex-2 flex-col items-center gap-12 text-center">
          <div className="text-5xl md:text-7xl">
            <h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
              What can
              <span
                className="fade-in-0 zoom-in-95 animate-in ml-2 inline-block font-bold duration-700"
                style={{
                  background: "-webkit-linear-gradient(-35deg, #6366f1, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                we
              </span>
              <br />
              do for
              <span
                className="fade-in-0 zoom-in-95 animate-in ml-2 inline-block font-bold duration-700"
                style={{
                  background: "-webkit-linear-gradient(-35deg, #6366f1, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                you?
              </span>{" "}
            </h1>
          </div>
          <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-4xl text-base duration-700 max-md:px-4 md:text-lg">
            We offer a wide range of services, ranging from Shopify to DNS configuration, and everything in between. If
            you don&apos;t see what you need, you can always{" "}
            <Link href="/contact?type=general" className="hover:text-primary underline transition-colors">
              contact us
            </Link>{" "}
            about anything else.
          </p>
          <Button variant="default" size="lg" className="bg-indigo-500 hover:bg-indigo-400" asChild>
            <Link href="/contact?type=general">Contact us about something else</Link>
          </Button>
        </div>
      </section>
      <section className="w-screen gap-6 pt-16 pb-12 max-md:!px-0">
        <div className="fade-in-0 zoom-in-95 animate-in z-50 mx-auto flex w-full max-w-7xl flex-col gap-6 duration-700">
          <div className="z-50 flex flex-col max-md:!px-4">
            <h2 className="text-xl font-bold text-indigo-500">Take a look at our core services!</h2>
            <p className="fade-in-0 zoom-in-95 animate-in text-primary text-sm duration-700">
              Don&apos;t see what you need?{" "}
              <Link href="/contact?type=general" className="hover:text-primary underline transition-colors">
                We can still help!
              </Link>{" "}
            </p>
          </div>
          <div className="fade-in-0 animate-in flex gap-12 overflow-x-scroll scroll-smooth pb-4 duration-700 max-md:!px-4">
            <FeatureCard
              title="Cloudflare configuration"
              description="Use the full power of Cloudflare's DNS & CDN features — whether you're new, or migrating."
              image={{
                src: "/images/example-dns.png",
                alt: "Example of Cloudflare DNS records",
                width: 1024,
                height: 256,
                offsetX: "6rem",
                offsetY: "13rem",
              }}
              features={[
                {
                  text: "Configure your DNS records to point to your site, including mail and verification records",
                  shopifyRelated:
                    "We can configure your DNS records, either fresh, or from your existing provider, to work in harmony with Shopify.",
                },
                {
                  text: "Optimize your site's content delivery with Cloudflare's CDN features, like cacheing and compression",
                  shopifyRelated:
                    "We can configure your cache and compression settings to ensure your site doesn't interfere with Shopify's CDN features.",
                  wordpressRelated:
                    "We can configure your cache and compression settings to speed up your WordPress site's content delivery.",
                },
                {
                  text: "Protect your site from target attacks, like bots, DDOS attacks, and password brute forcers",
                  shopifyRelated:
                    "We can configure your web application firewall to stop the type of bots that continuously add items to their cart and checkout, without actually purchasing them.",
                },
              ]}
              link={{
                text: "Optimize your DNS",
                href: "/services/cloudflare",
              }}
            />
            <FeatureCard
              title="Shopify development"
              description="Get the most use out of your Shopify store with custom theme development, apps, and more."
              image={{
                src: "/images/example-shopify.png",
                alt: "Example of a Shopify store",
                width: 300,
                height: 256,
                offsetX: "0rem",
                offsetY: "2rem",
              }}
              features={[
                {
                  text: "Make changes, add features, and customize your store's theme to perfection",
                },
                {
                  text: "Create a custom Shopify admin app to streamline and enhance your business operations",
                },
                {
                  text: "Integrate with Shopify's functions, like when a customer is created, or a new order is placed",
                },
              ]}
              link={{
                text: "Customize your store",
                href: "/services/shopify",
              }}
            />
            <FeatureCard
              title="Enhanced user analytics"
              description="Understand everything your users do, why it's done, and where they do it."
              image={{
                src: "/images/example-analytics.png",
                alt: "Example of enhanced user analytics",
                width: 420,
                height: 300,
                offsetX: "-4rem",
                offsetY: "8rem",
              }}
              features={[
                {
                  text: "Go beyond basic analytics to understand your users' behavior, and how to improve it",
                },
                {
                  text: "Track anything you want, no matter the complexity of what you're tracking",
                },
                {
                  text: "Breakdown your users by any criteria you want, like location, whether they purchased a specific item, and more",
                },
              ]}
              link={{
                text: "Analyze your users",
                href: "/services/analytics",
              }}
            />
            <FeatureCard
              title="Custom full stack apps"
              description="Have your ideas realized with custom full stack apps, built from scratch by our team to your specifications."
              image={{
                src: "/images/example-full-stack.png",
                alt: "Example of a custom full stack app",
                width: 300,
                height: 256,
                offsetX: "0rem",
                offsetY: "8rem",
              }}
              features={[
                {
                  text: "Build a custom full stack app, with your vision in mind, and your processes at heart",
                },
                {
                  text: "Have full control over the app's architecture, from the data to the design",
                },
                {
                  text: "Integrate with any system you want, whether it's Stripe, Google Sheets, or a Shopify",
                },
              ]}
              link={{
                text: "Build your app",
                href: "/services/development",
              }}
            />
            <div className="w-screen max-w-lg" />
          </div>
        </div>
      </section>
      <Script
        id="services-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Max Integrations Services",
            description:
              "A list of professional services offered by Max Integrations, including Shopify development, Cloudflare configuration, and custom software engineering.",
            numberOfItems: 4,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Cloudflare configuration",
                  url: "https://maxintegrations.net/services/cloudflare",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Shopify development",
                  url: "https://maxintegrations.net/services/shopify",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Enhanced user analytics",
                  url: "https://maxintegrations.net/services/analytics",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "Custom full stack apps",
                  url: "https://maxintegrations.net/services/development",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
