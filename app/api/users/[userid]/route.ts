import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

/* TODO: rewrite the query with supabase when the time comes
export async function GET(request: Request) {
  const data = await request.json();
  const userId = data.userId;

  try {
    // fetch user from the database
    const res = await sql`SELECT id, first_name, last_name, email, admin FROM users WHERE id = ${userId}`;
    const user = res.rows[0];

    if (!user) {
      throw new Error('User not found');
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
*/