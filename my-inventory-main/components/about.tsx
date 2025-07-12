"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Zap, Users, TrendingUp, Code, Award, Coffee, Heart } from "lucide-react"

const About = () => {
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

  const values = [
    {
      icon: <Target size={32} />,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code and staying updated with latest technologies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that drive business growth and user satisfaction.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap size={32} />,
      title: "Problem Solver",
      description: "Enjoy tackling complex challenges and finding innovative solutions to technical problems.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users size={32} />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies in the ever-evolving tech landscape.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { icon: <Code size={24} />, value: "2+", label: "Years Experience" },
    { icon: <Award size={24} />, value: "15+", label: "Projects Delivered" },
    { icon: <Coffee size={24} />, value: "1000+", label: "Cups of Coffee" },
    { icon: <Heart size={24} />, value: "100%", label: "Passion Level" },
  ]

  return (
    <section id="about" className="section bg-gray-50 relative overflow-hidden">
      {/* Background SVG Illustrations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1061 742.855">
          <path
            fill="#f2f2f2"
            d="M1118.5,516.01425c0,103.85867-61.74233,140.12223-137.90535,140.12223S842.68931,619.87292,842.68931,516.01425,980.59465,280.031,980.59465,280.031,1118.5,412.15559,1118.5,516.01425Z"
            transform="translate(-69.5 -78.57247)"
          />
          <polygon
            fill="#3f3d56"
            points="906.071 561.677 907.483 474.756 966.262 367.224 907.705 461.121 908.34 422.038 948.85 344.239 908.508 411.696 908.508 411.696 909.649 341.403 953.029 279.466 909.829 330.35 910.543 201.459 906.059 372.087 906.427 365.048 862.323 297.54 905.72 378.561 901.61 457.065 901.488 454.981 850.644 383.939 901.334 462.343 900.82 472.16 900.728 472.308 900.77 473.114 890.344 672.287 904.274 672.287 905.945 569.41 956.511 491.199 906.071 561.677"
          />
          <path
            fill="#f2f2f2"
            d="M831.65688,421.48618c0,134.32387-79.85341,181.22475-178.35758,181.22475S474.94172,555.81005,474.94172,421.48618s178.35758-305.205,178.35758-305.205S831.65688,287.16231,831.65688,421.48618Z"
            transform="translate(-69.5 -78.57247)"
          />
          <polygon
            fill="#3f3d56"
            points="577.302 503.591 579.128 391.174 655.149 252.098 579.415 373.539 580.236 322.992 632.629 222.372 580.453 309.615 580.453 309.616 581.93 218.704 638.034 138.598 582.162 204.408 583.085 37.709 577.286 258.389 577.763 249.285 520.722 161.975 576.848 266.761 571.533 368.293 571.375 365.598 505.617 273.717 571.176 375.119 570.511 387.817 570.392 388.008 570.446 389.05 556.962 646.647 574.978 646.647 577.14 513.593 642.538 412.44 577.302 503.591"
          />
        </svg>

        <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 996.46 828.18">
          <path
            fill="#6c63ff"
            d="M1096.36,308.36h-91.94V419.81h85.22c.22,1.15.43,2.3.68,3.44h-85.9v89.86l.43-.14q3.64-1.28,7.23-2.72l1.54-.63q3.68-1.51,7.23-3.23c.85-.39,1.69-.8,2.52-1.22a149.83,149.83,0,0,0,36.17-25c.31-.27.6-.55.88-.82,1.47-1.42,2.91-2.85,4.31-4.32l1.54-1.64c1.65-1.79,3.24-3.64,4.79-5.51l.68-.82a116.4,116.4,0,0,0,15.58-25c.13-.27.24-.55.36-.82,1.25-2.82,2.38-5.68,3.36-8.59.42-1.23.82-2.46,1.17-3.69.12-.37.23-.73.33-1.09,5.1-17.85,5.69-36.4,5.69-54.85,0-2.15,0-4.31,0-6.45,0-7.45-.11-15-.25-22.45,0-1.94-.09-3.87-.14-5.82q-.18-7.43-.54-14.84c-.06-1.38-.12-2.75-.21-4.11,0-.79-.08-1.58-.13-2.37C1096.76,314.05,1096.58,311.21,1096.36,308.36Z"
            opacity=".1"
            transform="translate(-101.77 -35.91)"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.h3 className="text-3xl font-bold mb-6" whileHover={{ scale: 1.02 }}>
                Professional Summary
              </motion.h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  A versatile freelance developer specializing in developing and managing websites and internal
                  frameworks, with expertise in ReactJS, JavaScript, Spring Boot, and responsive design.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  I am driven to work on challenging projects that enrich my knowledge, allowing me to contribute to
                  business growth through innovative solutions and technical excellence. I aim to deliver exceptional
                  results while maintaining the highest standards of quality and professionalism.
                </motion.p>
              </div>

              {/* Stats Grid */}
              <motion.div className="grid grid-cols-2 gap-4 mt-8" variants={containerVariants}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <motion.div
                      className="text-indigo-600 mb-2 flex justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Data Analytics SVG - REMOVED FROM HERE */}
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="card text-center relative overflow-hidden group"
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <motion.div
                      className="text-indigo-600 mb-4 flex justify-center relative z-10"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>

                    <h4 className="font-semibold mb-2 relative z-10">{value.title}</h4>
                    <p className="text-sm text-gray-600 relative z-10">{value.description}</p>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent"
                      whileHover={{
                        borderImage: "linear-gradient(45deg, #6366f1, #8b5cf6) 1",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
