import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCartStore } from '../../hooks/useCartStore';
import { useState } from 'react';
import { CartDrawer } from '../cart/CartDrawer';
import { AnimatePresence, motion } from 'framer-motion';
import { buildWhatsAppConsultationURL } from '../../utils/whatsapp';
import { Container } from '../ui/Container';


const navLinks = [
  { href: '/katalog', label: 'Katalog' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
];

export function Navbar() {
  const { items } = useCartStore();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleConsultationClick = () => {
    window.open(buildWhatsAppConsultationURL(), '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <img src="/assets/medio.jpeg" alt="Optik Medio Logo" className="h-8 w-auto" />
            <span>Optik Medio</span>
          </Link>
          
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <NavLink 
                key={link.href} 
                to={link.href} 
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-neutral-muted'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button onClick={handleConsultationClick} variant="outline" size="sm" className="hidden md:inline-flex">
                Konsultasi WA
            </Button>
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingCart className="h-6 w-6 text-neutral hover:text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
           <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-lg p-4"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => (
                    <NavLink key={link.href} to={link.href} onClick={() => setMenuOpen(false)} className="text-neutral-muted hover:text-primary py-2">{link.label}</NavLink>
                ))}
                 <Button onClick={handleConsultationClick} variant="outline">
                    Konsultasi WA
                </Button>
              </nav>
           </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
