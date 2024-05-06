import 'server-only';
import { cookies } from 'next/headers';
import { decrypt } from '@/lib/session';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/login');
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = (await fetch(`/api/users/${session.userId}`));
    // TODO: hopefully this works, I'm not sure if it will. double check this
    const user = data.json();

    return user;
  } catch (error:any) {
    console.log('Failed to get user.');
    return null;
  }
})