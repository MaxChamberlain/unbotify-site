import { z } from "zod";

export const sendContactUsEmailInput = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
    type: z.string(),
    subType: z.string().nullish(),
  });