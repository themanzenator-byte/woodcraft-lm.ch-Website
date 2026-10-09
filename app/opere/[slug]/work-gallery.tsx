"use client";

import Image from "next/image";
import { useState, type KeyboardEvent, type TouchEvent } from "react";

export default function WorkGallery({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const hasMultiple = images.length > 1;
  const show = (step: number) => setActive(index => (index + step + images.length) % images.length);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMultiple) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); show(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); show(1); }
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStart === null || !hasMultiple) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) show(distance < 0 ? 1 : -1);
    setTouchStart(null);
  }

  return <div className="work-gallery" aria-label={`Fotografie di ${title}`} tabIndex={hasMultiple ? 0 : undefined} onKeyDown={onKeyDown}>
    <div className="work-gallery-stage" onTouchStart={event => setTouchStart(event.touches[0].clientX)} onTouchEnd={onTouchEnd}>
      <Image key={images[active]} src={images[active]} alt={`${title}, vista ${active + 1} di ${images.length}`} fill sizes="(max-width: 800px) 100vw, 60vw" style={{ objectFit: "contain" }} priority={active === 0} />
      {hasMultiple && <>
        <button className="work-gallery-arrow prev" type="button" onClick={() => show(-1)} aria-label="Fotografia precedente">‹</button>
        <button className="work-gallery-arrow next" type="button" onClick={() => show(1)} aria-label="Fotografia successiva">›</button>
      </>}
    </div>
    {hasMultiple && <div className="work-gallery-bottom">
      <div className="work-gallery-thumbnails" aria-label="Scegli una fotografia">
        {images.map((src, index) => <button key={src} className={index === active ? "active" : ""} type="button" onClick={() => setActive(index)} aria-label={`Mostra fotografia ${index + 1} di ${title}`} aria-pressed={index === active}>
          <Image src={src} alt="" fill sizes="80px" style={{ objectFit: "contain" }} />
        </button>)}
      </div>
      <span className="work-gallery-count" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
    </div>}
  </div>;
}
