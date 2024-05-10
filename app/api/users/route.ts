import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const supabase = createClient();
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
      console.log("Not all fields are present");
      // return an error if any fields are missing
      throw new Error('All fields are required');
    }

    // TODO: handle errors
    const { data, error } = await supabase
      .from('users')
      .insert({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
      })
      .select();

    // lol vet this carefully
    return NextResponse.json({ id: data }, { status: 201 });
  } catch (error:any) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}