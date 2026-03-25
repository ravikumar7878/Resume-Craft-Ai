import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Share2, 
  Cookie, 
  UserCircle, 
  RefreshCcw, 
  Mail 
} from "lucide-react";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      icon: <Database className="text-blue-500" />,
      title: "1. Information We Collect",
      content: "When you use our AI Resume Generator, we may collect personal information such as your name, email address, phone number, education details, work experience, skills, and other information you provide while creating your resume."
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: "2. How We Use Your Information",
      points: [
        "To generate AI-based resumes based on your input.",
        "To improve the performance and accuracy of our AI system.",
        "To store resumes if you choose to save them.",
        "To provide support and improve user experience."
      ]
    },
    {
      icon: <Lock className="text-purple-500" />,
      title: "3. Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      icon: <Share2 className="text-red-500" />,
      title: "4. Data Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. Your data is only used for resume generation and improving our services unless required by law."
    },
    {
      icon: <Cookie className="text-yellow-500" />,
      title: "5. Cookies and Tracking",
      content: "Our application may use cookies or similar technologies to enhance user experience, remember preferences, and analyze usage patterns."
    },
    {
      icon: <UserCircle className="text-indigo-500" />,
      title: "6. User Rights",
      content: "You have the right to access, update, or delete your personal data stored in our system. You may contact us for any data related requests."
    },
    {
      icon: <RefreshCcw className="text-orange-500" />,
      title: "7. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-4">
            <ShieldCheck size={48} className="text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Your trust is our priority. Learn how we handle your data with transparency and high-level security.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5 group"
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-base-200 group-hover:bg-primary/10 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-base-content/90 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                
                {section.content && (
                  <p className="text-base-content/70 leading-relaxed text-lg">
                    {section.content}
                  </p>
                )}
                
                {section.points && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-base-content/70">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.section 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl overflow-hidden"
          >
            <div className="card-body relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Mail size={32} />
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
              </div>
              <p className="opacity-90 text-lg mb-6">
                Have concerns or questions about your data? Reach out to our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex-1">
                  <p className="text-sm opacity-70">Email Support</p>
                  <p className="font-semibold text-lg underline italic cursor-pointer">support@airesumegenerator.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex-1">
                  <p className="text-sm opacity-70">Official Website</p>
                  <p className="font-semibold text-lg italic cursor-pointer">www.airesumegenerator.com</p>
                </div>
              </div>
            </div>
            {/* Background Decorative Circles */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-base-content/10">
          <p className="text-base-content/50 font-medium">
            © {new Date().getFullYear()} AI Resume Generator. 
            <span className="block sm:inline ml-0 sm:ml-2">Protected by Industry Standard Encryption.</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;