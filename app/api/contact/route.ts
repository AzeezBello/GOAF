import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  // Implement your email/CRM logic here.
  return NextResponse.json({ status: 'ok', received: !!data });
}