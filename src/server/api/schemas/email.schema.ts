import { z } from "zod";

export const sendContactUsEmailInput = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
  website: z.string().nullish(),
  company: z.string().nullish(),
  address: z.string().nullish(),
});
