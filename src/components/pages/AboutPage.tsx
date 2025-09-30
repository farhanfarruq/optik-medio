import { Container } from "../ui/Container";
import { Award, Target, Users } from "lucide-react";

export function AboutPage() {
    return (
        <>
            <title>Tentang Kami - Optik Medio</title>
            {/* Gaya Hero Section disamakan dengan Halaman Kontak */}
            <div className="bg-tentang-pattern bg-cover bg-center py-16">
                <Container className="text-center">
                    <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Tentang Optik Medio</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-500">
                            Lebih dari sekadar optik, kami adalah partner terpercaya untuk kesehatan mata Anda sejak 2023.
                        </p>
                    </div>
                </Container>
            </div>

            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900">Sejarah Kami</h2>
                            <p className="mt-4 text-neutral-500">
                                Berdiri sejak tahun 2023, Optik Medio lahir dari sebuah semangat untuk menyediakan akses terhadap perawatan mata berkualitas dan produk optik yang terjangkau bagi masyarakat. Kami memulai sebagai sebuah toko kecil dengan tekad besar: memberikan penglihatan yang lebih baik untuk kehidupan yang lebih baik.
                            </p>
                            <p className="mt-4 text-neutral-500">
                                Seiring berjalannya waktu, kepercayaan pelanggan menjadi fondasi utama kami. Kami terus berinovasi dengan teknologi pemeriksaan terkini dan memperkaya koleksi frame kami untuk memenuhi selera fashion yang terus berkembang.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <img src="/assets/optik.jpeg" alt="Interior Optik Medio" className="rounded-2xl shadow-soft aspect-square object-cover"/>
                           <img src="/assets/optik3.jpeg" alt="Tampak Depan Optik Medio" className="rounded-2xl shadow-soft aspect-square object-cover mt-8"/>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                         <h2 className="text-3xl font-bold text-neutral-900">Visi & Misi Kami</h2>
                         <p className="mt-2 text-lg text-neutral-500 max-w-3xl mx-auto">Menjadi pusat solusi penglihatan yang modern, profesional, dan terpercaya.</p>
                         <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft">
                                <Target className="w-10 h-10 text-primary mb-4"/>
                                <h3 className="font-bold text-xl">Misi Kami</h3>
                                <ul className="mt-2 space-y-2 text-neutral-500 list-disc list-inside">
                                    <li>Menyediakan produk optik berkualitas.</li>
                                    <li>Memberikan layanan pemeriksaan akurat.</li>
                                    <li>Mengedukasi pentingnya kesehatan mata.</li>
                                </ul>
                            </div>
                             <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft">
                                <Award className="w-10 h-10 text-primary mb-4"/>
                                <h3 className="font-bold text-xl">Nilai Kami</h3>
                                 <ul className="mt-2 space-y-2 text-neutral-500 list-disc list-inside">
                                    <li>Profesionalisme: Tenaga ahli terpercaya.</li>
                                    <li>Integritas: Kejujuran dalam setiap layanan.</li>
                                    <li>Pelayanan: Kepuasan pelanggan adalah utama.</li>
                                </ul>
                            </div>
                             <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft">
                                <Users className="w-10 h-10 text-primary mb-4"/>
                                <h3 className="font-bold text-xl">Tim Kami</h3>
                                <p className="mt-2 text-neutral-500">
                                    Tim kami terdiri dari para optometrist dan staf yang berpengalaman dan berdedikasi untuk memberikan konsultasi dan pelayanan terbaik bagi setiap pelanggan.
                                </p>
                            </div>
                         </div>
                    </div>
                </Container>
            </section>
        </>
    );
}