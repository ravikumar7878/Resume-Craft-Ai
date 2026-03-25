/* eslint-disable no-unused-vars */
import { useAuth } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion"; // Make sure to: npm install framer-motion

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submit = async () => {
    // Basic Validation
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Note: Phone removed from parameters as requested
      await signup({ username, email, password });
      alert("✅ Account created successfully!");
      navigate("/home");
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden relative">
      {/* Animated Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[400px] p-10 rounded-[2.5rem] 
        bg-white/[0.03] backdrop-blur-2xl 
        border border-white/10 
        shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get Started
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Enter your details to create an account
          </p>
        </div>

        <div className="space-y-4">
          {/* Username Field */}
          <div className="group">
            <input
              className="w-full px-5 py-3.5 rounded-2xl 
                bg-white/5 text-white border border-white/10 
                focus:outline-none focus:border-cyan-500/50 focus:bg-white/10
                transition-all duration-300 placeholder:text-gray-600"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <input
              className="w-full px-5 py-3.5 rounded-2xl 
                bg-white/5 text-white border border-white/10 
                focus:outline-none focus:border-cyan-500/50 focus:bg-white/10
                transition-all duration-300 placeholder:text-gray-600"
              placeholder="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <input
              className="w-full px-5 py-3.5 rounded-2xl 
                bg-white/5 text-white border border-white/10 
                focus:outline-none focus:border-cyan-500/50 focus:bg-white/10
                transition-all duration-300 placeholder:text-gray-600 pr-12"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                text-gray-500 hover:text-cyan-400 transition-colors"
            >
              {showPassword ? (
                <span className="text-xl">👁️</span>
              ) : (
                <span className="text-xl opacity-50">👁️</span>
              )}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative group">
            <input
              className="w-full px-5 py-3.5 rounded-2xl 
                bg-white/5 text-white border border-white/10 
                focus:outline-none focus:border-cyan-500/50 focus:bg-white/10
                transition-all duration-300 placeholder:text-gray-600 pr-12"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                text-gray-500 hover:text-cyan-400 transition-colors"
            >
              {showConfirmPassword ? (
                <span className="text-xl">👁️</span>
              ) : (
                <span className="text-xl opacity-50">👁️</span>
              )}
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={submit}
          className="w-full mt-8 py-4 rounded-2xl font-bold 
            text-black bg-gradient-to-r from-cyan-400 to-blue-500
            hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
            transition-all duration-300"
        >
          Create Account
        </motion.button>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
