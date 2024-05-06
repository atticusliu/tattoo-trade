import { SignupFormSchema, FormState } from '@/lib/definitions';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function signup(state: FormState, formData: FormData) {
  // validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // if any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // if all form fields are valid, save to the db
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const userId: string = await response.json();

  if (!userId) {
    return {
      message: 'An error occurred. Please try again.',
    }
  }

  // 4. create user session
  await createSession(userId);
  // 5. redirect to home page for now
  redirect('/')
}

export async function logout() {
  deleteSession();
  redirect('/login');
}