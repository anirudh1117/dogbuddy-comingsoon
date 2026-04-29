import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR =
  process.env.NOTIFY_DATA_DIR ??
  (process.env.VERCEL ? path.join("/tmp", "tailsbuddy-notify") : path.join(process.cwd(), "data"));
const DATA_FILE = path.join(DATA_DIR, "notify-emails.json");

export async function readEmails(): Promise<string[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    // Backward compatibility: if old object records exist, extract the email field.
    const emails = parsed
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (typeof item === "object" && item !== null && "email" in item) {
          return String((item as { email?: unknown }).email ?? "");
        }

        return "";
      })
      .map((email) => email.trim().toLowerCase())
      .filter((email) => email.length > 0);

    return Array.from(new Set(emails));
  } catch {
    return [];
  }
}

export async function writeEmails(emails: string[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const normalized = Array.from(new Set(emails.map((email) => email.trim().toLowerCase()))).filter(
    (email) => email.length > 0
  );
  await fs.writeFile(DATA_FILE, JSON.stringify(normalized, null, 2), "utf-8");
}
