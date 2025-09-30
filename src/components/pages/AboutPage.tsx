import { Container } from "../ui/Container";

export function AboutPage() {
    return (
        <>
            <title>Tentang Kami - Optik Medio</title>
            <Container className="py-16 text-center">
                <h1 className="text-4xl font-bold">Tentang Optik Medio</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-muted">
                    Kami adalah penyedia solusi penglihatan terpercaya sejak 2010.
                </p>
            </Container>
        </>
    );
}
