"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  CheckCircle,
  Clock,
  TrendingDown,
  Shield,
  Users,
  MessageCircle,
  ArrowRight,
  Scale,
  Activity,
  Utensils,
  Zap,
  Award,
  FileText
} from "lucide-react"
import Link from "next/link"

export default function MangaGastricaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-primary-foreground/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm border border-primary-foreground/20">
                  <Heart className="h-4 w-4" />
                  <span>Cirugía Bariátrica de Vanguardia</span>
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Manga Gástrica
                </h1>

                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Solución definitiva y segura para la obesidad. Reduce el tamaño de tu estómago hasta en un 80% mediante cirugía laparoscópica mínimamente invasiva.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                    <div className="text-3xl font-bold text-primary-foreground">60-70%</div>
                    <div className="text-sm text-primary-foreground/80">Pérdida de peso</div>
                  </Card>
                  <Card className="p-4 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                    <div className="text-3xl font-bold text-primary-foreground">1-2 días</div>
                    <div className="text-sm text-primary-foreground/80">Hospitalización</div>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="px-8" asChild>
                    <Link href="https://wa.me/5214775975958?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agendar Consulta
                    </Link>
                  </Button>
              
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20 overflow-hidden">
                  <img
                    src="/servicios/manga-gastrica.jpeg"
                    alt="Manga Gástrica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Comparison Tabs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dos Técnicas, Un Objetivo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige entre cirugía tradicional o endoscopia según tus necesidades
              </p>
            </div>

            <Tabs defaultValue="laparoscopica" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-auto gap-3 p-1 bg-secondary/50 rounded-2xl">
                <TabsTrigger value="laparoscopica" className="flex-col h-auto py-4 px-6 data-[state=active]:bg-background data-[state=active]:shadow-lg rounded-xl">
                  <Heart className="h-6 w-6 mb-2" />
                  <span className="text-base font-semibold">Manga Gástrica Laparoscópica</span>
                </TabsTrigger>
                <TabsTrigger value="endoscopica" className="flex-col h-auto py-4 px-6 data-[state=active]:bg-background data-[state=active]:shadow-lg rounded-xl">
                  <Zap className="h-6 w-6 mb-2" />
                  <span className="text-base font-semibold">Manga Gástrica por Endoscopia</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="laparoscopica" className="space-y-8">
                <Card className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Hoy en día es la cirugía bariátrica más realizada en TODO el mundo, esto debido a la gran
                      seguridad en pacientes con obesidad leve o severa, la mejora o incluso resolución de enfermedades
                      asociadas a la obesidad y los excelentes resultados que ofrece en pérdida de peso.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Es un procedimiento de tipo restrictivo, que consiste en retirar del 70 al 80% del estómago,
                      lo que permite mayor saciedad con menor cantidad de alimento.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Es un procedimiento que se realiza por laparoscopía (mínima invasión,) tiene una tasa baja de
                      complicaciones y a menos de 24 horas de haber sido operado, el paciente se va de alta a casa.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Beneficios Principales</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Pérdida de Peso Significativa</div>
                        <div className="text-sm text-muted-foreground">60-70% del exceso de peso en 12-18 meses</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Procedimiento Seguro</div>
                        <div className="text-sm text-muted-foreground">Técnica probada con bajas complicaciones</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Mejora Metabólica</div>
                        <div className="text-sm text-muted-foreground">Control de diabetes, hipertensión y más</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="endoscopica" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                        <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">¿Qué es?</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Procedimiento innovador que reduce el tamaño del estómago SIN cirugía ni incisiones.
                      Mediante un endoscopio se realizan suturas internas que reducen la capacidad gástrica
                      hasta en un 70%. También conocida como ESG (Endoscopic Sleeve Gastroplasty).
                    </p>
                  </Card>

                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                        <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Ventajas</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Sin incisiones externas ni cicatrices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Procedimiento ambulatorio (mismo día)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Recuperación inmediata (1-2 días)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Menor riesgo que cirugía convencional</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Resultados Esperados</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Scale className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Pérdida de Peso</div>
                        <div className="text-sm text-muted-foreground">40-50% del exceso de peso</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Tiempo de Procedimiento</div>
                        <div className="text-sm text-muted-foreground">60-90 minutos</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Retorno a Actividades</div>
                        <div className="text-sm text-muted-foreground">2-3 días</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tu Viaje Hacia una Vida Más Saludable
              </h2>
              <p className="text-lg text-muted-foreground">
                Un proceso integral diseñado para tu éxito a largo plazo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Evaluación Inicial",
                  description: "Consulta completa con estudios médicos, análisis de laboratorio y valoración psicológica",
                  icon: FileText,
                  color: "blue"
                },
                {
                  step: "02",
                  title: "Preparación",
                  description: "Plan nutricional pre-operatorio, educación del paciente y preparación quirúrgica",
                  icon: Utensils,
                  color: "green"
                },
                {
                  step: "03",
                  title: "Procedimiento",
                  description: "Cirugía laparoscópica o endoscopia con tecnología de vanguardia y equipo especializado",
                  icon: Heart,
                  color: "purple"
                },
                {
                  step: "04",
                  title: "Seguimiento",
                  description: "Programa de acompañamiento nutricional, psicológico y médico a largo plazo",
                  icon: Users,
                  color: "orange"
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className={`absolute top-0 right-0 text-8xl font-bold text-${item.color}-100 dark:text-${item.color}-900/20 -mr-4 -mt-4 group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                  <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 p-3 rounded-xl w-fit mb-4 relative z-10`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos Ideales Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Eres Candidato Ideal?
              </h2>
              <p className="text-lg text-muted-foreground">
                Estas son las características generales de los candidatos para manga gástrica
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Manga Laparoscópica</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "IMC mayor a 40 o mayor a 35 con comorbilidades",
                    "Edad entre 18 y 65 años",
                    "Compromiso con cambios de estilo de vida permanentes",
                    "Sin contraindicaciones quirúrgicas",
                    "Obesidad de al menos 5 años de evolución",
                    "Intentos previos de pérdida de peso sin éxito"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Manga Endoscópica</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "IMC entre 30 y 40",
                    "Buscan alternativa no quirúrgica",
                    "Preferencia por procedimiento ambulatorio",
                    "Mayor temor a cirugía convencional",
                    "Necesitan recuperación rápida",
                    "Como preparación para cirugía mayor (si es necesario)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="p-8 mt-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Evaluación Personalizada</h3>
                  <p className="text-muted-foreground">
                    Cada paciente es único. Durante tu consulta inicial realizaremos una evaluación completa
                    para determinar cuál procedimiento es el más adecuado para tu caso específico, considerando
                    tu historial médico, objetivos y estilo de vida.
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
                Conoce experiencias reales de pacientes con manga gástrica
              </p>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-6 min-w-max px-4">
                  {[
                    "https://www.facebook.com/reel/3912147155710164",
                    "https://www.facebook.com/reel/941895401404189",
                    "https://www.facebook.com/reel/516293441475793",
                    "https://www.facebook.com/reel/1358633291799325",
                    "https://www.facebook.com/reel/1001909648018888",
                    "https://www.facebook.com/reel/1507415173548770",
                    "https://www.facebook.com/reel/1165826521966066"
                  ].map((videoUrl, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0"
                    >
                      <Card className="overflow-hidden border-2 w-[267px] h-[476px] relative hover:shadow-2xl transition-all duration-300">
                        <iframe
                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=267&height=476`}
                          width="267"
                          height="476"
                          style={{ border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                      </Card>
                    </div>
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
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-primary-foreground">
              Comienza Tu Transformación Hoy
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Agenda tu consulta inicial y descubre cómo la manga gástrica puede cambiar tu vida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 text-lg" asChild>
                <Link href="https://wa.me/5214775975958?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta Gratuita
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/servicios">
                  Ver Todos los Servicios
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
