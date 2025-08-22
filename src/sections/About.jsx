import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", level: 80, color: "from-blue-600 to-indigo-600" },
    { name: "Next.js", level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "AWS", level: 70, color: "from-orange-500 to-red-500" },
    { name: "Docker", level: 75, color: "from-blue-500 to-indigo-500" },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="c-space section-spacing" id="about">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            className="text-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-lavender to-royal mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm <span className="bg-gradient-to-r from-lavender to-royal bg-clip-text text-transparent">Rayyan</span>
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Technical Skills</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-primary/20 to-primary/10 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-lavender to-royal bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-400 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="relative h-64">
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-lavender/20 to-royal/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-royal/20 to-lavender/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-lavender/20 to-royal/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Start a Project Together?
            </h4>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
