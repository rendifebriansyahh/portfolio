import React, { useEffect, useRef } from "react";

export default function BackgroundAurora({
  colors = ["#60a5fa", "#8b5cf6"],
  size = 240,
  blur = 60,
  offset = 24,
  maxStretch = 2.4,
  followStrength = 0.12,
  enabled = true,
  isDarkMode = false, // ⬅️ ambil dari toggle tema kamu
}) {
  const wrapperRef = useRef(null);
  const blobRef = useRef(null);
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const stateRef = useRef({ tx: 0, ty: 0, sx: 1, sy: 1 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      const x = e.clientX ?? (e.touches && e.touches[0].clientX);
      const y = e.clientY ?? (e.touches && e.touches[0].clientY);
      pointerRef.current = { x, y };
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const update = () => {
      const blob = blobRef.current;
      const wrap = wrapperRef.current;
      if (!blob || !wrap) return;

      const rect = wrap.getBoundingClientRect();
      const anchorX = rect.right - offset;
      const anchorY = rect.top + offset;
      const { x: px, y: py } = pointerRef.current;
      const dx = px - anchorX;
      const dy = py - anchorY;
      const dist = Math.hypot(dx, dy);
      const ux = dist === 0 ? 0 : dx / dist;
      const uy = dist === 0 ? 0 : dy / dist;

      const proj = Math.min(dist / 200, maxStretch - 1);
      const tx = ux * proj * 20;
      const ty = uy * proj * 20;

      const lerp = (a, b, t) => a + (b - a) * t;
      const s = stateRef.current;
      s.tx = lerp(s.tx, tx, followStrength);
      s.ty = lerp(s.ty, ty, followStrength);
      s.sx = lerp(s.sx, 1 + proj, followStrength);
      s.sy = lerp(s.sy, 1 + proj * 0.6, followStrength);

      blob.style.transform = `translate(${-offset}px, ${offset}px) translate(${s.tx}px, ${s.ty}px) scale(${s.sx}, ${s.sy})`;

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [enabled, offset, followStrength, maxStretch]);

  // --- 💡 mode adaptif ---
  const gradient = `radial-gradient(120% 100% at 20% 10%, ${colors[0]}, ${colors[1]} 60%, rgba(0,0,0,0) 100%)`;

  // blend mode & opacity adaptif terhadap tema
  const blendMode = isDarkMode ? "screen" : "overlay";
  const opacity = isDarkMode ? 0.75 : 0.45;
  const brightness = isDarkMode ? 1.2 : 0.8;

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        overflow: "hidden",
        mixBlendMode: blendMode,
        filter: `brightness(${brightness})`,
      }}
    >
      <div
        ref={blobRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: gradient,
          filter: `blur(${blur}px) saturate(120%)`,
          transform: `translate(${-offset}px, ${offset}px) scale(1,1)`,
          transformOrigin: "center center",
          willChange: "transform, filter",
          opacity,
          transition: "opacity 400ms ease, filter 400ms ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
