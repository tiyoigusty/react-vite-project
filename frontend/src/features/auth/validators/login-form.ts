import { z } from "zod";

export const loginSchema = z.object({
    email: z
      .string({ message: "STRING!" })
      .email({ message: "enter the correct email!!" }),
    password: z.string(),
  });