import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../src/components/layouts/Navbar';
import { Footer } from '../src/components/layouts/Footer';
import { FloatingWhatsApp } from '../src/components/layouts/FloatingWhatsapp';
import { useEffect } from 'react';

// Fungsi untuk scroll ke atas setiap pindah halaman
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
