"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/suryakantnayak23?tab=repositories", label: "GitHub", color: "#333" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suryakant-nayak-b90594194/",
      label: "LinkedIn",
      color: "#0077B5",
    },
    { icon: Twitter, href: "https://x.com/suryakantn31751", label: "Twitter", color: "#1DA1F2" },
    { icon: Mail, href: "mailto:suryakantnayak40@gmail.com", label: "Email", color: "#EA4335" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
            <motion.h3 className="text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
              Suryakanta Nayak
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and building exceptional digital
              experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    color: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors block py-1"
                  whileHover={{ x: 5, color: "#6366f1" }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <motion.div whileHover={{ x: 5, color: "#6366f1" }}>📧 suryakantnayak40@gmail.com</motion.div>
              <motion.div whileHover={{ x: 5, color: "#6366f1" }}>📱 +91-8917686309</motion.div>
              <motion.div whileHover={{ x: 5, color: "#6366f1" }}>📍 Bhubaneswar, Odisha</motion.div>
            </div>
            <motion.div className="mt-4 p-3 bg-gray-800 rounded-lg" whileHover={{ scale: 1.02 }}>
              <p className="text-sm text-gray-300">💡 Available for freelance projects and full-time opportunities</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              <span>© 2025 Suryakanta Nayak. All rights reserved.</span>
            </motion.div>

            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>using React + Vite</span>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-indigo-500 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500 rounded-full opacity-40"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
