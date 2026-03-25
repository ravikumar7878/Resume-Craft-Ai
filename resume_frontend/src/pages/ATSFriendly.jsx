import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Animation ke liye
import {
  FaCheckCircle,
  FaRobot,
  FaFileAlt,
  FaSearch,
  FaBolt,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const ATSFriendly = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      
      {/* HERO SECTION - Premium Gradient */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="hero-content text-center py-24 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FaShieldAlt /> Trusted by 10,000+ Job Seekers
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              Beat the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">ATS Bot</span> <br /> 
              Get Your Dream Interview
            </h1>

            <p className="py-6 text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
              75% of resumes are rejected before a human even sees them. Our AI ensures your 
              resume is structured, keyword-optimized, and perfectly parsed by modern 
              Applicant Tracking Systems.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/generate-resume">
                <button className="btn btn-primary btn-lg px-12 rounded-full shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                  Build My ATS Resume
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* THE "WHY" SECTION - Insightful Explanation */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Science of ATS Parsing</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            "It's not just about what you write, it's about how the machine reads it."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <FaRobot className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Optical Character Recognition</h3>
            <p className="text-slate-600 leading-relaxed">
              Standard fonts and layouts ensure the OCR technology reads every letter accurately. 
              Fancy graphics "blind" the system, causing data loss.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <FaSearch className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Semantic Keyword Matching</h3>
            <p className="text-slate-600 leading-relaxed">
              Our AI analyzes job descriptions to inject high-intent keywords naturally, 
              moving you to the top of the recruiter's search results.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
              <FaFileAlt className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Standardized Taxonomies</h3>
            <p className="text-slate-600 leading-relaxed">
              By using industry-standard headers (e.g., "Work Experience" vs "My Journey"), 
              we ensure your data maps correctly to the recruiter's database.
            </p>
          </motion.div>
        </div>
      </div>

      {/* COMPARISON / TIPS SECTION */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            ATS Golden Rules for 2026
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Use standard headers: Education, Skills, Experience.",
              "Avoid tables, text boxes, and multi-column layouts.",
              "Stick to web-safe fonts like Arial, Calibri, or Roboto.",
              "Always upload in .docx or flattened .pdf format.",
              "Balance keyword density—don't 'keyword-stuff'!",
              "Quantify achievements with numbers ($ or %)."
            ].map((tip, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <FaCheckCircle className="text-primary flex-shrink-0" />
                <span className="text-slate-300">{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP PROCESS - Visualized */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The AI-Powered Workflow</h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Steps with connecting lines in desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            
            {[
                { step: "01", title: "Data Ingestion", desc: "Our system parses your raw details using NLP (Natural Language Processing).", icon: <FaBolt />, color: "bg-warning" },
                { step: "02", title: "AI Optimization", desc: "Algorithms match your profile against 50,000+ job-specific success patterns.", icon: <FaRobot />, color: "bg-primary" },
                { step: "03", title: "Final Validation", desc: "Get a clean, high-score resume ready for Greenhouse, Workday, or Lever.", icon: <FaChartLine />, color: "bg-success" }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    {...fadeInUp}
                    className="flex flex-col items-center text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-lg"
                >
                    <div className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                        {item.icon}
                    </div>
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Step {item.step}</span>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* FINAL CTA - High Conversion */}
      <div className="px-6 pb-24">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-primary to-indigo-700 rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop getting ghosted by recruiters.</h2>
          <p className="mb-10 text-primary-content/80 text-lg max-w-xl mx-auto font-medium">
            Join thousands of successful candidates who used our AI to bypass the filters. 
            Takes less than 5 minutes.
          </p>

          {/* <Link to="/generate-resume">
            <button className="btn bg-white hover:bg-slate-100 text-primary border-none btn-lg px-12 rounded-full font-bold shadow-xl">
              Create My ATS Resume Now <FaLightbulb className="ml-2" />
            </button>
          </Link> */}
        </motion.div>
      </div>

    </div>
  );
};

export default ATSFriendly;