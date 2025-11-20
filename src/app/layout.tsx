import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";
import Script from "next/script";
import { PostHogProvider } from "@/components/post-hog-provider";

export const metadata: Metadata = {
  title: {
    default: "Max Integrations",
    template: "Max Integrations - %s",
  },
  metadataBase: new URL("https://maxintegrations.net"),
  description:
    "Max Integrations helps you engineer the solutions you need. We specialize in custom software, Shopify development, and infrastructure projects. Let's build it your way.",
  openGraph: {
    title: "Max Integrations",
    description:
      "Max Integrations helps you engineer the solutions you need. We specialize in custom software, Shopify development, and infrastructure projects. Let's build it your way.",
    url: "https://maxintegrations.net",
    siteName: "Max Integrations",
    images: [
      {
        url: "/images/logo.png",
        width: 288,
        height: 288,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Integrations",
    description:
      "Max Integrations helps you engineer the solutions you need. We specialize in custom software, Shopify development, and infrastructure projects. Let's build it your way.",
    images: ["/images/logo.png"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://maxintegrations.net",
  },
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/images/logo-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/images/logo-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/images/apple-touch-icon.png" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Max Integrations",
  url: "https://maxintegrations.net",
  logo: "https://maxintegrations.net/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "max@maxintegrations.net",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7132 Bellcove Trl",
    addressLocality: "Castle Pines",
    addressRegion: "CO",
    postalCode: "80108",
    addressCountry: "US",
  },
  sameAs: ["https://github.com/Max-Integrations"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17260632331"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17260632331');
          `}
        </Script>
        <Script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1uRkUhvpQqXNIbIaa"
          data-version="062024"
        ></Script>
      </head>
      <body>
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <PostHogProvider>
          <TRPCReactProvider>
            <Toaster />
            {children}
          </TRPCReactProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
