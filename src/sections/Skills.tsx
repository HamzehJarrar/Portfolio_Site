import { useEffect, useRef } from "react";

type SkillGroup = {
  title: string;
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MUI",
      "Bootstrap",
      "Zustand",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & APIs",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT)",
      "API Integration",
      "Socket.IO",
    ],
  },
  {
    title: "Database",
    tags: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "postgresql",
    ],
  },
  {
    title: "AI & Data",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Basic Machine Learning",
    ],
  },
  {
    title: "Tools & DevOps",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "Core Concepts",
    tags: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Client-Server Architecture",
      "MVC Pattern",
    ],
  },
];

const Skills: React.FC = () => {
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
    <section id="skills" ref={ref}>
      <div className="sec-header reveal">
        <span className="sec-num">02</span>
        <h2 className="sec-title">Skills</h2>
        <div className="sec-line" />
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ title, tags }) => (
          <div className="skill-category reveal" key={title}>
            <div className="skill-cat-title">{title}</div>
            <div className="tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
