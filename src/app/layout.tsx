import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: {
		default: "Software Solutions | Max Integrations",
		template: "%s | Max Integrations",
	},
	metadataBase: new URL("https://maxintegrations.com"),
	description:
		"Manage your custom software, Shopify, and infrastructure projects with the Max Integrations client portal. Track progress, submit requests, and collaborate with our team.",
	keywords: [
		"Max Integrations",
		"custom software",
		"Shopify development",
		"Shopify apps",
		"DNS configuration",
		"WAF",
		"application deployment",
		"client portal",
		"project management",
	],
	openGraph: {
		title: "Software Solutions | Max Integrations",
		description: "Manage your projects and collaborate with our team.",
		url: "https://maxintegrations.com",
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
		title: "Software Solutions | Max Integrations",
		description: "Manage your projects and collaborate with our team.",
		images: ["/images/logo.png"],
	},
	icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<TRPCReactProvider>
					<Toaster />
					{children}
				</TRPCReactProvider>
			</body>
		</html>
	);
}
