import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Certifications } from "@/components/certifications"
import { Team } from "@/components/team"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Team />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
