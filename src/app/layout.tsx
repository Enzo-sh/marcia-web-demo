import type { Metadata } from "next";
import { Young_Serif, Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--f-display" });
const sans = Figtree({ subsets: ["latin"], variable: "--f-sans" });
export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline} (demo no oficial)`,
  description: site.description,
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es-AR" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>);
}
