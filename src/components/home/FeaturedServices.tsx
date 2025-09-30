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
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Layanan Unggulan Kami</h2>
            <p className="mt-2 text-lg text-neutral-muted">Memberikan yang terbaik untuk kesehatan mata Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="text-center p-6 border rounded-2xl shadow-soft">
                    <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                        <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="mt-2 text-sm text-neutral-muted">{service.description}</p>
                </div>
            ))}
        </div>
      </Container>
    </section>
  )
}
