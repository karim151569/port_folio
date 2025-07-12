"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (isMounted) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMounted])

  // Return early if not mounted
  if (!isMounted) {
    return null // or a loading state
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
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
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index
          const xOffset = ((i % 5) * 25) // Creates 5 columns
          const yOffset = (Math.floor(i / 5) * 25) // Creates 4 rows
          const scale = 1 + (i % 3) * 0.2 // Alternates between 1, 1.2, and 1.4
          const duration = 10 + (i % 5) * 2 // Alternates between 10-18 seconds

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
              animate={{
                x: [0, xOffset - 25],
                y: [0, yOffset - 25],
                scale: [1, scale, 1],
              }}
              transition={{
                duration: duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${xOffset}%`,
                top: `${yOffset}%`,
              }}
            />
          )
        })}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Suryakanta Nayak
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-4 overflow-hidden">
            <motion.p
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="typewriter"
            >
              Freelancer Developer
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8 text-gray-500">
            {[
              { icon: Mail, text: "suryakantnayak40@gmail.com" },
              { icon: Phone, text: "+91-8917686309" },
              { icon: MapPin, text: "Bhubaneswar, Odisha" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, color: "#6366f1" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  <item.icon size={18} />
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              <Mail size={18} />
              Let's Connect
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" },
              { number: "8+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-gray-400 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
