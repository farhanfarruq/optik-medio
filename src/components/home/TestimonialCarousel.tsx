// src/components/home/TestimonialCarousel.tsx

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { testimonials } from '../../data/Testimonial'
import { Container } from '../ui/Container'
import { Quote } from 'lucide-react'

export function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    // Menggunakan background 'testimoni-pattern'
    <section className="pt-20 pb-24 bg-testimoni-pattern bg-cover bg-center">
      <Container>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Apa Kata Mereka?</h2>
            <p className="mt-2 text-lg text-neutral-500">Kepuasan pelanggan adalah prioritas utama kami.</p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <p className="text-neutral-500 mt-4 flex-grow">"{testimonial.comment}"</p>
                  <div className="flex items-center mt-6">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                        <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}