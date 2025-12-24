import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Team() {
  const leadership = [
    {
      name: "Dr. Priya Sharma",
      role: "Faculty Advisor",
      department: "Electronics & Communication",
      image: "/placeholder.svg?height=200&width=200",
      email: "priya.sharma@silveroak.edu",
      linkedin: "#",
    },
    {
      name: "Ananya Patel",
      role: "Chairperson",
      department: "Computer Engineering",
      year: "Final Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "ananya.patel@student.silveroak.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Riya Mehta",
      role: "Vice Chairperson",
      department: "Electronics Engineering",
      year: "Third Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "riya.mehta@student.silveroak.edu",
      linkedin: "#",
    },
    {
      name: "Kavya Singh",
      role: "Secretary",
      department: "Information Technology",
      year: "Third Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "kavya.singh@student.silveroak.edu",
      linkedin: "#",
    },
    {
      name: "Shreya Joshi",
      role: "Treasurer",
      department: "Computer Engineering",
      year: "Second Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "shreya.joshi@student.silveroak.edu",
      linkedin: "#",
    },
    {
      name: "Nisha Gupta",
      role: "Event Coordinator",
      department: "Electronics & Communication",
      year: "Third Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "nisha.gupta@student.silveroak.edu",
      linkedin: "#",
    },
    {
      name: "Divya Patel",
      role: "Webmaster",
      department: "Information Technology",
      year: "Third Year",
      image: "/placeholder.svg?height=200&width=200",
      email: "divya.patel@student.silveroak.edu",
      linkedin: "#",
      github: "#",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6">Our Leadership Team</h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto">
            Meet the dedicated women leading our IEEE WIE Student Branch Affinity Group, driving innovation and
            empowering the next generation of women engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member, index) => (
            <Card
              key={index}
              className="border-purple-200 dark:border-purple-700 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-200"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-purple-400/20 to-purple-600/20"></div>
                </div>

                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-300 font-semibold mb-1">{member.role}</p>
                <p className="text-purple-500 dark:text-purple-400 text-sm mb-1">{member.department}</p>
                {member.year && <p className="text-purple-400 dark:text-purple-500 text-sm mb-4">{member.year}</p>}

                <div className="flex justify-center space-x-3 mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-700 transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-purple-600" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                    >
                      <Github className="h-4 w-4 text-purple-600" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-lg opacity-90 mb-6">
            We're always looking for passionate women engineers to join our leadership team and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Apply for Leadership
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Volunteer with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
