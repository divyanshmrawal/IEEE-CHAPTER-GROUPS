import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Lightbulb } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Special Interest Group on Humanitarian Technology
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              IEEE SIGHT
              <span className="block text-orange-600">Student Branch</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering students at Silver Oak University to leverage technology for humanitarian purposes, creating
              sustainable solutions that make a positive impact on communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-orange-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-orange-100">Active Members</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-orange-100">Projects Completed</div>
                </div>
                <div className="text-center col-span-2">
                  <Lightbulb className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-orange-100">Years of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
