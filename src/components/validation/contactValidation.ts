import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
