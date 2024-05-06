import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // fetch first name, last name, username, email, and password from the request body
  const { firstName, lastName, username, email, password } : {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  } = data;

  try {
    // validate that all fields are present
    if (!firstName || !lastName || !username || !email || !password) {
      console.log("not all fields are present");
      // return an error if any fields are missing
      throw new Error('All fields are required');
    }

    // insert the user into the database
    const res = await sql`INSERT INTO users (first_name, last_name, username, email, password)
    VALUES (${firstName}, ${lastName}, ${username}, ${email}, ${password})
    RETURNING id`;

    return NextResponse.json({ id: res.rows[0].id }, { status: 201 });
  } catch (error:any) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}