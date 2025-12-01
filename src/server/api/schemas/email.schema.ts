import { z } from "zod";

export const sendContactUsEmailInput = z.object({
  name: z.string(),
  email: z.string(),
  website: z
    .string()
    .min(1, "URL is required")
    .transform((val) => {
      if (val.includes("http")) return val;
      return `https://${val}`;
    })
    .pipe(z.string().url("Please enter a valid domain")),
  address: z.string().nullish(),
  painpoint: z.string(),
});
