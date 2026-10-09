# Wood Craft LM

Copia indipendente dei sorgenti del sito https://woodcraft-lm.ch.

Versione Sites: 27. Commit sorgente: 246e36cdfb16623c24e293034490da5a5f111408 (Twins inclusa).

Per modificare il catalogo: `data/works.ts` e foto in `public/opere/catalog/`.
La home è in `app/page.tsx`, gli stili in `app/globals.css`, la galleria in `app/opere/[slug]/`.
Puoi clonare il repository e usare VS Code; `pnpm install --frozen-lockfile`,
`pnpm dev` per la preview e `pnpm build` per verificare il progetto.
Node.js >=22.13 richiesto. Leggi `README-starter.md` per la configurazione locale.

Il sito pubblicato usa Sites con database D1 per il modulo contatti e autenticazione
ChatGPT per `/messaggi`. Per ospitarlo in modo indipendente occorre configurare
Workers e D1 e sostituire l'autenticazione della casella privata.
GitHub conserva i file del sito, non i dati ricevuti dal modulo.
Prezzi e disponibilità sono nel listino privato separato.
Leggi `AGENTS.md` prima di aggiornare il sito o la replica.
