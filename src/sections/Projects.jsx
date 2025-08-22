import React, { useState, useMemo } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [preview, setPreview] = useState(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  // Get unique categories from projects
  const categories = useMemo(() => {
    const allCategories = ["All", ...new Set(myProjects.flatMap(project => project.technologies))];
    return allCategories.slice(0, 8); // Limit to 8 categories
  }, []);
  
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return myProjects;
    return myProjects.filter(project => 
      project.technologies?.some(tech => tech === selectedCategory)
    );
  }, [selectedCategory]);
  
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-heading mb-4">My Creative Portfolio</h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-8">
          Explore my collection of innovative projects, each crafted with precision and creativity 
          to deliver exceptional user experiences and cutting-edge solutions.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-lavender to-royal text-white shadow-lg"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Project
              {...project}
              setPreview={setPreview}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
          <p className="text-neutral-400">Try selecting a different category to see more projects.</p>
        </motion.div>
      )}

      {/* Floating preview indicator */}
      {preview && (
        <motion.div
          className="fixed pointer-events-none z-50 hidden lg:block"
          style={{
            left: springX,
            top: springY,
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
        >
          <div className="relative">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={preview}
                alt="Project preview"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-lavender/20 to-royal/20 blur-xl -z-10" />
          </div>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20"
      >
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium rounded-xl bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Talk
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
