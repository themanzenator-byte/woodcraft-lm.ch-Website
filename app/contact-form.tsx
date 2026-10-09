"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contatto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Invio non riuscito");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <h3>Inviami un messaggio</h3>
    <div className="field"><label htmlFor="contact-name">Nome</label><Input id="contact-name" name="name" autoComplete="name" maxLength={100} required /></div>
    <div className="field"><label htmlFor="contact-email">Email</label><Input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
    <div className="field"><label htmlFor="contact-message">Messaggio</label><Textarea id="contact-message" name="message" minLength={10} maxLength={3000} required /></div>
    <div className="honey" aria-hidden="true"><label htmlFor="contact-website">Sito web</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Invio in corso…" : "Invia messaggio ↗"}</Button>
    <p className="form-note">Userò i tuoi dati solo per rispondere alla tua richiesta.</p>
    <div aria-live="polite">{status === "success" && <p className="form-message success">Grazie! Il tuo messaggio è stato ricevuto.</p>}{status === "error" && <p className="form-message error">Non sono riuscito a inviare il messaggio. Riprova tra poco.</p>}</div>
  </form>;
}
