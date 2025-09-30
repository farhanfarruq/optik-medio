import { Container } from "../ui/Container";

export function ServicesPage() {
    return (
        <>
            <title>Layanan Kami - Optik Medio</title>
            <Container className="py-16 text-center">
                <h1 className="text-4xl font-bold">Layanan Kami</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-muted">
                    Dari pemeriksaan mata hingga servis frame, kami siap melayani.
                </p>
            </Container>
        </>
    );
}
