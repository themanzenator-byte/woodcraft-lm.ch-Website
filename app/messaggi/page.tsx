import { env } from "cloudflare:workers";
import { requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

type Message = { id: number; name: string; email: string; message: string; created_at: string };

export default async function Messages() {
  const user = await requireChatGPTUser("/messaggi");
  if (user.email.toLowerCase() !== "themanzenator@gmail.com") {
    return <main style={{ padding: "3rem" }}><h1>Accesso riservato</h1><a href="/">Torna al sito</a></main>;
  }

  let messages: Message[] = [];
  let unavailable = false;
  try {
    if (!env.DB) throw new Error("D1 unavailable");
    const result = await env.DB.prepare("SELECT id, name, email, message, created_at FROM contact_messages ORDER BY id DESC LIMIT 100").all<Message>();
    messages = result.results;
  } catch (error) {
    console.error("Contact inbox load failed", error);
    unavailable = true;
  }

  return <main className="inbox">
    <a href="/">← Wood Craft LM</a>
    <h1>Messaggi ricevuti</h1>
    {unavailable ? <p>I messaggi non sono disponibili in questo momento. Riprova più tardi.</p> :
      messages.length === 0 ? <p>Nessun messaggio ricevuto.</p> :
      <div className="inbox-list">{messages.map(item => <article key={item.id}>
        <div className="inbox-meta"><strong>{item.name}</strong><time dateTime={item.created_at}>{new Date(item.created_at).toLocaleString("it-CH", { timeZone: "Europe/Zurich" })}</time></div>
        <a href={`mailto:${encodeURIComponent(item.email)}`}>{item.email}</a>
        <p>{item.message}</p>
      </article>)}</div>}
  </main>;
}
