export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: "frame" | "lensa" | "softlens" | "aksesoris";
  brand?: string;
  image: string;
  variants?: { name: string; options: string[] }[];
  tags?: string[];
  inStock: boolean;
  description?: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Testimonial = {
  id: number;
  name: string;
  comment: string;
  avatar: string;
};
