import { Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { site, location, waLink } from "@/config/site";
export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="font-display text-4xl sm:text-5xl text-bordo">Pasá, escribinos o pedí tu mesa</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl bg-[#25D366] p-8 text-cafe hover:brightness-95">
          <MessageCircle size={48} aria-hidden />
          <span><span className="block font-display text-3xl">Escribinos por WhatsApp</span><span className="text-lg">{site.whatsapp.number}</span></span>
        </a>
        <ul className="space-y-4 text-lg">
          <li><a className="flex items-center gap-3 hover:text-bordo" href={site.instagram.url} target="_blank" rel="noopener noreferrer"><Instagram aria-hidden /> {site.instagram.handle}</a></li>
          <li className="flex items-start gap-3"><MapPin className="mt-1 shrink-0" aria-hidden /> {site.address}</li>
          <li><a className="flex items-center gap-3 hover:text-bordo" href={location.mapsUrl} target="_blank" rel="noopener noreferrer"><Navigation aria-hidden /> Abrir en Google Maps</a></li>
        </ul>
      </div>
    </section>
  );
}
