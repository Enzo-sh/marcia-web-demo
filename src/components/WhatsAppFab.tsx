import { MessageCircle } from "lucide-react";
import { waLink } from "@/config/site";
export default function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-cafe shadow-lg hover:brightness-95">
      <MessageCircle size={24} aria-hidden /><span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
