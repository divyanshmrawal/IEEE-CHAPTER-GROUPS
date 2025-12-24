import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Rocket } from "lucide-react"

export default function History() {
  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "IEEE SIGHT Student Branch established at Silver Oak University with 25 founding members.",
      icon: Rocket,
    },
    {
      year: "2020",
      title: "First Project",
      description: "Launched our first humanitarian project focusing on digital literacy in rural communities.",
      icon: Users,
    },
    {
      year: "2021",
      title: "Recognition",
      description: "Received IEEE Region 10 Outstanding Student Branch Award for community impact.",
      icon: Award,
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Grew to 100+ members and initiated partnerships with local NGOs and government bodies.",
      icon: Users,
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Established our Innovation Lab for developing sustainable technology solutions.",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Reached 150+ members and completed 25+ projects impacting over 10,000 lives.",
      icon: Award,
    },
  ]

  return (
    <section id="history" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading force in humanitarian technology, discover the milestones that
            shaped our organization.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-300 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
