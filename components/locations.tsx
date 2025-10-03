"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Clock, MessageCircle, Calendar } from "lucide-react"

export function Locations() {
  const locations = {
    leon: {
      name: "León, Guanajuato",
      address: "Hospital Ángeles León",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
      phone: "4771442976",
      whatsapp: "5214775975958",
      skype: "dr.madrigal.leon",
    },
    cdmx: {
      name: "Ciudad de México",
      address: "Hospital Ángeles Metropolitano",
      hours: "Martes y Jueves: 10:00 AM - 5:00 PM",
      phone: "5659785465",
      whatsapp: "5214775975958",
      skype: "dr.madrigal.cdmx",
    },
  }

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ubicaciones y Contacto
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Consultorios en León y Ciudad de México para tu comodidad
            </p>
          </div>

          <Tabs defaultValue="leon" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="leon">León</TabsTrigger>
              <TabsTrigger value="cdmx">CDMX</TabsTrigger>
            </TabsList>

            <TabsContent value="leon">
              <LocationCard location={locations.leon} />
            </TabsContent>

            <TabsContent value="cdmx">
              <LocationCard location={locations.cdmx} />
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  )
}

function LocationCard({ location }: { location: any }) {
  return (
    <Card className="p-8 bg-white border-gray-200">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-black flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 mb-1">{location.name}</h3>
            <p className="text-gray-600">{location.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Horario de Atención</h4>
            <p className="text-gray-600">{location.hours}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-black flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
            <a href={`tel:${location.phone}`} className="text-black hover:underline">
              {location.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
            <a
              href={`https://wa.me/${location.whatsapp}?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
