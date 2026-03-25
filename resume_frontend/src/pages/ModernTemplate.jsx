import React from "react";
import { FaCheckCircle, FaRocket, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Animation ke liye
import modernProfessional from "../assets/templates/modern-professional.jpg";
import minimalATS from "../assets/templates/minimal-ats.jpg";
import executivePremium from "../assets/templates/executive-premium.jpg";
import creativeModern from "../assets/templates/creative-modern.jpg";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and professional layout perfect for software developers and corporate roles.",
    image: modernProfessional,
    ats: true,
  },
  {
    id: 2,
    name: "Minimal ATS",
    description: "Simple and ATS optimized template designed for maximum readability.",
    image: minimalATS,
    ats: true,
  },
  {
    id: 3,
    name: "Executive Premium",
    description: "Premium modern layout suitable for senior and management roles.",
    image: executivePremium,
    ats: true,
  },
  {
    id: 4,
    name: "Creative Modern",
    description: "Modern stylish design for designers and creative professionals.",
    image: creativeModern,
    ats: false,
  },
];

const ModernTemplate = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-base-200/50">
      {/* HERO SECTION WITH ANIMATION */}
      <div className="relative overflow-hidden bg-base-100 shadow-sm border-b border-base-300">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content text-center py-24 mx-auto"
        >
          <div className="max-w-4xl px-4">
            <div className="badge badge-primary badge-outline mb-4 gap-2 py-3 px-4">
              <FaMagic /> AI-Powered Optimization
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              Elevate Your Career with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Modern Templates
              </span>
            </h1>
            <p className="py-8 text-base-content/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Stand out from the crowd with our hand-crafted, high-conversion resume designs. 
              Built for speed, beauty, and recruiter approval.
            </p>
          </div>
        </motion.div>
        
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
      </div>

      {/* TEMPLATE GRID WITH STAGGER ANIMATION */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-200 overflow-hidden"
            >
              <figure className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={template.image}
                  alt={template.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Link to="/generate-resume" className="btn btn-primary btn-sm rounded-full">Use This Template</Link>
                </div>
              </figure>

              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="card-title text-lg font-bold leading-tight">
                    {template.name}
                  </h2>
                  {template.ats && (
                    <div className="tooltip tooltip-left" data-tip="ATS Friendly">
                      <FaCheckCircle className="text-success text-xl" />
                    </div>
                  )}
                </div>

                <p className="text-base-content/60 text-sm leading-relaxed mb-4">
                  {template.description}
                </p>
                
                <div className="card-actions justify-start">
                   {template.ats ? 
                    <span className="badge badge-ghost badge-sm py-3">ATS COMPLIANT</span> : 
                    <span className="badge badge-ghost badge-sm py-3">CREATIVE</span>
                   }
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA SECTION WITH GRADIENT & ICON */}
      <div className="px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary p-1 rounded-[2.5rem] shadow-2xl"
        >
          <div className="bg-base-100 rounded-[2.4rem] py-16 px-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to land your <span className="text-primary">dream job?</span>
              </h2>
              <p className="mb-10 text-xl text-base-content/70 max-w-xl mx-auto">
                Join thousands of successful candidates who used our modern layouts to get hired.
              </p>
              <Link to="/generate-resume">
                <button className="btn btn-primary btn-lg px-12 rounded-full gap-3 hover:gap-5 transition-all group shadow-lg">
                  Start Building Now <FaRocket className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernTemplate;