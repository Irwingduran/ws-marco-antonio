import { Facebook, Instagram, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Marco A. Madrigal</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Especialista en Cirugía Bariátrica dedicado a transformar vidas a través de tratamientos integrales.
              </p>
              <p className="text-xs text-primary-foreground/60">Cédula Profesional: 4452613</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/#inicio"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="/#sobre-mi"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Mí
                </Link>
                <Link
                  href="/#servicios"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </Link>
                <Link
                  href="/#certificaciones"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Certificaciones
                </Link>
                <Link
                  href="/#contacto"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+5214775975958"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +52 477 597 5958
                </a>
                <a
                  href="mailto:info@doctormadrigal.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@doctormadrigal.com
                </a>
              </div>

              <h4 className="font-semibold mb-4">Redes Sociales</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/bariatramarcomadrigal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/bariatramarcomadrigal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-xs text-primary-foreground/60 text-center leading-relaxed mb-4">
              <strong>Aviso Médico:</strong> La información proporcionada en este sitio web es solo para fines
              informativos y educativos. Siempre consulte a su médico u otro proveedor de atención médica calificado con cualquier pregunta que pueda tener
              sobre una condición médica.
            </p>
            <p className="text-xs text-primary-foreground/60 text-center">
              © {new Date().getFullYear()} Dr. Marco Antonio Madrigal Téllez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
