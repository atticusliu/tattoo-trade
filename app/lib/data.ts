import { sql } from '@vercel/postgres';

// TODO: no try/catches here? would that be better?

export const getUserByUsername = async (username: string) => {
  const res = await sql`SELECT id, first_name, last_name, username, email FROM users WHERE username = ${username}`;
  return res.rows[0];
}