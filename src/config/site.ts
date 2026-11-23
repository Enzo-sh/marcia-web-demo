// Datos comerciales centralizados. Editá acá y se actualiza todo el sitio.
export const site = {
  name: "Marcia Veredita",
  brand: "MARCIA",
  tagline: "Cafecito de barrio · Pizzería al horno",
  description:
    "Un cafecito de barrio y pizzería al horno en Villa Urquiza: café, medialunas, empanadas y pizzas napolitanas de 24 horas de fermentación.",
  address: "Capdevila 2899, Villa Urquiza, Ciudad Autónoma de Buenos Aires, Argentina",
  whatsapp: { number: "+54 9 11 7366-8899", url: "https://wa.me/5491173668899",
    message: "¡Hola Marcia! Vi su carta y quería consultarles algo 🙂" },
  instagram: { handle: "@marcia.veredita", url: "https://www.instagram.com/marcia.veredita/" },
  disclaimer: "Demostración comercial no oficial. Este sitio no fue encargado, aprobado ni publicado por Marcia Veredita.",
};
export const location = {
  placeId: "ChIJf8DDyoq3vJURDmZle5Nhxn0",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Marcia%20Veredita&query_place_id=ChIJf8DDyoq3vJURDmZle5Nhxn0",
  // Búsqueda por nombre + dirección real, con zoom 17 (el embed sin clave ignora el place ID).
  embedQuery: "Marcia Veredita, Capdevila 2899, Villa Urquiza, Ciudad Autónoma de Buenos Aires, Argentina",
  // Opcional: con NEXT_PUBLIC_GOOGLE_MAPS_KEY se usa la Embed API oficial.
  embedKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
};
export const reviews = {
  rating: 4.5, count: 709, source: "Google",
  note: "Valoración pública consultada; valores provisionales, actualizar periódicamente.",
  url: location.mapsUrl,
};
export const waLink = (msg = site.whatsapp.message) => `${site.whatsapp.url}?text=${encodeURIComponent(msg)}`;
export const photoSources = [
  { label: "Restaurant Guru", url: "https://es.restaurantguru.com/Marcia-Buenos-Aires" },
  { label: "Guía Óleo", url: "https://guiaoleo.com/buenos-aires/marcia-veredita" },
  { label: "Instagram de Marcia", url: site.instagram.url },
] as const;
// Las fotos reales fueron retiradas; se muestran los recuadros rojos provisionales.
export const photosAreReal = false;
