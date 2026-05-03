import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- PARTICLES ---
    const PARTICLE_COUNT = 90;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.6 + 0.2
    }));

    // --- GLOBE ---
    const globe = {
      x: W * 0.72,
      y: H * 0.5,
      radius: Math.min(W, H) * 0.28,
      rotation: 0,
      latLines: 10,
      lngLines: 14
    };

    // --- SCAN LINE ---
    let scanY = 0;

    // --- DRAW GLOBE ---
    function drawGlobe(g) {
      const { x, y, radius, rotation } = g;

      // outer glow
      const grd = ctx.createRadialGradient(x, y, radius * 0.3, x, y, radius * 1.4);
      grd.addColorStop(0, "rgba(0,200,255,0.08)");
      grd.addColorStop(1, "rgba(0,200,255,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // clip to circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.clip();

      // latitude lines
      for (let i = 1; i < g.latLines; i++) {
        const lat = (i / g.latLines) * Math.PI - Math.PI / 2;
        const r = Math.cos(lat) * radius;
        const cy = y + Math.sin(lat) * radius;
        ctx.beginPath();
        ctx.ellipse(x, cy, r, r * 0.18, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,200,255,0.18)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // longitude lines
      for (let i = 0; i < g.lngLines; i++) {
        const angle = (i / g.lngLines) * Math.PI + rotation;
        ctx.beginPath();
        ctx.ellipse(x, y, Math.abs(Math.cos(angle)) * radius, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,200,255,${0.08 + Math.abs(Math.cos(angle)) * 0.15})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      ctx.restore();

      // globe outline
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,200,255,0.35)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // hot dots on globe surface
      const dotAngles = [0.3, 1.1, 1.9, 2.7, 3.5, 4.3, 5.1];
      dotAngles.forEach((a, i) => {
        const da = a + rotation;
        const lat = [-0.4, 0.2, 0.6, -0.2, 0.4, -0.6, 0.1][i];
        const dx = x + Math.cos(da) * Math.cos(lat) * radius;
        const dy = y + Math.sin(lat) * radius;
        if (Math.cos(da) > 0) {
          ctx.beginPath();
          ctx.arc(dx, dy, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#00C8FF";
          ctx.shadowColor = "#00C8FF";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    }

    // --- DRAW PARTICLES + CONNECTIONS ---
    function drawParticles() {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${p.alpha})`;
        ctx.fill();
      });

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,200,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    // --- DRAW SCAN LINE ---
    function drawScanLine() {
      scanY = (scanY + 0.6) % H;
      const grad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      grad.addColorStop(0, "rgba(0,200,255,0)");
      grad.addColorStop(0.5, "rgba(0,200,255,0.04)");
      grad.addColorStop(1, "rgba(0,200,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 20, W, 40);
    }

    // --- DRAW HEX GRID (subtle) ---
    function drawHexGrid() {
      const size = 38;
      const w = size * 2;
      const h = Math.sqrt(3) * size;
      ctx.strokeStyle = "rgba(0,200,255,0.04)";
      ctx.lineWidth = 0.5;
      for (let row = -1; row < H / h + 1; row++) {
        for (let col = -1; col < W / w + 1; col++) {
          const cx = col * w * 0.75 + (row % 2 === 0 ? 0 : w * 0.375);
          const cy = row * h;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 180) * (60 * i - 30);
            const px = cx + size * Math.cos(angle);
            const py = cy + size * Math.sin(angle);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

    // --- MAIN LOOP ---
    function draw(t) {
      ctx.clearRect(0, 0, W, H);

      // background
      const bg = ctx.createRadialGradient(W * 0.2, H * 0.3, 0, W * 0.5, H * 0.5, W * 0.8);
      bg.addColorStop(0, "#061524");
      bg.addColorStop(0.5, "#04070f");
      bg.addColorStop(1, "#020509");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      drawHexGrid();
      drawParticles();
      drawScanLine();

      globe.x = W * 0.72;
      globe.radius = Math.min(W, H) * 0.28;
      globe.rotation += 0.003;
      drawGlobe(globe);

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block"
      }}
    />
  );
}