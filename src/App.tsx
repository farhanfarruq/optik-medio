import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { HomePage } from './components/pages/HomePage';
import { CatalogPage } from './components/pages/CatalogPage';
import { Toaster } from 'react-hot-toast';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicePage';
import { ContactPage } from './components/pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="katalog" element={<CatalogPage />} />
            <Route path="tentang-kami" element={<AboutPage />} />
            <Route path="layanan" element={<ServicesPage />} />
            <Route path="kontak" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster 
        position="bottom-center"
        toastOptions={{
          className: 'text-sm rounded-lg bg-neutral text-white',
        }}
      />
    </>
  );
}

export default App;
