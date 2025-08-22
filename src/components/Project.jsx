import React, { useState, useCallback, useMemo } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion, AnimatePresence } from "motion/react";

const Project = React.memo(({
  title,
  description,
  subDescription,
  href,
  image,
  technologies,
  setPreview,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleMouseEnter = useCallback(() => {
    setPreview(image);
  }, [image, setPreview]);
  
  const handleMouseLeave = useCallback(() => {
    setPreview(null);
  }, [setPreview]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Memoize the project card to prevent unnecessary re-renders
  const projectCard = useMemo(() => (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-primary/10 p-0 backdrop-blur-sm transition-all duration-700 hover:border-lavender/30 hover:bg-primary/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Action Button */}
        <motion.button
          className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-lavender to-royal rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openModal}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </motion.button>
        
        {/* Project Number Badge */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold border border-white/20">
          {index + 1}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-lavender transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies?.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-lavender/20 to-royal/20 text-lavender rounded-full border border-lavender/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {technologies?.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-neutral-800/50 text-neutral-400 rounded-full border border-neutral-700">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <motion.button
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-lavender to-royal rounded-xl hover:from-royal hover:to-lavender transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
          >
            View Details
          </motion.button>
          
          {href && (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-lavender border border-lavender/30 rounded-xl hover:bg-lavender/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lavender/5 to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-lavender/20 to-royal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  ), [title, description, technologies, href, image, index, handleMouseEnter, handleMouseLeave, openModal]);
  
  return (
    <>
      {projectCard}
      
      {/* Project Details Modal - Rendered separately */}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <ProjectDetails
            key={`modal-${title}-${index}`}
            title={title}
            description={description}
            subDescription={subDescription}
            href={href}
            image={image}
            technologies={technologies}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
});

Project.displayName = 'Project';

export default Project;
