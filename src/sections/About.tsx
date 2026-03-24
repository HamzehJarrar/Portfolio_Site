import { useEffect, useRef } from "react";

const About: React.FC = () => {
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
    <section id="about" ref={ref}>
      <div className="sec-header reveal">
        <span className="sec-num">01</span>
        <h2 className="sec-title">About</h2>
        <div className="sec-line" />
      </div>
      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm a <strong>Junior Software Engineer</strong> from Jenin, Palestine,
            specializing in frontend development with React.js and modern UI design
            patterns.
          </p>
          <p>
            I build <strong>responsive, user-friendly interfaces</strong> using React,
            Tailwind CSS, MUI, and Zustand with a solid grasp of OOP, data
            structures, and REST API integration.
          </p>
          <p>
            Currently motivated to expand as a{" "}
            <strong>full-stack developer</strong>, especially exploring C# and
            ASP.NET Core on the backend.
          </p>
        </div>
        <div className="about-stats">
          {[
            { num: "2", label: "Projects Built" },
            { num: "200+", label: "Training Hours" },
            { num: "C1", label: "English Level" },
            { num: "CS", label: "BSc Degree" },
          ].map(({ num, label }) => (
            <div className="stat-card" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
