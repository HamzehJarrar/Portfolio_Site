import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#training", label: "Training" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      }),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="nav-logo">HJ.dev</div>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a className={active === href.slice(1) ? "active" : ""} href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav-burger${open ? " open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${open ? " visible" : ""}`}>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a className={active === href.slice(1) ? "active" : ""} href={href} onClick={close}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-backdrop" onClick={close} />}
    </>
  );
};

export default Navbar;