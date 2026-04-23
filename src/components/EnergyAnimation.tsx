"use client";

import { useEffect, useRef, useState } from "react";

type Vec2 = [number, number];

function bezier(t: number, p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2): Vec2 {
  const u = 1 - t;
  return [
    u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0],
    u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1],
  ];
}

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
}

interface Stream {
  p0: Vec2; p1: Vec2; p2: Vec2; p3: Vec2;
  delay: number;
  duration: number;
  width: number;
  color: string;
  sparks: Spark[];
  lastSparkT: number;
}

const STREAM_DEFS = [
  { sN: [-0.05, 0.30] as Vec2, eN: [1.05, 0.20] as Vec2, c1N: [0.25, -0.10] as Vec2, c2N: [0.75, 0.55] as Vec2, delay: 0,   dur: 1600, w: 2.5, rgb: "232,201,126" },
  { sN: [-0.05, 0.70] as Vec2, eN: [1.05, 0.60] as Vec2, c1N: [0.30,  1.10] as Vec2, c2N: [0.70, 0.30] as Vec2, delay: 200, dur: 1800, w: 1.5, rgb: "201,168,76"  },
  { sN: [-0.05, 0.15] as Vec2, eN: [1.05, 0.85] as Vec2, c1N: [0.40,  0.00] as Vec2, c2N: [0.60, 1.00] as Vec2, delay: 400, dur: 2200, w: 3.5, rgb: "255,230,150" },
  { sN: [-0.05, 0.50] as Vec2, eN: [1.05, 0.40] as Vec2, c1N: [0.20,  0.80] as Vec2, c2N: [0.80, 0.20] as Vec2, delay: 300, dur: 1400, w: 1.0, rgb: "201,168,76"  },
  { sN: [ 0.10,-0.05] as Vec2, eN: [0.90, 1.05] as Vec2, c1N: [0.00,  0.40] as Vec2, c2N: [1.00, 0.60] as Vec2, delay: 600, dur: 2000, w: 1.8, rgb: "232,201,126" },
  { sN: [-0.05, 0.90] as Vec2, eN: [1.05, 0.10] as Vec2, c1N: [0.35,  1.10] as Vec2, c2N: [0.65,-0.10] as Vec2, delay: 100, dur: 1900, w: 2.0, rgb: "255,245,200" },
  { sN: [ 0.30,-0.05] as Vec2, eN: [0.70, 1.05] as Vec2, c1N: [0.10,  0.50] as Vec2, c2N: [0.90, 0.50] as Vec2, delay: 800, dur: 1500, w: 1.2, rgb: "201,168,76"  },
  { sN: [-0.05, 0.45] as Vec2, eN: [1.05, 0.55] as Vec2, c1N: [0.50, -0.20] as Vec2, c2N: [0.50, 1.20] as Vec2, delay: 150, dur: 2400, w: 4.0, rgb: "255,235,140" },
];

