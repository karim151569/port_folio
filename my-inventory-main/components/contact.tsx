"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { AddressIllustration } from "./address-illustration"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "suryakantnayak40@gmail.com",
      href: "mailto:suryakantnayak40@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91-8917686309",
      href: "tel:+918917686309",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Bhubaneswar, Odisha-751030",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/suryakantnayak23?tab=repositories",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/suryakant-nayak-b90594194/",
      label: "LinkedIn",
      color: "#0077B5",
    },
    { icon: <Twitter size={20} />, href: "https://x.com/suryakantn31751", label: "Twitter", color: "#1DA1F2" },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </motion.p>

          {/* "Let's Connect" Section (now above the two columns) */}
          <motion.div variants={itemVariants} className="space-y-8 mb-12">
            <div>
              <motion.h3 className="text-2xl font-bold mb-6" whileHover={{ scale: 1.02 }}>
                Let's Connect
              </motion.h3>
              <motion.div variants={itemVariants} className="mb-8">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  {/* Enhanced Profile Image */}
                  <motion.div
                    className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                      <motion.img
                        src="/images/profile.png"
                        alt="Suryakanta Nayak - Full Stack Developer"
                        className="w-full h-full rounded-full object-cover object-center"
                        style={{
                          objectPosition: "center center",
                          transform: "scale(1.2) translateY(0px)",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </motion.div>

                  {/* Rotating Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-indigo-300 rounded-full"
                  />

                  {/* Floating Icons */}
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/suryakantnayak23?tab=repositories",
                      label: "GitHub",
                      color: "#333",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/suryakant-nayak-b90594194/",
                      label: "LinkedIn",
                      color: "#0077B5",
                    },
                    { icon: Twitter, href: "https://x.com/suryakantn31751", label: "Twitter", color: "#1DA1F2" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                      style={{
                        top: `${15 + index * 25}%`,
                        right: index % 2 === 0 ? "-15px" : "auto",
                        left: index % 2 === 1 ? "-15px" : "auto",
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <social.icon size={16} style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat
                about technology and development. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <div className="font-medium text-gray-800">{info.label}</div>
                      <div className="text-gray-600 group-hover:text-indigo-600 transition-colors">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle size={18} />
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all relative overflow-hidden group"
                      title={social.label}
                      style={
                        {
                          "--hover-color": social.color,
                        } as React.CSSProperties
                      }
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: social.color }}
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two-column grid for SVG and Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Animated Contact SVG (now on the left) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center p-4" // Added padding and flex for centering
            >
              <motion.div
                animate={{ y: [-100, -110, -100] }} // Adjusted y values to move the SVG up
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="hidden lg:block"
              >
                <AddressIllustration />
              </motion.div>
            </motion.div>

            {/* Contact Form (now on the right) */}
            <motion.div variants={itemVariants} className="card relative overflow-hidden">
              <motion.h3 className="text-xl font-bold mb-6 flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                <Send size={20} />
                Send a Message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Project Discussion" },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        className="loading"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </div>
                  ) : submitStatus === "success" ? (
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle size={18} />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                >
                  <CheckCircle size={20} className="inline mr-2" />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {/* Response Time Indicator */}
              <motion.div
                className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <Clock size={16} />
                <span>I typically respond within 24 hours</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
