import z from "zod";

export const scanInput = z.object({
  url: z
    .string()
    .min(1, "URL is required")
    .transform((val) => {
      if (val.includes("http")) return val;
      return `https://${val}`;
    })
    .pipe(z.string().url("Please enter a valid domain")),
});
