import React from 'react';
import { 
  FaFileAlt, FaMagic, FaChartLine, FaCheckCircle, 
  FaLinkedin, FaPenNib, FaUserTie, FaSearch, 
  FaGlobe, FaBriefcase, FaShieldAlt, FaRocket,
  FaRobot, FaFilePdf
} from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Services() {
  // Safe Animation Variants - Fixed the Bezier Error
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" // Fixed: Using standard easing to avoid browser errors
      } 
    }
  };

  const services = [
    { title: "Smart Resume Templates", icon: <FaFileAlt className="text-blue-500" />, desc: "ATS-friendly layouts jo har industry ke liye perfect hain.", color: "border-blue-500" },
    { title: "AI Skill Gap Analysis", icon: <FaMagic className="text-purple-500" />, desc: "Missing keywords dhoondhein aur apna score badhayein.", color: "border-purple-500" },
    { title: "ATS Deep Scan", icon: <FaSearch className="text-red-500" />, desc: "Dekhiye aapka resume recruiters ke system mein kaisa dikhta hai.", color: "border-red-500" },
    { title: "AI Cover Letters", icon: <FaPenNib className="text-orange-500" />, desc: "Personalized cover letters jo aapke resume se match karein.", color: "border-orange-500" },
    { title: "LinkedIn Profile SEO", icon: <FaLinkedin className="text-cyan-600" />, desc: "Search results mein top par aane ke liye profile optimize karein.", color: "border-cyan-600" },
    { title: "Interview Prep Bot", icon: <FaUserTie className="text-rose-500" />, desc: "Aapke career ke hisaab se mock questions aur AI feedback.", color: "border-rose-500" },
    { title: "Digital Portfolio", icon: <FaBriefcase className="text-yellow-500" />, desc: "Apne kaam ko showcase karne ke liye ek live professional link.", color: "border-yellow-500" },
    { title: "Global Language Support", icon: <FaGlobe className="text-indigo-500" />, desc: "International jobs ke liye 15+ languages mein translation.", color: "border-indigo-500" },
    { title: "AI Summary Writer", icon: <FaRobot className="text-teal-500" />, desc: "Professional bio aur summary jo pehli baar mein impact dale.", color: "border-teal-500" },
    { title: "One-Click PDF Export", icon: <FaFilePdf className="text-red-600" />, desc: "High-quality PDF formats jo har jagah accept hote hain.", color: "border-red-600" },
    { title: "Data Privacy Guard", icon: <FaShieldAlt className="text-emerald-500" />, desc: "Aapka data encrypted hai. Hum aapki privacy ka dhyan rakhte hain.", color: "border-emerald-500" },
    { title: "Career Roadmap", icon: <FaRocket className="text-pink-500" />, desc: "AI batayega agla step kya hona chahiye aapki growth ke liye.", color: "border-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-20 font-sans">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Everything You Need to <span className="text-blue-600">Get Hired</span>
        </h1>
        <p className="text-lg text-gray-600">
          Humne 12+ premium AI tools ko combine kiya hai taaki aapka 
          resume hiring managers ki pehli pasand ban jaye.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`bg-white p-8 rounded-[2rem] shadow-sm border-t-4 ${service.color} flex flex-col items-center text-center`}
          >
            <div className="text-5xl mb-6 p-4 bg-gray-50 rounded-2xl">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {service.desc}
            </p>

            <div className="mt-auto flex items-center gap-2 text-green-500 font-bold text-[10px] uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
              <FaCheckCircle />
              AI Powered
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle Footer */}
      <footer className="mt-24 text-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
        <p className="text-gray-400 text-sm italic">
          * Design curated for high-performance recruitment workflows (2026 Edition)
        </p>
      </footer>
    </div>
  );
}