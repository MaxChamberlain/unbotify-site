export const SIGN_IN_URL = "/auth/login";
export const VERIFY_REQUEST_URL = "/auth/verify-request";
export const SIGN_OUT_URL = "/auth/signout";
export const ERROR_URL = "/auth/error";
export const SIGN_UP_URL = "/auth/signup";

export const CONTACT_US_EMAIL = "max@maxintegrations.net";
export const CONTACT_US_TYPE = [
	{
		key: "general",
		name: "General Inquiry",
		subTypes: [],
	},
	{
		key: "cloudflare",
		name: "Cloudflare configuration",
		subTypes: [
			{
				key: "general",
				name: "General Cloudflare configuration",
				description:
					"For general Cloudflare configuration inquiries and support",
			},
			{
				key: "dns",
				name: "Cloudflare DNS configuration",
				description:
					"For inquiries regarding the configuration of Cloudflare DNS",
			},
			{
				key: "attack-protection",
				name: "Cloudflare attack protection",
				description:
					"For inquiries regarding the configuration of Cloudflare attack protection",
			},
			{
				key: "shopify",
				name: "Shopify to Cloudflare DNS configuration",
				description:
					"For inquiries regarding the configuration of a Cloudflare instance to work with Shopify",
			},
			{
				key: "wordpress",
				name: "WordPress to Cloudflare DNS configuration",
				description:
					"For inquiries regarding the configuration of a Cloudflare instance to optimize WordPress performance",
			},
		],
	},
	{
		key: "shopify",
		name: "Shopify development",
		subTypes: [
			{
				key: "general",
				name: "General Shopify development",
				description: "For Shopify development inquiries and support",
			},
			{
				key: "theme",
				name: "Shopify theme development",
				description: "For Shopify theme development inquiries and support",
			},
			{
				key: "app",
				name: "Shopify app development",
				description: "For Shopify app development inquiries and support",
			},
			{
				key: "stop-the-bots",
				name: "Shopify stop the bots",
				description: "For Shopify stop the bots inquiries and support",
			},
		],
	},
	{
		key: "custom",
		name: "Custom full-stack applications",
		subTypes: [],
	},
	{
		key: "other",
		name: "Other",
		subTypes: [],
	},
] as const;

export type ContactUsType = typeof CONTACT_US_TYPE;
