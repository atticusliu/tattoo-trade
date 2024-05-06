import 'server-only';
import { getUser } from '@/lib/dal';
import { User } from '@/lib/definitions';
import { getUserByUsername } from '@/lib/data';

// no idea if I'll actually use anything from this file
function canSeeUsername(viewer: User) {
  return true;
}

// keeping this here but we're not collecting phone numbers as of now
function canSeePhoneNumber(viewer: User) {
  return viewer.isAdmin;
}

export async function getProfileDTO(slug: string) {
  const data = await getUserByUsername(slug);
  const user = data.rows[0];
  const currentUser = await getUser();

  // return only what's specific to the query
  // do we want first_name last_name?? TBD
  return {
    username: canSeeUsername(currentUser) ? user.username : null,
    phonenumber: canSeePhoneNumber(currentUser)
      ? user.phonenumber
      : null,
  }
}