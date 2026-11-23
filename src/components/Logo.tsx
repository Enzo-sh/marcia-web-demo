/** Logo ilustrado de Marcia. El multiply funde el fondo claro del JPG con el color de la superficie. */
export default function Logo({ className = "" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo-marcia.jpg" alt="Logo de Marcia: ilustración de una mujer con anteojos de sol comiendo pizza y un cartel de 4 años" width={684} height={574} decoding="async" className={`h-auto mix-blend-multiply ${className}`} />;
}
