import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
       {/*  <img src="/professional-medical-doctor-in-surgical-attire.jpg" alt="Dr. Madrigal" className="w-full h-full object-cover opacity-20" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 py-20">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-balance">
            Dr. Marco Antonio Madrigal Téllez
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed text-pretty max-w-3xl mx-auto">
            Especialista certificado en Cirugía Bariátrica y tratamientos para la obesidad y enfermedades metabólicas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="#contacto">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="#servicios">
                Conocer Tratamientos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Credentials Badge */}
          <div className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Cirujano General Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Cirujano Bariatra Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Endoscopista Certificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
