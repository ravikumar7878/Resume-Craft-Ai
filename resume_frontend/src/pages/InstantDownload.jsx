import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Animations ke liye
import {
  FaFilePdf,
  FaDownload,
  FaCheckCircle,
  FaBolt,
  FaEye,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";

const InstantDownload = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const [activeInfo, setActiveInfo] = useState(null);

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content overflow-hidden">
      {/* BACKGROUND DECORATION (Premium Feel) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* HERO SECTION */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="hero bg-base-100/50 backdrop-blur-md shadow-2xl border-b border-primary/10 relative z-10"
      >
        <div className="hero-content text-center py-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="badge badge-primary badge-outline mb-4 p-4 gap-2 font-bold"
            >
              <FaCrown className="text-warning" /> PREMIUM ATS ACCESS
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Instant Resume{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Download
              </span>
            </h1>

            <p className="py-6 text-base-content/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Your career is ready to take a professional leap forward. Our
              AI-powered engine ensures that your resume is optimized to
              successfully pass 99% of ATS (Applicant Tracking Systems), giving
              you a competitive edge in today’s job market.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/generate-resume">
                <button className="btn btn-primary btn-lg gap-3 px-12 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-primary/40 transition-all">
                  <FaEye className="text-xl" />
                  Go to Resume Generator
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* STEP BY STEP PROCESS WITH CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple 3-Step Success</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {/* STEP 1 */}
          <motion.div
            variants={fadeInUp}
            className="group card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all duration-500"
          >
            <div className="card-body items-center text-center p-10">
              <div className="w-20 h-20 bg-warning/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <FaBolt className="text-warning text-4xl" />
              </div>
              <h3 className="text-2xl font-bold">1. Smart Data Entry</h3>
              <p className="text-base-content/60 mt-2">
                Simply enter your basic details, and our advanced AI will take
                care of the rest.
              </p>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            variants={fadeInUp}
            className="group card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all duration-500"
          >
            <div className="card-body items-center text-center p-10">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <FaEye className="text-primary text-4xl" />
              </div>
              <h3 className="text-2xl font-bold">2. Live Preview</h3>
              <p className="text-base-content/60 mt-2">
                Preview your design in real time and customize it before
                downloading.
              </p>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            variants={fadeInUp}
            className="group card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all duration-500"
          >
            <div className="card-body items-center text-center p-10">
              <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <FaDownload className="text-success text-4xl" />
              </div>
              <h3 className="text-2xl font-bold">3. One-Click Save</h3>
              <p className="text-base-content/60 mt-2">
                As soon as you click the “Download PDF” button, your resume will
                be saved in high-definition quality.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* PREMIUM BENEFITS SECTION */}
      <div className="bg-neutral text-neutral-content py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Why Industry Experts <br />
                <span className="text-primary">Trust Our Format?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "ATS-Optimized structure for high ranking.",
                  "Clean, minimalist layout for readability.",
                  "Zero compression – High quality fonts and icons.",
                  "Directly sharable on LinkedIn & Indeed.",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/40 transition-colors">
                      <FaCheckCircle className="text-primary" />
                    </div>
                    <span className="text-lg opacity-90">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              <div
                onClick={() => setActiveInfo("secure")}
                className="bg-base-100/10 p-8 rounded-3xl border border-white/10 text-center cursor-pointer hover:scale-105 transition duration-300"
              >
                <FaShieldAlt className="text-4xl mx-auto mb-4 text-secondary" />
                <p className="font-bold">Secure Data</p>
              </div>

              <div
                onClick={() => setActiveInfo("pdf")}
                className="bg-base-100/10 p-8 rounded-3xl border border-white/10 text-center mt-8 cursor-pointer hover:scale-105 transition duration-300"
              >
                <FaFilePdf className="text-4xl mx-auto mb-4 text-error" />
                <p className="font-bold">PDF/A Format</p>
              </div>

              {activeInfo && (
                <div className="mt-8 p-6 bg-base-200 rounded-2xl border border-white/10 text-left">
                  {activeInfo === "secure" && (
                    <>
                      <h3 className="text-xl font-bold mb-2">
                        🔒 Advanced AI Data Security
                      </h3>
                      <p>
                        Our AI Resume Generator uses end-to-end encryption to
                        protect your personal information. Your data is never
                        shared with third parties and is securely processed in a
                        protected cloud environment.
                      </p>
                      <button
                        onClick={() => setActiveInfo(null)}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-xl"
                      >
                        Close
                      </button>
                    </>
                  )}

                  {activeInfo === "pdf" && (
                    <div className="bg-white text-black p-6 rounded-xl shadow-xl border-l-4 border-red-500">
                      <h3 className="text-2xl font-bold mb-3 text-red-600">
                        📄 Professional PDF/A Resume Format
                      </h3>

                      <p className="mb-3 leading-relaxed">
                        Your resume is generated in industry-standard PDF/A
                        format, specially optimized for long-term digital
                        storage and professional use.
                      </p>

                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          ✔ 99% ATS (Applicant Tracking System) compatibility
                        </li>
                        <li>
                          ✔ Maintains consistent layout across all devices
                        </li>
                        <li>✔ High-quality printing support</li>
                        <li>✔ Secure and tamper-resistant format</li>
                      </ul>
                      <button
                        onClick={() => setActiveInfo(null)}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-xl"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* FINAL PREMIUM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto my-20 px-6"
      >
        <div className="bg-gradient-to-br from-primary via-secondary to-accent p-12 rounded-[3rem] text-primary-content text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mb-10 text-xl opacity-90 max-w-2xl mx-auto">
            Your hard work deserves the right design. Download your professional
            resume today.
          </p>

          <Link to="/generate-resume">
            <button className="btn btn-neutral btn-lg rounded-full px-12 hover:scale-110 transition-transform shadow-2xl">
              <FaFilePdf className="mr-2" /> Generate & Download Now
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default InstantDownload;
