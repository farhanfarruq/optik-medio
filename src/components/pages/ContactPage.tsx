import { Container } from "../ui/Container";

export function ContactPage() {
    return (
        <>
            <title>Hubungi Kami - Optik Medio</title>
            {/* Menggunakan background 'kontak-pattern' */}
            <div className="bg-kontak-pattern bg-cover bg-center min-h-[60vh] flex items-center">
                <Container className="py-16 text-center">
                     <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
                        <h1 className="text-4xl font-bold text-neutral-900">Hubungi Kami</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-500">
                            Kunjungi kami di Jl. Merdeka No. 123 atau hubungi via WhatsApp.
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
}