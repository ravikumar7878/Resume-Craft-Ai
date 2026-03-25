import { useAuth } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = async () => {
    if(!email || !password) return alert("Please fill fields");
    await login({ email, password });
    alert("Login successfully ✅");
    navigate("/home");
  };

  return (
    <div className="relative flex justify-center items-center min-h-[calc(100vh-64px)] bg-[#020617] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[420px] z-20 p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Enter your credentials to access your account</p>

        <div className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="email"
              value={email}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:border-indigo-500 outline-none transition-all"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:border-indigo-500 outline-none transition-all"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
            onClick={submit}
          >
            Sign In
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-400 font-bold hover:underline">Create Account</Link>
        </div>
      </motion.div>
    </div>
  );
}