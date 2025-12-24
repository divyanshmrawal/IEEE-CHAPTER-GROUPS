import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, GraduationCap, Zap, Heart, ArrowRight } from "lucide-react"

export default function Activities() {
  const activities = [
    {
      icon: Droplets,
      title: "Clean Water Initiative",
      description: "Developing IoT-based water quality monitoring systems for rural communities.",
      impact: "5,000+ people served",
      status: "Ongoing",
    },
    {
      icon: GraduationCap,
      title: "Digital Education Platform",
      description: "Creating accessible e-learning solutions for underprivileged students.",
      impact: "2,000+ students reached",
      status: "Completed",
    },
    {
      icon: Zap,
      title: "Renewable Energy Solutions",
      description: "Installing solar power systems in remote villages and schools.",
      impact: "15 installations completed",
      status: "Ongoing",
    },
    {
      icon: Heart,
      title: "Healthcare Technology",
      description: "Developing telemedicine solutions and health monitoring devices.",
      impact: "3 clinics equipped",
      status: "In Progress",
    },
  ]

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the impactful projects and initiatives we're working on to create positive change in communities
            through technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="border-orange-100 hover:border-orange-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <activity.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{activity.title}</CardTitle>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : activity.status === "Ongoing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-600">{activity.impact}</span>
                  <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
