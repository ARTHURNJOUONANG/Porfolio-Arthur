import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/utils";

export async function GET() {
  return NextResponse.redirect(new URL("/cv", siteUrl()));
}
