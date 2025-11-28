import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import type { Metadata } from "next";
import Form from "./_components/form";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Max Integrations for project specifications, pricing, or questions about our services. We're here to help you find the best engineering solutions to your problems.",
  alternates: {
    canonical: "https://maxintegrations.net/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative pb-32">
      <div className="z-50 mx-auto flex w-screen max-w-7xl flex-col items-center justify-center gap-8 pt-12">
        <Badge className="fade-in-0 zoom-in-95 animate-in !bg-indigo-500/15 !text-indigo-500 duration-700">
          We&apos;d love to stop the bots for your store!
        </Badge>
        <h1 className="fade-in-0 zoom-in-95 animate-in text-4xl font-bold duration-700">Contact us</h1>
        <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-2xl text-center duration-700">
          Looking to stop bots from breaking into your store? We're here to help. Just fill out the form below and we'll
          get back to you as soon as possible.
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
