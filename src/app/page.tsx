import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/config/site";
export default function Page() {
  return (<>
    <div className="bg-cafe text-papel text-center text-sm py-2 px-4">{site.disclaimer}</div>
    <Header /><main><Hero /><Menu /><Reviews /><Location /><Contact /></main><Footer /><WhatsAppFab />
  </>);
}
