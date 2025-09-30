import { Users, Heart, Brain, Activity, Stethoscope, Shield, Syringe, Droplet } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Team() {
  const teamMembers = [
    { icon: Brain, specialty: "Psicólogos", description: "Apoyo emocional y conductual" },
    { icon: Heart, specialty: "Nutriólogos", description: "Planes alimenticios personalizados" },
    { icon: Users, specialty: "Psiquiatras", description: "Salud mental integral" },
    { icon: Activity, specialty: "Cardiólogos", description: "Evaluación cardiovascular" },
    { icon: Stethoscope, specialty: "Neumólogos", description: "Función respiratoria" },
    { icon: Shield, specialty: "Infectólogos", description: "Prevención y control" },
    { icon: Syringe, specialty: "Anestesiólogos", description: "Seguridad quirúrgica" },
    { icon: Droplet, specialty: "Nefrólogos", description: "Función renal" },
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Red de Especialistas de Apoyo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un enfoque integral con especialistas dedicados a tu bienestar en cada etapa del tratamiento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const Icon = member.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{member.specialty}</h3>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground font-medium">
              Trabajamos en conjunto para garantizar tu éxito y bienestar a largo plazo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
