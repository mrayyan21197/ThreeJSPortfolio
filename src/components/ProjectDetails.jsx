import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  technologies,
  href,
  onClose,
}) => {
  const modalRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Validate required props
  if (!title || !description) {
    return null;
  }

  const modalContent = (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={modalRef}
        className="relative max-w-2xl w-full mx-4 border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-500 transition-colors z-10"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>
        
        {image && (
          <img src={image} alt={title} className="w-full rounded-t-2xl" />
        )}
        
        <div className="p-6">
          <h5 className="mb-3 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 font-normal text-neutral-300 leading-relaxed">{description}</p>
          
          {subDescription && Array.isArray(subDescription) && subDescription.length > 0 && (
            <div className="mb-4 space-y-2">
              {subDescription.map((subDesc, index) => (
                <p key={index} className="text-neutral-400 text-sm leading-relaxed">
                  • {subDesc}
                </p>
              ))}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <div className="flex gap-2 flex-wrap">
              {technologies && Array.isArray(technologies) && technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-lavender/20 to-royal/20 text-lavender rounded-full border border-lavender/30 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {href && (
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium text-lavender border border-lavender/30 rounded-lg hover:bg-lavender/10 transition-colors"
              >
                View Project
                <img src="assets/arrow-up.svg" className="w-4 h-4" alt="External link" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Use React Portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default ProjectDetails;
