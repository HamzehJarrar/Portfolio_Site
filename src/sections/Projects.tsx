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
    badge: null,
    desc: "A full-featured restaurant system with real-time order tracking, kitchen dashboards, and role-based access control.",
    features: [
      "Menu & kitchen dashboards with role-based access",
      "Real-time order updates via Socket.IO",
      "Clean, user-friendly UI/UX design",
    ],
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
      { threshold: 0.12 }
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
        {projects.map(({ name, badge, desc, features }) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
