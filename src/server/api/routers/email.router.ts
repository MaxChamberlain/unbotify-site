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

  const dnsRecords = await getDnsRecords(website);
  let dnsRecordsCsv = "type,priority,value\n";
  Object.entries(dnsRecords).forEach(([key, value]) => {
    value.forEach((v: any) => {
      if (key === "a") {
        dnsRecordsCsv += `${key},,${v}\n`;
      } else if (key === "mx") {
        dnsRecordsCsv += `${key},${v.priority ?? ""},${v.exchange}\n`;
      } else if (key === "txt") {
        dnsRecordsCsv += `${key},,${v.join(",")}\n`;
      } else if (key === "ns") {
        dnsRecordsCsv += `${key},,${v}\n`;
      } else if (key === "cname") {
        dnsRecordsCsv += `${key},,${v}\n`;
      } else if (key === "srv") {
        dnsRecordsCsv += `${key},${v.priority ?? ""},${v.exchange}\n`;
      } else {
        dnsRecordsCsv += `${key},,${v}\n`;
      }
    });
  });

  const dnsRecordsCsvBuffer = Buffer.from(dnsRecordsCsv, "utf-8");

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
    attachments: [
      {
        filename: "dns_records.csv",
        content: dnsRecordsCsvBuffer,
        contentType: "text/csv",
      },
    ],
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

const dnsPromises = require("dns").promises;

async function getDnsRecords(domain: string | null | undefined) {
  const records = {
    a: [],
    mx: [],
    txt: [],
    ns: [],
    cname: [],
    srv: [],
  };
  if (!domain) return records;
  try {
    records.a = await dnsPromises.resolve4(domain);
    records.mx = await dnsPromises.resolveMx(domain);
    records.txt = await dnsPromises.resolveTxt(domain);
    records.ns = await dnsPromises.resolveNs(domain);
    try {
      records.srv = await dnsPromises.resolveSrv(domain);
    } catch (error: any) {
      if (error.code === "ENODATA") {
        console.log(`No SRV records found for ${domain}.`);
      } else {
        console.error(`Error resolving SRV records for ${domain}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error fetching DNS records for ${domain}:`, error);
  }
  return records;
}
