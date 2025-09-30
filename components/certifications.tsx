import { Award, CheckCircle2, Shield, Star, Globe, Building } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Certifications() {
  const memberships = [
    {
      icon: Building,
      title: "Sociedad Médica del Hospital General de México",
      description: "Miembro activo de la comunidad médica del Hospital General de México",
    },
    {
      icon: Building,
      title: "Sociedad Médica del Hospital Ángeles Roma",
      description: "Participación en actividades académicas y médicas",
    },
    {
      icon: Award,
      title: "Colegio Mexicano de Obesidad y Enfermedades Metabólicas",
      description: "Miembro del CMCOEM, organización líder en el tratamiento de la obesidad",
    },
    {
      icon: Globe,
      title: "International Federation for the Surgery of Obesity",
      description: "Miembro de la IFSO, federación internacional de cirugía bariátrica",
    },
    {
      icon: Shield,
      title: "Asociación Mexicana de Cirugía General",
      description: "Miembro activo en la comunidad de cirujanos generales de México",
    },
    {
      icon: Star,
      title: "Asociación Mexicana de Cirugía Endoscópica",
      description: "Especialización en técnicas quirúrgicas mínimamente invasivas",
    },
    {
      icon: CheckCircle2,
      title: "American College of Surgeons",
      description: "Miembro del prestigioso colegio americano de cirujanos",
    },
  ]

  return (
    <section id="certificaciones" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certificaciones y Membresías
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Respaldado por las principales instituciones médicas nacionales e internacionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Professional License */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-secondary/50">
              <p className="text-sm text-muted-foreground mb-2">Cédula Profesional</p>
              <p className="text-2xl font-bold text-foreground">4452613</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
