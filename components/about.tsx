import { GraduationCap, Award, Stethoscope, BookOpen, Building2, Hospital } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const education = [
    {
      icon: GraduationCap,
      title: "Médico Cirujano Partero",
      institution: "Universidad de Guanajuato",
      description: "Departamento de Medicina y Nutrición",
    },
    {
      icon: Stethoscope,
      title: "Especialidad en Cirugía General",
      institution: "Hospital General de México Dr. Eduardo Liceaga",
      description: "Formación integral en cirugía general",
    },
    {
      icon: Award,
      title: "Alta Especialidad en Cirugía Endoscópica",
      institution: "Hospital General Dr. Manuel Gea González",
      description: "Técnicas quirúrgicas mínimamente invasivas",
    },
    {
      icon: Award,
      title: "Alta Especialidad en Cirugía Bariátrica Endoscópica",
      institution: "Hospital General Dr. Manuel Gea González",
      description: "Procedimientos Bariátricos avanzados con y sin cirugía",
    },
    {
      icon: BookOpen,
      title: "Alta Especialidad en Endoscopia Gastrointestinal",
      institution: "Hospital General Dr. Manuel Gea González",
      description: "Procedimientos endoscópicos diagnósticos y terapéuticos",
    },
  ]

  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre el Dr. Madrigal
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Con una sólida formación académica y múltiples especialidades, el Dr. Madrigal se ha dedicado a
              transformar vidas a través de tratamientos integrales para la obesidad y enfermedades metabólicas.
            </p>
          </div>

          {/* Professional Photo */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/dr-marco/portada.jpg"
                alt="Dr. Marco Antonio Madrigal Téllez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Education Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Professional Statement */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl md:text-2xl font-light text-foreground/80 italic max-w-4xl mx-auto leading-relaxed">
              "Mi compromiso es brindar atención médica de excelencia con un enfoque humano y personalizado, acompañando
              a cada paciente en su camino hacia una vida más saludable."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
