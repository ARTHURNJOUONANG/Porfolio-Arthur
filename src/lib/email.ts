import { Resend } from "resend";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "arthurnjouonang5@gmail.com";
const CONTACT_FROM = process.env.RESEND_FROM ?? "Portfolio Arthur <onboarding@resend.dev>";

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  body: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: input.email,
    subject: `[Portfolio] ${input.subject}`,
    text: `${input.name} <${input.email}>\n\n${input.body}`,
    html: `
      <div style="font-family:Georgia,serif;background:#0a0a0a;color:#f5f5f5;padding:32px">
        <p style="color:#e4b429;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;margin:0 0 16px">Nouveau message portfolio</p>
        <h1 style="font-size:22px;margin:0 0 24px">${escapeHtml(input.subject)}</h1>
        <p style="margin:0 0 8px"><strong>De :</strong> ${escapeHtml(input.name)}</p>
        <p style="margin:0 0 24px"><strong>Email :</strong> ${escapeHtml(input.email)}</p>
        <div style="white-space:pre-wrap;line-height:1.6;border-top:1px solid #333;padding-top:20px">${escapeHtml(input.body)}</div>
        <p style="margin:28px 0 0;color:#a1a1aa;font-size:13px">Réponds directement à cet e-mail pour écrire à ${escapeHtml(input.email)}.</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
