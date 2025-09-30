"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      title: "Manga Gástrica",
      shortDescription: "Procedimiento laparoscópico que reduce el tamaño del estómago en un 80%",
      fullDescription:
        "La manga gástrica es un procedimiento quirúrgico mínimamente invasivo que reduce el tamaño del estómago, limitando la cantidad de alimentos que puede consumir y generando una sensación de saciedad temprana. Es ideal para pacientes con obesidad mórbida y ha demostrado excelentes resultados a largo plazo.",
      icon: "🔬",
    },
    {
      title: "Bypass Gástrico",
      shortDescription: "Técnica que modifica el sistema digestivo para reducir la absorción de nutrientes",
      fullDescription:
        "El bypass gástrico combina la restricción del tamaño del estómago con la malabsorción de nutrientes. Este procedimiento crea una pequeña bolsa gástrica y conecta directamente al intestino delgado, siendo altamente efectivo para la pérdida de peso y el control de enfermedades metabólicas como la diabetes tipo 2.",
      icon: "⚕️",
    },
    {
      title: "Bariclip",
      shortDescription: "Sistema innovador de clip gástrico ajustable y reversible",
      fullDescription:
        "El Bariclip es una alternativa menos invasiva que utiliza un dispositivo ajustable para reducir la capacidad del estómago. Es reversible y ajustable según las necesidades del paciente, ofreciendo una opción flexible para el tratamiento de la obesidad con menor riesgo quirúrgico.",
      icon: "🔧",
    },
    {
      title: "Balón Intragástrico",
      shortDescription: "Procedimiento no quirúrgico temporal para pérdida de peso",
      fullDescription:
        "El balón intragástrico es un dispositivo temporal que se coloca en el estómago mediante endoscopia, sin necesidad de cirugía. Ocupa espacio en el estómago, generando sensación de saciedad y ayudando a la pérdida de peso. Es ideal para pacientes que buscan una opción no quirúrgica o como preparación para una cirugía bariátrica.",
      icon: "🎈",
    },
    {
      title: "Manga Gástrica por Endoscopia",
      shortDescription: "Reducción de estómago sin cirugía mediante técnica endoscópica",
      fullDescription:
        "La manga gástrica endoscópica (ESG) es un procedimiento innovador que reduce el tamaño del estómago sin incisiones externas. Utilizando un endoscopio, se realizan suturas internas que reducen la capacidad gástrica. Ofrece recuperación rápida y menor riesgo que la cirugía tradicional.",
      icon: "🔍",
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
                className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.shortDescription}</p>

                {expandedService === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-foreground leading-relaxed mb-4">{service.fullDescription}</p>
                  </div>
                )}

                <Button variant="ghost" size="sm" className="w-full mt-2">
                  {expandedService === index ? (
                    <>
                      Menos información <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Más información <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
