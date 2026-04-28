import { useEffect, useRef } from "react";

const trainings = [
  {
    hours: "60",
    name: "Frontend Development",
    org: "Gaza Sky Geeks — HTML, CSS, JavaScript · Responsive UI",
  },
  {
    hours: "60",
    name: "AI & Machine Learning",
    org: "Gaza Sky Geeks — Python · Data preprocessing · Model implementation",
  },
  {
    hours: "80",
    name: "Node.js Development",
    org: "RESTful APIs · Server-side logic · Backend fundamentals",
  },

  {
    hours: "150",
    name: "AI & Machine Learning",
    org: "Hassib Sabbagh IT Center of Excellence (HSITCE)",
  },
  {
    hours: "200",
    name: "Backend Development",
    org: "Foothill Technology Solutions, LLC. ",
  },
];

const Training: React.FC = () => {
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
    <section id="training" ref={ref}>
      <div className="sec-header reveal">
        <span className="sec-num">04</span>
        <h2 className="sec-title">Training</h2>
        <div className="sec-line" />
      </div>
      <div className="training-list">
        {trainings.map(({ hours, name, org }) => (
          <div className="training-card reveal" key={name}>
            <div>
              <div className="training-hours">{hours}</div>
              <div className="training-hrs-label">hours</div>
            </div>
            <div className="training-divider" />
            <div>
              <div className="training-name">{name}</div>
              <div className="training-org">{org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