export default function EnergyAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const isIOSPhone = /iPhone|iPod/.test(navigator.userAgent);
    setMobile(window.innerWidth < 768 || isIOSPhone);
  }, []);

  useEffect(() => {
    if (mobile !== false) return;

    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const isMobile = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const CW = window.innerWidth;
    const CH = window.innerHeight;

    canvas.width = CW * dpr;
    canvas.height = CH * dpr;
    canvas.style.width = CW + "px";
    canvas.style.height = CH + "px";
    ctx.scale(dpr, dpr);

    const W = CW;
    const H = CH;

    const TOTAL = isMobile ? 3000 : 4200;

    const defsToUse = isMobile ? STREAM_DEFS.slice(0, 4) : STREAM_DEFS;

    const streams: Stream[] = defsToUse.map(d => ({
      p0: [d.sN[0] * W, d.sN[1] * H],
      p1: [d.c1N[0] * W, d.c1N[1] * H],
      p2: [d.c2N[0] * W, d.c2N[1] * H],
      p3: [d.eN[0] * W, d.eN[1] * H],
      delay: d.delay,
      duration: isMobile ? d.dur * 0.7 : d.dur,
      width: isMobile ? d.w * 1.5 : d.w,
      color: d.rgb,
      sparks: [],
      lastSparkT: -0.1,
    }));

    let raf: number;
    let startTime: number | null = null;

    function tick(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      ctx.clearRect(0, 0, W, H);

      const FADE_START = TOTAL - 900;
      const globalAlpha = elapsed > FADE_START
        ? Math.max(0, 1 - (elapsed - FADE_START) / 900)
        : Math.min(1, elapsed / 300);

      if (elapsed >= TOTAL) {
        canvas.style.display = "none";
        return;
      }

      ctx.save();
      ctx.globalAlpha = globalAlpha;

      for (const s of streams) {
        const se = elapsed - s.delay;
        if (se < 0) continue;

        const headT = Math.min(se / s.duration, 1.0);
        const TRAIL = 0.38;
        const tailT = Math.max(0, headT - TRAIL);

        // Trail segments
        const N = isMobile ? 45 : 90;
        for (let j = 0; j < N - 1; j++) {
          const t0 = tailT + (headT - tailT) * (j / N);
          const t1 = tailT + (headT - tailT) * ((j + 1) / N);
          const [x0, y0] = bezier(t0, s.p0, s.p1, s.p2, s.p3);
          const [x1, y1] = bezier(t1, s.p0, s.p1, s.p2, s.p3);

          const pos = j / N;
          const alpha = Math.pow(pos, 1.4) * 0.85;
          const lw = s.width * (0.15 + pos * 0.85);

          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.strokeStyle = `rgba(${s.color},${alpha})`;
          ctx.lineWidth = lw;
          ctx.lineCap = "round";
          ctx.stroke();

          // Outer glow
          if (pos > 0.45) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = `rgba(${s.color},${alpha * 0.25})`;
            ctx.lineWidth = lw * 5;
            ctx.stroke();
          }
        }

        // Glowing head
        if (headT < 1.0) {
          const [hx, hy] = bezier(headT, s.p0, s.p1, s.p2, s.p3);

          const r1 = s.width * 24;
          const gr = ctx.createRadialGradient(hx, hy, 0, hx, hy, r1);
          gr.addColorStop(0,   "rgba(255,252,235,0.95)");
          gr.addColorStop(0.15, `rgba(${s.color},0.7)`);
          gr.addColorStop(0.5,  `rgba(${s.color},0.2)`);
          gr.addColorStop(1,    `rgba(${s.color},0)`);
          ctx.beginPath();
          ctx.arc(hx, hy, r1, 0, Math.PI * 2);
          ctx.fillStyle = gr;
          ctx.fill();

          // White hot core
          ctx.beginPath();
          ctx.arc(hx, hy, s.width * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,1)";
          ctx.fill();

          // Spawn sparks
          if (headT - s.lastSparkT > (isMobile ? 0.1 : 0.04) && Math.random() > (isMobile ? 0.5 : 0.25)) {
            s.lastSparkT = headT;
            const count = isMobile ? 1 : Math.floor(2 + Math.random() * 4);
            for (let k = 0; k < count; k++) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 0.8 + Math.random() * 2.5;
              s.sparks.push({
                x: hx, y: hy,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                maxLife: 25 + Math.random() * 45,
                size: 0.4 + Math.random() * 1.8,
              });
            }
          }
        }

        // Sparks
        s.sparks = s.sparks.filter(sp => sp.life > 0);
        for (const sp of s.sparks) {
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.vy += 0.06;
          sp.vx *= 0.96;
          sp.vy *= 0.96;
          sp.life -= 1 / sp.maxLife;

          const sg = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, sp.size * 3);
          sg.addColorStop(0, `rgba(255,250,220,${sp.life})`);
          sg.addColorStop(1, `rgba(${s.color},0)`);
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = sg;
          ctx.fill();
        }
      }

      ctx.restore();
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mobile]);

  if (mobile === null) return null;

  if (mobile) return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 100, animation: "mobileSweep 1.4s ease-out forwards" }}
    />
  );

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 100 }}
    />
  );
}
