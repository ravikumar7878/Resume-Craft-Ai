import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";

import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import ATSFriendly from "./pages/ATSFriendly";
import ModernTemplate from "./pages/ModernTemplate";
import InstantDownload from "./pages/InstantDownload";



import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      {/*  Toast Notification */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />

      {/*  Auth Provider */}

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Root />}>

            {/* Public Pages */}

            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            
            {/* Normal Pages */}
            
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />

            <Route path="ats-friendly" element={<ATSFriendly />} />
            <Route path="modern-templates" element={<ModernTemplate />} />
            <Route path="instant-download" element={<InstantDownload />} />

            {/* Protected Feature */}

            <Route path="generate-resume" element={<GenerateResume />} />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
