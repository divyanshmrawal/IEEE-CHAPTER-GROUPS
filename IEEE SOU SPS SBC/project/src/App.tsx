import React from 'react';
import { Menu, X, Calendar, Users, BookOpen, Award, Mail, Phone, MapPin, ExternalLink, ChevronRight, Sun, Moon, GraduationCap, Briefcase, Network, Trophy, Globe, Lightbulb, DollarSign, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode ? 'dark' : '';

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm dark:shadow-gray-800 sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">IEEE SPS</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Silver Oak University</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('opportunities')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Opportunities
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('events')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Events
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('team')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Team
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('research')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Research
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </nav>

              <div className="flex items-center space-x-4">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <Moon className="w-5 h-5 transition-transform duration-300" />
                  )}
                </button>

                {/* Mobile menu button */}
                <button 
                  className="md:hidden text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-in slide-in-from-top duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">About</button>
                <button onClick={() => scrollToSection('opportunities')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Opportunities</button>
                <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Events</button>
                <button onClick={() => scrollToSection('team')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Team</button>
                <button onClick={() => scrollToSection('research')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Research</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Contact</button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
                IEEE Signal Processing Society
              </h1>
              <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 mb-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                Student Branch Chapter
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                Advancing signal processing education, research, and innovation at Silver Oak University. 
                Join us in exploring the cutting-edge world of digital signal processing and its applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                  Join Our Chapter
                </button>
                <button className="border border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">About Our Chapter</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                We are dedicated to fostering excellence in signal processing education and research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The IEEE Signal Processing Society Student Branch Chapter at Silver Oak University is committed to advancing 
                  the theory and application of signal processing and related technologies. We provide a platform for students 
                  to engage in cutting-edge research, professional development, and networking opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Promote excellence in signal processing education</p>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Foster collaborative research opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Connect students with industry professionals</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform animate-in fade-in slide-in-from-right duration-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Regular workshops and seminars</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Peer collaboration and mentoring</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Research project guidance</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Competition participation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPS Opportunities Section */}
        <section id="opportunities" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">SPS Opportunities</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-in fade-in slide-in-from-bottom duration-700 delay-200">Unlock your potential with exclusive benefits and opportunities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Academic Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Access to exclusive educational resources, research papers, and academic publications in signal processing</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• IEEE Xplore Digital Library access</li>
                  <li>• Research publication opportunities</li>
                  <li>• Academic mentorship programs</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Career Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Professional development opportunities and industry connections to advance your career</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Industry networking events</li>
                  <li>• Internship opportunities</li>
                  <li>• Professional certification programs</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Network className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Network</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with signal processing professionals and researchers worldwide</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• International conference access</li>
                  <li>• Global collaboration projects</li>
                  <li>• Alumni network connections</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Competitions & Awards</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Participate in prestigious competitions and apply for scholarships and awards</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• IEEE SPS scholarships</li>
                  <li>• Technical competitions</li>
                  <li>• Recognition programs</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conference Access</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Discounted registration for IEEE conferences and exclusive member-only events</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• ICASSP conference discounts</li>
                  <li>• Workshop participation</li>
                  <li>• Technical symposiums</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Resources and funding opportunities for innovative signal processing projects</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Research grants</li>
                  <li>• Innovation challenges</li>
                  <li>• Startup incubation support</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Become a Member Today
              </button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">Upcoming Events</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-in fade-in slide-in-from-bottom duration-700 delay-200">Stay updated with our latest activities and programs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DSP Workshop</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Hands-on workshop on digital signal processing fundamentals and applications</p>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">March 15, 2025</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Industry Talk</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Guest lecture by industry experts on emerging trends in signal processing</p>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">March 28, 2025</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Research Symposium</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Annual student research presentation and competition</p>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">April 12, 2025</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-in fade-in slide-in-from-bottom duration-700 delay-200">Meet the dedicated members leading our chapter</p>
            </div>

            {/* Chapter Advisor Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">Chapter Advisor</h3>
              <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm text-center transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Faculty Advisor</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-3">Professor, ECE Department</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Providing academic guidance and mentorship to chapter members with expertise in signal processing research and education
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Ph.D. in Signal Processing • 15+ years experience
                  </div>
                </div>
              </div>
            </div>

            {/* Student Leadership Team */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-500">Student Leadership</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform text-center group animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Chair</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2 text-sm">Executive Leadership</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Leading the chapter's strategic initiatives and member engagement</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform text-center group animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <BookOpen className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Vice Chair</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2 text-sm">Academic Affairs</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Coordinating educational programs and research activities</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform text-center group animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Secretary</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2 text-sm">Communications</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Managing communications and chapter documentation</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform text-center group animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <DollarSign className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Treasurer</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2 text-sm">Financial Management</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Managing chapter finances and budget planning</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform text-center group animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Code className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Webmaster</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2 text-sm">Digital Presence</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Managing website and digital communications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">Research Areas</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-in fade-in slide-in-from-bottom duration-700 delay-200">Exploring the frontiers of signal processing technology</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Digital Image Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Advanced techniques for image enhancement, restoration, and analysis</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Audio Signal Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Speech recognition, audio compression, and acoustic signal analysis</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">AI-driven signal processing and pattern recognition systems</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Communications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Wireless communication systems and network signal processing</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Biomedical Signals</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Medical signal processing and healthcare technology applications</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform group animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">IoT & Sensors</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Smart sensors and Internet of Things signal processing</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-700">Get In Touch</h2>
              <p className="text-xl text-gray-300 dark:text-gray-400 animate-in fade-in slide-in-from-bottom duration-700 delay-200">Ready to join our community or have questions? We'd love to hear from you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-in fade-in slide-in-from-left duration-700 delay-300">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span>ieee.sps@silveroakuni.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <MapPin className="w-5 h-5 text-emerald-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span>Silver Oak University,<br />Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-in fade-in slide-in-from-right duration-700 delay-400">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-all duration-300 hover:border-gray-600"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-all duration-300 hover:border-gray-600"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-all duration-300 hover:border-gray-600"
                    ></textarea>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black dark:bg-gray-950 text-white py-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0 group">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">IEEE SPS</h3>
                  <p className="text-sm text-gray-400">Silver Oak University</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 IEEE Signal Processing Society - Silver Oak University</p>
                <p className="text-gray-400 text-sm">All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;