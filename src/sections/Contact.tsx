import { useEffect, useRef } from "react";

const Contact: React.FC = () => {
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
    <section id="contact" ref={ref}>
      <div className="contact-wrap reveal">
        <h2>Let's Work Together</h2>
        <p>
          I'm open to junior developer roles, freelance projects, and
          collaborations. Don't hesitate to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:hamzehjarrar604@gmail.com" className="btn btn-primary">
            ✉ Email Me
          </a>
          <a href="tel:+970595456580" className="btn btn-ghost">
            📞 +970 595 456 580
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
