import { Container } from "../ui/Container";

export function CartPage() {
    // Halaman ini tidak digunakan karena sudah ada Cart Drawer,
    // tapi bisa dikembangkan jika butuh halaman checkout lengkap.
    return (
        <>
            <title>Keranjang Belanja - Optik Medio</title>
            <Container className="py-16 text-center">
                <h1 className="text-4xl font-bold">Keranjang Belanja Anda</h1>
            </Container>
        </>
    );
}
