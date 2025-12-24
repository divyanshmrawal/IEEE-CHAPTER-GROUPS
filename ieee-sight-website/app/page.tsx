import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import History from "@/components/history"
import Activities from "@/components/activities"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <History />
      <Activities />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
