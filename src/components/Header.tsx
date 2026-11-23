import Logo from "./Logo";
import { site } from "@/config/site";
const links = [["Carta", "#carta"], ["Reseñas", "#resenas"], ["Ubicación", "#ubicacion"], ["Contacto", "#contacto"]];
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cafe/15 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-2xl tracking-wide text-bordo"><Logo className="w-12" />{site.brand}</a>
        <nav aria-label="Principal" className="flex gap-4 text-sm font-medium sm:gap-6">
          {links.map(([l, h]) => (<a key={h} href={h} className="hover:text-bordo">{l}</a>))}
        </nav>
      </div>
    </header>
  );
}
