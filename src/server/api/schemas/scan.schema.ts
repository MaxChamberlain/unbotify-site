import z from "zod";

export const scanInput = z.object({
  url: z.string().url(),
});
