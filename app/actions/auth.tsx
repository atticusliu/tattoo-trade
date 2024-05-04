import { SignupFormSchema, FormState } from '@/lib/definitions';

export async function signup(state: FormState, formData: FormData) {
  // validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // if any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // if all form fields are valid, submit the form
  // TODO: call the provider or db to create a new user
}