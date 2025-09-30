import type { CartItem } from "../types";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || "Optik";

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppCheckoutURL(items: CartItem[], note?: string) {
  if (!WHATSAPP_NUMBER) {
    console.error("VITE_WHATSAPP_NUMBER is not set in .env file");
    alert("Nomor WhatsApp belum diatur!");
    return "#";
  }

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const itemLines = items.map((item, index) => {
    const itemSubtotal = item.product.price * item.quantity;
    return `${index + 1}) ${item.product.name} x${item.quantity} - ${formatCurrency(itemSubtotal)}`;
  });

  const message = [
    `Halo *${BRAND_NAME}*, saya ingin memesan:`,
    ...itemLines,
    "-------------------------",
    `Subtotal: *${formatCurrency(subtotal)}*`,
    note ? `\nCatatan: ${note}` : "",
    "\nMohon info selanjutnya untuk proses pembayaran dan pengiriman. Terima kasih."
  ].filter(Boolean).join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppConsultationURL() {
  if (!WHATSAPP_NUMBER) {
    console.error("VITE_WHATSAPP_NUMBER is not set in .env file");
    return "#";
  }
  const message = `Halo *${BRAND_NAME}*, saya ingin menjadwalkan konsultasi atau pemeriksaan mata.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
