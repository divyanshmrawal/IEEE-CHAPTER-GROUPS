"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, Lightbulb } from "lucide-react"
import { useState } from "react"

export default function History() {
  const [activeYear, setActiveYear] = useState(2024)

  const timeline = [
    {
      year: 2024,
      title: "Excellence in Leadership",
      description: "Received IEEE Region 10 Outstanding Student Branch Award",
      achievements: [
        "150+ active members",
        "25+ technical events organized",
        "8 scholarships awarded to deserving students",
        "Partnership with 12 industry leaders",
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: 2023,
      title: "Innovation & Growth",
      description: "Launched mentorship program and expanded outreach initiatives",
      achievements: [
        "First-ever Women in Tech Summit",
        "Robotics team won national competition",
        "Started STEM outreach in local schools",
        "100+ members milestone achieved",
      ],
      icon: Lightbulb,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: 2022,
      title: "Community Building",
      description: "Focused on building strong networks and professional development",
      achievements: [
        "Established industry mentorship network",
        "Organized first career fair",
        "Launched technical workshop series",
        "50+ successful project completions",
      ],
      icon: Users,
      color: "from-green-500 to-blue-500",
    },
    {
      year: 2021,
      title: "Foundation & Vision",
      description: "IEEE WIE Student Branch Affinity Group established at Silver Oak University",
      achievements: [
        "Official IEEE WIE chapter recognition",
        "First executive committee formed",
        "Initial 25 founding members",
        "Vision and mission statement created",
      ],
      icon: Calendar,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="history" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6 animate-fade-in">Our Journey</h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading force in empowering women engineers - discover our remarkable
            journey of growth, innovation, and impact.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timeline.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeYear === item.year
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg"
                  : "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item) => (
            <div
              key={item.year}
              className={`transition-all duration-500 ${
                activeYear === item.year
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 absolute"
              }`}
              style={{ display: activeYear === item.year ? "block" : "none" }}
            >
              <Card className="border-purple-200 dark:border-purple-700 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-6 animate-pulse`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                        {item.year} - {item.title}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-300">{item.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-300"
                      >
                        <div
                          className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        ></div>
                        <span className="text-purple-700 dark:text-purple-200 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
            <p className="text-lg opacity-90 mb-6">
              As we continue to grow and evolve, our commitment to empowering women in engineering remains stronger than
              ever.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2025</div>
                <div className="text-sm opacity-90">Global WIE Conference</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Target Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Annual Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
