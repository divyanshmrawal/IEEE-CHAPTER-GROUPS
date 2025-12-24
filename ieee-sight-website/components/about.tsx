import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Zap, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To apply IEEE expertise in technology and engineering to improve the quality of life for underserved populations through sustainable development projects.",
    },
    {
      icon: Heart,
      title: "Humanitarian Focus",
      description:
        "We focus on projects that address basic human needs including access to clean water, healthcare, education, and sustainable energy.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology and engineering solutions to create scalable and sustainable impact in communities.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a network of passionate students and professionals committed to using technology for social good.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About IEEE SIGHT</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IEEE Special Interest Group on Humanitarian Technology (SIGHT) is a global network of IEEE volunteers
            partnering with underserved communities and local organizations to leverage technology for sustainable
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
