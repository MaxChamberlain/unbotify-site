import { z } from "zod";

export const sendContactUsEmailInput = z.object({
  name: z.string(),
  email: z.string(),
  website: z.string().nullish(),
  address: z.string().nullish(),
  painpoint: z.string(),
});
