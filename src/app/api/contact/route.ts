import { NextResponse } from "next/server";
import { isResendConfigured, sendContactEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { sanitizeMessage } from "@/lib/sanitize";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const limited = rateLimit(clientKey(request.headers, "contact"), 5, 60_000);
  if (!limited.ok) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const clean = sanitizeMessage(parsed.data);

  let stored = false;
  try {
    await prisma.message.create({ data: clean });
    stored = true;
  } catch {
    stored = false;
  }

  if (isResendConfigured()) {
    try {
      await sendContactEmail(clean);
      return NextResponse.json({ ok: true, emailed: true });
    } catch (error) {
      console.error("Resend a échoué", error);
      if (stored) {
        return NextResponse.json({ ok: true, emailed: false });
      }
      return NextResponse.json({ error: "Unable to send email" }, { status: 502 });
    }
  }

  if (stored) {
    console.warn("RESEND_API_KEY manquante : le message est en base, mais aucun e-mail n'a été envoyé.");
    return NextResponse.json({ ok: true, emailed: false });
  }

  return NextResponse.json({ error: "Contact is temporarily unavailable" }, { status: 503 });
}
