import { ProductCard } from '../ui/ProductCard';
import { products } from '../../data/products';
import { Container } from '../ui/Container';

export function CatalogPage() {
  return (
    <>
      <title>Katalog Produk - Optik Medio</title>
      <meta name="description" content="Jelajahi koleksi frame, lensa, dan aksesoris kacamata terbaru dari brand-brand ternama." />

      {/* Hero Section dengan gaya yang disamakan */}
      <div className="bg-katalog-pattern bg-cover bg-center py-16">
        <Container className="text-center">
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Katalog Produk</h1>
              <p className="mt-4 text-lg text-neutral-500">Temukan yang paling cocok untuk Anda</p>
          </div>
        </Container>
      </div>

      {/* Bagian daftar produk dipisahkan ke dalam section baru */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}