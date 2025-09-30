import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Frame Aviator Classic Gold',
    slug: 'frame-aviator-classic-gold',
    price: 750000,
    category: 'frame',
    brand: 'Ray-Ban',
    image: 'https://placehold.co/400x400/FFF/333?text=Aviator',
    inStock: true,
    description: 'Bingkai klasik yang tidak pernah ketinggalan zaman, cocok untuk segala bentuk wajah.',
    tags: ['classic', 'unisex', 'metal'],
    variants: [
      { name: 'Warna', options: ['Emas', 'Hitam', 'Silver'] }
    ]
  },
  {
    id: 'p2',
    name: 'Lensa Crizal Blue-Light Pro',
    slug: 'lensa-crizal-blue-light-pro',
    price: 450000,
    category: 'lensa',
    brand: 'Essilor',
    image: 'https://placehold.co/400x400/EEE/333?text=Lensa',
    inStock: true,
    description: 'Lindungi mata Anda dari sinar biru berbahaya dari layar digital dengan teknologi terdepan.'
  },
  {
    id: 'p3',
    name: 'Softlens "Natural Look" Brown',
    slug: 'softlens-natural-look-brown',
    price: 120000,
    category: 'softlens',
    brand: 'Acuvue',
    image: 'https://placehold.co/400x400/DDD/333?text=Softlens',
    inStock: true,
    tags: ['monthly', 'natural', 'brown']
  },
  {
    id: 'p4',
    name: 'Frame Cat-Eye Modern Vogue',
    slug: 'frame-cat-eye-modern-vogue',
    price: 890000,
    category: 'frame',
    brand: 'Vogue',
    image: 'https://placehold.co/400x400/CCC/333?text=Cat-Eye',
    inStock: false,
    description: 'Gaya cat-eye yang elegan untuk tampilan modern dan percaya diri.',
    tags: ['fashion', 'wanita', 'acetate'],
    variants: [
        { name: 'Warna', options: ['Hitam', 'Tortoise', 'Merah'] }
    ]
  },
];
