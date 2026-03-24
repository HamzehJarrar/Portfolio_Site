import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDir: number;
  drift: number;
};

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    const COUNT = 200;
    let animId: number;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function randomStar(): Star {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.15 + 0.04,
        opacity: Math.random() * 0.7 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        drift: (Math.random() - 0.5) * 0.08,
      };
    }

    function init() {
      resize();
      stars = Array.from({ length: COUNT }, randomStar);
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.opacity += s.twinkleSpeed * s.twinkleDir;
        if (s.opacity > 0.9 || s.opacity < 0.1) s.twinkleDir *= -1;

        s.y -= s.speed;
        s.x += s.drift;

        if (s.y < -4) {
          s.y = H + 4;
          s.x = Math.random() * W;
        }
        if (s.x < -4) s.x = W + 4;
        if (s.x > W + 4) s.x = -4;

        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${s.opacity.toFixed(2)})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    init();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="stars-canvas" ref={canvasRef} />;
};

export default StarsBackground;