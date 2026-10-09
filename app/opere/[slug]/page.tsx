import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getWork, legacySlugs, works } from "@/data/works";
import ArrowIcon from "@/app/arrow-icon";
import WorkGallery from "./work-gallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return [...works.map(work => ({ slug: work.slug })), ...Object.keys(legacySlugs).map(slug => ({ slug }))]; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWork((await params).slug);
  if (!work) return { title: "Opera non trovata | Wood Craft LM" };
  return { title: `${work.title} | Wood Craft LM`, description: work.description ? `${work.title} — ${work.description} Wood Craft LM.` : `Guarda tutte le fotografie di ${work.title}, opera in legno di Wood Craft LM.` };
}

export default async function WorkPage({ params }: Props) {
  const work = getWork((await params).slug);
  if (!work) notFound();
  const category = categories.find(item => item.id === work.category)!;

  return <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Wood Craft LM, torna alla pagina iniziale"><Image src="/wood-craft-logo-definitivo.png" alt="Wood Craft LM" width={72} height={72} /><span>WOOD CRAFT <strong>LM</strong></span></a>
      <nav aria-label="Navigazione principale"><a href="/opere">Tutte le opere</a><a href="/#finitura">La finitura</a><a href="/#contatti" className="nav-contact">Contattami</a></nav>
    </header>
    <main className="detail-page">
      <a className="detail-back" href={`/opere?categoria=${work.category}`}>← Torna a {category.label.toLowerCase()}</a>
      <div className="detail-layout">
        <WorkGallery title={work.title} images={work.images} />
        <div className="detail-info"><p className="eyebrow">{category.label} / Wood Craft LM</p><h1>{work.title}</h1><p className="detail-lede">{work.description ?? "La forma del legno, vista da vicino."}</p><p>Per informazioni o richieste, scrivimi indicando il nome del pezzo.</p><a className="detail-contact" href="/#contatti">Chiedimi informazioni <ArrowIcon /></a><div className="detail-wax"><span>La finitura</span><p>Per il trattamento del legno utilizzo prodotti a base di cera delle mie api.</p></div></div>
      </div>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Wood Craft LM</span><span>Oggetti in legno, fatti con cura in Ticino.</span><div className="footer-links"><a href="/messaggi" className="owner-link">Area riservata</a><a href="/opere">Tutte le opere ↑</a></div></footer>
  </>;
}
