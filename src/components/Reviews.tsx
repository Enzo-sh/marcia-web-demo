import { Star } from "lucide-react";
import { reviews } from "@/config/site";
export default function Reviews() {
  const pct = (reviews.rating / 5) * 100;
  const stars = (cls: string) => Array.from({ length: 5 }, (_, i) => <Star key={i} size={32} className={`${cls} shrink-0`} aria-hidden />);
  return (
    <section id="resenas" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-center gap-8 rounded-[2rem] bg-bordo p-8 text-papel sm:p-12 md:grid-cols-2">
        <h2 className="font-display text-4xl sm:text-5xl">Lo que dicen de Marcia</h2>
        <div>
          <p className="font-display text-7xl leading-none">{reviews.rating.toString().replace(".", ",")}<span className="text-3xl">/5</span></p>
          <div className="relative mt-3 inline-flex" role="img" aria-label={`${reviews.rating} de 5 estrellas`}>
            <div className="flex w-max text-papel/30">{stars("fill-current")}</div>
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}><div className="flex w-max text-ocre">{stars("fill-current")}</div></div>
          </div>
          <p className="mt-2">{reviews.count} valoraciones en {reviews.source}</p>
          <a href={reviews.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-papel px-6 py-3 font-semibold text-bordo hover:bg-crema">Ver reseñas en Google</a>
          <p className="mt-3 text-sm text-papel/70">{reviews.note}</p>
        </div>
      </div>
    </section>
  );
}
