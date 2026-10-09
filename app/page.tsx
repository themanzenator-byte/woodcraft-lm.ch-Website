import Image from "next/image";
import ContactForm from "./contact-form";
import ArrowIcon from "./arrow-icon";
import { works } from "@/data/works";

const lamps = [
  { work: works.find(item => item.slug === "oblo")!, image: "/opere/catalog/lamp-011.webp" },
  { work: works.find(item => item.slug === "shark")!, image: "/opere/catalog/lamp-006.webp" },
  { work: works.find(item => item.slug === "you")!, image: "/opere/catalog/lamp-018.webp" },
  { work: works.find(item => item.slug === "sun")!, image: "/opere/catalog/lamp-009.webp" },
];
const turned = [
  { work: works.find(item => item.slug === "nuts")!, image: "/opere/catalog/turn-003.webp" },
  { work: works.find(item => item.slug === "milky-ii")!, image: "/opere/catalog/turn-014.webp" },
  { work: works.find(item => item.slug === "lady")!, image: "/opere/catalog/lady-01.webp" },
];

export default function Home() {
  return <>
    <header className="site-header">
      <a className="brand" href="#inizio" aria-label="Wood Craft LM, torna all'inizio">
        <Image src="/wood-craft-logo-definitivo.png" alt="Wood Craft LM" width={72} height={72} priority />
        <span>WOOD CRAFT <strong>LM</strong></span>
      </a>
      <nav aria-label="Navigazione principale">
        <a href="/opere">Tutte le opere</a><a href="#finitura">La finitura</a><a href="#contatti" className="nav-contact">Contattami</a>
      </nav>
    </header>
    <main id="inizio">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Oggetti in legno · Ticino</p>
          <h1 id="hero-title">Il legno prende <em>forma.</em><br />La luce prende <em>vita.</em></h1>
          <p className="hero-description">Lampade, ciotole e vasi realizzati a mano. Pezzi diversi tra loro, con la forma e le venature del legno sempre in primo piano.</p>
          <p className="custom-work-note">Realizzo anche opere su commissione, seguendo richieste specifiche e idee particolari.</p>
          <a className="primary-link" href="/opere">Esplora tutte le opere <ArrowIcon /></a>
        </div>
        <div className="hero-art">
          <div className="hero-image"><Image src="/opere/totem-hero.webp" alt="Lampada Totem illuminata, in legno naturale" fill sizes="(max-width: 700px) 100vw, 45vw" style={{ objectFit: "contain" }} priority /></div>
          <div className="hero-bowls"><Image src="/opere/nuts-hero.webp" alt="Nuts, coppia di contenitori torniti in legno" fill sizes="(max-width: 700px) 60vw, 28vw" style={{ objectFit: "contain" }} priority /></div>
        </div>
      </section>
      <section className="collection" id="lampade" aria-labelledby="lampade-title">
        <div className="section-heading"><div><p className="eyebrow">01 / La collezione</p><h2 id="lampade-title">Lampade</h2></div><p className="section-lede">Il carattere naturale del legno incontra la luce. Ogni pezzo ha una presenza tutta sua.</p></div>
        <div className="lamp-grid">{lamps.map(({ work, image }, index) => <article className="work-card" key={work.slug}>
          <a href={`/opere/${work.slug}`} aria-label={`Vedi la lampada ${work.title}`}><div className="work-image"><Image src={image} alt={`Lampada ${work.title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw" style={{ objectFit: "contain" }} /></div>
          <div className="work-label"><span>{String(index + 1).padStart(2, "0")} / Lampada</span><h3>{work.title}</h3></div></a>
        </article>)}</div>
        <a className="all-works-link" href="/opere?categoria=lampade">Vedi tutte le lampade <ArrowIcon /></a>
      </section>
      <section className="collection turned-section" id="tornitura" aria-labelledby="tornitura-title">
        <div className="section-heading"><div><p className="eyebrow">02 / Forme tornite</p><h2 id="tornitura-title">Ciotole <span>&amp;</span> vasi</h2></div><p className="section-lede">Oggetti dalle linee semplici, dove la grana del legno diventa parte del disegno.</p></div>
        <div className="turned-grid">{turned.map(({ work, image }, index) => <article className="work-card" key={work.slug}>
          <a href={`/opere/${work.slug}`} aria-label={`Vedi ${work.title}`}><div className="work-image"><Image src={image} alt={work.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: "contain" }} /></div>
          <div className="work-label"><span>{String(index + 1).padStart(2, "0")} / {work.slug === "nuts" ? "Scatole" : work.category === "vasi" ? "Vaso" : "Ciotola"}</span><h3>{work.title}</h3></div></a>
        </article>)}</div>
        <a className="all-works-link" href="/opere?categoria=tornitura">Scopri tutte le opere tornite <ArrowIcon /></a>
      </section>
      <section className="wax-section" id="finitura" aria-labelledby="wax-title">
        <div className="wax-image"><Image src="/opere/beeswax-finish.jpeg" alt="Ape sulle cere utilizzate per la finitura del legno" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="wax-copy"><p className="eyebrow">03 / La finitura</p><h2 id="wax-title">Dal legno <em>alle mie api.</em></h2><p className="wax-lede">Anche l’ultima mano ha una storia.</p><p>Per la finitura e il trattamento del legno utilizzo prodotti a base di cera delle mie api. Due passioni che si incontrano nel gesto conclusivo di ogni lavorazione.</p></div>
      </section>
      <section className="contact-section" id="contatti" aria-labelledby="contatti-title">
        <div className="contact-copy"><p className="eyebrow">04 / Scrivimi</p><h2 id="contatti-title">Parliamo del tuo <em>prossimo pezzo.</em></h2><p>Ti interessa un&apos;opera o vuoi saperne di più? Mandami un messaggio e ti risponderò personalmente.</p><a href="https://www.instagram.com/woodcraft.lm.ch/" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>Seguimi su Instagram <ArrowIcon /></a><Image className="contact-logo" src="/wood-craft-logo-definitivo.png" alt="Wood Craft LM" width={256} height={216} /></div>
        <ContactForm />
      </section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Wood Craft LM</span><span>Oggetti in legno, fatti con cura in Ticino.</span><div className="footer-links"><a href="/messaggi" className="owner-link">Area riservata</a><a href="#inizio">Torna su ↑</a></div></footer>
  </>;
}
