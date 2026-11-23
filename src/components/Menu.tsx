"use client";
import { useState } from "react";
import { menu } from "@/data/menu";
import Photo from "./Photo";
import { waLink } from "@/config/site";
const ars = (n: number) => "$" + n.toLocaleString("es-AR");
export default function Menu() {
  const [id, setId] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === id)!;
  return (
    <section id="carta" className="bg-papel py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl sm:text-5xl text-bordo">La carta de hoy</h2>
        <p className="mt-2 max-w-xl">Precios según la carta pública consultada; pueden cambiar. Confirmá siempre con el local.</p>
        <div role="tablist" aria-label="Categorías de la carta" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-3">
          {menu.map((c) => (
            <button key={c.id} role="tab" id={`tab-${c.id}`} aria-selected={c.id === id} aria-controls="panel" onClick={() => setId(c.id)}
              className={`shrink-0 rounded-full border-2 border-bordo px-5 py-2 font-medium transition-colors ${c.id === id ? "bg-bordo text-papel" : "text-bordo hover:bg-bordo/10"}`}>
              {c.title}
            </button>
          ))}
        </div>
        <div key={cat.id} id="panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="swap mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className={`${cat.photo ? "lg:sticky lg:top-24" : ""} lg:self-start`}>
            {cat.photo && <Photo name={cat.photo} alt={cat.title} className="aspect-[4/3] rounded-t-[8rem] rounded-b-xl border-8 border-crema" />}
            <h3 className={`${cat.photo ? "mt-5" : ""} font-display text-3xl`}>{cat.title}</h3>
            {cat.intro && <p className="mt-1">{cat.intro}</p>}
          </div>
          <div>
            <ul>
              {cat.items.map((it) => (
                <li key={it.name} className="py-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold">{it.name}</span><span className="leader" aria-hidden />
                    {it.price != null && <span className="font-display text-xl text-bordo">{ars(it.price)}</span>}
                    {it.whole != null && <span className="text-right font-display text-lg text-bordo">{ars(it.whole)}<span className="block text-sm font-sans text-cafe/80">porción {ars(it.slice!)}</span></span>}
                  </div>
                  {it.desc && <p className="mt-0.5 max-w-prose text-cafe/80">{it.desc}</p>}
                </li>
              ))}
            </ul>
            {cat.note && (
              <p className="mt-4 rounded-xl border-2 border-dashed border-ocre p-4">
                {cat.note} <a className="font-semibold text-bordo underline" href={waLink(`Hola Marcia, quería consultar por: ${cat.title}`)} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
