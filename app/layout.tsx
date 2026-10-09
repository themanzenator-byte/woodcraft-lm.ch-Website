import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wood Craft LM | Lampade, ciotole e vasi in legno",
  description: "Lampade, ciotole e vasi artigianali in legno. Scopri le opere di Wood Craft LM e scrivi per informazioni.",
  icons: {
    icon: "/favicon-definitivo.png",
    shortcut: "/favicon-definitivo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
