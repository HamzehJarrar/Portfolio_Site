import { useEffect, useRef } from "react";

const projects = [
  {
    name: "AI Career Guidance Platform",
    badge: "Graduation",
    desc: "An AI-powered platform that recommends careers and jobs based on skill analysis, connecting students with opportunities and companies.",
    features: [
      "AI-based career and job recommendation engine",
      "Role-based dashboards for users and companies",
      "Skill analysis with tailored job & course suggestions",
      "Secure REST API integration for job management",
    ],
  },

  {
    name: "Restaurant Management System",
    badge: "Freelance",
    desc: "A full-featured restaurant system with real-time order tracking, kitchen dashboards, and role-based access control.",
    features: [
      "Menu & kitchen dashboards with role-based access",
      "Real-time order updates via Socket.IO",
      "Clean, user-friendly UI/UX design",
    ],
  },

  {
    name: "Certificate Generator",
    badge: "Freelance",
    desc: "A browser-based certificate generator that creates personalized certificates in bulk from Excel files with customizable designs and multilingual support.",
    features: [
      "Bulk certificate generation from Excel files",
      "Arabic & English support with proper RTL rendering",
      "Customizable templates, fonts, colors, and logos",
      "Automatic PDF generation and ZIP download",
      "Runs entirely in the browser for file privacy",
    ],
    link: "https://certificategenerator-eight.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.12 },
    );
    const reveals = ref.current?.querySelectorAll(".reveal") ?? [];
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="sec-header reveal">
        <span className="sec-num">03</span>
        <h2 className="sec-title">Projects</h2>
        <div className="sec-line" />
      </div>
      <div className="projects-grid">
        {projects.map(({ name, badge, desc, features, link }) => (
          <div className="project-card reveal" key={name}>
            <div>
              <div className="project-name">
                {name}
                {badge && <span className="project-badge">{badge}</span>}
              </div>
              <p className="project-desc">{desc}</p>
              <ul className="project-features">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <span>↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
