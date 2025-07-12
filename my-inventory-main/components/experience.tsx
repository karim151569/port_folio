"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin, Users, Code, Award, Star, TrendingUp, Zap } from "lucide-react"
import { DataScienceIllustration } from "./data-science-illustration"
import { FreelanceIllustration } from "./freelance-illustration" // Import the new component

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Independent Contractor",
      type: "Freelance",
      period: "2024 - Present",
      location: "Remote / Bhubaneswar, Odisha",
      description:
        "Providing end-to-end web development solutions for clients across various industries, specializing in enterprise applications and modern web technologies.",
      achievements: [
        "Developed and deployed 10+ custom web applications for diverse client requirements",
        "Built scalable ERP systems with comprehensive user management and workflow automation",
        "Implemented cloud-based solutions using AWS services (EC2, RDS, S3) for optimal performance",
        "Created responsive, mobile-first designs ensuring cross-platform compatibility",
        "Integrated third-party APIs and payment gateways for e-commerce solutions",
        "Delivered projects on time with 100% client satisfaction rate",
        "Implemented Jenkins CI/CD pipelines for automated deployment and testing",
        "Set up webhook services for seamless code deployment without manual intervention",
        "Automated JAR deployment processes on EC2 instances using CI/CD workflows",
      ],
      technologies: [
        "React.js",
        "Spring Boot",
        "Node.js",
        "AWS",
        "MySQL",
        "MongoDB",
        "Docker",
        "Git",
        "Jenkins",
        "Webhooks",
      ],
      clients: ["Startups", "Small Businesses", "Enterprise Clients", "E-commerce Stores"],
      featured: true,
    },
    {
      title: "Software Developer",
      company: "Think Talent Services",
      type: "Full-time",
      period: "September 2023 - 2024",
      location: "Bhubaneswar, Odisha",
      description:
        "Focused on LMS tool APIs and full-stack development with React and Spring Boot for educational technology solutions.",
      achievements: [
        "Designed and implemented APIs with structured JSON responses by understanding complex business logic",
        "Utilized React hooks for state management and implemented React Query for handling multiple mutations",
        "Maintained component-based architecture ensuring code maintainability and scalability",
        "Successfully upgraded projects from React 16 to React 18 across various live production environments",
        "Integrated RESTful APIs for serialization and data binding, ensuring seamless data flow",
        "Ensured cross-browser compatibility and addressed performance issues across platforms and devices",
      ],
      technologies: ["React.js", "Spring Boot", "JavaScript", "RESTful APIs", "React Query", "Git"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="section bg-gray-50 relative overflow-hidden">
      {/* Background SVG Illustrations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="absolute top-10 right-10 w-80 h-80" viewBox="0 0 1094 760">
          <rect width="130.73" height="39.52" x="155" y="304.52" fill="#55198b" opacity=".1" rx="7.43" />
          <rect width="130.73" height="39.52" x="291.81" y="344.05" fill="#55198b" opacity=".1" rx="7.43" />
          <rect width="130.73" height="39.52" x="428.63" y="383.57" fill="#55198b" opacity=".1" rx="7.43" />
          <rect width="130.73" height="39.52" x="580.64" y="304.52" fill="#55198b" opacity=".1" rx="7.43" />
          <rect width="130.73" height="39.52" x="717.45" y="344.05" fill="#55198b" opacity=".1" rx="7.43" />
          <rect width="130.73" height="39.52" x="854.27" y="383.57" fill="#55198b" opacity=".1" rx="7.43" />
          <polygon fill="#3f3d56" points="240 321 194 603 402 581 393 557 230.5 570.5 268.5 320.5 240 321" />
          <polygon fill="#3f3d56" points="186 1 466 0 547 613 266 651 186 1" />
          <polygon fill="#fff" points="216.5 24.5 442.5 24.5 521.5 594.5 288.5 626.5 216.5 24.5" />
        </svg>

        <svg className="absolute bottom-10 left-10 w-64 h-64" viewBox="0 0 795.394 574.038">
          <ellipse cx="232.058" cy="450.069" fill="#e0e0e0" rx="35.095" ry="5.264" />
          <polygon
            fill="#55198b"
            points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224"
          />
          <ellipse cx="553.394" cy="272" fill="#f5f5f5" rx="29" ry="20" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Experience
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Building innovative solutions and contributing to dynamic development teams across corporate and freelance
            environments.
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card relative overflow-hidden group"
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star size={14} />
                      Featured
                    </span>
                  </motion.div>
                )}

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg viewBox="0 0 1144 617.32" className="w-full h-full">
                    <path
                      fill="currentColor"
                      d="M1172,537.57a181.92,181.92,0,0,1-6.85,49.6,180.06,180.06,0,0,1-19.27,44.28c0,50.1-33.82,93.4-82.91,114a167.3,167.3,0,0,1-64.73,12.8H245.17c-40.25,0-77.55-10.86-108.14-29.36"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <motion.h3 className="text-2xl font-bold gradient-text mb-2" whileHover={{ scale: 1.05 }}>
                        {exp.title}
                      </motion.h3>

                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                        <motion.span
                          className={`px-2 py-1 rounded-full text-xs ${
                            exp.type === "Freelance" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, color: "#6366f1" }}>
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </motion.div>
                        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, color: "#6366f1" }}>
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {exp.clients && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users size={16} />
                        Client Portfolio:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.clients.map((client, clientIndex) => (
                          <motion.span
                            key={clientIndex}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                            whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "white" }}
                          >
                            {client}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.1 * achIndex }}
                        >
                          <motion.span
                            className="text-green-500 mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: achIndex * 0.3 }}
                          >
                            ✓
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.05 * techIndex }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute top-8 right-16 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <TrendingUp size={16} className="text-green-600" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 right-8 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <Zap size={12} className="text-yellow-600" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Special Section for Freelance Experience with Illustration */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
            {/* Freelance Experience Card */}
            <motion.div
              variants={itemVariants}
              className="card bg-gradient-to-r from-indigo-50 to-purple-50 relative overflow-hidden"
            >
              <motion.h3 className="text-xl font-semibold mb-4" whileHover={{ scale: 1.02 }}>
                Freelance Full Stack Developer
              </motion.h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As an independent contractor, I've delivered comprehensive web development solutions, specializing in
                scalable enterprise applications and modern web technologies. My work involves end-to-end development,
                from conceptualization to deployment, ensuring high-quality and client satisfaction.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "10+", label: "Custom Apps", icon: <Code size={20} /> },
                  { value: "100%", label: "Client Satisfaction", icon: <Star size={20} /> },
                  { value: "AWS", label: "Cloud Solutions", icon: <Users size={20} /> },
                  { value: "CI/CD", label: "Automated Deployments", icon: <TrendingUp size={20} /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-indigo-600 mb-2 flex justify-center group-hover:text-purple-600 transition-colors"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold gradient-text mb-1"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Freelance Illustration */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center p-4" // Added padding and flex for centering
            >
              <FreelanceIllustration />
            </motion.div>
          </div>

          {/* Professional Journey Summary */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
            <motion.div
              variants={itemVariants}
              className="card bg-gradient-to-r from-indigo-50 to-purple-50 relative overflow-hidden"
            >
              <motion.h3 className="text-xl font-semibold mb-4" whileHover={{ scale: 1.02 }}>
                Professional Journey
              </motion.h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My career spans both corporate and freelance environments, giving me a unique perspective on diverse
                business requirements and technical challenges. From enterprise-level LMS platforms to custom client
                solutions, I've consistently delivered high-quality software that drives business growth and user
                satisfaction.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "15+", label: "Projects Delivered", icon: <Code size={20} /> },
                  { value: "100%", label: "Client Satisfaction", icon: <Star size={20} /> },
                  { value: "10+", label: "Happy Clients", icon: <Users size={20} /> },
                  { value: "2+", label: "Years Experience", icon: <TrendingUp size={20} /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-indigo-600 mb-2 flex justify-center group-hover:text-purple-600 transition-colors"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold gradient-text mb-1"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Data Science Illustration - Moved to be beside the card */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center p-4" // Added padding and flex for centering
            >
              <DataScienceIllustration />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
