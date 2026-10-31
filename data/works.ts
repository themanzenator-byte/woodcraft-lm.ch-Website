export type Category = "lampade" | "ciotole" | "vasi" | "piatti";
export type Work = { slug: string; title: string; category: Category; images: string[]; description?: string };

// Per aggiungere un'opera: salva le foto in public/opere/catalog e aggiungi una scheda qui.
// Le immagini successive alla prima sono le altre viste della stessa opera.
// Foto: opera interamente visibile; margine bianco uniforme circa 6–8% per lato,
// soggetto quanto più grande possibile entro il margine, senza tagli o ricostruzioni.
export const works: Work[] = [
  {
    "slug": "bell",
    "title": "Bell",
    "category": "ciotole",
    "description": "Ciotola tornita in legno di betulla, dal profilo svasato e arrotondato. Due coppie di sottili linee scure accompagnano le venature naturali del legno.",
    "images": ["/opere/catalog/bell-01.webp", "/opere/catalog/bell-02.webp", "/opere/catalog/bell-03.webp"]
  },
  {
    "slug": "harmony",
    "title": "Harmony",
    "category": "ciotole",
    "description": "Ciotola tornita con base in legno di acacia e coperchio in castagno. Le forme morbide e arrotondate accostano le diverse venature e tonalità dei due legni.",
    "images": ["/opere/catalog/harmony-01.webp", "/opere/catalog/harmony-02.webp"]
  },
  {
    "slug": "cylin",
    "title": "Cylin",
    "category": "ciotole",
    "description": "Contenitore tornito con coperchio, dal profilo cilindrico e slanciato. Le venature fitte del legno incontrano sottili linee scure nella parte superiore.",
    "images": ["/opere/catalog/cylin-01.webp", "/opere/catalog/cylin-02.webp", "/opere/catalog/cylin-03.webp"]
  },
  {
    "slug": "canny",
    "title": "Canny",
    "category": "ciotole",
    "description": "Scatola tornita con coperchio in legno di ciliegio, pensata per contenere sale o spezie. Le venature calde e i dettagli scuri ne valorizzano la forma cilindrica.",
    "images": ["/opere/catalog/canny-01.webp", "/opere/catalog/canny-02.webp", "/opere/catalog/canny-03.webp"]
  },
  {
    "slug": "ufo",
    "title": "Ufo",
    "category": "piatti",
    "description": "Piatto tornito in legno di rovere, dal profilo basso e arrotondato, con venature fitte e una sottile linea scura che ne segue il bordo.",
    "images": ["/opere/catalog/ufo-01.webp", "/opere/catalog/ufo-02.webp", "/opere/catalog/ufo-03.webp"]
  },
  {
    "slug": "cracks",
    "title": "Cracks",
    "category": "ciotole",
    "description": "Ciotola tornita dalle venature calde, in cui le crepe naturali del legno incontrano tre sottili linee scure lungo il bordo.",
    "images": ["/opere/catalog/cracks-01.webp", "/opere/catalog/cracks-02.webp", "/opere/catalog/cracks-03.webp"]
  },
  {
    "slug": "didi",
    "title": "Didi",
    "category": "ciotole",
    "description": "Ciotola tornita dal bordo morbido e irregolare, con venature naturali che disegnano trame uniche sulla superficie del legno.",
    "images": ["/opere/catalog/didi-01.webp", "/opere/catalog/didi-02.webp", "/opere/catalog/didi-03.webp"]
  },
  {
    "slug": "telly",
    "title": "Telly",
    "category": "piatti",
    "description": "Piatto tornito in legno di sequoia, con venature concentriche dai toni caldi e un bordo morbido e arrotondato.",
    "images": ["/opere/catalog/telly-01.webp", "/opere/catalog/telly-02.webp", "/opere/catalog/telly-03.webp", "/opere/catalog/telly-04.webp"]
  },
  {
    "slug": "babe",
    "title": "Babe",
    "category": "ciotole",
    "description": "Ciotola tornita dalle forme morbide, con due sottili linee scure che accompagnano le venature del legno.",
    "images": ["/opere/catalog/babe-01.webp", "/opere/catalog/babe-02.webp", "/opere/catalog/babe-03.webp", "/opere/catalog/babe-04.webp"]
  },
  {
    "slug": "jupiter",
    "title": "Jupiter",
    "category": "ciotole",
    "description": "Ciotola tornita in legno di acacia, con venature calde e un caratteristico nodo scuro.",
    "images": ["/opere/catalog/jupiter-01.webp", "/opere/catalog/jupiter-02.webp"]
  },
  {
    "slug": "twins",
    "title": "Twins",
    "category": "ciotole",
    "description": "Una coppia di ciotole tornite in legno, dalle forme morbide e dalle venature luminose.",
    "images": ["/opere/catalog/twins-01.webp"]
  },
  {
    "slug": "bone",
    "title": "Bone",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-002.webp",
      "/opere/catalog/lamp-001.webp"
    ]
  },
  {
    "slug": "shark",
    "title": "Shark",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-006.webp",
      "/opere/catalog/lamp-005.webp",
      "/opere/catalog/lamp-004.webp",
      "/opere/catalog/lamp-003.webp"
    ]
  },
  {
    "slug": "sun",
    "title": "Sun",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-007.webp",
      "/opere/catalog/lamp-010.webp",
      "/opere/catalog/lamp-009.webp",
      "/opere/catalog/lamp-008.webp"
    ]
  },
  {
    "slug": "oblo",
    "title": "Oblò",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-011.webp",
      "/opere/catalog/lamp-012.webp",
      "/opere/catalog/lamp-013.webp",
      "/opere/catalog/lamp-014.webp"
    ]
  },
  {
    "slug": "you",
    "title": "You",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-018.webp",
      "/opere/catalog/lamp-019.webp",
      "/opere/catalog/lamp-017.webp",
      "/opere/catalog/lamp-016.webp",
      "/opere/catalog/lamp-015.webp"
    ]
  },
  {
    "slug": "miro",
    "title": "Miro",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-020.webp",
      "/opere/catalog/lamp-021.webp",
      "/opere/catalog/lamp-022.webp"
    ]
  },
  {
    "slug": "flames",
    "title": "Flames",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-024.webp",
      "/opere/catalog/lamp-025.webp",
      "/opere/catalog/lamp-023.webp"
    ]
  },
  {
    "slug": "flower",
    "title": "Flower",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-033.webp",
      "/opere/catalog/lamp-026.webp",
      "/opere/catalog/lamp-032.webp",
      "/opere/catalog/lamp-031.webp"
    ]
  },
  {
    "slug": "totem",
    "title": "Totem",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-028.webp",
      "/opere/catalog/lamp-029.webp",
      "/opere/catalog/lamp-027.webp",
      "/opere/catalog/lamp-030.webp"
    ]
  },
  {
    "slug": "fire-e-ice",
    "title": "Fire & Ice",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-036.webp",
      "/opere/catalog/lamp-037.webp",
      "/opere/catalog/lamp-035.webp",
      "/opere/catalog/lamp-034.webp"
    ]
  },
  {
    "slug": "picchio",
    "title": "Picchio",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-041.webp",
      "/opere/catalog/lamp-042.webp",
      "/opere/catalog/lamp-038.webp",
      "/opere/catalog/lamp-039.webp",
      "/opere/catalog/lamp-040.webp"
    ]
  },
  {
    "slug": "snake-in-love",
    "title": "Snake in Love",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-045.webp",
      "/opere/catalog/lamp-046.webp",
      "/opere/catalog/lamp-043.webp",
      "/opere/catalog/lamp-044.webp"
    ]
  },
  {
    "slug": "sweet-heart",
    "title": "Sweet Heart",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-048.webp",
      "/opere/catalog/lamp-050.webp",
      "/opere/catalog/lamp-047.webp",
      "/opere/catalog/lamp-049.webp"
    ]
  },
  {
    "slug": "abba",
    "title": "Abba",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-067.webp",
      "/opere/catalog/lamp-051.webp"
    ]
  },
  {
    "slug": "nest",
    "title": "Nest",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-053.webp",
      "/opere/catalog/lamp-052.webp",
      "/opere/catalog/lamp-054.webp",
      "/opere/catalog/lamp-055.webp"
    ]
  },
  {
    "slug": "clip",
    "title": "Clip",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-057.webp",
      "/opere/catalog/lamp-056.webp"
    ]
  },
  {
    "slug": "halfpipe",
    "title": "Halfpipe",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-058.webp",
      "/opere/catalog/lamp-060.webp",
      "/opere/catalog/lamp-059.webp"
    ]
  },
  {
    "slug": "little-boy",
    "title": "Little Boy",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-061.webp",
      "/opere/catalog/lamp-062.webp"
    ]
  },
  {
    "slug": "luna",
    "title": "Luna",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-068.webp",
      "/opere/catalog/lamp-063.webp",
      "/opere/catalog/lamp-064.webp"
    ]
  },
  {
    "slug": "rabbit-hole",
    "title": "Rabbit Hole",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-065.webp",
      "/opere/catalog/lamp-066.webp"
    ]
  },
  {
    "slug": "moon",
    "title": "Moon",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-069.webp",
      "/opere/catalog/lamp-070.webp"
    ]
  },
  {
    "slug": "rocket",
    "title": "Rocket",
    "category": "lampade",
    "images": [
      "/opere/catalog/lamp-071.webp"
    ]
  },
  {
    "slug": "chill",
    "title": "Chill",
    "category": "ciotole",
    "description": "Profumatore per ambienti.",
    "images": [
      "/opere/catalog/chill-01.webp",
      "/opere/catalog/chill-02.webp",
      "/opere/catalog/chill-03.webp",
      "/opere/catalog/chill-04.webp"
    ]
  },
  {
    "slug": "nuts",
    "title": "Nuts",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-001.webp",
      "/opere/catalog/turn-003.webp",
      "/opere/catalog/turn-010.webp"
    ]
  },
  {
    "slug": "drop",
    "title": "Drop",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-004.webp",
      "/opere/catalog/turn-012.webp",
      "/opere/catalog/turn-013.webp"
    ]
  },
  {
    "slug": "amo",
    "title": "Amo",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-005.webp",
      "/opere/catalog/turn-007.webp",
      "/opere/catalog/turn-015.webp"
    ]
  },
  {
    "slug": "milky-ii",
    "title": "Milky II",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-006.webp",
      "/opere/catalog/turn-002.webp",
      "/opere/catalog/turn-014.webp"
    ]
  },
  {
    "slug": "blumbee",
    "title": "Blumbee",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-008.webp",
      "/opere/catalog/turn-023.webp"
    ]
  },
  {
    "slug": "portapenne",
    "title": "Portapenne",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-011.webp",
      "/opere/catalog/turn-018.webp"
    ]
  },
  {
    "slug": "mbuto",
    "title": "Mbuto",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-016.webp"
    ]
  },
  {
    "slug": "heidi",
    "title": "Heidi",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-017.webp"
    ]
  },
  {
    "slug": "japa",
    "title": "Japa",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-019.webp",
      "/opere/catalog/turn-026.webp"
    ]
  },
  {
    "slug": "acorn",
    "title": "Acorn",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-020.webp",
      "/opere/catalog/turn-022.webp"
    ]
  },
  {
    "slug": "yoko",
    "title": "Yoko",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-021.webp",
      "/opere/catalog/turn-025.webp"
    ]
  },
  {
    "slug": "birillo",
    "title": "Birillo",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-024.webp"
    ]
  },
  {
    "slug": "nice",
    "title": "Nice",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-027.webp"
    ]
  },
  {
    "slug": "milky",
    "title": "Milky",
    "category": "ciotole",
    "images": [
      "/opere/catalog/turn-028.webp",
      "/opere/catalog/turn-009.webp"
    ]
  },
  {
    "slug": "bubble",
    "title": "Bubble",
    "category": "vasi",
    "images": [
      "/opere/catalog/turn-029.webp"
    ]
  },
  {
    "slug": "lady",
    "title": "Lady",
    "category": "vasi",
    "images": [
      "/opere/catalog/lady-01.webp",
      "/opere/catalog/lady-02.webp"
    ]
  }
];

