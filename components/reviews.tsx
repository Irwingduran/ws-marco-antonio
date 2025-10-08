"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare, ArrowRight } from "lucide-react"

export function Reviews() {
  const reviews = [
    {
      name: "Sebas Muniz",
      title: "Un gran Doctor!",
      text: "Muy amable, atento y siempre acompañándome en cada momento, respondiendo mis dudas y preocupaciones. Llevo poco tiempo de mi cirugía y ya estoy teniendo grandes resultados. Además el Doctor me ha brindado mucha motivación y me transmite una gran energía, lo cual es fundamental en este tipo de procedimientos.",
      rating: 5
    },
    {
      name: "María González",
      title: "Cambió mi vida completamente",
      text: "Hace 8 meses me realizaron manga gástrica con el Dr. Madrigal. He perdido 35 kilos y mi diabetes está controlada sin medicamentos. El seguimiento post-operatorio es excelente, siempre está disponible para cualquier duda. Sin duda la mejor decisión que pude tomar.",
      rating: 5
    },
    {
      name: "Roberto Hernández",
      title: "Profesionalismo y calidez humana",
      text: "El Dr. Madrigal no solo es un excelente cirujano, también es una persona empática que entiende los miedos y las expectativas del paciente. Todo el proceso, desde la primera consulta hasta el seguimiento, ha sido impecable. Me siento en las mejores manos.",
      rating: 5
    },
    {
      name: "Ana Patricia Ruiz",
      title: "Resultados increíbles",
      text: "Después de años luchando con mi peso, decidí operarme con el Dr. Madrigal. Han pasado 6 meses y he bajado 28 kilos. Lo mejor es que me siento con mucha energía, mi presión arterial está normal y mi calidad de vida mejoró increíblemente. Totalmente recomendado.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experiencias que Transforman Vidas
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              La satisfacción de nuestros pacientes es nuestra mayor motivación.
              Lee sus experiencias y comparte la tuya.
            </p>

            <Button size="lg" className="px-8" asChild>
              <a href="https://www.google.com/maps/place/Dr.+Marco+Madrigal+Tellez+-+Bariatra+en+CDMX/@19.3960833,-99.1672829,17z/data=!3m2!4b1!5s0x85d1ffbfa2bc00c9:0x779862e65834e7fe!4m6!3m5!1s0x85d1ffa7157bbe3b:0x78f04607068dadd3!8m2!3d19.3960833!4d-99.164708!16s%2Fg%2F11lp075g_z?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Deja tu Reseña
              </a>
            </Button>
          </div>

          {/* Reviews Carousel */}
          <div className="relative mt-12">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-6 min-w-max px-4">
                {reviews.map((review, idx) => (
                  <Card key={idx} className="flex-shrink-0 w-[350px] p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{review.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-6">
                      {review.text}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{review.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-4">
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Desliza para ver más reseñas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
