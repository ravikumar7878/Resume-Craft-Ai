import React from 'react';
import { Link } from 'react-router-dom'; // Link import kiya
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion';
import { 
  FaUserGraduate, 
  FaLaptopCode, 
  FaRocket, 
  FaCheckCircle, 
  FaMagic, 
  FaSearchDollar, 
  FaChartLine, 
  FaShieldAlt 
} from 'react-icons/fa';

// Correct relative paths
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

export default function About() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 overflow-x-hidden">
      {/* Premium Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 py-24 px-10 text-white text-center"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-extrabold mb-6 tracking-tight relative z-10"
        >
          About <span className="text-blue-400">AI Resume Generator</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90 relative z-10"
        >
          Welcome to <span className="font-semibold text-blue-300">AI Resume Generator</span>, your intelligent assistant to create professional resumes effortlessly. 
          Our platform uses cutting-edge AI technology to craft resumes tailored to your skills and industry, saving you time and enhancing your chances of landing your dream job.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto p-10 space-y-32">
        
        {/* Core Value Prop Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeIn} className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-gray-100 transition-all hover:border-blue-300">
              <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200">
                <FaUserGraduate className="text-4xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">For Job Seekers</h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Generate resumes that highlight your strengths and get noticed by recruiters. 
                  Our system ensures your profile meets the specific demands of modern HR managers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-xl shadow-green-100/50 border border-gray-100 transition-all hover:border-green-300">
              <div className="bg-green-500 p-4 rounded-2xl shadow-lg shadow-green-200">
                <FaLaptopCode className="text-4xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Powered Efficiency</h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Our AI analyzes your skills and experience to produce optimized, professional resumes 
                  that pass through Applicant Tracking Systems (ATS) with a high success rate.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Deep Detail Content */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-blue-50 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-black mb-6 text-slate-900">The Technology Behind It</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We utilize **Natural Language Processing (NLP)** to understand the nuances of your career. 
                Unlike static templates, our AI dynamic-fills information based on **market-trending keywords** specific to your role.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                  <FaCheckCircle className="text-blue-500" /> <span>ATS Optimized</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                  <FaChartLine className="text-blue-500" /> <span>Career Growth Analysis</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                  <FaShieldAlt className="text-blue-500" /> <span>Privacy Focused</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                  <FaSearchDollar className="text-blue-500" /> <span>Salary Benchmark</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Deep Meaning Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-slate-900 text-white p-16 rounded-[3rem] shadow-3xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <FaRocket className="text-6xl text-blue-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl font-bold mb-6">Empowering Careers Globally</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed italic">
              "We believe that a piece of paper shouldn't be the barrier between talent and opportunity. 
              Our mission is to bridge that gap by using AI to showcase the true potential of every professional, 
              ensuring your first impression is nothing short of exceptional."
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
          </div>
        </motion.div>

        {/* Customer Reviews Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-black mb-16 text-center text-slate-900"
          >
            What Our Users Say
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { img: avatar1, name: "Ravi Kumar", text: "This tool made creating my resume so easy! Highly recommend for freshers.", role: "Junior Developer" },
              { img: avatar2, name: "Anjali Mehta", text: "AI Resume Generator helped me land interviews in record time.", role: "UX Researcher" },
              { img: avatar3, name: "Siddharth Roy", text: "The AI suggestions were spot on. My resume has never looked better!", role: "Project Manager" }
            ].map((user, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white shadow-2xl shadow-slate-200 rounded-[2rem] p-10 text-center border border-transparent hover:border-blue-200 transition-all"
              >
                <div className="relative inline-block mb-6">
                  <img src={user.img} alt={user.name} className="w-24 h-24 mx-auto rounded-full object-cover ring-4 ring-blue-50 shadow-lg" />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full">
                    <FaMagic className="text-white text-xs" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{user.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-sm tracking-widest uppercase">{user.role}</p>
                <p className="text-gray-600 leading-relaxed italic">"{user.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Final CTA - Linked to Resume Generation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-10"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Ready to transform your career?</h2>
          <Link to="/generate-resume"> {/* Path Linked Here */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-300 hover:shadow-blue-400 transition-all inline-block"
            >
              Create My AI Resume
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}