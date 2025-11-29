import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";
import Script from "next/script";
import { PostHogProvider } from "@/components/post-hog-provider";

export const metadata: Metadata = {
  title: {
    default: "Unbotify",
    template: "Unbotify - %s",
  },
  metadataBase: new URL("https://unbotify.io"),
  description:
    "Unbotify manages your Web Application Firewall and Bot Protection, stopping malicious traffic from touching your site.",
  openGraph: {
    title: "Unbotify",
    description:
      "Unbotify manages your Web Application Firewall and Bot Protection, stopping malicious traffic from touching your site.",
    url: "https://unbotify.io",
    siteName: "Unbotify",
    images: [
      {
        url: "/images/logo.png",
        width: 256,
        height: 256,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unbotify",
    description:
      "Unbotify manages your Web Application Firewall and Bot Protection, stopping malicious traffic from touching your site.",
    images: ["/images/logo.png"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://unbotify.io",
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
  name: "Unbotify",
  url: "https://unbotify.io",
  logo: "https://unbotify.io/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@unbotify.io",
    contactType: "technical support",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 Wilcox St",
    addressLocality: "Castle Rock",
    addressRegion: "CO",
    postalCode: "80104",
    addressCountry: "US",
  },
  sameAs: ["https://github.com/Max-Integrations"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <Script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-538FWKFG');`}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17260632331"></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17260632331');`}
        </Script>
      </head>
      <body>
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-538FWKFG"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
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
