import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Animation library

const LandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/generate-resume");
    } else {
      navigate("/login");
    }
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      {/* ================= PREMIUM HERO SECTION ================= */}
      <section className="hero min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 text-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

        <div className="hero-content text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="badge badge-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold mb-6 shadow-xl py-4 px-6"
            >
              ✨ AI-Powered Career Transformation
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl mb-6"
            >
              Land Your Dream Job <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                With AI Precision
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="py-6 text-xl md:text-2xl opacity-80 max-w-2xl mx-auto font-light"
            >
              Craft a high-impact, ATS-friendly resume in seconds. Our AI
              understands what recruiters want.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 justify-center mt-8"
            >
              <Link
                to="/generate-resume"
                onClick={handleGetStarted}
                className="btn bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-extrabold px-12 py-4 rounded-2xl shadow-[0_10px_40px_rgba(251,191,36,0.4)] hover:scale-110 transition-all duration-300 border-none h-auto text-lg"
              >
                Create My Resume Now
              </Link>

              <Link
                to="/modern-templates"
                className="btn btn-outline border-2 border-white/50 text-white hover:bg-white hover:text-indigo-900 px-12 py-4 rounded-2xl backdrop-blur-sm h-auto text-lg"
              >
                View Premium Templates
              </Link>
            </motion.div>

            {/* TRUST BADGES - Ab ye links hain */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/ats-friendly"
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
              >
                ATS Friendly
              </Link>
              <Link
                to="/modern-templates"
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
              >
                Modern Templates
              </Link>
              <Link
                to="/instant-download"
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
              >
                Instant Download
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-32 bg-base-200 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Why Choose Our AI?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🚀",
                title: "AI-Powered",
                desc: "Advanced neural networks that write high-impact bullet points for you.",
              },
              {
                icon: "📄",
                title: "Smart Templates",
                desc: "Hand-crafted designs that pass through ATS filters with 100% success.",
              },
              {
                icon: "💼",
                title: "Role Specific",
                desc: "Customized keywords for 500+ industries to make you stand out.",
              },
            ].map((feature, i) => (
              <motion.div
                whileHover={{ y: -15 }}
                key={i}
                className="group card bg-base-100 shadow-2xl rounded-[2rem] p-10 border border-base-300 hover:border-indigo-500 transition-all duration-500"
              >
                <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PREMIUM STATS SECTION ================= */}
      <section className="py-24 bg-indigo-900 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
          {[
            { val: "10K+", label: "Resumes Generated" },
            { val: "95%", label: "Interview Success Rate" },
            { val: "24/7", label: "AI Expert Availability" },
          ].map((stat, i) => (
            <div key={i} className="p-8">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-400 mb-2">
                {stat.val}
              </div>
              <div className="text-indigo-200 text-lg uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "John Doe",
                role: "Software Engineer",
                img: "1",
                text: "This AI resume maker saved me weeks of frustration! My resume looks elite.",
              },
              {
                name: "Jane Smith",
                role: "Marketing Specialist",
                img: "2",
                text: "The templates are gorgeous. I got a callback within 24 hours of applying!",
              },
            ].map((user, i) => (
              <motion.div
                initial={{ x: i === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                key={i}
                className="flex flex-col bg-indigo-50/50 p-10 rounded-[3rem] border border-indigo-100"
              >
                <p className="text-xl italic text-gray-700 mb-8 font-medium">
                  "{user.text}"
                </p>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
                      <img
                        src={`https://randomuser.me/api/portraits/${i === 0 ? "men" : "women"}/${user.img}.jpg`}
                        alt={user.name}
                      />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-xl">{user.name}</h4>
                    <p className="text-indigo-600 font-semibold">{user.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-800 to-indigo-800 rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Elevate Your Career?
          </h2>
          <p className="mb-12 text-xl opacity-80 max-w-2xl mx-auto">
            Join the future of job searching. Let our AI build your bridge to
            success.
          </p>
          <button
            onClick={handleGetStarted}
            className="
    btn
    bg-white text-indigo-900
    hover:bg-yellow-400 hover:text-gray-900
    font-black
    px-6 py-3 text-sm
    sm:px-8 sm:py-4 sm:text-base
    md:px-12 md:py-5 md:text-lg
    rounded-2xl
    transition-all
    border-none
    shadow-2xl
    w-full sm:w-auto
    text-center
    whitespace-normal
    leading-tight
  "
          >
            Get Started For Free
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-gray-400 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-black text-3xl text-white mb-6">
              AI Resume Maker
            </h4>
            <p className="max-w-sm text-lg leading-relaxed">
              Empowering job seekers with state-of-the-art AI technology to land
              their dream roles at top companies.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} AI Resume Maker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
