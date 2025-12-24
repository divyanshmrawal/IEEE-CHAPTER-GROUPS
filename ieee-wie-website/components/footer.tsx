import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 dark:bg-gray-900 text-white py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white dark:bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-900 dark:text-purple-800 font-bold">WIE</span>
              </div>
              <div>
                <h3 className="font-bold">IEEE WIE</h3>
                <p className="text-sm text-purple-300">Silver Oak University</p>
              </div>
            </div>
            <p className="text-purple-300 dark:text-purple-400 text-sm leading-relaxed">
              Empowering women engineers through professional development, networking, and technical excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-purple-300 dark:text-purple-400">
              <li>
                <a href="#home" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-purple-300 dark:text-purple-400">
              <li>
                <a href="#" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  IEEE Membership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  WIE Global
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-purple-200 transition-colors">
                  Mentorship
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-purple-300 dark:text-purple-400">
              <p>Silver Oak University</p>
              <p>SG Highway, Ahmedabad</p>
              <p>Gujarat, India - 382481</p>
              <p>wie@silveroak.edu</p>
              <p>+91 79 4032 4032</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-purple-300 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by IEEE WIE Silver Oak University
          </p>
          <p className="text-purple-400 text-xs mt-2">
            © {new Date().getFullYear()} IEEE Women in Engineering - Silver Oak University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
