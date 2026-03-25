import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaClock } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Make sure to run: npm install framer-motion

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to the royal chambers.`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6 md:p-12 flex items-center justify-center">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
      >
        
        {/* Left Side: Deep Contact Info & Branding */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm">Get in touch</h2>
            <h1 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Let's Create Something <span className="text-blue-500">Extraordinary.</span>
            </h1>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Whether you have a question about features, pricing, or just want to say hello, 
              our team is ready to assist you. Experience the premium support you deserve.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500 transition-colors">
                <FaEnvelope className="text-xl text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email us at</p>
                <p className="text-lg font-medium">contact@airesumegen.com</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-green-500/20 rounded-full group-hover:bg-green-500 transition-colors">
                <FaPhone className="text-xl text-green-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call our concierge</p>
                <p className="text-lg font-medium">+91 9876543210</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-red-500/20 rounded-full group-hover:bg-red-500 transition-colors">
                <FaMapMarkerAlt className="text-xl text-red-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Visit our headquarters</p>
                <p className="text-lg font-medium">Bangalore, Silicon Valley of India</p>
              </div>
            </motion.div>

            <div className="flex items-center space-x-4 group border-t border-white/10 pt-6">
              <div className="p-4 bg-yellow-500/20 rounded-full">
                <FaClock className="text-xl text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Business Hours</p>
                <p className="text-lg font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all"><FaLinkedin size={20}/></motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-sky-400 transition-all"><FaTwitter size={20}/></motion.a>
          </div>
        </motion.div>

        {/* Right Side: Animated Contact Form */}
        <motion.div 
          variants={fadeInUp}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-inner"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                name="message"
                placeholder="How can we help you today?"
                className="w-full bg-white/5 border border-white/20 rounded-xl p-4 h-40 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Send Royal Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}