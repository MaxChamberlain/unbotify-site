import { env } from "@/env";
import { CONTACT_US_EMAIL, CONTACT_US_TYPE } from "@/lib/globals";
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
  const { name, email, message, type, subType, website } = input;

  const resend = new Resend(env.RESEND_API_KEY);

  let subject;
  if (website) {
    subject = `Honeypot trigger on ${website}`;
  } else if (type && subType) {
    subject = `${CONTACT_US_TYPE.find((t) => t.key === type)?.name ?? "General Inquiry"} ${subType ? `- ${CONTACT_US_TYPE.find((t) => t.key === type)?.subTypes.find((s) => s.key === subType)?.name ?? "General Inquiry"}` : ""}`;
  } else if (type) {
    subject = `${CONTACT_US_TYPE.find((t) => t.key === type)?.name ?? "General Inquiry"}`;
  } else {
    subject = "General Inquiry";
  }

  const { data, error } = await resend.emails.send({
    from: `Max Integrations Contact Form <${CONTACT_US_EMAIL}>`,
    to: CONTACT_US_EMAIL,
    subject: subject,
    html: `<span>Respond to ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</span><p>${message}</p>`,
    text: `New lead
Name: ${name}
Email: ${email}
Type: ${type}
SubType: ${subType}
Website: ${website}
Message: ${message}`,
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
