"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Rocket } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Progress Ring */}
          <div className="relative">
            <svg className="w-14 h-14 transform -rotate-90 absolute inset-0">
              <circle cx="28" cy="28" r="24" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="3" fill="none" />
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                stroke="#6366f1"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Main Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                rotate: 360,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors relative overflow-hidden group"
              title="Scroll to top"
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon with Animation */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <AnimatePresence mode="wait">
                  {scrollProgress > 90 ? (
                    <motion.div
                      key="rocket"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <Rocket size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <ArrowUp size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white opacity-0"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            </motion.button>

            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                style={{
                  top: `${20 + i * 5}%`,
                  left: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
