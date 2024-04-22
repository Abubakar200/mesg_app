import * as z from "zod";

export const userValidation = z
  .string()
  .min(3, "At least 3 character")
  .max(30, "Maximum 30 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character");

export const signUpSchema = z.object({
  username: userValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(8, {
    message: "At least 8 character",
  }),
});
