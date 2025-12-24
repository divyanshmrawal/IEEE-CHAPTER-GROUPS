"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Moon,
  Sun,
  Menu,
  X,
  Users,
  BookOpen,
  Trophy,
  Lightbulb,
  Calendar,
  Award,
  Code,
  Cpu,
  Network,
  Database,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function IEEECSWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeEventTab, setActiveEventTab] = useState<"upcoming" | "past">("upcoming")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    year: "",
    branch: "",
    inquiryType: "membership",
    interests: [] as string[],
    message: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        studentId: "",
        year: "",
        branch: "",
        inquiryType: "membership",
        interests: [],
        message: "",
        agreeToTerms: false,
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          isDarkMode ? "bg-black/90 backdrop-blur-sm border-gray-800" : "bg-white/90 backdrop-blur-sm border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">IEEE CS</h1>
              <p className="text-xs text-gray-500">Silver Oak University</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#history" className="text-sm font-medium hover:text-orange-500 transition-colors">
              History
            </a>
            <a href="#opportunities" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Opportunities
            </a>
            <a href="#events" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Events
            </a>
            <a href="#team" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Team
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-orange-500/10">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? "border-gray-800 bg-black" : "border-gray-200 bg-white"}`}>
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#history" className="text-sm font-medium hover:text-orange-500 transition-colors">
                History
              </a>
              <a href="#opportunities" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Opportunities
              </a>
              <a href="#events" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Events
              </a>
              <a href="#team" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">IEEE Computer Society</h1>
            <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold">Student Branch Chapter</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advancing computer science education, research, and innovation at Silver Oak University. Join us in
              exploring the cutting-edge world of computing technology and its applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Join Our Chapter
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg inline-block">
              <p className="text-sm font-medium">
                <span className="text-orange-500">Chapter Code:</span> CS-SOU-2024-001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Chapter</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We are dedicated to fostering excellence in computer science education and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The IEEE Computer Society Student Branch Chapter at Silver Oak University is committed to advancing the
                theory and application of computer science and related technologies. We provide a platform for students
                to engage in cutting-edge research, professional development, and networking opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Promote excellence in computer science education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Foster collaborative research opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Connect students with industry professionals</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className={`p-6 text-center ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Regular workshops and seminars</h4>
                </CardContent>
              </Card>
              <Card className={`p-6 text-center ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Peer collaboration and mentoring</h4>
                </CardContent>
              </Card>
              <Card className={`p-6 text-center ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <Trophy className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Research project guidance</h4>
                </CardContent>
              </Card>
              <Card className={`p-6 text-center ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <Lightbulb className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Competition participation</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* IEEE CS History Section */}
      <section id="history" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IEEE Computer Society History</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A legacy of innovation and excellence in computing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`p-6 ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-bold">Founded in 1946</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    The IEEE Computer Society was established as the world's first computing society, originally known
                    as the Institute of Radio Engineers Professional Group on Electronic Computers.
                  </p>
                </CardContent>
              </Card>

              <Card className={`p-6 ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-bold">Global Impact</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Today, IEEE Computer Society serves over 60,000 members worldwide, advancing the theory and practice
                    of computer and information processing science.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">1946-1950s: Early Computing Era</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pioneered the development of early computer standards and fostered collaboration among computing
                    professionals during the dawn of the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">1960s-1980s: Personal Computing Revolution</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Led the advancement of microprocessors, personal computers, and software engineering practices that
                    shaped the modern computing landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">1990s-Present: Internet & AI Era</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Continues to drive innovation in artificial intelligence, machine learning, cybersecurity, and
                    emerging technologies that define our digital future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Focus Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Exploring the frontiers of computer science and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className={`p-6 text-center hover:shadow-lg transition-shadow ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-0">
                <Cpu className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Artificial Intelligence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Machine learning, deep learning, and AI applications
                </p>
              </CardContent>
            </Card>

            <Card
              className={`p-6 text-center hover:shadow-lg transition-shadow ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-0">
                <Network className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Cybersecurity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Information security, cryptography, and network protection
                </p>
              </CardContent>
            </Card>

            <Card
              className={`p-6 text-center hover:shadow-lg transition-shadow ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-0">
                <Database className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Data Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Big data analytics, data mining, and visualization
                </p>
              </CardContent>
            </Card>

            <Card
              className={`p-6 text-center hover:shadow-lg transition-shadow ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-0">
                <Code className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Software Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Modern development practices and methodologies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CS Opportunities Section */}
      <section id="opportunities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CS Opportunities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore various opportunities to enhance your computer science journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Technical Competitions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Participate in coding contests, hackathons, and technical challenges to showcase your skills.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>ACM-ICPC Programming Contest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>IEEE Xtreme Programming Competition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>National Level Hackathons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Research Projects</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Engage in cutting-edge research projects with faculty mentorship and industry collaboration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>AI & Machine Learning Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Cybersecurity Research</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>IoT & Embedded Systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Industry Connections</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Network with industry professionals and explore internship and job opportunities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Industry Expert Sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Internship Programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Career Guidance Workshops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Certifications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Earn industry-recognized certifications to boost your professional profile.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>IEEE Professional Certifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Cloud Computing Certifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Cybersecurity Certifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Innovation Labs</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access state-of-the-art labs and equipment for your innovative projects.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>AI/ML Development Lab</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Robotics & IoT Lab</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Cybersecurity Testing Lab</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`p-6 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">Skill Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enhance your technical and soft skills through structured programs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Technical Workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Leadership Training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Communication Skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Events</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest events and activities
            </p>
          </div>

          {/* Event Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveEventTab("upcoming")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeEventTab === "upcoming"
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveEventTab("past")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeEventTab === "past"
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          {activeEventTab === "upcoming" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Jan 25, 2025</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">AI Workshop Series</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Hands-on workshop on machine learning fundamentals and practical applications.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">10:00 AM - 4:00 PM</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Feb 15, 2025</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">CodeFest 2025</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Annual coding competition with exciting prizes and networking opportunities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">9:00 AM - 6:00 PM</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Mar 10, 2025</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Industry Connect</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Meet industry experts and explore internship and job opportunities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">2:00 PM - 5:00 PM</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Past Events */}
          {activeEventTab === "past" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Dec 15, 2024</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Cybersecurity Seminar</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Comprehensive seminar on modern cybersecurity threats and defense strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">150+ Participants</span>
                    <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 bg-transparent">
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Nov 20, 2024</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Web Development Bootcamp</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Intensive 3-day bootcamp covering modern web development technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">80+ Participants</span>
                    <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 bg-transparent">
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">Oct 10, 2024</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">IEEE Day Celebration</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Annual IEEE Day celebration with technical presentations and networking.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">200+ Participants</span>
                    <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 bg-transparent">
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated individuals leading our chapter
            </p>
          </div>

          {/* Chapter Advisor */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Chapter Advisor</h3>
            <div className="flex justify-center">
              <Card
                className={`max-w-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-orange-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-xl mb-2">Dr. Rajesh Kumar</h4>
                  <p className="text-orange-500 font-medium mb-2">Professor & Chapter Advisor</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Ph.D. in Computer Science, 15+ years of experience in AI and Machine Learning research.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Specialization:</span> Artificial Intelligence, Data Science
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> rajesh.kumar@sou.edu
                    </p>
                    <p>
                      <span className="font-medium">Office:</span> CS Dept, Room 401
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Student Leadership */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Student Leadership</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10 text-blue-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Arjun Patel</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Chapter President</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">4th Year CSE, Specializing in AI/ML</p>
                  <p className="text-xs text-gray-500">arjun.patel@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-green-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Priya Sharma</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Vice President</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">3rd Year CSE, Focus on Cybersecurity</p>
                  <p className="text-xs text-gray-500">priya.sharma@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Rohit Singh</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Secretary</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">3rd Year IT, Web Development Expert</p>
                  <p className="text-xs text-gray-500">rohit.singh@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Trophy className="h-10 w-10 text-red-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Sneha Gupta</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Treasurer</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">2nd Year CSE, Data Science Enthusiast</p>
                  <p className="text-xs text-gray-500">sneha.gupta@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Calendar className="h-10 w-10 text-yellow-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Vikash Kumar</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Event Coordinator</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">3rd Year ECE, IoT Specialist</p>
                  <p className="text-xs text-gray-500">vikash.kumar@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Code className="h-10 w-10 text-indigo-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Anita Rao</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Technical Lead</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">4th Year CSE, Full Stack Developer</p>
                  <p className="text-xs text-gray-500">anita.rao@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Lightbulb className="h-10 w-10 text-pink-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Karan Mehta</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Research Coordinator</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">2nd Year CSE, ML Research Focus</p>
                  <p className="text-xs text-gray-500">karan.mehta@student.sou.edu</p>
                </CardContent>
              </Card>

              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <Network className="h-10 w-10 text-teal-500" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">Divya Joshi</h4>
                  <p className="text-orange-500 font-medium text-sm mb-2">Outreach Coordinator</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">3rd Year IT, Community Builder</p>
                  <p className="text-xs text-gray-500">divya.joshi@student.sou.edu</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to join our community or have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Membership Inquiries</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Join our vibrant community of computer science enthusiasts and researchers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Academic Support</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Get guidance on research projects, workshops, and academic opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Events & Competitions</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Learn about upcoming events, hackathons, and technical competitions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold mb-3">Quick Contact</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Email:</span> ieee.cs@sou.edu
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> +91 98765 43210
                    </p>
                    <p>
                      <span className="font-medium">Office:</span> CS Department, Room 301
                    </p>
                    <p>
                      <span className="font-medium">Chapter Code:</span> CS-SOU-2024-001
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className={`p-6 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Type of Inquiry</Label>
                      <RadioGroup
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="membership" id="membership" />
                          <Label htmlFor="membership">Membership Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Question</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="collaboration" id="collaboration" />
                          <Label htmlFor="collaboration">Research Collaboration</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          value={formData.studentId}
                          onChange={(e) => handleInputChange("studentId", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Academic Information */}
                    {formData.inquiryType === "membership" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="year">Academic Year</Label>
                          <Select onValueChange={(value) => handleInputChange("year", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1st">1st Year</SelectItem>
                              <SelectItem value="2nd">2nd Year</SelectItem>
                              <SelectItem value="3rd">3rd Year</SelectItem>
                              <SelectItem value="4th">4th Year</SelectItem>
                              <SelectItem value="masters">Masters</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="branch">Branch/Department</Label>
                          <Select onValueChange={(value) => handleInputChange("branch", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                              <SelectItem value="it">Information Technology</SelectItem>
                              <SelectItem value="ece">Electronics & Communication</SelectItem>
                              <SelectItem value="eee">Electrical & Electronics</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Areas of Interest */}
                    {formData.inquiryType === "membership" && (
                      <div>
                        <Label className="text-base font-semibold mb-3 block">Areas of Interest</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Cybersecurity",
                            "Data Science",
                            "Web Development",
                            "Mobile Development",
                            "Cloud Computing",
                            "IoT",
                          ].map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                              />
                              <Label htmlFor={interest} className="text-sm">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your inquiry, questions, or how you'd like to get involved..."
                      />
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the terms and conditions and consent to being contacted by the IEEE Computer Society
                        chapter regarding my inquiry. *
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeToTerms}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          Thank you for your message! We'll get back to you within 24-48 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-800 dark:text-red-200 text-sm">
                          Sorry, there was an error sending your message. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Become part of a vibrant community of computer science enthusiasts, researchers, and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">IEEE CS</h3>
                  <p className="text-xs text-gray-500">Silver Oak University</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Advancing computer science education and research at Silver Oak University.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#history" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                    History
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>Silver Oak University</p>
                <p>Computer Science Department</p>
                <p>Email: ieee.cs@sou.edu</p>
                <p>Chapter Code: CS-SOU-2024-001</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} IEEE Computer Society - Silver Oak University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
