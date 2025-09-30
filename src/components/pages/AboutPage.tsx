import { Container } from "../ui/Container";

export function AboutPage() {
    return (
        <>
            <title>Tentang Kami - Optik Medio</title>
            {/* Menggunakan background 'tentang-pattern' */}
            <div className="bg-tentang-pattern bg-cover bg-center min-h-[60vh] flex items-center">
                <Container className="py-16 text-center">
                    <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
                        <h1 className="text-4xl font-bold text-neutral-900">Tentang Optik Medio</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-500">
                            Kami adalah penyedia solusi penglihatan terpercaya sejak 2010.
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
}