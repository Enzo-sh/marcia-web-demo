import { ExternalLink, Navigation } from "lucide-react";
import { site, location } from "@/config/site";
const src = location.embedKey
  ? `https://www.google.com/maps/embed/v1/place?key=${location.embedKey}&q=place_id:${location.placeId}&zoom=17`
  : `https://www.google.com/maps?q=${encodeURIComponent(location.embedQuery)}&z=17&output=embed`;
export default function Location() {
  return (
    <section id="ubicacion" className="bg-papel py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-bordo">Dónde encontrarnos</h2>
          <p className="mt-4 text-lg">{site.address}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-bordo px-6 py-3 font-semibold text-papel hover:bg-cafe"><Navigation size={18} aria-hidden /> Cómo llegar</a>
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-bordo px-6 py-3 font-semibold text-bordo hover:bg-bordo hover:text-papel"><ExternalLink size={18} aria-hidden /> Abrir en Google Maps</a>
          </div>
        </div>
        <iframe title="Mapa de Marcia Veredita en Google Maps" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
          className="h-[360px] w-full rounded-2xl border-8 border-crema" />
      </div>
    </section>
  );
}
