import { Container } from "../ui/Container";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
    return (
        <>
            <title>Hubungi Kami - Optik Medio</title>
            {/* Menggunakan background 'kontak-pattern' */}
            <div className="bg-kontak-pattern bg-cover bg-center py-16">
                <Container className=" text-center">
                     <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-soft">
                        <h1 className="text-4xl font-bold text-neutral-900">Hubungi Kami</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-500">
                            Kami siap membantu Anda. Kunjungi kami atau hubungi melalui detail di bawah ini.
                        </p>
                    </div>
                </Container>
            </div>
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Informasi Kontak</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1"/>
                                    <div>
                                        <h3 className="font-semibold">Alamat</h3>
                                        <p className="text-neutral-500">Pasar, Bandarsari, Kec. Padang Ratu, Kabupaten Lampung Tengah, Lampung 34175</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-primary mt-1"/>
                                    <div>
                                        <h3 className="font-semibold">Telepon / WhatsApp</h3>
                                        <p className="text-neutral-500">081311969585</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary mt-1"/>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-neutral-500">info@optikmedio.com</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-primary mt-1"/>
                                    <div>
                                        <h3 className="font-semibold">Jam Buka</h3>
                                        <p className="text-neutral-500">Senin - Minggu: 08:30 - 20:30</p>
                                        <p className="text-neutral-500">Jumat : 08:30 - 17:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Lokasi Kami</h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-soft">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6053.029217411046!2d104.95798726170997!3d-5.086770541822657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e474dfd0f3db101%3A0xfdf2736fd871343f!2sOptik%20Medio!5e0!3m2!1sen!2sid!4v1759223769355!5m2!1sen!2sid" width="600" height="450" 
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}