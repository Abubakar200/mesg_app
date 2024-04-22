import * as z from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Message cannot be empty" })
    .max(2000, { message: "Message cannot be longer than 2000 characters" }),
});
