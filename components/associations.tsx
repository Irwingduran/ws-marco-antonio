"use client"

import Image from "next/image"

export function Associations() {
  const associations = [
    { name: "Asociación 1", logo: "/logos/logo1.jpeg" },
    { name: "Asociación 2", logo: "/logos/logo2.jpeg" },
    { name: "Asociación 3", logo: "/logos/logo3.jpeg" },
    { name: "Asociación 4", logo: "/logos/logo4.jpeg" },
    { name: "Asociación 5", logo: "/logos/logo5.jpeg" },
    { name: "Asociación 6", logo: "/logos/logo6.jpeg" },
    { name: "Asociación 7", logo: "/logos/logo7.jpeg" },
    { name: "Asociación 8", logo: "/logos/logo7.jpeg" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Asociaciones y Certificaciones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respaldados por las principales organizaciones médicas internacionales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {associations.map((association, index) => (
              <div
                key={index}
                className="relative w-24 h-24 md:w-28 md:h-28 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={association.logo}
                  alt={association.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
