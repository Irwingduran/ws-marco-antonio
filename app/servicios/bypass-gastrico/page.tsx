"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  CheckCircle,
  Clock,
  TrendingDown,
  Shield,
  Users,
  Calendar,
  ArrowRight,
  Heart,
  Zap,
  Award,
  FileText,
  Utensils,
  Droplet,
  Brain,
  Scale,
  Pill
} from "lucide-react"
import Link from "next/link"

export default function BypassGastricoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          {/* Animated circles */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  <Activity className="h-4 w-4" />
                  <span>Cirugía Metabólica de Alto Impacto</span>
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white leading-tight">
                  Bypass Gástrico
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  La solución más efectiva para obesidad severa y enfermedades metabólicas. Combina restricción gástrica
                  con reorganización intestinal para resultados excepcionales y duraderos.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">70-80%</div>
                    <div className="text-sm text-white/80">Pérdida de peso</div>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">2-3 días</div>
                    <div className="text-sm text-white/80">Hospitalización</div>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">86%</div>
                    <div className="text-sm text-white/80">Remisión diabetes</div>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="px-8" asChild>
                    <Link href="#contacto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar Consulta
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 bg-transparent text-white border-white hover:bg-white hover:text-emerald-900"
                    asChild
                  >
                    <Link href="#beneficios">
                      Conocer Beneficios
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-white/5 backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <img
                    src="/servicios/bypass-gastrico.jpeg"
                    alt="Bypass Gástrico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* What is Bypass Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Qué es el Bypass Gástrico?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                El procedimiento bariátrico más completo y efectivo para obesidad severa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Doble Mecanismo</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El bypass gástrico es una cirugía que combina dos estrategias:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Restricción:</span>
                      <span className="text-muted-foreground"> Crea una pequeña bolsa gástrica que limita la cantidad de alimento</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Malabsorción:</span>
                      <span className="text-muted-foreground"> Desvía el tracto digestivo reduciendo la absorción de calorías y nutrientes</span>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Técnica Laparoscópica</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se realiza mediante pequeñas incisiones (5-6) de 0.5-1cm utilizando cámara e instrumental especializado:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Menor dolor postoperatorio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Recuperación más rápida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Menor riesgo de complicaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Cicatrices mínimas</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl flex-shrink-0">
                  <Brain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cambios Hormonales Favorables</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Además de la pérdida de peso mecánica, el bypass gástrico produce cambios hormonales importantes
                    que aumentan la saciedad, reducen el apetito y mejoran el metabolismo de la glucosa. Esto explica
                    su extraordinaria efectividad en el control de la diabetes tipo 2.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beneficios Comprobados
              </h2>
              <p className="text-lg text-muted-foreground">
                El bypass gástrico ofrece resultados excepcionales en múltiples aspectos de tu salud
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingDown,
                  title: "Máxima Pérdida de Peso",
                  description: "70-80% del exceso de peso en 12-24 meses, con resultados sostenidos a largo plazo",
                  color: "emerald"
                },
                {
                  icon: Droplet,
                  title: "Control de Diabetes",
                  description: "86% de remisión o mejora significativa de diabetes tipo 2, muchas veces antes de la pérdida de peso",
                  color: "blue"
                },
                {
                  icon: Heart,
                  title: "Salud Cardiovascular",
                  description: "Mejora de hipertensión arterial, colesterol y triglicéridos, reduciendo riesgo cardíaco",
                  color: "red"
                },
                {
                  icon: Activity,
                  title: "Apnea del Sueño",
                  description: "Resolución o mejora significativa en más del 80% de los pacientes",
                  color: "purple"
                },
                {
                  icon: Shield,
                  title: "Calidad de Vida",
                  description: "Mejora en movilidad, autoestima, relaciones sociales y bienestar emocional",
                  color: "cyan"
                },
                {
                  icon: Award,
                  title: "Resultados Duraderos",
                  description: "Mantenimiento de pérdida de peso a 10+ años con seguimiento adecuado",
                  color: "amber"
                }
              ].map((benefit, idx) => (
                <Card key={idx} className={`p-6 border-2 border-transparent hover:border-${benefit.color}-200 dark:hover:border-${benefit.color}-800 transition-all duration-300`}>
                  <div className={`bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 p-3 rounded-xl w-fit mb-4`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-600 dark:text-${benefit.color}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                El Proceso Completo
              </h2>
              <p className="text-lg text-muted-foreground">
                De la evaluación inicial al seguimiento a largo plazo
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Fase 1",
                  title: "Evaluación Multidisciplinaria",
                  duration: "2-4 semanas",
                  items: [
                    "Consulta con cirujano bariatra certificado",
                    "Estudios de laboratorio completos y gabinete",
                    "Valoración nutricional y plan alimenticio",
                    "Evaluación psicológica",
                    "Endoscopia digestiva alta",
                    "Autorización de seguro (si aplica)"
                  ],
                  icon: FileText,
                  color: "blue"
                },
                {
                  phase: "Fase 2",
                  title: "Preparación Preoperatoria",
                  duration: "1-2 semanas",
                  items: [
                    "Dieta líquida alta en proteínas",
                    "Reducción del tamaño del hígado",
                    "Educación sobre cambios postoperatorios",
                    "Preparación psicológica",
                    "Ajuste de medicamentos",
                    "Planificación de apoyo familiar"
                  ],
                  icon: Utensils,
                  color: "green"
                },
                {
                  phase: "Fase 3",
                  title: "Cirugía y Hospitalización",
                  duration: "2-3 días",
                  items: [
                    "Cirugía laparoscópica (2-3 horas)",
                    "Recuperación en sala especializada",
                    "Control de dolor efectivo",
                    "Movilización temprana",
                    "Inicio de líquidos por vía oral",
                    "Alta hospitalaria con indicaciones"
                  ],
                  icon: Activity,
                  color: "purple"
                },
                {
                  phase: "Fase 4",
                  title: "Seguimiento a Largo Plazo",
                  duration: "De por vida",
                  items: [
                    "Consultas programadas (1, 3, 6, 12 meses y anual)",
                    "Monitoreo nutricional y suplementación",
                    "Análisis de laboratorio periódicos",
                    "Apoyo psicológico continuo",
                    "Programa de ejercicio progresivo",
                    "Grupo de apoyo con otros pacientes"
                  ],
                  icon: Users,
                  color: "orange"
                }
              ].map((phase, idx) => (
                <Card key={idx} className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-9xl font-bold text-muted/5 -mr-8 -mt-8">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className={`bg-${phase.color}-100 dark:bg-${phase.color}-900/30 p-4 rounded-2xl w-fit`}>
                        <phase.icon className={`h-8 w-8 text-${phase.color}-600 dark:text-${phase.color}-400`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <div className={`text-sm font-semibold text-${phase.color}-600 dark:text-${phase.color}-400 mb-1`}>
                            {phase.phase}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${phase.color}-100 dark:bg-${phase.color}-900/30 rounded-full mt-2 md:mt-0 w-fit`}>
                          <Clock className={`h-4 w-4 text-${phase.color}-600 dark:text-${phase.color}-400`} />
                          <span className={`text-sm font-medium text-${phase.color}-600 dark:text-${phase.color}-400`}>
                            {phase.duration}
                          </span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle className={`h-4 w-4 text-${phase.color}-600 dark:text-${phase.color}-400 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Eres Candidato para Bypass Gástrico?
              </h2>
              <p className="text-lg text-muted-foreground">
                Este procedimiento es especialmente efectivo para ciertos perfiles de pacientes
              </p>
            </div>

            <Card className="p-8 border-2 border-emerald-200 dark:border-emerald-800 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                Candidatos Ideales
              </h3>
              <div className="space-y-4">
                {[
                  "IMC mayor a 40 (obesidad severa o mórbida)",
                  "IMC mayor a 35 con enfermedades relacionadas (diabetes, hipertensión, apnea del sueño)",
                  "Diabetes tipo 2 difícil de controlar",
                  "Edad entre 18 y 65 años (puede variar según el caso)",
                  "Compromiso con cambios de estilo de vida permanentes",
                  "Obesidad de al menos 5 años de evolución",
                  "Intentos previos documentados de pérdida de peso sin éxito duradero",
                  "Disposición para seguimiento médico de por vida"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl flex-shrink-0">
                  <Pill className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Compromiso con Suplementación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El bypass gástrico requiere suplementación vitamínica y mineral de por vida para prevenir
                    deficiencias nutricionales. Esto incluye multivitamínicos, calcio, vitamina B12, hierro y otros
                    según tus necesidades individuales. Tu equipo médico te guiará en el régimen apropiado.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Testimonios y Procedimientos Reales
              </h2>
              <p className="text-lg text-muted-foreground">
                Conoce experiencias reales de pacientes con bypass gástrico
              </p>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-6 min-w-max px-4">
                  {[
                    { url: "https://www.facebook.com/reel/647584317697852", title: "Testimonial 1" },
                    { url: "https://www.facebook.com/reel/1507415173548770", title: "Testimonial 2" },
                    { url: "https://www.facebook.com/reel/1099214172084826", title: "Testimonial 3" }
                  ].map((video, idx) => (
                    <a
                      key={idx}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 group"
                    >
                      <Card className="overflow-hidden border-2 w-[267px] h-[476px] relative hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                              <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <div className="text-white font-semibold text-lg px-4">
                              Ver Testimonio {idx + 1}
                            </div>
                            <div className="text-white/80 text-sm px-4">
                              Clic para reproducir en Facebook
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Scroll hint */}
              <div className="flex justify-center mt-4 gap-2">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Desliza para ver más videos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white">
              Transforma tu Vida con Bypass Gástrico
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Inicia tu camino hacia una salud óptima. Agenda tu evaluación inicial y descubre si el bypass gástrico es para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 text-lg" asChild>
                <Link href="#contacto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Evaluación
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-lg bg-transparent text-white border-white hover:bg-white hover:text-emerald-900"
                asChild
              >
                <Link href="/servicios">
                  Ver Otros Procedimientos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
