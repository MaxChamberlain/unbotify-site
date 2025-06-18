import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Enhanced & Custom User Analytics Services",
  description:
    "Unlock powerful insights with enhanced user analytics. Our advanced analytics services page is under construction. Please check back soon for more information!",
  alternates: {
    canonical: "https://maxintegrations.net/services/analytics",
  },
  // TODO: Remove this section once the page is live
  robots: {
    index: false,
  },
};

const analyticsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enhanced User Analytics Services",
  description:
    "Go beyond basic analytics with custom event tracking, user behavior analysis, conversion funnel optimization, and custom-built data dashboards to unlock powerful business insights.",
  url: "https://maxintegrations.net/services/analytics",
  provider: {
    "@type": "Organization",
    name: "Max Integrations",
  },
  serviceType: "Analytics and Business Intelligence",
  areaServed: {
    "@type": "Country",
    name: "US",
  },
};

export default function EnhancedUserAnalytics() {
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
        <span className="fade-in-0 slide-in-from-right-2 animate-in text-4xl font-bold duration-700">Enhanced</span>
        <h1 className="fade-in-0 slide-in-from-right-2 animate-in w-32 text-4xl font-bold duration-700">analytics</h1>
      </section>
      <div className="text-muted-foreground mx-auto max-w-2xl pb-16 text-center text-2xl font-bold">
        You&apos;ve reached a feature so new, it doesn&apos;t even have its own page yet! Please check back soon.
      </div>
      <Script
        id="analytics-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(analyticsServiceSchema) }}
      />
    </div>
  );
}
