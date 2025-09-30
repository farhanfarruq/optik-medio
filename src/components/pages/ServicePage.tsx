import { Container } from "../ui/Container";
import { ChevronDown, Eye, Frame, Contact, Wrench } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: 'Pemeriksaan Mata',
    description: 'Kami menggunakan peralatan modern untuk melakukan pemeriksaan refraksi yang akurat, membantu menentukan ukuran kacamata atau lensa kontak yang presisi untuk Anda.'
  },
  {
    icon: Frame,
    title: 'Koleksi Frame & Lensa',
    description: 'Temukan ratusan pilihan frame dari berbagai brand ternama dengan gaya terkini. Kami juga menyediakan berbagai jenis lensa, mulai dari anti-radiasi, blue-light filter, hingga progresif.'
  },
  {
    icon: Contact,
    title: 'Konsultasi Ahli',
    description: 'Tim optometrist kami yang ramah dan berpengalaman siap membantu Anda memilih frame yang sesuai dengan bentuk wajah dan lensa yang paling pas untuk aktivitas harian Anda.'
  },
  {
    icon: Wrench,
    title: 'Servis & Perbaikan',
    description: 'Kami menyediakan layanan purna jual seperti penyetelan frame, penggantian nose-pad, dan perbaikan kecil lainnya untuk memastikan kacamata Anda selalu nyaman dipakai.'
  },
];

const faqs = [
    {
        question: "Apakah saya perlu membuat janji untuk pemeriksaan mata?",
        answer: "Meskipun kami menerima kunjungan langsung, kami sangat menyarankan Anda untuk membuat janji terlebih dahulu melalui WhatsApp untuk memastikan Anda mendapatkan slot waktu khusus tanpa perlu menunggu."
    },
    {
        question: "Berapa lama proses pembuatan kacamata?",
        answer: "Proses pembuatan kacamata biasanya memakan waktu 2-5 hari kerja, tergantung pada jenis lensa dan resep yang Anda butuhkan. Lensa dengan resep khusus mungkin memerlukan waktu lebih lama."
    },
    {
        question: "Apakah saya bisa membawa frame sendiri?",
        answer: "Tentu saja. Kami menyediakan jasa pemasangan lensa pada frame yang Anda bawa sendiri. Namun, kami akan memeriksa kondisi frame terlebih dahulu untuk memastikan kelayakannya."
    },
    {
        question: "Apakah ada garansi untuk produk yang dibeli?",
        answer: "Ya, kami memberikan garansi adaptasi untuk lensa dan garansi perbaikan untuk kerusakan frame akibat cacat produksi. Syarat dan ketentuan berlaku."
    }
]


export function ServicesPage() {
    return (
        <>
            <title>Layanan Kami - Optik Medio</title>
            {/* Gaya Hero Section disamakan dengan Halaman Kontak */}
            <div className="bg-layanan-pattern bg-cover bg-center py-16">
                <Container className="text-center">
                    <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Layanan Profesional Kami</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-500">
                            Dari pemeriksaan mata komprehensif hingga servis purna jual, kami hadir untuk melayani semua kebutuhan penglihatan Anda.
                        </p>
                    </div>
                </Container>
            </div>

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-start gap-6 p-6 bg-white border border-neutral-200/50 rounded-2xl shadow-soft">
                                <div className="inline-block p-3 bg-primary/10 text-primary rounded-full">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-neutral-900">{service.title}</h3>
                                    <p className="mt-1 text-sm text-neutral-500">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

             <section className="py-20 bg-neutral-50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Pertanyaan Umum (FAQ)</h2>
                        <p className="mt-2 text-lg text-neutral-500">Jawaban atas beberapa pertanyaan yang sering diajukan.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                             <details key={index} className="group bg-white p-6 rounded-2xl shadow-soft">
                                <summary className="flex items-center justify-between cursor-pointer font-semibold">
                                    {faq.question}
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-neutral-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}