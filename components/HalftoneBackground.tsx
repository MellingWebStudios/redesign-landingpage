"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function HalftoneBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let animId: number;
    let time = 75; // we'll advance this each frame to animate
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Track mouse position for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      // Only start following mouse after initial render is complete
      if (isInitialRender) {
        setIsInitialRender(false);
      }
    };

    // —————————————————————————
    // 1) Handle high-DPI screens & resizing
    // —————————————————————————
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    // —————————————————————————
    // 2) Draw loop: clears, computes wave, draws squares
    // —————————————————————————
    const draw = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;

      // Only update mouse position after initial render
      if (!isInitialRender) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      // Set background based on theme
      const isDark = theme === 'dark';
      ctx.fillStyle = isDark ? "#09090b" : "#ffffff";
      ctx.fillRect(0, 0, w, h);

      const grid = 40;
      const cols = Math.ceil(w / grid);
      const rows = Math.ceil(h / grid);

      // Fixed starting position - consistent every page load
      const vw = window.innerWidth;
      let originX = w / 2;
      let originY = h / 2;
      
      // Apply the fixed offset for consistent starting position
      originX -= vw < 768 ? vw * 0.03 : 120; 

      // Only use mouse position after initial render and if mouse has moved
      if (!isInitialRender && (mouseX !== 0 || mouseY !== 0)) {
        // Blend between fixed origin and mouse-influenced origin
        // Use a small influence factor to keep it subtle
        const mouseInfluence = 0.2;
        originX = originX * (1 - mouseInfluence) + 
                 ((mouseX / window.innerWidth) * w * 0.3 + w * 0.35) * mouseInfluence;
        originY = originY * (1 - mouseInfluence) + 
                 ((mouseY / window.innerHeight) * h * 0.3 + h * 0.35) * mouseInfluence;
      }

      // recompute max distance from origin to canvas edges
      const max = Math.hypot(
        Math.max(originX, w - originX),
        Math.max(originY, h - originY)
      );

      // loop over each cell
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = x * grid;
          const cy = y * grid;

          const dist = Math.hypot(cx - originX, cy - originY);
          const norm = dist / max; // 0 at origin → 1 at furthest corner
          const wave = Math.sin(norm * 3 - time) * 0.5 + 0.5;

          // Adjust size based on wave value
          const r = grid * wave * 0.5;
          const side = r * 2;
          
          // Use brand color for the elements, with opacity based on theme
          const dotColor = isDark 
            ? `rgba(251, 145, 25, ${wave * 0.25})` 
            : `rgba(251, 145, 25, ${wave * 0.15})`;

          ctx.fillStyle = dotColor;
          
          // Use rounded squares for softer look
          const cornerRadius = 4;
          const x1 = cx + grid / 2 - side / 2;
          const y1 = cy + grid / 2 - side / 2;
          
          if (side > 0) {
            ctx.beginPath();
            ctx.moveTo(x1 + cornerRadius, y1);
            ctx.lineTo(x1 + side - cornerRadius, y1);
            ctx.arcTo(x1 + side, y1, x1 + side, y1 + cornerRadius, cornerRadius);
            ctx.lineTo(x1 + side, y1 + side - cornerRadius);
            ctx.arcTo(x1 + side, y1 + side, x1 + side - cornerRadius, y1 + side, cornerRadius);
            ctx.lineTo(x1 + cornerRadius, y1 + side);
            ctx.arcTo(x1, y1 + side, x1, y1 + side - cornerRadius, cornerRadius);
            ctx.lineTo(x1, y1 + cornerRadius);
            ctx.arcTo(x1, y1, x1 + cornerRadius, y1, cornerRadius);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      time += 0.003; // slower wave animation for subtlety
      animId = requestAnimationFrame(draw);
    };

    // kick things off
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme, isInitialRender]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700"
      style={{ 
        width: "100%", 
        height: "100%",
        opacity: 0.6, // slightly more visible but still subtle
      }}
    />
  );
}
