import { FeaturedServices } from '../home/FeaturedServices';
import { Hero } from '../home/Hero';
import { TestimonialCarousel } from '../home/TestimonialCarousel';

export function HomePage() {
  return (
    <>
      {/* React 19 otomatis memindahkan ini ke <head> */}
      <title>Optik Medio - Solusi Penglihatan & Gaya Anda</title>
      <meta name="description" content="Temukan kacamata, lensa, dan layanan pemeriksaan mata terbaik di Optik Medio. Kualitas terjamin, harga bersaing." />
      
      <Hero />
      <FeaturedServices />
      <TestimonialCarousel />
    </>
  );
}
