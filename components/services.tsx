"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Manga Gástrica",
      shortDescription: "Procedimiento laparoscópico que reduce el tamaño del estómago en un 80%",
      icon: "🔬",
      link: "/servicios/manga-gastrica" as const,
      hasPage: true,
    },
    {
      title: "Bypass Gástrico",
      shortDescription: "Técnica que modifica el sistema digestivo para reducir la absorción de nutrientes",
      icon: "⚕️",
      link: "/servicios/bypass-gastrico" as const,
      hasPage: true,
    },
    {
      title: "Balón Intragástrico",
      shortDescription: "Procedimiento no quirúrgico temporal para pérdida de peso",
      icon: "🎈",
      link: "/servicios/balon-intragastrico" as const,
      hasPage: true,
    },
    {
      title: "Bariclip",
      shortDescription: "Sistema innovador de clip gástrico ajustable y reversible",
      icon: "🔧",
      link: undefined,
      hasPage: false,
    },
    {
      title: "Manga Gástrica por Endoscopia",
      shortDescription: "Reducción de estómago sin cirugía mediante técnica endoscópica",
      icon: "🔍",
      link: undefined,
      hasPage: false,
    },
    {
      title: "Cirugía de Revisión Bariátrica",
      shortDescription: "Corrección o mejora de procedimientos bariátricos previos",
      icon: "🔄",
      link: undefined,
      hasPage: false,
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios y Tratamientos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de procedimientos bariátricos adaptados a las necesidades específicas de cada
              paciente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.shortDescription}</p>

                {service.hasPage && service.link && (
                  <>
                    <p className="text-lg font-bold text-primary mb-4">Desde $70,000 MXN</p>
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link href={service.link}>
                        Conocer más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
