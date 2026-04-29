import { NextResponse } from "next/server";
import { readEmails, writeEmails } from "@/app/api/notify/storage";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const email =
      typeof body === "object" && body !== null && "email" in body
        ? String((body as { email?: unknown }).email ?? "").trim().toLowerCase()
        : "";

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const emails = await readEmails();
    const alreadyExists = emails.includes(email);

    if (!alreadyExists) {
      emails.push(email);
      await writeEmails(emails);
    }

    return NextResponse.json({
      message: alreadyExists
        ? "You are already on the list."
        : "You are on the list. We will notify you soon.",
      alreadyExists,
    });
  } catch (error) {
    console.error("Notify API error", error);

    return NextResponse.json(
      { message: "Temporary storage is unavailable right now. Please try again." },
      { status: 500 }
    );
  }
}
