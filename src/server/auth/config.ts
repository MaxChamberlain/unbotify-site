import { env } from "@/env";
import { ERROR_URL } from "@/lib/globals";
import { SIGN_IN_URL, SIGN_OUT_URL } from "@/lib/globals";
import { VERIFY_REQUEST_URL } from "@/lib/globals";
import { db } from "@/server/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { DefaultSession, NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import ResendProvider from "next-auth/providers/resend";
import { Resend } from "resend";
import { getSignInTemplate } from "../templates/sign-in";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

export const authConfig = {
	providers: [
		GoogleProvider({
			allowDangerousEmailAccountLinking: true,
			clientId: env.AUTH_GOOGLE_CLIENT_ID,
			clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		ResendProvider({
			from: "Max Integrations <no-reply@maxintegrations.net>",
			apiKey: env.RESEND_API_KEY,
			sendVerificationRequest: async ({
				identifier: email,
				url,
				provider: { from },
			}) => {
				const template = await getSignInTemplate({ url });
				const resend = new Resend(env.RESEND_API_KEY);
				await resend.emails.send({
					from: from ?? "Max Integrations <no-reply@maxintegrations.net>",
					to: email,
					subject: "Sign in to Max Integrations",
					html: template,
				});
			},
		}),
	],
	adapter: PrismaAdapter(db),
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
			},
		}),
	},
	session: {
		strategy: "database",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	pages: {
		signIn: SIGN_IN_URL,
		verifyRequest: VERIFY_REQUEST_URL,
		signOut: SIGN_OUT_URL,
		error: ERROR_URL,
	},
} satisfies NextAuthConfig;
