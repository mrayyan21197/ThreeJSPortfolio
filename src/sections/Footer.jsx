import { mySocials } from "../constants";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

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
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="flex gap-4 text-xs">
        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        <span className="text-neutral-600">|</span>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      </div>
      
      <div className="flex gap-4">
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
      
      <p className="text-xs">© 2025 Rayyan. All rights reserved.</p>
    </section>
  );
};

export default Footer;
