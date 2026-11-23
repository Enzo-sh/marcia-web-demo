import Logo from "./Logo";
import { site, location, photoSources } from "@/config/site";
export default function Footer() {
  return (
    <footer className="bg-cafe py-12 text-papel">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="w-32 rounded-3xl bg-papel p-2"><Logo /></div>
          <p className="mt-4 font-display text-4xl">{site.brand}</p>
          <p className="mt-2 max-w-sm text-papel/80">{site.tagline}. Villa Urquiza, Buenos Aires.</p>
        </div>
        <ul className="space-y-1 text-papel/90">
          <li><a className="hover:underline" href={site.instagram.url} target="_blank" rel="noopener noreferrer">Instagram {site.instagram.handle}</a></li>
          <li><a className="hover:underline" href={site.whatsapp.url} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsapp.number}</a></li>
          <li>{site.address}</li>
          <li><a className="hover:underline" href={location.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs leading-relaxed text-papel/60">
        Fotos públicas consultadas en {photoSources.map((source, index) => (
          <span key={source.url}>{index > 0 && (index === photoSources.length - 1 ? " e " : ", ")}<a className="underline hover:text-papel" href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></span>
        ))}. Verificá permisos y actualizá las imágenes si contás con originales propios.
      </p>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-sm text-papel/70">© {new Date().getFullYear()} {site.name}. {site.disclaimer}</p>
    </footer>
  );
}
