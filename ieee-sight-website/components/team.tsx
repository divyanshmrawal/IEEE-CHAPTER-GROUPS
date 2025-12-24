import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Patel",
      role: "Faculty Advisor",
      department: "Computer Engineering",
      image: "/placeholder.svg?height=150&width=150",
      initials: "RP",
    },
    {
      name: "Priya Sharma",
      role: "Student Branch Chair",
      department: "Electronics & Communication",
      image: "/placeholder.svg?height=150&width=150",
      initials: "PS",
    },
    {
      name: "Arjun Mehta",
      role: "Vice Chair",
      department: "Computer Engineering",
      image: "/placeholder.svg?height=150&width=150",
      initials: "AM",
    },
    {
      name: "Sneha Patel",
      role: "Secretary",
      department: "Information Technology",
      image: "/placeholder.svg?height=150&width=150",
      initials: "SP",
    },
    {
      name: "Karan Shah",
      role: "Treasurer",
      department: "Electronics & Communication",
      image: "/placeholder.svg?height=150&width=150",
      initials: "KS",
    },
    {
      name: "Riya Joshi",
      role: "Technical Lead",
      department: "Computer Engineering",
      image: "/placeholder.svg?height=150&width=150",
      initials: "RJ",
    },
  ]

  return (
    <section id="team" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who lead our mission to create positive impact through technology and
            humanitarian initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-orange-100 hover:border-orange-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-orange-500 text-white text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
