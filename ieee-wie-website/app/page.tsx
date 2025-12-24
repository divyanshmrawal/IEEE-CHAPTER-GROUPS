import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import History from "@/components/history"
import { ThemeProvider } from "@/components/theme-provider"
import Opportunities from "@/components/opportunities"

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Opportunities />
        <History />
        <Events />
        <Team />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
