import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Full-Stack Application Development",
  description:
    "Building powerful custom full-stack applications tailored to your business needs. Our custom development services page is launching soon—check back for details!",
  alternates: {
    canonical: "https://maxintegrations.net/services/development",
  },
  // TODO: Remove this section once the page is live
  robots: {
    index: false,
  },
};

const developmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Full-Stack Application Development",
  description:
    "Bespoke application development from backend to frontend. We build custom APIs, database integrations, and interactive user interfaces tailored to your specific business requirements.",
  url: "https://maxintegrations.net/services/development",
  provider: {
    "@type": "Organization",
    name: "Max Integrations",
  },
  serviceType: "Custom Software Development",
  areaServed: {
    "@type": "Country",
    name: "US",
  },
};

export default function FullStackDevelopment() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="flex w-screen items-center justify-center gap-2 bg-gradient-to-tr from-sky-50 to-indigo-50 !px-0 py-16">
        <Image
          src="/images/logo.png"
          alt="Max Integrations Logo"
          width={1000}
          height={1000}
          className="fade-in-0 slide-in-from-left-2 animate-in w-32 duration-700"
          priority
        />
        <span className="fade-in-0 slide-in-from-right-2 animate-in text-4xl font-bold duration-700">Custom</span>
        <h1 className="fade-in-0 slide-in-from-right-2 animate-in w-32 text-4xl font-bold whitespace-nowrap duration-700">
          full-stack apps
        </h1>
      </section>
      <div className="text-muted-foreground mx-auto max-w-2xl pb-16 text-center text-2xl font-bold">
        You&apos;ve reached a feature so new, it doesn&apos;t even have its own page yet! Please check back soon.
      </div>
      <Script
        id="development-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developmentServiceSchema) }}
      />
    </div>
  );
}
