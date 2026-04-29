import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type NotifyRecord = {
  email: string;
  createdAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATA_DIR =
  process.env.NOTIFY_DATA_DIR ??
  (process.env.VERCEL ? path.join("/tmp", "tailsbuddy-notify") : path.join(process.cwd(), "data"));
const DATA_FILE = path.join(DATA_DIR, "notify-emails.json");

async function readRecords(): Promise<NotifyRecord[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is NotifyRecord => {
      return (
        typeof item === "object" &&
        item !== null &&
        "email" in item &&
        "createdAt" in item &&
        typeof item.email === "string" &&
        typeof item.createdAt === "string"
      );
    });
  } catch {
    return [];
  }
}

async function writeRecords(records: NotifyRecord[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(records, null, 2), "utf-8");
}

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

    const records = await readRecords();
    const alreadyExists = records.some((item) => item.email === email);

    if (!alreadyExists) {
      records.push({
        email,
        createdAt: new Date().toISOString(),
      });
      await writeRecords(records);
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
