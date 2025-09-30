import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'react-hot-toast';
import type { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        if (!product.inStock) {
          toast.error("Maaf, produk ini sedang habis.");
          return;
        }

        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === product.id);

        if (existingItem) {
          toast.success(`${product.name} jumlahnya ditambah.`);
          set({
            items: currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          toast.success(`${product.name} ditambahkan ke keranjang!`);
          set({ items: [...currentItems, { product, quantity: 1 }] });
        }
      },

      removeItem: (productId) => {
        toast.error("Item dihapus dari keranjang.");
        set({ items: get().items.filter((item) => item.product.id !== productId) });
      },

      updateQuantity: (productId, action) => {
        set({
          items: get().items.map((item) => {
            if (item.product.id === productId) {
              if (action === 'increase') {
                return { ...item, quantity: item.quantity + 1 };
              }
              if (action === 'decrease' && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
            }
            return item;
          }).filter(item => item.quantity > 0)
        });
      },

      clearCart: () => {
        toast.success("Keranjang berhasil dikosongkan.");
        set({ items: [] });
      },
        
      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0);
      }
    }),
    {
      name: 'optik-medio-cart-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
