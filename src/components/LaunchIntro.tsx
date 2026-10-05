import { useEffect, useState } from "react";

const LaunchIntro: React.FC = () => {
  const [closing, setClosing] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(prefersReducedMotion.matches);

    if (prefersReducedMotion.matches) return;

    const closeTimer = window.setTimeout(() => setClosing(true), 1950);
    return () => window.clearTimeout(closeTimer);
  }, []);

  useEffect(() => {
    if (!closing) return;
    const removeTimer = window.setTimeout(() => setDismissed(true), 650);
    return () => window.clearTimeout(removeTimer);
  }, [closing]);

  if (reducedMotion || dismissed) return null;

  return (
    <div className={`launch-intro${closing ? " is-closing" : ""}`} aria-hidden="true">
      <div className="launch-intro-stars" />
      <div className="launch-path" />
      <div className="launch-rocket">
        <span className="rocket-window" />
        <span className="rocket-fin rocket-fin-left" />
        <span className="rocket-fin rocket-fin-right" />
        <span className="rocket-flame" />
      </div>
    </div>
  );
};

export default LaunchIntro;
