import { mySocials } from "../constants";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { Particles } from "../components/Particles";

const Footer = () => {
  // Function to get the appropriate icon for each social
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5 hover:text-blue-400 transition-colors" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />;
      case 'twitter':
        return <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors" />;
      case 'email':
        return <Mail className="w-5 h-5 hover:text-red-400 transition-colors" />;
      default:
        return <ExternalLink className="w-5 h-5 hover:text-gray-300 transition-colors" />;
    }
  };

  return (
    <section className="relative c-space">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <Particles />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 pb-3 text-sm text-neutral-400">
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        
        <div className="flex gap-3 sm:gap-4 text-xs order-3 sm:order-1">
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <span className="text-neutral-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        
        <div className="flex gap-3 sm:gap-4 order-2">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-800 transition-all duration-200 group"
              title={social.name}
            >
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>
        
        <p className="text-xs order-1 sm:order-3">© 2025 Rayyan. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
