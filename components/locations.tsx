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
      hours: "Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 8:00 PM | Sábados: 9:00 AM - 2:00 PM",
      phone: "4771442976",
      whatsapp: "5214775975958",
      skype: "dr.madrigal.leon",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3721.065753151479!2d-101.689969!3d21.1497814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff833f46fe6f%3A0x5fac67e62c0d120e!2sDr.%20Marco%20Antonio%20Madrigal%20T%C3%A9llez%20-%20Cirujano%20Bariatra%20en%20Le%C3%B3n!5e0!3m2!1ses!2sgt!4v1759963912446!5m2!1ses!2sgt"
    },
    cdmx: {
      name: "Ciudad de México",
      address: "Hospital Ángeles Metropolitano",
      hours: "Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 8:00 PM | Sábados: 9:00 AM - 2:00 PM",
      phone: "5659785465",
      whatsapp: "5214775975958",
      skype: "dr.madrigal.cdmx",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.377626084999!2d-99.16470799999999!3d19.3960833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffa7157bbe3b%3A0x78f04607068dadd3!2sDr.%20Marco%20Madrigal%20Tellez%20-%20Bariatra%20en%20CDMX!5e0!3m2!1ses!2sgt!4v1759961929441!5m2!1ses!2sgt"
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
    <div className="grid lg:grid-cols-2 gap-8">
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

      <Card className="p-0 overflow-hidden border-gray-200 h-[450px]">
        <iframe
          src={location.mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${location.name}`}
        ></iframe>
      </Card>
    </div>
  )
}




