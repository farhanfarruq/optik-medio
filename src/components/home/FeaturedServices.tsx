// src/components/home/FeaturedServices.tsx

import { Eye, Frame, Contact, Wrench } from 'lucide-react';
import { Container } from '../ui/Container';

const services = [
  { icon: Eye, title: 'Pemeriksaan Mata', description: 'Pemeriksaan akurat dengan peralatan modern oleh optometrist terpercaya.' },
  { icon: Frame, title: 'Koleksi Frame & Lensa', description: 'Ratusan pilihan frame terkini dan lensa berkualitas sesuai kebutuhan Anda.' },
  { icon: Contact, title: 'Konsultasi Ahli', description: 'Tim kami siap membantu Anda memilih kacamata yang paling tepat.' },
  { icon: Wrench, title: 'Servis & Perbaikan', description: 'Layanan purna jual untuk memastikan kacamata Anda selalu prima.' },
];

export function FeaturedServices() {
  return (
    // Menggunakan background 'layanan-unggulan-pattern'
    <section className="py-20 bg-layanan-unggulan-pattern bg-cover bg-center">
      <Container>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Layanan Unggulan Kami</h2>
            <p className="mt-2 text-lg text-neutral-500">Memberikan yang terbaik untuk kesehatan mata Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl shadow-soft transition-all hover:shadow-lift hover:-translate-y-1">
                    <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                        <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg text-neutral-900">{service.title}</h3>
                    <p className="mt-2 text-sm text-neutral-500">{service.description}</p>
                </div>
            ))}
        </div>
      </Container>
    </section>
  )
}