import Image from "next/image";
import type { Metadata } from "next";
import { categories, works, type Category } from "@/data/works";

export const metadata: Metadata = {
  title: "Tutte le opere | Wood Craft LM",
  description: "Esplora le lampade, i vasi e le ciotole in legno di Wood Craft LM.",
};

export default async function Catalog({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const { categoria } = await searchParams;
  const current = categoria === "tornitura" ? "tornitura" : categories.some(item => item.id === categoria) ? categoria as Category : null;
  const visible = current === "tornitura" ? works.filter(work => work.category !== "lampade") : current ? works.filter(work => work.category === current) : works;
  const label = (id: Category) => categories.find(item => item.id === id)?.label ?? id;

  return <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Wood Craft LM, torna alla pagina iniziale"><Image src="/wood-craft-logo-definitivo.png" alt="Wood Craft LM" width={72} height={72} /><span>WOOD CRAFT <strong>LM</strong></span></a>
      <nav aria-label="Navigazione principale"><a href="/">Home</a><a href="/#finitura">La finitura</a><a href="/#contatti" className="nav-contact">Contattami</a></nav>
    </header>
    <main className="catalog-page">
      <div className="catalog-intro"><p className="eyebrow">La galleria completa</p><h1>{current === "tornitura" ? <>Opere <em>tornite.</em></> : current === "lampade" ? <>Tutte le <em>lampade.</em></> : <>Tutte le <em>opere.</em></>}</h1><p>Ogni pezzo ha una forma, una venatura e una storia diversa. Apri una scheda per vedere tutte le fotografie disponibili.</p></div>
      <div className="catalog-toolbar">
        <div className="catalog-filters" aria-label="Filtra le opere">
          <a href="/opere" aria-current={!current ? "page" : undefined} className={!current ? "active" : ""}>Tutte <span>{works.length}</span></a>
          <a href="/opere?categoria=lampade" aria-current={current === "lampade" ? "page" : undefined} className={current === "lampade" ? "active" : ""}>Lampade <span>{works.filter(work => work.category === "lampade").length}</span></a>
          {categories.filter(item => item.id !== "lampade").map(item => <a key={item.id} href={`/opere?categoria=${item.id}`} aria-current={current === item.id ? "page" : undefined} className={current === item.id ? "active" : ""}>{item.label} <span>{works.filter(work => work.category === item.id).length}</span></a>)}
        </div>
        <span className="catalog-count">{visible.length} {visible.length === 1 ? "opera" : "opere"}</span>
      </div>
      <div className="catalog-grid">{visible.map(work => <article className="catalog-card" key={work.slug}>
        <a href={`/opere/${work.slug}`} aria-label={`Apri ${work.title}`}>
          <div className="catalog-card-image"><Image src={work.images[0]} alt={work.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectFit: "contain" }} /></div>
          <div className="catalog-card-meta"><span>{label(work.category)}</span>{work.images.length > 1 && <span>{work.images.length} foto</span>}</div>
          <h2>{work.title}</h2>
        </a>
      </article>)}</div>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Wood Craft LM</span><span>Oggetti in legno, fatti con cura in Ticino.</span><div className="footer-links"><a href="/messaggi" className="owner-link">Area riservata</a><a href="/">Torna alla home ↑</a></div></footer>
  </>;
}
