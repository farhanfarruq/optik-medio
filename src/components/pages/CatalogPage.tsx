import { ProductCard } from '../ui/ProductCard';
import { products } from '../../data/products';
import { Container } from '../ui/Container';

export function CatalogPage() {
  return (
    <>
      <title>Katalog Produk - Optik Medio</title>
      <meta name="description" content="Jelajahi koleksi frame, lensa, dan aksesoris kacamata terbaru dari brand-brand ternama." />

      <Container className="py-12">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Katalog Produk</h1>
            <p className="mt-2 text-lg text-neutral-muted">Temukan yang paling cocok untuk Anda</p>
        </div>
        
        {/* TODO: Tambahkan filter di sini */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
