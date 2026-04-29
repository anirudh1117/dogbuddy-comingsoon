import { NextResponse } from "next/server";
import { readEmails } from "@/app/api/notify/storage";

export async function GET(
  _request: Request,
  context: { params: Promise<{ key: string }> }
) {
  const { key } = await context.params;
  const expectedKey = process.env.NOTIFY_DUMP_KEY;

  // Keep endpoint effectively hidden unless key matches exactly.
  if (!expectedKey || key !== expectedKey) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const emails = await readEmails();
  return NextResponse.json(emails, { status: 200 });
}
