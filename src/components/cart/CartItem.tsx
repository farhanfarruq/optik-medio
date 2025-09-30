import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "../../hooks/useCartStore";
import { type CartItem as CartItemType } from "../../types";
import { formatCurrency } from "../../utils/whatsapp";

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-start gap-4 py-4 border-b last:border-b-0">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold text-sm leading-tight">{item.product.name}</h3>
        <p className="text-sm text-neutral-500 mt-1">{formatCurrency(item.product.price)}</p>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => updateQuantity(item.product.id, 'decrease')}
            className="border rounded-md p-1 hover:bg-neutral-100 disabled:opacity-50"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.product.id, 'increase')}
            className="border rounded-md p-1 hover:bg-neutral-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button onClick={() => removeItem(item.product.id)} className="text-neutral-400 hover:text-red-500">
        {/* Ikon X digunakan di sini untuk tombol hapus */}
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

