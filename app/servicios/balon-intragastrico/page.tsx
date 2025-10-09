"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  CheckCircle,
  Clock,
  TrendingDown,
  Shield,
  Users,
  MessageCircle,
  ArrowRight,
  Heart,
  Award,
  FileText,
  Utensils,
  Scale,
  AlertCircle,
  RefreshCw,
  Lightbulb,
  Target,
  Timer,
  Activity
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BalonIntragastricoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          {/* Floating balloon shapes */}
          <div className="absolute top-10 left-1/4 w-32 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-40 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  <Zap className="h-4 w-4" />
                  <span>Procedimiento No Quirúrgico y Temporal</span>
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white leading-tight">
                  Balón Intragástrico
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  Pierde peso sin cirugía. Un dispositivo temporal colocado por endoscopia que ocupa espacio en
                  tu estómago, ayudándote a comer menos y sentirte satisfecho más rápido.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">25-35%</div>
                    <div className="text-sm text-white/80">Pérdida de peso</div>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">20 min</div>
                    <div className="text-sm text-white/80">Colocación</div>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="text-3xl font-bold text-white">6-12 m</div>
                    <div className="text-sm text-white/80">Duración</div>
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
                <div className="aspect-square rounded-3xl bg-white/5 backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <Image 
                    src="/servicios/balon-intragastrico.jpeg"
                    alt="Balón Intragástrico"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section id="como-funciona" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Qué es el Balón Intragástrico?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                La alternativa no quirúrgica ideal para iniciar tu camino hacia un peso saludable
              </p>
            </div>

            <Card className="p-8 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es un dispositivo de alta tecnología hecho de silicón de grado médico que se coloca mediante endoscopia
                  (sin necesidad de cirugía) en el interior del estómago, con una duración que va de los 6 a 12 meses
                  según el tipo de balón que se utilice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Genera un efecto restrictivo, disminuyendo el apetito y permitiendo que el paciente se sienta satisfecho
                  con menos alimento. Acompañado de dieta, ejercicio y de nuestro equipo multidisciplinario tendrás una
                  pérdida de peso efectiva.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Es un procedimiento 100% ambulatorio y reversible, el mismo día de la colocación el paciente se va a su casa.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-2xl flex-shrink-0">
                  <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Procedimiento Seguro y Sencillo</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sin incisiones ni cicatrices</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Procedimiento ambulatorio (mismo día)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sedación consciente o anestesia ligera</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Retorno rápido a actividades normales</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ventajas del Balón Intragástrico
              </h2>
              <p className="text-lg text-muted-foreground">
                Una solución flexible y accesible para comenzar tu transformación
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Sin Cirugía",
                  description: "Procedimiento completamente endoscópico, sin necesidad de incisiones o anestesia general",
                  color: "orange"
                },
                {
                  icon: Clock,
                  title: "Procedimiento Rápido",
                  description: "Colocación en solo 20-30 minutos, retiro en el mismo tiempo",
                  color: "amber"
                },
                {
                  icon: Activity,
                  title: "Recuperación Inmediata",
                  description: "Regreso a casa el mismo día, actividades normales en 2-3 días",
                  color: "red"
                },
                {
                  icon: TrendingDown,
                  title: "Pérdida de Peso Efectiva",
                  description: "25-35% del exceso de peso durante el período de uso",
                  color: "orange"
                },
                {
                  icon: RefreshCw,
                  title: "Reversible",
                  description: "Completamente temporal, se retira al cumplir el período establecido",
                  color: "amber"
                },
                {
                  icon: Utensils,
                  title: "Inicio de Nuevos Hábitos",
                  description: "Tiempo ideal para establecer patrones alimenticios saludables y duraderos",
                  color: "red"
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

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                El Proceso Completo
              </h2>
              <p className="text-lg text-muted-foreground">
                Desde la evaluación hasta el retiro del balón
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">1. Evaluación Inicial</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Consulta médica y evaluación nutricional",
                    "Endoscopia diagnóstica para verificar condiciones del estómago",
                    "Estudios de laboratorio básicos",
                    "Educación sobre el procedimiento y expectativas",
                    "Evaluación de motivación y compromiso"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">2. Colocación del Balón</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Ayuno de 8 horas previo al procedimiento",
                    "Sedación consciente o anestesia ligera",
                    "Introducción del balón desinflado vía oral",
                    "Llenado con solución salina estéril (400-700ml)",
                    "Verificación de posición correcta",
                    "Alta el mismo día (2-3 horas después)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">3. Período de Adaptación</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Primera semana: adaptación con posibles molestias (náuseas, llenura)",
                    "Dieta líquida progresiva las primeras semanas",
                    "Medicamentos para reducir molestias iniciales",
                    "Consultas de seguimiento regulares",
                    "Apoyo nutricional continuo",
                    "Ajustes en estilo de vida y alimentación"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
                    <RefreshCw className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">4. Retiro del Balón</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Programado a los 6-12 meses según tipo de balón",
                    "Procedimiento endoscópico similar a la colocación",
                    "Vaciado y extracción del balón",
                    "Duración de 20-30 minutos",
                    "Alta el mismo día",
                    "Plan de mantenimiento de peso a largo plazo"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
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
                ¿El Balón es para Ti?
              </h2>
              <p className="text-lg text-muted-foreground">
                Conoce si eres candidato para este procedimiento
              </p>
            </div>

            <Card className="p-8 border-2 border-orange-200 dark:border-orange-800 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                Candidatos Ideales
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "IMC entre 27 y 35 (sobrepeso u obesidad moderada)",
                  "Personas que buscan una opción no quirúrgica",
                  "Como preparación para cirugía bariátrica mayor",
                  "Necesitan perder peso rápido por razones médicas",
                  "Compromiso con cambios en estilo de vida",
                  "Sin cirugías gástricas previas",
                  "Sin contraindicaciones endoscópicas",
                  "Motivación para aprovechar el período con el balón"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Importante: El Balón es una Herramienta</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    El balón intragástrico no es una solución mágica. Es una herramienta temporal que te ayuda
                    a adoptar nuevos hábitos alimenticios y de estilo de vida. El éxito a largo plazo depende
                    de tu compromiso con mantener estos cambios después de retirar el balón.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro programa incluye seguimiento nutricional y psicológico durante y después del tratamiento
                    para maximizar tus resultados y ayudarte a mantener el peso perdido de forma permanente.
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
                Conoce experiencias reales de pacientes con balón intragástrico
              </p>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-6 min-w-max px-4">
                  {[
                    "https://www.facebook.com/reel/1709970693122258",
                    "https://www.facebook.com/reel/1001909648018888",
                    "https://www.facebook.com/reel/1327614098270964",
                    "https://www.facebook.com/reel/999167068465730",
                    "https://www.facebook.com/reel/2831166280423952"
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
      <section className="py-20 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white">
              Comienza Sin Cirugía
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              El balón intragástrico puede ser el primer paso hacia tu transformación. Agenda una consulta
              y descubre si es la opción ideal para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 text-lg" asChild>
                <Link href="https://wa.me/5214775975958?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-lg bg-transparent text-white border-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/servicios">
                  Comparar con Otros Procedimientos
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
