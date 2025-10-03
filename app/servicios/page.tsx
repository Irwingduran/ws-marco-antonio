"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Activity,
  Stethoscope,
  CheckCircle,
  Clock,
  Users,
  TrendingDown,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Calendar
} from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
  const services = [
    {
      id: "manga-gastrica",
      title: "Manga Gástrica",
      subtitle: "Cirugía Laparoscópica",
      icon: Heart,
      color: "bg-blue-500",
      heroImage: "/hero-manga.jpg",
      description: "Procedimiento quirúrgico mínimamente invasivo que reduce el tamaño del estómago en aproximadamente un 80%, creando un estómago en forma de tubo o manga.",
      benefits: [
        "Pérdida del 60-70% del exceso de peso",
        "Reducción del apetito por disminución de grelina",
        "Recuperación rápida (2-3 días)",
        "Mejora de enfermedades metabólicas",
        "No requiere implantes permanentes",
        "Menor riesgo de deficiencias nutricionales"
      ],
      process: [
        "Evaluación médica completa y estudios preoperatorios",
        "Procedimiento laparoscópico de 60-90 minutos",
        "Hospitalización de 24-48 horas",
        "Seguimiento nutricional y psicológico",
        "Resultados visibles desde el primer mes"
      ],
      idealFor: [
        "IMC mayor a 40 o mayor a 35 con comorbilidades",
        "Pacientes entre 18 y 65 años",
        "Compromiso con cambios de estilo de vida",
        "Sin contraindicaciones quirúrgicas"
      ],
      stats: [
        { label: "Duración", value: "60-90 min" },
        { label: "Hospitalización", value: "1-2 días" },
        { label: "Recuperación", value: "2-3 semanas" },
        { label: "Pérdida de peso", value: "60-70%" }
      ]
    },
    {
      id: "manga-endoscopica",
      title: "Manga Gástrica por Endoscopia",
      subtitle: "Sin Cirugía",
      icon: Stethoscope,
      color: "bg-purple-500",
      heroImage: "/hero-endoscopia.jpg",
      description: "Procedimiento innovador que reduce el tamaño del estómago sin incisiones externas, utilizando un endoscopio para realizar suturas internas que reducen la capacidad gástrica.",
      benefits: [
        "Sin incisiones externas ni cicatrices",
        "Procedimiento ambulatorio",
        "Recuperación inmediata (24 horas)",
        "Menor riesgo que cirugía tradicional",
        "Pérdida del 40-50% del exceso de peso",
        "Retorno rápido a actividades normales"
      ],
      process: [
        "Evaluación y preparación endoscópica",
        "Sedación consciente o anestesia general ligera",
        "Procedimiento endoscópico de 60-90 minutos",
        "Alta el mismo día",
        "Dieta líquida progresiva durante 2 semanas"
      ],
      idealFor: [
        "IMC entre 30 y 40",
        "Pacientes que buscan alternativa no quirúrgica",
        "Mayor temor a cirugía convencional",
        "Preparación para cirugía bariátrica mayor"
      ],
      stats: [
        { label: "Duración", value: "60-90 min" },
        { label: "Hospitalización", value: "Ambulatorio" },
        { label: "Recuperación", value: "1-2 días" },
        { label: "Pérdida de peso", value: "40-50%" }
      ]
    },
    {
      id: "bypass-gastrico",
      title: "Bypass Gástrico",
      subtitle: "Cirugía Metabólica",
      icon: Activity,
      color: "bg-green-500",
      heroImage: "/hero-bypass.jpg",
      description: "Técnica que combina la restricción del tamaño del estómago con la reorganización del sistema digestivo para reducir la absorción de nutrientes, siendo altamente efectiva para obesidad severa y diabetes tipo 2.",
      benefits: [
        "Pérdida del 70-80% del exceso de peso",
        "Excelente control de diabetes tipo 2",
        "Remisión de hipertensión y colesterol alto",
        "Resultados sostenidos a largo plazo",
        "Mejora significativa en calidad de vida",
        "Reducción de riesgo cardiovascular"
      ],
      process: [
        "Evaluación multidisciplinaria completa",
        "Cirugía laparoscópica de 2-3 horas",
        "Hospitalización de 2-3 días",
        "Seguimiento estricto con suplementación",
        "Programa de ejercicio y nutrición"
      ],
      idealFor: [
        "IMC mayor a 40 o mayor a 35 con diabetes",
        "Pacientes con enfermedades metabólicas",
        "Compromiso con seguimiento de por vida",
        "Obesidad de larga evolución"
      ],
      stats: [
        { label: "Duración", value: "2-3 horas" },
        { label: "Hospitalización", value: "2-3 días" },
        { label: "Recuperación", value: "3-4 semanas" },
        { label: "Pérdida de peso", value: "70-80%" }
      ]
    },
    {
      id: "balon-intragastrico",
      title: "Balón Intragástrico",
      subtitle: "Procedimiento Temporal",
      icon: Zap,
      color: "bg-orange-500",
      heroImage: "/hero-balon.jpg",
      description: "Dispositivo temporal que se coloca en el estómago mediante endoscopia, ocupando espacio y generando sensación de saciedad para facilitar la pérdida de peso sin cirugía.",
      benefits: [
        "Procedimiento no quirúrgico",
        "Sin incisiones ni anestesia general",
        "Colocación en 20-30 minutos",
        "Pérdida del 25-35% del exceso de peso",
        "Ideal como inicio de cambio de hábitos",
        "Reversible y temporal (6-12 meses)"
      ],
      process: [
        "Endoscopia diagnóstica inicial",
        "Colocación endoscópica del balón",
        "Llenado con solución salina estéril",
        "Adaptación durante primera semana",
        "Retiro endoscópico al finalizar el período"
      ],
      idealFor: [
        "IMC entre 27 y 35",
        "Primera opción antes de cirugía",
        "Pacientes que necesitan perder peso rápido",
        "Preparación preoperatoria para otros procedimientos"
      ],
      stats: [
        { label: "Duración", value: "20-30 min" },
        { label: "Hospitalización", value: "Ambulatorio" },
        { label: "Duración del balón", value: "6-12 meses" },
        { label: "Pérdida de peso", value: "25-35%" }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm mb-4 border border-primary-foreground/20">
              <Star className="h-4 w-4" />
              <span>Tratamientos Especializados</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Servicios de Cirugía Bariátrica
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Soluciones integrales y personalizadas para el tratamiento de la obesidad y enfermedades metabólicas
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-1 rounded-lg bg-primary-foreground/5">
                <Shield className="h-4 w-4" />
                <span>Tecnología de Vanguardia</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-1 rounded-lg bg-primary-foreground/5">
                <Users className="h-4 w-4" />
                <span>Equipo Multidisciplinario</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-1 rounded-lg bg-primary-foreground/5">
                <CheckCircle className="h-4 w-4" />
                <span>Resultados Comprobados</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Services Detailed Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="manga-gastrica" className="w-full">
              {/* Tabs mejorados con mejor simetría */}
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-3 p-1 bg-secondary/50 rounded-2xl">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="flex-col h-auto py-4 px-3 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border rounded-xl transition-all duration-200"
                    >
                      <IconComponent className="h-5 w-5 mb-2" />
                      <span className="text-xs md:text-sm font-medium text-center leading-tight">{service.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <TabsContent key={service.id} value={service.id} className="space-y-12">
                    {/* Service Header - Mejorada simetría */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <div className="inline-flex items-center gap-4">
                          <div className={`${service.color} p-4 rounded-2xl text-white shadow-lg`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground">
                              {service.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mt-2">{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {/* Stats Grid - Mejor simetría */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {service.stats.map((stat, idx) => (
                            <Card key={idx} className="p-4 text-center border-2 border-transparent hover:border-primary/20 transition-all duration-200">
                              <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className={`h-32 w-32 ${service.color.replace('bg-', 'text-')} opacity-20`} />
                        </div>
                      </div>
                    </div>

                    {/* Service Details Grid - Mejorada simetría */}
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Benefits */}
                      <Card className="p-6 border-2 border-transparent hover:border-green-200 dark:hover:border-green-800 transition-all duration-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Beneficios</h3>
                        </div>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>

                      {/* Process */}
                      <Card className="p-6 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                            <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Proceso</h3>
                        </div>
                        <ol className="space-y-4">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </Card>

                      {/* Ideal For */}
                      <Card className="p-6 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Candidatos Ideales</h3>
                        </div>
                        <ul className="space-y-4">
                          {service.idealFor.map((criteria, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>

                    {/* CTA Section - Mejor simetría */}
                    <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/10 border-primary/20 shadow-lg">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            ¿Interesado en {service.title}?
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            Agenda una consulta personalizada para evaluar tu caso específico
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button size="lg" className="px-8 py-3 text-lg whitespace-nowrap shadow-lg" asChild>
                            <Link href="#contacto">
                              <Calendar className="mr-3 h-5 w-5" />
                              Agendar Consulta
                            </Link>
                          </Button>
                          <Button size="lg" variant="outline" className="px-8 py-3 text-lg whitespace-nowrap" asChild>
                            <Link href={`/servicios/${service.id}`}>
                              Más Información
                              <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Comparison Section - Mejorada simetría */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comparación de Procedimientos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Cada procedimiento tiene características únicas. Encuentra el que mejor se adapte a tus necesidades
              </p>
            </div>

            <Card className="p-6 shadow-lg border-border">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-6 px-6 font-semibold text-foreground text-lg">Característica</th>
                      <th className="text-center py-6 px-6 font-semibold text-foreground text-lg">Manga Gástrica</th>
                      <th className="text-center py-6 px-6 font-semibold text-foreground text-lg">Manga Endoscópica</th>
                      <th className="text-center py-6 px-6 font-semibold text-foreground text-lg">Bypass Gástrico</th>
                      <th className="text-center py-6 px-6 font-semibold text-foreground text-lg">Balón Intragástrico</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tipo de procedimiento", "Quirúrgico", "Endoscópico", "Quirúrgico", "Endoscópico"],
                      ["Pérdida de peso", "60-70%", "40-50%", "70-80%", "25-35%"],
                      ["Hospitalización", "1-2 días", "Ambulatorio", "2-3 días", "Ambulatorio"],
                      ["Recuperación", "2-3 semanas", "1-2 días", "3-4 semanas", "3-7 días"],
                      ["Reversibilidad", "No", "Parcial", "Difícil", "Sí (Temporal)"]
                    ].map((row, rowIndex) => (
                      <tr 
                        key={rowIndex} 
                        className={`border-b border-border ${rowIndex % 2 === 1 ? 'bg-secondary/20' : ''}`}
                      >
                        <td className="py-5 px-6 text-muted-foreground font-medium">{row[0]}</td>
                        {row.slice(1).map((cell, cellIndex) => (
                          <td key={cellIndex} className="py-5 px-6 text-center text-foreground font-semibold">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mejorada simetría */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground text-lg">
                Respuestas a las dudas más comunes sobre nuestros procedimientos
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "¿Cuál es el mejor procedimiento para mí?",
                  a: "La elección del procedimiento depende de múltiples factores: tu IMC, condiciones médicas existentes, objetivos de pérdida de peso, y estilo de vida. Durante la consulta inicial evaluaremos tu caso específico para recomendarte el tratamiento más adecuado."
                },
                {
                  q: "¿Los procedimientos están cubiertos por seguro médico?",
                  a: "Muchos seguros cubren la cirugía bariátrica cuando se cumplen ciertos criterios médicos. Trabajamos con las principales aseguradoras y te ayudamos en el proceso de autorización. Contáctanos para verificar tu cobertura específica."
                },
                {
                  q: "¿Cuánto tiempo duran los resultados?",
                  a: "Los resultados son duraderos cuando se acompañan de cambios sostenidos en el estilo de vida. La mayoría de los pacientes mantienen el 50-70% de pérdida de exceso de peso a 10 años. Nuestro programa de seguimiento te ayuda a mantener los resultados a largo plazo."
                },
                {
                  q: "¿Necesitaré suplementos vitamínicos después?",
                  a: "Sí, especialmente después de procedimientos como la manga gástrica y el bypass gástrico. Prescribimos un plan de suplementación personalizado para prevenir deficiencias nutricionales. El seguimiento regular permite ajustar las dosis según tus necesidades."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="p-8 border-2 border-transparent hover:border-primary/20 transition-all duration-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}