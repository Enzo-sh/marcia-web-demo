# Marcia Veredita · Rediseño web (DEMO COMERCIAL NO OFICIAL)
No fue encargado, aprobado ni publicado por Marcia Veredita. Stack: Next.js 14, React, TypeScript, Tailwind, Lucide.

## Ejecutar
```
npm install
npm run dev     # http://localhost:3000
npm run lint    # chequeo de tipos
npm run build && npm start
```

## Dónde editar
- `src/config/site.ts`: contacto, dirección, WhatsApp (y mensaje inicial), Instagram, ubicación (placeId), reseñas (rating/cantidad), flag `photosAreReal`.
- `src/data/menu.ts`: categorías, productos y precios (ARS).
- `public/images/`: fotos (ver LEEME.txt).
- Opcional: `.env.local` con `NEXT_PUBLIC_GOOGLE_MAPS_KEY=...` para usar la Embed API oficial de Google Maps.