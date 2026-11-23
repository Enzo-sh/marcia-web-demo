"use client";
import { useState } from "react";
import { photoUrls } from "@/config/photos";
import { photosAreReal } from "@/config/site";
/** Busca /public/images/<name>.jpg. Si no existe, muestra un recuadro provisorio. */
export default function Photo({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !photosAreReal || failed;
  return (
    <div className={`relative overflow-hidden bg-bordo ${className}`}>
      {showPlaceholder ? (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-crema">
          <p className="font-display text-2xl">{alt}</p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photoUrls[name] ?? `/images/${name}.jpg`} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-center object-cover" />
      )}
      {!photosAreReal && (
        <span className="absolute bottom-3 left-3 rounded-full bg-cafe/80 px-3 py-1 text-xs text-papel">Foto ilustrativa provisoria</span>
      )}
    </div>
  );
}
