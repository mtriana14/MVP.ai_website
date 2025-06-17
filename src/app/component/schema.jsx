import * as z from "zod";

export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
