import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Associations } from "@/components/associations"
import { Certifications } from "@/components/certifications"
import { Team } from "@/components/team"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Associations />
      <Certifications />
      <Team />
      <Locations />
      <Footer />
    </main>
  )
}
