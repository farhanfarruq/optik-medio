import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/Footer';
import { FloatingWhatsApp } from '../layouts/FloatingWhatsapp';
import { useEffect } from 'react';

// Fungsi ini akan otomatis scroll ke atas setiap kali Anda pindah halaman
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

