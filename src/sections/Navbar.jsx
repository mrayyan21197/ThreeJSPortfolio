import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", target: "work" },
  { label: "Stack", target: "stack" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #212121",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
        className="max-sm:px-6 flex items-center justify-between h-14"
      >
        {/* Left: Name + tag */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 cursor-pointer">
          <span
            className="text-fg font-bold text-base"
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
          >
            Rayyan
          </span>
          <span
            className="hidden sm:inline text-green text-[10px] font-mono border border-green/30 px-1.5 py-0.5 rounded"
          >
            Full-Stack Dev
          </span>
        </button>

        {/* Center: Nav links */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-muted hover:text-fg text-sm transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:block bg-green text-background text-xs font-semibold px-4 py-2 rounded cursor-pointer hover:bg-green-dark transition-colors duration-200"
            style={{ borderRadius: "6px" }}
          >
            Hire me →
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-muted hover:text-fg transition-colors p-1"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid #212121" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden sm:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="text-muted hover:text-fg text-base transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 bg-green text-background text-sm font-semibold px-4 py-3 rounded cursor-pointer hover:bg-green-dark transition-colors"
              >
                Hire me →
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
