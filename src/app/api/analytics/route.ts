import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const limited = rateLimit(clientKey(request.headers, "analytics"), 40, 60_000);
  if (!limited.ok) {
    return NextResponse.json({ ok: true });
  }

  const body = (await request.json().catch(() => null)) as { path?: string; referrer?: string } | null;
  if (!body?.path || !body.path.startsWith("/")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  await prisma.pageView
    .create({
      data: {
        path: body.path.slice(0, 180),
        referrer: body.referrer?.slice(0, 180),
      },
    })
    .catch(() => undefined);

  return NextResponse.json({ ok: true });
}
