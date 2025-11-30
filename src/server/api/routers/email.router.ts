import { env } from "@/env";
import { CONTACT_US_EMAIL } from "@/lib/globals";
import { TRPCError } from "@trpc/server";
import { Resend } from "resend";
import type z from "zod";
import { sendContactUsEmailInput } from "../schemas/email.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emailRouter = createTRPCRouter({
  sendContactUsEmail: publicProcedure.input(sendContactUsEmailInput).mutation(async ({ input }) => {
    return sendContactUsEmail({ input });
  }),
});

async function sendContactUsEmail({ input }: { input: z.infer<typeof sendContactUsEmailInput> }) {
  const { name, email, painpoint, website, address } = input;

  const resend = new Resend(env.RESEND_API_KEY);

  let subject;
  if (address) {
    subject = `Honeypot trigger on ${address}`;
  } else {
    subject = `Unbotify lead: ${name}`;
  }

  const { data, error } = await resend.emails.send({
    from: `Unbotify Contact Form <${CONTACT_US_EMAIL}>`,
    to: CONTACT_US_EMAIL,
    subject: subject,
    replyTo: email,
    html: `<span>Respond to ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</span><p>${painpoint}</p><p>Website: ${website}</p>`,
    text: `New lead
Name: ${name}
Email: ${email}
Website: ${website}
Painpoint: ${painpoint}`,
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
