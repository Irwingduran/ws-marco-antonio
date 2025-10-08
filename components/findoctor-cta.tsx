"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone } from "lucide-react"
import Image from "next/image"

export function FindoctorCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[500px] bg-white">
                <Image
                  src="/dr-marco/mockup.png"
                  alt="Tarjeta Digital FindDoctor - Dr. Marco Antonio Madrigal"
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm border border-primary/20">
                  <Smartphone className="h-4 w-4" />
                  <span>Tarjeta Digital</span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground">
                  Encuéntrame en FindDoctor
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Accede a mi tarjeta digital profesional donde podrás encontrar toda mi información de contacto,
                  ubicaciones de consultorios, y agendar tu cita de manera rápida y sencilla.
                </p>

                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://www.findoctor.com.mx/doctores/marco-antonio-madrigal-tellez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Tarjeta Digital
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
