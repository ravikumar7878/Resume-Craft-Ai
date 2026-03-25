import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, LogOut, PlusCircle, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // For User Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For Mobile Menu

  // Check if we are on Login or Signup pages
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = () => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    logout(navigate);
  };

  const linkClass = ({ isActive }) =>
    `px-4 py-2 transition-all duration-300 font-medium text-sm ${
      isActive
        ? "text-blue-600 bg-blue-50 rounded-full"
        : "text-gray-600 hover:text-blue-500"
    }`;

  // Responsive mobile link style
  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium transition-colors ${
      isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-[999]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 1. Left Section: Logo & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button - Visible only on small screens */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/home" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🤖</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent hidden sm:block">
              AI Resume Maker
            </span>
          </Link>
        </div>

        {/* 2. Center Section: Desktop Nav Links (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink to="/home" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* 3. Right Section: Conditional Auth UI */}
        <div className="flex items-center gap-3 shrink-0 relative">
          {!user && !isAuthPage && (
            <Link
              to="/login"
              className="px-5 py-2 rounded-full font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm shadow-md"
            >
              Login
            </Link>
          )}

          {user && !isAuthPage && (
            <div className="relative flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-600 hover:scale-110 transition-all focus:outline-none"
              >
                <UserCircle size={38} strokeWidth={1.5} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsOpen(false)}
                    ></div>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                    >
                      <div className="flex flex-col items-center py-2 border-b border-gray-50 mb-3">
                        <UserCircle size={48} className="text-blue-100 mb-1" />
                        <p className="font-bold text-gray-800 tracking-tight">
                          @{user.username || "User"}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-600">
                          <Mail size={16} className="text-blue-500" />
                          <span className="truncate">{user.email}</span>
                        </div>

                        <button
                          onClick={() => {
                            navigate("/signup");
                            setIsOpen(false);
                          }}
                          className="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl text-sm font-medium text-gray-700 transition-colors"
                        >
                          <PlusCircle size={18} className="text-blue-500" />
                          Add Account
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full mt-2 p-3 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-colors flex items-center gap-3 text-sm"
                        >
                          <LogOut size={18} />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-2">
              <NavLink
                to="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
