"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export default function Opportunities() {
  const opportunities = [
    {
      category: "Scholarships & Grants",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600",
      items: [
        {
          title: "IEEE WIE Scholarship Program",
          description: "Annual scholarships for outstanding women engineering students",
          amount: "₹50,000 - ₹1,00,000",
          deadline: "March 31, 2024",
          eligibility: "Female students in engineering programs with GPA > 8.0",
        },
        {
          title: "Research Grant for Women",
          description: "Funding for innovative research projects led by women",
          amount: "₹2,00,000 - ₹5,00,000",
          deadline: "June 15, 2024",
          eligibility: "Graduate students and faculty members",
        },
      ],
    },
    {
      category: "Career Development",
      icon: Briefcase,
      color: "from-green-500 to-blue-600",
      items: [
        {
          title: "Industry Mentorship Program",
          description: "One-on-one mentoring with industry professionals",
          duration: "6 months",
          deadline: "Rolling basis",
          eligibility: "All WIE members in final year or recent graduates",
        },
        {
          title: "Leadership Development Track",
          description: "Comprehensive leadership training and certification",
          duration: "3 months",
          deadline: "April 10, 2024",
          eligibility: "Active WIE members with leadership potential",
        },
      ],
    },
    {
      category: "Competitions & Challenges",
      icon: Award,
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "Women in Tech Innovation Challenge",
          description: "Showcase innovative solutions to real-world problems",
          prize: "₹1,00,000 + Internship",
          deadline: "May 20, 2024",
          eligibility: "Teams with at least 50% women members",
        },
        {
          title: "IEEE Student Paper Contest",
          description: "Present your research at international conferences",
          prize: "Conference funding + Publication",
          deadline: "February 28, 2024",
          eligibility: "Undergraduate and graduate students",
        },
      ],
    },
    {
      category: "International Programs",
      icon: Globe,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "Global WIE Exchange Program",
          description: "Study abroad opportunities at partner universities",
          duration: "1-2 semesters",
          deadline: "December 15, 2024",
          eligibility: "Students with strong academic record",
        },
        {
          title: "International Conference Participation",
          description: "Funded participation in global IEEE conferences",
          coverage: "Full expenses covered",
          deadline: "Ongoing",
          eligibility: "Students with accepted papers or presentations",
        },
      ],
    },
  ]

  const quickLinks = [
    { title: "IEEE Membership Benefits", icon: Users, link: "#" },
    { title: "WIE Global Resources", icon: BookOpen, link: "#" },
    { title: "Career Center", icon: Target, link: "#" },
    { title: "Innovation Hub", icon: Lightbulb, link: "#" },
  ]

  return (
    <section
      id="opportunities"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6 animate-fade-in">
            WIE Opportunities
          </h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto leading-relaxed">
            Discover exclusive opportunities designed to advance your career, enhance your skills, and connect you with
            the global community of women in engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {opportunities.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-purple-200 dark:border-purple-700 dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="h-6 w-6 mr-3" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-purple-300 dark:border-purple-600 pl-4 hover:border-purple-500 transition-colors duration-300"
                    >
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.title}</h4>
                      <p className="text-purple-600 dark:text-purple-300 text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        {item.amount && (
                          <div className="flex justify-between">
                            <span className="text-purple-500 dark:text-purple-400">Amount:</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">{item.amount}</span>
                          </div>
                        )}
                        {item.prize && (
                          <div className="flex justify-between">
                            <span className="text-purple-500 dark:text-purple-400">Prize:</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">{item.prize}</span>
                          </div>
                        )}
                        {item.duration && (
                          <div className="flex justify-between">
                            <span className="text-purple-500 dark:text-purple-400">Duration:</span>
                            <span className="font-semibold text-purple-700 dark:text-purple-300">{item.duration}</span>
                          </div>
                        )}
                        {item.coverage && (
                          <div className="flex justify-between">
                            <span className="text-purple-500 dark:text-purple-400">Coverage:</span>
                            <span className="font-semibold text-purple-700 dark:text-purple-300">{item.coverage}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-purple-500 dark:text-purple-400">Deadline:</span>
                          <span className="font-semibold text-red-600 dark:text-red-400">{item.deadline}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-purple-500 dark:text-purple-400 text-xs">Eligibility:</span>
                          <p className="text-purple-600 dark:text-purple-300 text-xs mt-1">{item.eligibility}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="mt-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white transform hover:scale-105 transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-8 text-center">
            Quick Access Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 group"
              >
                <link.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <span className="font-semibold text-purple-800 dark:text-purple-200">{link.title}</span>
                  <ExternalLink className="h-3 w-3 text-purple-500 dark:text-purple-400 ml-2 inline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Seize Your Opportunity?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Don't miss out on these exclusive opportunities designed specifically for women in engineering. Take the
            next step in your career journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors transform hover:scale-105 duration-300">
              Browse All Opportunities
            </Button>
            <Button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105 duration-300">
              Contact Advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
