import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  FaBrain,
  FaPlusCircle,
  FaTrash,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { generateResume, checkBackendStatus } from "../api/ResumeService";
import { saveResume } from "../api/ResumeService";
import { useForm, useFieldArray } from "react-hook-form";
import Resume from "../components/Resume";
import confetti from "canvas-confetti";

const GenerateResume = () => {
  const defaultData = {
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedin: "",
      gitHub: "",
      portfolio: "",
      profileImage: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    achievements: [],
    languages: [],
    interests: [],
  };

  const [data, setData] = useState(defaultData);
  const [description, setDescription] = useState("");
  const [loading, setLoading] =
    useState(
      false,
    ); /* --------------------THEME COLOR STATE-------------------- */

  const [themeColor, setThemeColor] =
    useState(
      "#000000",
    ); /* ================= RESUME CUSTOMIZATION STATE ================= */
  const [customization, setCustomization] = useState({
    headingFontSize: 24,
    bodyFontSize: 14,
    fontFamily: "Arial",
    nameAlignment: "center",
    contentAlignment: "left",
    layout: "single", // single | double
    sidebarBgColor: "#1e293b",
    sidebarTextColor: "#ffffff",
    sidebarHeadingColor: "#ffffff",
    mainBgColor: "#ffffff",
    mainTextColor: "#000000",
    photoBgColor: "#1e293b",
    headerBgMode: "personal",
  }); // Add below your existing customization state

  const [imageShape, setImageShape] = useState("circle"); // circle / rectangle
  const [imagePosition, setImagePosition] = useState("background"); // background / sidebar

  const [showThemePanel, setShowThemePanel] = useState(false);

  const themeOptions = [
    "#000000",
    "#2563EB",
    "#16A34A",
    "#9333EA",
    "#DC2626",
    "#F59E0B",
    "#0891B2",
    "#4B5563",
    "#DB2777",
    "#7C2D12",
  ];
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: defaultData,
  });

  const skillsFields = useFieldArray({ control, name: "skills" });
  const experienceFields = useFieldArray({ control, name: "experience" });
  const educationFields = useFieldArray({ control, name: "education" });
  const achievementsFields = useFieldArray({ control, name: "achievements" });
  const certificationsFields = useFieldArray({control, name: "certifications",});
  const projectsFields = useFieldArray({ control, name: "projects" });
  const languagesFields = useFieldArray({ control, name: "languages" });
  const interestsFields = useFieldArray({ control, name: "interests" });

  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const resumeRef = useRef(null);

  const premiumBtn =
    "px-6 py-2 rounded-md bg-gradient-to-r from-gray-900 to-black text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]";
  const premiumDangerBtn =
    "px-6 py-2 rounded-md bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md hover:shadow-xl transition-all duration-300";

  const launchCelebration = () => {
    const duration = 3000;
    const end = new Date().getTime() + duration;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 70, origin: { x: 0 } });
      confetti({ particleCount: 3, angle: 120, spread: 70, origin: { x: 1 } });
      if (new Date().getTime() < end) requestAnimationFrame(frame);
    };
    frame();
  }; /* ===================== SAVE FUNCTION ===================== */


  const handleSaveResume = async () => {
    try {
      const payload = {
        userId:1,
        title: data?.personalInformation?.fullName || "My Resume",
        resumeData: JSON.stringify(data),
      };
      await saveResume(payload);
      toast.success("Resume Saved Successfully ✅");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save resume");
    }
  }; /* ===================== SHARE DROPDOWN ===================== */

  const [showShareOptions, setShowShareOptions] = useState(false);

  const shareLinks = () => {
    const resumeTitle = encodeURIComponent(
      data?.personalInformation?.fullName || "My Resume",
    );
    const resumeUrl = encodeURIComponent(window.location.href);

    return {
      whatsapp: `https://wa.me/?text=${resumeTitle}%0A${resumeUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${resumeUrl}&title=${resumeTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${resumeUrl}`,
      gmail: `mailto:?subject=${resumeTitle}&body=${resumeTitle}%0A${resumeUrl}`,
      instagram: `https://www.instagram.com/`, // Instagram sharing link via web is limited
    };
  };

  const handleShareClick = (platform) => {
    const links = shareLinks();

    if (platform === "instagram" || platform === "gmail") {
      toast(
        `${platform.charAt(0).toUpperCase() + platform.slice(1)} Sharing not supported directly. Please download PDF first!`,
      );
      return;
    }

    window.open(links[platform], "_blank");
  }; /* ========================================================= */

  // const parseDescriptionToForm = (text) => {
  //   const emailMatch = text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i);
  //   const phoneMatch = text.match(/\b\d{10}\b/);
  //   const skills = [];
  //   const skillKeywords = [
  //     "java",
  //     "spring boot",
  //     "react",
  //     "mysql",
  //     "javascript",
  //   ];
  //   skillKeywords.forEach((skill) => {
  //     if (text.toLowerCase().includes(skill))
  //       skills.push({ title: skill, level: "Intermediate" });
  //   });
  //   return {
  //     ...defaultData,
  //     personalInformation: {
  //       ...defaultData.personalInformation,
  //       email: emailMatch ? emailMatch[0] : "",
  //       phoneNumber: phoneMatch ? phoneMatch[0] : "",
  //     },
  //     summary: text,
  //     skills,
  //   };
  // };

  const parseDescriptionToForm = (text) => {
    // 1. Extract Email & Phone
    const emailMatch = text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i);
    const phoneMatch = text.match(/\b\d{10}\b/);

    const email = emailMatch ? emailMatch[0] : "";
    const phone = phoneMatch ? phoneMatch[0] : "";

    // Helper function to remove email/phone from any text block
    const cleanSensitiveInfo = (rawText) => {
      let cleaned = rawText;
      if (email) cleaned = cleaned.split(email).join("");
      if (phone) cleaned = cleaned.split(phone).join("");

      // Extra cleanup: "Phone:" ya "Email:" jaise labels ko bhi remove karna
      return cleaned
        .replace(/Phone\s*:\s*/gi, "")
        .replace(/Email\s*:\s*/gi, "")
        .replace(/Contact\s*Information/gi, "")
        .trim();
    };

    const extractSkills = (inputText) => {
      if (!inputText) return [];

      // Clean text before splitting into skills
      let cleanTextForSkills = cleanSensitiveInfo(inputText);

      const rawSkills = cleanTextForSkills
        .split(/,|\n|\/|\||•|-|:|\t/)
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 2);

      const filteredSkills = rawSkills.filter((skill) => {
        const lower = skill.toLowerCase();

        // Stop sentences/noise from becoming skills
        if (skill.split(" ").length > 4) return false;
        if (
          lower.includes("experience") ||
          lower.includes("developer") ||
          lower.includes("passionate")
        )
          return false;
        if (/@/.test(skill) || /^\d+$/.test(skill.replace(/[-() ]/g, "")))
          return false;

        return true;
      });

      return [...new Set(filteredSkills)].map((skill) => ({
        title: skill,
      }));
    };

    // 2. Summary ko clean karke save karein
    const cleanSummary = cleanSensitiveInfo(text);
    const skills = extractSkills(text);

    return {
      ...defaultData,
      personalInformation: {
        ...defaultData.personalInformation,
        email: email,
        phoneNumber: phone,
      },
      summary: cleanSummary, // Ab yahan sirf clean text jayega
      skills: skills,
    };
  };

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast.error("Please enter description");
      return;
    }
    setLoading(true);
    try {
      await checkBackendStatus();
    } catch {
      setLoading(false);
      toast.error("Resume Generating Error...");
      return;
    }
    toast("Please Wait...");
    const instantData = parseDescriptionToForm(description);
    generateResume(description).then((response) => {
      const mergedData = { ...instantData, ...response };
      reset(mergedData);
      setData(mergedData);
      toast.success("AI data updated");
    });
    setTimeout(() => {
      setShowFormUI(true);
      setShowResumeUI(false);
      reset(instantData);
      setData(instantData);
      setLoading(false);
    }, 10000);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear description?"))
      setDescription("");
  };
  const handleClearForm = () => {
    if (window.confirm("Clear complete form data?")) reset(defaultData);
  };
  const onSubmit = (formData) => {
    toast("Generating professional resume...");
    setLoading(true);

    setTimeout(() => {
      setData((prev) => ({
        ...formData,
        personalInformation: {
          ...formData.personalInformation,
          profileImage: prev.personalInformation.profileImage,
        },
      }));

      setShowFormUI(false);
      setShowResumeUI(true);
      setLoading(false);
      launchCelebration();
      toast.success("Resume Generated Successfully 🎉");
    }, 10000);
  };

  const handleEditResume = () => {
    setShowResumeUI(false);
    setShowFormUI(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setData((prev) => ({
        ...prev,
        personalInformation: {
          ...prev.personalInformation,
          profileImage: reader.result,
        },
      }));
    };

    reader.readAsDataURL(file);
  };

  const renderInput = (name, label) => (
    <div className="mb-4">
      <label className="font-semibold text-black">{label}</label>
      <input
        {...register(name)}
        className="w-full px-4 py-2 mt-1 border rounded-md bg-white text-black outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );

  const renderFieldArray = (fields, label, name, keys) => (
    <div className="mb-8 p-6 bg-white border rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{label}</h3>
        <button
          type="button"
          onClick={() =>
            fields.append(
              keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {}),
            )
          }
          className={premiumBtn + " flex items-center gap-2"}
        >
          <FaPlusCircle /> Add
        </button>
      </div>
      {fields.fields.map((field, index) => (
        <div
          key={field.id}
          className="mb-4 p-4 border rounded-md bg-white shadow-sm"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-gray-700">
              {label} #{index + 1}
            </h4>

            <button
              type="button"
              onClick={() => fields.remove(index)}
              className={
                premiumDangerBtn +
                " flex items-center gap-2 px-4 py-1.5 text-sm"
              }
            >
              <FaTrash /> Delete
            </button>
          </div>
          {keys.map((key) => (
            <div key={key}>{renderInput(`${name}.${index}.${key}`, key)}</div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white min-h-screen text-black">
      {!showFormUI && !showResumeUI && (
        <div className="bg-white p-10 border rounded-md text-center shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            <FaBrain className="inline mr-2" /> AI Resume Generator
          </h1>
          <textarea
            className="w-full h-40 p-4 border rounded-md"
            placeholder="Describe your experience..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={handleClear} className={premiumDangerBtn}>
              Clear
            </button>
            <button
              onClick={handleGenerate}
              className={premiumBtn}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Resume"}
            </button>
          </div>
        </div>
      )}
      {showFormUI && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white p-6 border rounded-md mb-6">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="mb-4">
              <label className="font-semibold text-black">
                Profile Photo (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 mt-1 border rounded-md"
              />
            </div>
            {renderInput("personalInformation.fullName", "Full Name")}
            {renderInput("personalInformation.email", "Email")}
            {renderInput("personalInformation.phoneNumber", "Phone Number")}
            {renderInput("personalInformation.location", "Location")}
            {renderInput("personalInformation.gitHub", "GitHub")}
            {renderInput("personalInformation.linkedin", "LinkedIn")}
            {renderInput("personalInformation.portfolio", "Portfolio")}
          </div>
          <div className="bg-white p-6 border rounded-md mb-6">
            <label className="font-semibold">Summary</label>

            <textarea
              {...register("summary")}
              className="w-full p-4 border rounded-md mt-2"
            />
          </div>
          {renderFieldArray(skillsFields, "Skills", "skills", [
            "title",
            "level",
          ])}
          {renderFieldArray(experienceFields, "Experience", "experience", [
            "jobTitle",
            "company",
            "duration",
          ])}
          {renderFieldArray(educationFields, "Education", "education", [
            "degree",
            "university",
            "graduationYear",
          ])}
          {renderFieldArray(achievementsFields, "Achievements", "achievements", [
            "title",
            "issuer",
            "year",
            "description",
          ])}
          {renderFieldArray(projectsFields, "Projects", "projects", [
            "title",
            "description",
            "technologies",
          ])}
          {renderFieldArray(
            certificationsFields,
            "Certifications",
            "certifications",
            ["title", "issuingOrganization", "year"],
          )}
          {renderFieldArray(languagesFields, "Languages", "languages", [
            "name",
          ])}
          {renderFieldArray(interestsFields, "Interests", "interests", [
            "name",
          ])}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleClearForm}
              className={premiumDangerBtn}
            >
              Clear Form
            </button>
            <button className={premiumBtn}>Submit Resume</button>
          </div>
        </form>
      )}
      {showResumeUI && (
        <>
          <div className="bg-white p-4 border rounded-md mb-6 flex items-center justify-between">
            <h3 className="font-semibold">Theme</h3>
            <button
              className={premiumBtn}
              onClick={() => setShowThemePanel(!showThemePanel)}
            >
              Customize Resume
            </button>
          </div>
          {showThemePanel && (
            <>
              {/* THEME COLORS */}
              <div className="bg-white p-4 border rounded-md mb-6">
                <div className="grid grid-cols-3 gap-4">
                  {themeOptions.slice(0, 12).map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setThemeColor(color)}
                      style={{ backgroundColor: color }}
                      className="w-14 h-14 rounded-md border"
                    />
                  ))}
                </div>
              </div>
              {/* CUSTOMIZATION PANEL */}
              <div className="bg-white p-4 border rounded-md mb-6 space-y-4">
                <h3 className="font-semibold">Resume Customization</h3>
                {/* Heading Font Size */}
                <div>
                  <label>Heading Font Size</label>

                  <input
                    type="range"
                    min="18"
                    max="40"
                    value={customization.headingFontSize}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        headingFontSize: e.target.value,
                      })
                    }
                    className="w-full"
                  />
                </div>
                {/* Body Font Size */}

                <div>
                  <label>Body Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="20"
                    value={customization.bodyFontSize}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        bodyFontSize: e.target.value,
                      })
                    }
                    className="w-full"
                  />
                </div>
                {/* Font Family */}

                <div>
                  <label>Font Style</label>
                  <select
                    className="border p-2 w-full"
                    value={customization.fontFamily}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        fontFamily: e.target.value,
                      })
                    }
                  >
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Poppins">Poppins</option>
                  </select>
                </div>
                {/* Layout */}
                <div className="mt-4">
                  <label className="font-semibold">Layout</label>
                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCustomization({ ...customization, layout: "single" })
                      }
                      className={`px-4 py-2 rounded border ${
                        customization.layout === "single"
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      Single Column
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCustomization({
                          ...customization,
                          layout: "sidebar",
                        })
                      }
                      className={`px-4 py-2 rounded border ${
                        customization.layout === "sidebar"
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      Sidebar
                    </button>
                  </div>
                  {/* Customization */}
                  <div className="mt-4">
                    <label className="font-semibold">
                      Header Background Mode
                    </label>
                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setCustomization({
                            ...customization,
                            headerBgMode: "personal",
                          })
                        }
                        className={`px-4 py-2 rounded border ${
                          customization.headerBgMode === "personal"
                            ? "bg-black text-white"
                            : ""
                        }`}
                      >
                        Personal Info Only
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCustomization({
                            ...customization,
                            headerBgMode: "sidebar-header",
                          })
                        }
                        className={`px-4 py-2 rounded border ${
                          customization.headerBgMode === "sidebar-header"
                            ? "bg-black text-white"
                            : ""
                        }`}
                      >
                        Sidebar + 30% Header
                      </button>
                    </div>
                  </div>
                  {/* COLOR CUSTOMIZATION */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label>Sidebar Background</label>
                      <input
                        type="color"
                        value={customization.sidebarBgColor}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            sidebarBgColor: e.target.value,
                          })
                        }
                      />
                    </div>
                    {/* Image Position */}
                    <div className="mt-4">
                      <label className="font-semibold">
                        Profile Image Position
                      </label>
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setImagePosition("background")}
                          className={`px-4 py-2 rounded border ${
                            imagePosition === "background"
                              ? "bg-black text-white"
                              : ""
                          }`}
                        >
                          Background
                        </button>
                        <button
                          type="button"
                          onClick={() => setImagePosition("sidebar")}
                          className={`px-4 py-2 rounded border ${
                            imagePosition === "sidebar"
                              ? "bg-black text-white"
                              : ""
                          }`}
                        >
                          Sidebar
                        </button>
                      </div>
                    </div>
                    {/* Image Shape */}
                    <div className="mt-4">
                      <label className="font-semibold">
                        Profile Image Shape
                      </label>
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setImageShape("circle")}
                          className={`px-4 py-2 rounded border ${
                            imageShape === "circle" ? "bg-black text-white" : ""
                          }`}
                        >
                          Circle
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageShape("rectangle")}
                          className={`px-4 py-2 rounded border ${
                            imageShape === "rectangle"
                              ? "bg-black text-white"
                              : ""
                          }`}
                        >
                          Rectangle
                        </button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>Sidebar Heading Color</label>
                        <input
                          type="color"
                          value={customization.sidebarHeadingColor}
                          onChange={(e) =>
                            setCustomization({
                              ...customization,
                              sidebarHeadingColor: e.target.value,
                            })
                          }
                        />
                      </div>
                      <label>Sidebar Text Color</label>

                      <input
                        type="color"
                        value={customization.sidebarTextColor}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            sidebarTextColor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label>Main Background</label>
                      <input
                        type="color"
                        value={customization.mainBgColor}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            mainBgColor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label>Main Text Color</label>
                      <input
                        type="color"
                        value={customization.mainTextColor}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            mainTextColor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label>Photo Background</label>
                      <input
                        type="color"
                        value={customization.photoBgColor}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            photoBgColor: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <Resume
            ref={resumeRef}
            data={data}
            onEdit={handleEditResume}
            themeColor={themeColor}
            customization={customization}
            imageShape={imageShape}
            imagePosition={imagePosition}
          />
          {/* SAVE & SHARE */}
          <div className="flex justify-center gap-4 mt-6 relative">
            <button onClick={handleSaveResume} className={premiumBtn}>
              Save Resume
            </button>
            <div className="relative">
              <button
                onClick={() => setShowShareOptions(!showShareOptions)}
                className={premiumBtn}
              >
                Share Resume
              </button>
              {showShareOptions && (
                <div className="absolute top-12 left-0 flex flex-col gap-3 bg-white p-4 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => handleShareClick("whatsapp")}
                    className="flex items-center gap-2 text-green-600 text-lg"
                  >
                    <FaWhatsapp size={24} /> WhatsApp
                  </button>
                  <button
                    onClick={() => handleShareClick("linkedin")}
                    className="flex items-center gap-2 text-blue-700 text-lg"
                  >
                    <FaLinkedin size={24} /> LinkedIn
                  </button>
                  <button
                    onClick={() => handleShareClick("facebook")}
                    className="flex items-center gap-2 text-blue-500 text-lg"
                  >
                    <FaFacebook size={24} /> Facebook
                  </button>
                  <button
                    onClick={() => handleShareClick("gmail")}
                    className="flex items-center gap-2 text-red-600 text-lg"
                  >
                    <FaEnvelope size={24} /> Gmail
                  </button>
                  <button
                    onClick={() => handleShareClick("instagram")}
                    className="flex items-center gap-2 text-pink-500 text-lg"
                  >
                    <FaInstagram size={24} /> Instagram
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateResume;
