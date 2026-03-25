import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  UserCircle, 
  Lock, 
  BookOpen,
  Globe,
  Mail,
  Scale,
  CreditCard,
  FileText,
  AlertCircle
} from "lucide-react";

const TermsOfService = () => {
  const [showDoc, setShowDoc] = useState(false);

  // Animation Variants (Keeping your original logic)
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30 pb-20">
      {/* Header */}
      <header className="relative py-20 px-6 text-center border-b border-white/5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Service Terms & Info
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using AI Resume Studio. 
            By accessing our service, you agree to these professional guidelines.
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-16">
        {/* Expanded Grid Sections */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* User Access */}
          <motion.div variants={itemVars} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <UserCircle className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">User Access</h3>
            <p className="text-sm text-slate-400">Aap is platform ko professional purposes ke liye use kar sakte hain agar aap 13+ age ke hain. Account security aapki responsibility hai.</p>
          </motion.div>

          {/* AI Processing */}
          <motion.div variants={itemVars} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <Cpu className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">AI Processing</h3>
            <p className="text-sm text-slate-400">Hamara AI data analyze karke best templates suggest karta hai, par final review aur accuracy check aapki zimmedari hai.</p>
          </motion.div>

          {/* Data Privacy */}
          <motion.div variants={itemVars} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <Lock className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
            <p className="text-sm text-slate-400">Aapka resume data encrypted hota hai. Hum aapka personal data kisi third-party ko sell nahi karte hain.</p>
          </motion.div>

          {/* Usage Policy */}
          <motion.div variants={itemVars} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <Scale className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Legal Compliance</h3>
            <p className="text-sm text-slate-400">Platform ka use misleading ya illegal content banane ke liye mana hai. Violations par account terminate ho sakta hai.</p>
          </motion.div>
        </motion.div>

        {/* Action Center */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 text-center"
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Need Support or More Info?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link to="/contact">
              <div className="group flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all cursor-pointer">
                <Mail size={20} />
                <span>Contact <span className="underline decoration-white/40 group-hover:decoration-white">Us</span></span>
              </div>
            </Link>

            <button 
              onClick={() => setShowDoc(!showDoc)}
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all"
            >
              <BookOpen size={20} />
              {showDoc ? "Hide Documentation" : "Read Full Documentation"}
            </button>
          </div>

          {/* Animated Documentation Content */}
          <AnimatePresence>
            {showDoc && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-slate-950/50 p-8 rounded-2xl border border-cyan-500/20 text-left space-y-8">
                  
                  {/* Section 1 */}
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                      <FileText size={14} /> 1. Intellectual Property
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      All templates, AI algorithms, and branding elements are the exclusive property of AI Resume Studio. However, the final resume content generated by you belongs to you. You grant us a limited license to process this data to provide our services.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                      <CreditCard size={14} /> 2. Payments & Refunds
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Premium features require a subscription or one-time payment. Refunds are processed according to our standard 7-day policy, provided the premium download credits have not been fully utilized.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                      <ShieldCheck size={14} /> 3. Data Security & Storage
                    </h4>
                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 ml-2">
                      <li>We use industry-standard SSL encryption for all data transfers.</li>
                      <li>Resume drafts are stored for 30 days unless you choose to save them permanently in your account.</li>
                      <li>Account passwords are salted and hashed; we never see your actual password.</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                      <AlertCircle size={14} /> 4. Disclaimer of Liability
                    </h4>
                    <p className="text-slate-300 text-sm italic border-l-2 border-amber-500/50 pl-4">
                      "While our AI is trained on successful career data, we do not guarantee employment or specific interview calls. The final responsibility for the truthfulness of the resume lies solely with the user."
                    </p>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsOfService;