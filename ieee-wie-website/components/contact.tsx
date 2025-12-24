import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-purple-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-6">Get in Touch</h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you! Reach out to us through any of the
            channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-purple-200 dark:border-purple-700 dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="border-purple-200 dark:border-purple-600 dark:bg-gray-700 dark:text-white focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="border-purple-200 dark:border-purple-600 dark:bg-gray-700 dark:text-white focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-purple-200 dark:border-purple-600 dark:bg-gray-700 dark:text-white focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="border-purple-200 dark:border-purple-600 dark:bg-gray-700 dark:text-white focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    className="border-purple-200 dark:border-purple-600 dark:bg-gray-700 dark:text-white focus:border-purple-500"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-purple-200 dark:border-purple-700 dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-purple-800 dark:text-purple-200">Address</p>
                      <p className="text-purple-600 dark:text-purple-300">
                        Silver Oak University
                        <br />
                        SG Highway, Ahmedabad
                        <br />
                        Gujarat, India - 382481
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-semibold text-purple-800 dark:text-purple-200">Phone</p>
                      <p className="text-purple-600 dark:text-purple-300">+91 79 4032 4032</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-semibold text-purple-800 dark:text-purple-200">Email</p>
                      <p className="text-purple-600 dark:text-purple-300">wie@silveroak.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-purple-800 dark:text-purple-200">Office Hours</p>
                      <p className="text-purple-600 dark:text-purple-300">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-purple-600" />
                  </a>
                </div>
                <p className="text-purple-600 mt-4 text-sm">
                  Stay connected with us on social media for the latest updates, events, and opportunities!
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="#" className="hover:underline opacity-90">
                  IEEE Membership
                </a>
                <a href="#" className="hover:underline opacity-90">
                  WIE Global
                </a>
                <a href="#" className="hover:underline opacity-90">
                  Student Activities
                </a>
                <a href="#" className="hover:underline opacity-90">
                  Career Resources
                </a>
                <a href="#" className="hover:underline opacity-90">
                  Scholarships
                </a>
                <a href="#" className="hover:underline opacity-90">
                  Mentorship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
