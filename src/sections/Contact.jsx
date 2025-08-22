import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate email sending (replace with actual emailjs implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showAlertMessage("success", "Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showAlertMessage("error", "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Phone",
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🌍",
      title: "Location",
      value: "Pakistan",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative c-space section-spacing" id="contact">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <Particles />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? I'm here to help you create innovative, 
            scalable solutions that make a difference. Let's start a conversation!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  className="group block p-6 bg-gradient-to-br from-primary/20 to-primary/10 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-primary/30 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{method.title}</h3>
                      <p className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                    <div className="text-neutral-400 group-hover:text-lavender transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/10 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-neutral-300 mb-4">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-lavender/20 to-royal/20 border border-lavender/30 rounded-xl flex items-center justify-center text-lavender hover:from-lavender hover:to-royal hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">🔗</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-lavender/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-lavender/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-lavender/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 text-white font-semibold bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-400">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lavender/20 to-royal/20 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-royal/20 to-lavender/20 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <Alert
          type={alertType}
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </section>
  );
};

export default Contact;
