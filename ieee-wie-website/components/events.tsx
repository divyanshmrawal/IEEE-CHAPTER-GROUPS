import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Women in Tech Leadership Summit",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Silver Oak University Auditorium",
      attendees: "200+",
      description: "Join industry leaders for insights on career advancement and leadership in technology.",
    },
    {
      title: "Coding Workshop: AI & Machine Learning",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab, Block A",
      attendees: "50",
      description: "Hands-on workshop covering fundamentals of AI and ML with practical projects.",
    },
    {
      title: "Mentorship Program Launch",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Hall",
      attendees: "100",
      description: "Connect with industry mentors and kickstart your professional journey.",
    },
  ]

  const pastEvents = [
    "International Women's Day Celebration 2024",
    "Robotics Competition - WIE Team Victory",
    "Career Fair & Industry Networking",
    "Technical Paper Presentation Contest",
    "STEM Outreach Program for Schools",
  ]

  return (
    <section id="events" className="py-20 px-4 bg-purple-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6">Events & Activities</h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and activities designed to empower and inspire women in
            engineering.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-purple-200 dark:border-purple-700 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 text-white rounded-t-lg">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{event.attendees} Expected</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white py-3 transform hover:scale-105 transition-all duration-300">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border dark:border-purple-700">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-8 text-center">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4">Past Events</h4>
              <ul className="space-y-3">
                {pastEvents.map((event, index) => (
                  <li key={index} className="flex items-center text-purple-600 dark:text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-800 mb-4">Impact Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">Events This Year</span>
                  <span className="font-bold text-purple-900">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">Total Participants</span>
                  <span className="font-bold text-purple-900">800+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">Industry Partnerships</span>
                  <span className="font-bold text-purple-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">Scholarships Awarded</span>
                  <span className="font-bold text-purple-900">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
