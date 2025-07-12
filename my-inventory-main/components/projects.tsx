"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Eye, Filter, Star, Code, Zap, Users } from "lucide-react"
import { ProjectsIllustration } from "./projects-illustration"
// Import the new TaskIllustration component
// Remove the import for TaskIllustration
// - import { TaskIllustration } from "./task-illustration"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Enterprise ERP Admin System",
      category: "Enterprise Software",
      description:
        "This full-scale ERP solution provides complete HR and administrative management for enterprises. Built with scalable cloud infrastructure using AWS services, the system handles complex business workflows with real-time data processing and automated compliance features.",
      image: <ProjectsIllustration />, // Using the existing ProjectsIllustration
      technologies: ["React.js", "Vite", "Spring Boot", "AWS RDS", "AWS EC2", "MySQL", "RESTful APIs"],
      features: [
        "Employee Profile Management with Document Storage",
        "Real-time Attendance Tracking & Auto Punch-out",
        "Leave Management with Approval Workflows",
        "Holiday Calendar Management with MD Approval",
        "Attendance Regularization System",
        "Employee Resignation Processing",
        "Role-based Access Control (Admin/Employee)",
        "Document Management System with File Upload",
      ],
      status: "Production Ready",
      client: "Enterprise Client",
      timeline: "6 months development cycle",
      apiEndpoints: "65+ REST endpoints",
      modules: "5 Core Modules",
      liveUrl: "https://erp-user-react-jet.vercel.app/",
      githubUrl: "https://github.com/suryakantnayak23?tab=repositories",
      featured: true,
    },
    {
      title: "Apartment Management System",
      category: "Full Stack",
      description:
        "A comprehensive management platform featuring a modern dashboard interface with navigation options to manage various tables including User Management, House Management, Approval Systems, and Visitor Tracking.",
      image: "/images/apartment_management_dashboard.png", // Changed to use the PNG image
      technologies: ["React.js", "Bootstrap 5", "JavaScript", "RESTful APIs"],
      features: [
        "Real-time dashboard with analytics",
        "User management and role-based access",
        "House allocation and management",
        "Visitor tracking system",
      ],
      liveUrl: "https://apartment-management-sh41.vercel.app/",
      githubUrl: "https://github.com/suryakantnayak23?tab=repositories",
    },
    // Remove the "Task Management Dashboard" project entry from the `projects` array
    // - {
    // -   title: "Task Management Dashboard",
    // -   category: "Productivity",
    // -   description:
    // -     "A sleek and intuitive dashboard designed for efficient task management and project tracking. Visualize your workflow, assign tasks, and monitor progress with ease.",
    // -   image: <TaskIllustration />,
    // -   technologies: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    // -   features: [
    // -     "Task creation and assignment",
    // -     "Progress tracking with visual indicators",
    // -     "User collaboration and role management",
    // -     "Customizable dashboards for different teams",
    // -   ],
    // -   liveUrl: "#", // Placeholder URL
    // -   githubUrl: "#", // Placeholder URL
    // - },
  ]

  const categories = ["All", "Enterprise Software", "Full Stack", "Frontend"]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A showcase of enterprise-level solutions, demonstrating expertise in modern cloud architecture and scalable
            system design.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter size={16} className="inline mr-2" />
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className={`card relative overflow-hidden group ${
                  project.featured ? "lg:col-span-2 xl:col-span-2" : ""
                }`}
              >
                {project.featured && (
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

                {/* Project Image/Illustration */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-6 overflow-hidden group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {typeof project.image === "string" ? (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      project.image
                    )}
                  </div>

                  {project.status && (
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </motion.div>
                  )}

                  {/* Floating Icons */}
                  <motion.div
                    className="absolute top-4 right-16 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Code size={16} className="text-indigo-600" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-8 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    <Zap size={12} className="text-yellow-600" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 right-8 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    <Users size={14} className="text-green-600" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <motion.h3
                      className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-sm text-indigo-600 font-medium">{project.category}</span>
                  </div>

                  {project.client && (
                    <div className="flex flex-wrap gap-2 text-sm">
                      <motion.span className="bg-blue-50 text-blue-700 px-2 py-1 rounded" whileHover={{ scale: 1.05 }}>
                        {project.client}
                      </motion.span>
                      {project.timeline && (
                        <motion.span
                          className="bg-purple-50 text-purple-700 px-2 py-1 rounded"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.timeline}
                        </motion.span>
                      )}
                    </div>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features & Capabilities</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.features.slice(0, project.featured ? 8 : 4).map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Special Metrics for Featured Project */}
                  {project.featured && (
                    <motion.div
                      className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center">
                        <motion.div className="font-bold text-indigo-600" whileHover={{ scale: 1.1 }}>
                          {project.apiEndpoints}
                        </motion.div>
                        <div className="text-xs text-gray-500">API Endpoints</div>
                      </div>
                      <div className="text-center">
                        <motion.div className="font-bold text-indigo-600" whileHover={{ scale: 1.1 }}>
                          {project.modules}
                        </motion.div>
                        <div className="text-xs text-gray-500">Core Modules</div>
                      </div>
                      <div className="text-center">
                        <motion.div className="font-bold text-indigo-600" whileHover={{ scale: 1.1 }}>
                          AWS
                        </motion.div>
                        <div className="text-xs text-gray-500">Cloud Infrastructure</div>
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary text-sm flex-1"
                    >
                      <Eye size={14} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-outline text-sm flex-1"
                    >
                      <Github size={14} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              <ExternalLink size={18} />
              View More Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
