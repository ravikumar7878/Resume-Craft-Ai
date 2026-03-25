import React, { useRef, forwardRef, useImperativeHandle } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaEdit,
  FaCertificate,
} from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = forwardRef(
  ({ data, onEdit, themeColor, customization, imageShape }, ref) => {
    const resumeRef = useRef(null);

    const isSidebar = customization?.layout === "sidebar";
    const isSidebarContact =
      isSidebar && customization?.headerBgMode === "sidebar-header";

    // Standard Professional Styles

    const headingStyle = {
      color: themeColor || "#000000",
      fontSize: `${customization?.headingFontSize || 28}px`,
      fontFamily: customization?.fontFamily || "'Inter', sans-serif",
      letterSpacing: "-0.02em",
    };

    const sectionTitleStyle = (isSidebarSection = false) => {
      const safeThemeColor = themeColor ? themeColor : "#000000";

      const sidebarColor =
        customization?.sidebarHeadingColor ||
        customization?.sidebarTextColor ||
        safeThemeColor;

      return {
        color: isSidebarSection ? sidebarColor : safeThemeColor,

        fontSize: "14px",
        fontWeight: "700",
        letterSpacing: "0.1em",
        textTransform: "uppercase",

        borderBottom: `2px solid ${
          isSidebarSection ? sidebarColor : safeThemeColor
        }`,

        paddingBottom: "4px",
        marginBottom: "12px",
      };
    };

    const bodyStyle = {
      fontSize: `${customization?.bodyFontSize || 14}px`,
      fontFamily: customization?.fontFamily || "'Inter', sans-serif",
      lineHeight: "1.6",
      color: customization?.mainTextColor || "#000000",
    };

    useImperativeHandle(ref, () => ({
      handleDownloadPdf: async () => {
        if (!resumeRef.current) return;
        try {
          const dataUrl = await toPng(resumeRef.current, {
            quality: 1,
            pixelRatio: 3,
            backgroundColor: "#ffffff",
          });
          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, 0);
          pdf.save(`${data?.personalInformation?.fullName || "Resume"}.pdf`);
        } catch (err) {
          console.error("Export Error:", err);
        }
      },
    }));

    const premiumBtn =
      "px-6 py-2.5 rounded-lg bg-slate-900 text-white shadow-lg hover:bg-black transition-all flex items-center gap-2 text-sm font-semibold tracking-wide cursor-pointer";

    return (
      <div className="flex flex-col items-center w-full bg-slate-100 py-6 md:py-12 min-h-screen">
        {/* A4 RESUME BOX */}
        <div
          ref={resumeRef}
          className="relative w-full max-w-[95%] md:w-[210mm] min-h-[297mm] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
          style={bodyStyle}
        >
          {/* SIDEBAR BACKGROUND */}
          {isSidebar && (
            <div
              className="hidden md:block absolute top-0 left-0 h-full w-[32%]"
              style={{
                backgroundColor: customization.sidebarBgColor || "#F9FAFB",
                zIndex: 0,
              }}
            />
          )}

          {/* LEFT COLUMN (SIDEBAR) */}

          {isSidebar && (
            <aside
              className="relative z-10 w-full md:w-[32%] px-8 py-10 flex flex-col gap-8"
              style={{
                backgroundColor: customization.sidebarBgColor || "#F9FAFB",
                color: customization.sidebarTextColor || "#ffffff",
              }}
            >
              {data?.personalInformation?.profileImage && (
                <div className="flex justify-center md:justify-start">
                  <img
                    src={data.personalInformation.profileImage}
                    alt="Profile"
                    className="w-36 h-36 object-cover border-4 border-white shadow-md"
                    style={{
                      borderRadius: imageShape === "circle" ? "50%" : "12px",
                    }}
                  />
                </div>
              )}

              {isSidebarContact && (
                <section>
                  <h3 style={sectionTitleStyle(true)}>Contact</h3>

                  <div
                    className="space-y-3 text-[13px] font-medium"
                    style={{
                      color: customization.sidebarTextColor || "#000000",
                    }}
                  >
                    {data?.personalInformation?.email && (
                      <p className="flex items-center gap-2 break-all">
                        <FaEnvelope style={{ color: themeColor }} />{" "}
                        {data.personalInformation.email}
                      </p>
                    )}
                    {data?.personalInformation?.phoneNumber && (
                      <p className="flex items-center gap-2">
                        <FaPhone style={{ color: themeColor }} />{" "}
                        {data.personalInformation.phoneNumber}
                      </p>
                    )}
                    {data?.personalInformation?.location && (
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt style={{ color: themeColor }} />{" "}
                        {data.personalInformation.location}
                      </p>
                    )}
                  </div>
                </section>
              )}

              <div className="flex flex-col gap-8">
                {data?.skills?.length > 0 && (
                  <section>
                    <h3 style={sectionTitleStyle(true)}>Skills</h3>

                    <ul className="space-y-2 text-sm font-semibold">
                      {data.skills.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          ◈ {s.title}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {data?.languages?.length > 0 && (
                  <section>
                    <h3 style={sectionTitleStyle(true)}>Languages</h3>

                    <ul className="space-y-2 text-sm font-semibold">
                      {data.languages.map((l, i) => (
                        <li key={i} className="flex items-start gap-2">
                          ◈ {l.name}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {data?.interests?.length > 0 && (
                  <section>
                    <h3 style={sectionTitleStyle(true)}>Interests</h3>

                    <ul className="space-y-2 text-sm font-semibold">
                      {data.interests.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          ● {it.name}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </aside>
          )}

          {/* RIGHT COLUMN (MAIN CONTENT) */}

          <div
            className="flex-1 flex flex-col relative z-10 w-full"
            style={{
              backgroundColor: customization.mainBgColor || "#ffffff",
              color: customization.mainTextColor || "#000000",
            }}
          >
            <header
              className={`w-full px-10 py-12 flex flex-col ${
                !isSidebar ? "md:flex-row items-center gap-8" : "items-start"
              }`}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
            >
              {!isSidebar && data?.personalInformation?.profileImage && (
                <img
                  src={data.personalInformation.profileImage}
                  alt="Profile"
                  className="w-36 h-36 border-4 border-white shadow-lg"
                  style={{
                    borderRadius: imageShape === "circle" ? "50%" : "12px",
                  }}
                />
              )}

              <div className={!isSidebar ? "text-left" : "w-full text-left"}>
                <h1 className="font-extrabold" style={headingStyle}>
                  {data?.personalInformation?.fullName}
                </h1>
                <div className="flex flex-wrap gap-5 mt-4 text-[13px] font-bold text-slate-700">
                  {data?.personalInformation?.gitHub && (
                    <a
                      href={data.personalInformation.gitHub}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-black"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {data?.personalInformation?.linkedin && (
                    <a
                      href={data.personalInformation.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-black"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  )}
                  {data?.personalInformation?.portfolio && (
                    <a
                      href={data.personalInformation.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-black"
                    >
                      <FaGlobe /> Portfolio
                    </a>
                  )}
                </div>
                {!isSidebarContact && (
                  <div className="flex flex-wrap gap-5 mt-3 text-[13px] text-black font-medium">
                    {data?.personalInformation?.email && (
                      <span className="flex items-center gap-2">
                        <FaEnvelope style={{ color: themeColor }} />
                        {data.personalInformation.email}
                      </span>
                    )}
                    {data?.personalInformation?.phoneNumber && (
                      <span className="flex items-center gap-2">
                        <FaPhone style={{ color: themeColor }} />
                        {data.personalInformation.phoneNumber}
                      </span>
                    )}
                    {/* Yahan Address Field Add Kar Di Gayi Hai */}

                    {data?.personalInformation?.location && (
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt style={{ color: themeColor }} />{" "}
                        {data.personalInformation.location}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </header>

            <main className="px-10 py-4 flex-1 flex flex-col gap-10">
              {data?.summary && (
                <section>
                  <h2 style={sectionTitleStyle()}>Professional Summary</h2>
                  <p className="text-sm text-black text-justify leading-relaxed">
                    {data.summary}
                  </p>
                </section>
              )}

              {data?.experience?.length > 0 && (
                <section>
                  <h2 style={sectionTitleStyle()}>Work Experience</h2>
                  <div className="space-y-6">
                    {data.experience.map((exp, i) => (
                      <div key={i}>
                        <div className="flex justify-between font-bold text-sm">
                          <h3>{exp.jobTitle}</h3>
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-normal">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-indigo-600 mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm">{exp.responsibility}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data?.education?.length > 0 && (
                <section>
                  <h2 style={sectionTitleStyle()}>Education</h2>

                  <div className="space-y-4">
                    {data.education.map((edu, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-sm text-black">
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-slate-600">
                          {edu.university}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {data?.achievements?.length > 0 && (
                <section>
                  <h2 style={sectionTitleStyle()}>Achievements</h2>

                  <div className="space-y-4">
                    {data.achievements.map((ach, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-sm text-black">
                          {ach.title}
                        </h3>
                        <p className="text-xs text-slate-600">
                          {ach.issuer} • {ach.year}
                        </p>
                        <p className="text-xs text-slate-500">
                          {ach.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data?.projects?.length > 0 && (
                <section>
                  <h2 style={sectionTitleStyle()}>Key Projects</h2>

                  <div className="space-y-4">
                    {data.projects.map((p, i) => (
                      <div key={i} className="text-sm">
                        <h3 className="font-bold underline decoration-2 underline-offset-4">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-black">{p.description}</p>
                        <p className="text-[11px] font-mono text-indigo-600 mt-1 uppercase font-bold">
                          {p.technologies}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Certifications Section */}
              {data?.certifications?.length > 0 && (
                <section>
                  <h2 style={sectionTitleStyle()}>Certifications</h2>

                  <div className="grid grid-cols-1 gap-3">
                    {data.certifications.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-black font-medium"
                      >
                        <FaCertificate
                          className="text-xs"
                          style={{ color: themeColor || "#6366f1" }}
                        />
                        <span>
                          <span className="font-bold">{c.title}</span> —{" "}
                          {c.issuingOrganization} ({c.year})
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!isSidebar && (
                <div className="flex flex-col gap-8">
                  {data?.skills?.length > 0 && (
                    <section>
                      <h2 style={sectionTitleStyle()}>Skills</h2>

                      <ul className="grid grid-cols-2 gap-2 text-sm font-semibold text-black">
                        {data.skills.map((s, i) => (
                          <li key={i}>◈ {s.title}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {data?.languages?.length > 0 && (
                    <section>
                      <h2 style={sectionTitleStyle()}>Languages</h2>

                      <ul className="grid grid-cols-2 gap-2 text-sm font-semibold text-black">
                        {data.languages.map((l, i) => (
                          <li key={i}>◈ {l.name}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {data?.interests?.length > 0 && (
                    <section>
                      <h2 style={sectionTitleStyle()}>Interests</h2>

                      <ul className="grid grid-cols-2 gap-2 text-sm font-bold text-black">
                        {data.interests.map((it, i) => (
                          <li key={i}>● {it.name}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>

        {/* PREMIUM ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4 my-10 no-print sticky bottom-6 md:static">
          <button
            onClick={() => ref.current?.handleDownloadPdf()}
            className={premiumBtn}
          >
            Download PDF
          </button>
          <button onClick={onEdit} className={premiumBtn}>
            <FaEdit /> Edit Resume
          </button>
        </div>
      </div>
    );
  },
);

export default Resume;