export const categories: { id: Category; label: string }[] = [
  { id: "lampade", label: "Lampade" },
  { id: "vasi", label: "Vasi" },
  { id: "ciotole", label: "Ciotole" },
  { id: "piatti", label: "Piatti" },
];

export const legacySlugs: Record<string, string> = {
  "coppia-di-scatole-tornite": "nuts",
  "contenitori-con-coperchio": "nuts",
  "portacandela-tornito": "mbuto",
  "contenitore-con-coperchio": "japa",
  "scatola-chiara": "japa",
  "scatola-sferica": "acorn",
  "scatola-tornita": "yoko",
  "scatola-venata": "yoko",
  "mortaio-in-legno": "nice",
  "vaso-con-fiori": "bubble",
  "vaso-sottile": "birillo",
  "ciotola-dalle-venature-marcate": "milky",
  "ciotola-bicolore": "milky",
  "ciotola-con-trucioli": "heidi",
  "vaso-rustico": "blumbee",
  "ciotola-dalle-venature-calde": "milky-ii",
  "ciotola-rotonda": "milky-ii",
  "vaso-cilindrico": "portapenne",
  "vaso-ovoidale": "drop",
  "vaso-slanciato": "amo",
};

export function getWork(slug: string) { return works.find(work => work.slug === (legacySlugs[slug] ?? slug)); }
