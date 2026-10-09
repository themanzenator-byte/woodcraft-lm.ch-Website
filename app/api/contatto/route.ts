import { env } from "cloudflare:workers";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    if (Number(request.headers.get("content-length") || "0") > 10000) return NextResponse.json({ error: "Messaggio troppo lungo" }, { status: 413 });
    data = await request.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
  }

  if (data.website) return NextResponse.json({ ok: true });
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 3000) {
    return NextResponse.json({ error: "Controlla i campi del modulo" }, { status: 400 });
  }

  try {
    if (!env.DB) throw new Error("D1 unavailable");
    await env.DB.prepare("INSERT INTO contact_messages (name, email, message, created_at) VALUES (?, ?, ?, ?)").bind(name, email, message, new Date().toISOString()).run();
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form save failed", error);
    return NextResponse.json({ error: "Servizio temporaneamente non disponibile" }, { status: 503 });
  }
}
