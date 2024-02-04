"use server"

import { signIn } from "@/app/auth"

export async function authenticate(formData: FormData) {
  try {
    await signIn("credentials", formData)
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials."
        default:
          return "Something went wrong."
      }
    }
    throw error
  }
}
