import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SocialMediaButtons from "@/components/social-media-buttons"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Marco Antonio Madrigal Téllez - Cirugía Bariátrica",
  description:
    "Especialista certificado en Cirugía Bariátrica y tratamientos para la obesidad. Cirujano General y Bariatra certificado con enfoque multidisciplinario.",
  keywords: "cirugía bariátrica, manga gástrica, bypass gástrico, obesidad, León, CDMX, cirujano bariatra",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          <SocialMediaButtons/>
        </Suspense>
      </body>
    </html>
  )
}
