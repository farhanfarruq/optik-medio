import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';
import type { Product } from '../../types';
import { formatCurrency } from '../../utils/whatsapp';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="border rounded-2xl overflow-hidden shadow-soft group flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
            loading="lazy" 
        />
        {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">Habis</span>
            </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-neutral-muted uppercase tracking-wider">{product.brand}</span>
        <h3 className="font-semibold mt-1 flex-grow text-neutral">{product.name}</h3>
        <p className="font-bold text-lg text-primary mt-2">{formatCurrency(product.price)}</p>
        <Button 
            onClick={() => addItem(product)} 
            className="w-full mt-4"
            disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Tambah ke Keranjang' : 'Stok Habis'}
        </Button>
      </div>
    </div>
  );
}
