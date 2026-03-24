const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Text content */}
        <div className="hero-content">
          <div className="hero-label">available for opportunities</div>

          <h1>
            Hamzeh <br /> <span>Jarrar</span>
          </h1>

          <p className="hero-sub">
            Junior Full Stack Developer crafting responsive, modern interfaces
            with React.js — and growing into backend with Node.js &amp; beyond.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="mailto:hamzehjarrar604@gmail.com" className="btn btn-ghost">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" />
          <img
            src="/hamzeh.jpg"
            alt="Hamzeh Jarrar"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;