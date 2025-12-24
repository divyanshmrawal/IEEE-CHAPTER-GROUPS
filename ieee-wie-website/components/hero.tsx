import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-900 dark:text-purple-100 mb-6 animate-fade-in-up">
            IEEE Women in Engineering
          </h1>
          <h2
            className="text-2xl md:text-3xl text-purple-700 dark:text-purple-300 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Silver Oak University Student Branch Affinity Group
          </h2>
          <p
            className="text-xl text-purple-600 dark:text-purple-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Empowering women engineers through professional development, networking, and technical excellence. Join us
            in shaping the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">150+</h3>
              <p className="text-purple-600 dark:text-purple-400">Active Members</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">25+</h3>
              <p className="text-purple-600 dark:text-purple-400">Awards Won</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">50+</h3>
              <p className="text-purple-600 dark:text-purple-400">Events Organized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
