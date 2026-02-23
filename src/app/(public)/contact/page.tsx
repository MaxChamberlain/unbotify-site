import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import type { Metadata } from "next";
import Form from "./_components/form";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Apply for Pilot Program | Unbotify",
  description: "Secure your spot in the Unbotify Managed WAF Pilot. Stop paying for bot traffic today.",
  alternates: {
    canonical: "https://unbotify.io/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative pb-32">
      <div className="z-50 mx-auto flex w-screen max-w-7xl flex-col items-center justify-center gap-8 pt-12">
        <Badge className="fade-in-0 zoom-in-95 animate-in !bg-white !text-orange-500 duration-700">
          We&apos;d love to stop the bots for your store!
        </Badge>
        <h1 className="fade-in-0 zoom-in-95 animate-in text-4xl font-bold duration-700 max-md:text-center">
          Join for the Pilot Program
        </h1>
        <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-2xl text-center duration-700 max-md:px-8 lg:whitespace-nowrap">
          Stop paying for fake profiles. Secure your spot in our managed WAF pilot for{" "}
          <span className="relative font-bold text-slate-900">
            $249/mo{" "}
            <span className="text-muted-foreground absolute -bottom-6 left-0 scale-75 font-normal line-through max-md:-bottom-2">
              $499/mo
            </span>
          </span>
          .
        </p>
        <Suspense fallback={<div className="h-[432px] w-full" />}>
          <Form />
        </Suspense>
      </div>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Unbotify",
            url: "https://unbotify.io/contact",
            logo: "https://unbotify.io/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "info@unbotify.io",
              areaServed: "US",
              availableLanguage: ["English"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "19:00",
              },
            },
          }),
        }}
      />
    </div>
  );
}
