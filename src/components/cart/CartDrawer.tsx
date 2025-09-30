import { X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { formatCurrency, buildWhatsAppCheckoutURL } from '../../utils/whatsapp';
import { Link } from 'react-router-dom';

// 1. Import TIPE dari types.ts dan beri nama alias 'CartItemType'
import { type CartItem as CartItemType } from '../../types';

// 2. Import KOMPONEN dari file-nya sendiri
import { CartItem } from './CartItem';

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { items, getCartTotal, clearCart } = useCartStore();
  const total = getCartTotal();

  const handleCheckout = () => {
    const url = buildWhatsAppCheckoutURL(items);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[99]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[100] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Keranjang Belanja</h2>
              <button onClick={onClose}><X className="w-6 h-6" /></button>
            </div>

            {items.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                 <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4"/>
                 <h3 className="font-bold text-lg">Keranjang Anda kosong</h3>
                 <p className="text-neutral-muted max-w-xs">Ayo lihat-lihat katalog kami dan temukan kacamata impianmu!</p>
                 <Link to="/katalog" onClick={onClose} className="mt-6">
                    <Button>Lihat Katalog</Button>
                 </Link>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto px-6">
                  {/* Di sini kita menggunakan KOMPONEN CartItem */}
                  {items.map((item: CartItemType) => ( // dan di sini kita menggunakan TIPE CartItemType
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                <div className="p-6 border-t mt-auto space-y-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Subtotal</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                  <Button onClick={handleCheckout} size="lg" className="w-full">
                    Checkout via WhatsApp
                  </Button>
                  <Button onClick={clearCart} variant="outline" className="w-full">
                    Kosongkan Keranjang
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

