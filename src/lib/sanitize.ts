export function sanitizeText(value: string) {
  return value
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .trim();
}

export function sanitizeMessage(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return {
    name: sanitizeText(input.name),
    email: sanitizeText(input.email),
    subject: sanitizeText(input.subject),
    body: sanitizeText(input.message),
  };
}
