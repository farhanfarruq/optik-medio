import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { buildWhatsAppConsultationURL } from "../../utils/whatsapp";

// V-- PERBAIKAN KUNCI ADA DI SINI --V
export function Hero() {
// ^-- Pastikan kata 'export' ada di sini --^
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white bg-hero-pattern bg-cover bg-center">
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-shadow-lg">
          Penglihatan Jelas, Gaya Maksimal
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 text-shadow-md">
          Temukan koleksi frame terbaru dan lensa berkualitas tinggi untuk menunjang setiap aktivitas Anda.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/katalog">Cek Katalog Kami</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={buildWhatsAppConsultationURL()} target="_blank" rel="noopener noreferrer">
              Jadwalkan Tes Mata
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

