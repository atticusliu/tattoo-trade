import { z } from 'zod';

export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name must be at least 1 character long." })
    .max(10, { message: "First name must be at most 100 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: "Last name must be at least 1 characters long." })
    .max(100, { message: "Last name must be at most 100 characters long." })
    .trim(),
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 characters long." })
    .max(100, { message: "Username must be at most 100 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export type FormState = | {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  }
} | undefined;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
};

export type Item = {
  id: number;
  description: string;
  category: string;
  amount: number;
};