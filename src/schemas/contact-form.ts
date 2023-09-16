import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string({ required_error: "You must enter a name" })
    .min(1, { message: "You must enter a name" }),
  email: z
    .string({ required_error: "You must enter an email" })
    .email({ message: "You must enter a valid email" }),
  message: z.string().min(1, { message: "You must enter a message" }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
