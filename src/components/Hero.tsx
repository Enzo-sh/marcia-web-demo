import { MapPin, UtensilsCrossed } from "lucide-react";
import Logo from "./Logo";
import Photo from "./Photo";
import { site, location } from "@/config/site";
export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_1fr] md:pt-16">
      <div>
        <h1 className="font-display text-[clamp(4.5rem,17vw,10rem)] leading-[.85] text-bordo">{site.brand}</h1>
        <p className="mt-5 font-display text-xl sm:text-2xl">{site.tagline}</p>
        <p className="mt-4 max-w-md text-lg leading-relaxed">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#carta" className="inline-flex items-center gap-2 rounded-full bg-bordo px-6 py-3 font-semibold text-papel hover:bg-cafe">
            <UtensilsCrossed size={18} aria-hidden /> Conocé nuestra carta</a>
          <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-bordo px-6 py-3 font-semibold text-bordo hover:bg-bordo hover:text-papel">
            <MapPin size={18} aria-hidden /> Cómo llegar</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="arch hero-photo border-[10px] border-papel shadow-[8px_8px_0_#6E1423]">
          <Photo name="hero" alt="Pizza napolitana recién salida del horno" className="arch aspect-[3/4] w-full" />
        </div>
        <div className="absolute -bottom-8 -left-4 w-36 rounded-3xl bg-papel p-2 shadow-[4px_4px_0_#2E1A12] sm:-left-12 sm:w-44">
          <Logo />
        </div>
      </div>
    </section>
  );
}
