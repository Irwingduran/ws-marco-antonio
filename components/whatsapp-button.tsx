"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "5214775975958"
  const message = "Hola Dr. encontré su sitio web y me gustaría realizar una consulta"

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform duration-300"
    >
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </Button>
  )
}
