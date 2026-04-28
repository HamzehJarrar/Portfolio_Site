
const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-label">available for opportunities</div>

          <h1>
            Hamzeh <br /> <span>Jarrar</span>
          </h1>

          <p className="hero-sub">
            Junior Full Stack Developer crafting responsive, modern interfaces
            with React.js — and growing into backend with Node.js & beyond.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="mailto:hamzehjarrar604@gmail.com"
              className="btn btn-ghost"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1CCdZ7vo-_Qm7jvaIQ0jcdH_mg266KEvj/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View CV
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/HamzehJarrar"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              aria-label="GitHub profile"
            >
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 0.5a12 12 0 0 0-3.79 23.39c.6.12.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.31 3.54 1 .11-.79.42-1.31.76-1.62-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.25-3.25-.13-.31-.54-1.57.12-3.27 0 0 1.02-.33 3.34 1.24a11.6 11.6 0 0 1 6.08 0c2.32-1.57 3.34-1.24 3.34-1.24.66 1.7.25 2.96.12 3.27.78.85 1.25 1.93 1.25 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 0.5Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" />
          <img src="/hamzeh.jpg" alt="Hamzeh Jarrar" className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
