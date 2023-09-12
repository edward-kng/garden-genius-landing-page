import { NextResponse } from "next/server";
import { Client } from "pg";

const pgClient = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pgClient.connect();

export async function POST(request: Request) {
  const { email } = await request.json();

  await pgClient.query("INSERT INTO waiting_list(email) VALUES ($1)", [email]);

  return NextResponse.json({ status: "OK" });
}
