import { env } from "@/env";
import { CONTACT_US_EMAIL, CONTACT_US_TYPE } from "@/lib/globals";
import { TRPCError } from "@trpc/server";
import { Resend } from "resend";
import type z from "zod";
import { sendContactUsEmailInput } from "../schemas/email.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emailRouter = createTRPCRouter({
	sendContactUsEmail: publicProcedure
		.input(sendContactUsEmailInput)
		.mutation(async ({ input }) => {
			return sendContactUsEmail({ input });
		}),
});

async function sendContactUsEmail({
	input,
}: { input: z.infer<typeof sendContactUsEmailInput> }) {
	const { name, email, message, type, subType } = input;

	const resend = new Resend(env.RESEND_API_KEY);

	const { data, error } = await resend.emails.send({
		from: `Max Integrations Contact Form <${CONTACT_US_EMAIL}>`,
		to: CONTACT_US_EMAIL,
		subject: `${CONTACT_US_TYPE.find((t) => t.key === type)?.name ?? "General Inquiry"} ${subType ? `- ${CONTACT_US_TYPE.find((t) => t.key === type)?.subTypes.find((s) => s.key === subType)?.name ?? "General Inquiry"}` : ""}`,
		html: `<span>Respond to ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</span><p>${message}</p>`,
		text: `Respond to ${name} <${email}>\n\n${message}`,
	});

	if (error) {
		return new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: error.message,
		});
	}

	return {
		success: true,
		message: "Email sent successfully",
		data,
	};
}
