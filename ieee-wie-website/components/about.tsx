import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Globe } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To inspire, engage, encourage, and empower women in electrical and electronic engineering and computer science.",
    },
    {
      icon: Heart,
      title: "Vision",
      description: "A world where women are equally represented in technical leadership and innovation.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and technical excellence through collaborative projects and research.",
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a supportive network of women engineers across all disciplines and career stages.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6">About IEEE WIE</h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto leading-relaxed">
            IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to
            promoting women engineers and scientists, and inspiring girls around the world to follow their academic
            interests in a career in engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-purple-200 dark:border-purple-700 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">{value.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Why Join IEEE WIE?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Professional Development</h4>
                <p className="opacity-90">
                  Access to workshops, seminars, and mentorship programs to advance your career.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Networking</h4>
                <p className="opacity-90">Connect with like-minded women engineers and industry professionals.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Leadership</h4>
                <p className="opacity-90">
                  Develop leadership skills through organizing events and leading initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
