"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin, Award, Book } from "lucide-react"
import { EducationIllustration } from "./education-illustration"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const coursework = [
    "Programming Fundamentals",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Project Management",
  ]

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            Education
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Academic foundation that shaped my analytical thinking and technical problem-solving skills.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Education Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                className="card group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="text-indigo-600" size={24} />
                  </motion.div>
                  <div>
                    <span className="text-sm text-indigo-600 font-medium">Bachelor's Degree</span>
                    <h3 className="text-xl font-bold">B.Tech - Electrical Engineering</h3>
                    <p className="text-gray-600">Institute of Technical Education and Research</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Calendar, text: "2019 - 2023" },
                    { icon: MapPin, text: "Bhubaneswar, Odisha" },
                    { icon: Award, text: "CGPA: 7.4/10.0" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                      whileHover={{ scale: 1.05, color: "#6366f1" }}
                    >
                      <item.icon size={16} />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <h4 className="font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Strong foundation in engineering principles and problem-solving",
                    "Active participation in technical workshops and seminars",
                    "Developed analytical and logical thinking skills",
                    "Completed projects in embedded systems and automation",
                  ].map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <motion.span
                        className="text-green-500 mt-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        ✓
                      </motion.span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Relevant Coursework */}
              <motion.div className="card" whileHover={{ scale: 1.02 }}>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Book size={18} />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "white" }}
                      className="p-3 bg-indigo-50 rounded-lg text-sm text-indigo-700 cursor-pointer transition-all"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Illustration & Journey */}
            <motion.div variants={itemVariants} className="space-y-8">
              <EducationIllustration />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
