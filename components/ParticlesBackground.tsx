"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Array<any>>([]);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // -- Copy particle generation logic from your Preloader here:
  useEffect(() => {
    if (typeof window === "undefined") return;
    const regularParticlesCount = isMobile ? 60 : isTablet ? 100 : 150;
    const specialParticlesCount = isMobile ? 20 : isTablet ? 35 : 50;

    const regularParticles = Array.from({ length: regularParticlesCount }, (_, idx) => {
      const hash = (idx * 13) % 100 / 100;
      const hash2 = ((idx * 29) + 7) % 100 / 100;
      const hash3 = ((idx * 43) + 11) % 100 / 100;
      return {
        size: (hash * (isMobile ? 4 : 6)) + (isMobile ? 2 : 3),
        x: hash2 * window.innerWidth,
        y: hash3 * window.innerHeight,
        xEnd: (hash - 0.5) * (isMobile ? 150 : 250),
        yEnd: (hash2 - 0.5) * (isMobile ? 150 : 250),
        duration: hash3 * 7 + 5,
        delay: hash * 4,
        rotation: (hash2 - 0.5) * 360,
        shape: "circle",
        opacity: hash3 * 0.3 + 0.1,
      };
    });

    const specialParticles = Array.from({ length: specialParticlesCount }, (_, idx) => {
      const hash = ((idx * 17) + 3) % 100 / 100;
      const hash2 = ((idx * 31) + 5) % 100 / 100;
      const hash3 = ((idx * 41) + 9) % 100 / 100;
      const shapes = ["square", "triangle", "star", "plus", "diamond"];
      const shapeIndex = idx % shapes.length;
      return {
        size: (hash * (isMobile ? 5 : 10)) + (isMobile ? 3 : 6),
        x: hash2 * window.innerWidth,
        y: hash3 * window.innerHeight,
        xEnd: (hash - 0.5) * (isMobile ? 180 : 300),
        yEnd: (hash2 - 0.5) * (isMobile ? 180 : 300),
        duration: hash3 * 8 + 6,
        delay: hash * 5,
        rotation: (hash2 - 0.5) * 720,
        shape: shapes[shapeIndex],
        opacity: hash3 * 0.5 + 0.2,
      };
    });

    setParticles([...regularParticles, ...specialParticles]);
  }, [isMobile, isTablet]);

  // -- Copy the rendering JSX for particles, minus any preloader-specific stuff:
  return (
    <motion.div className="absolute inset-0 pointer-events-none z-0">
      {typeof window !== "undefined" &&
        particles.map((particle, idx) => {
          let particleStyle: React.CSSProperties = {
            position: "absolute",
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          };
          // -- shape styles (from your Preloader)
          if (particle.shape === "circle" || !particle.shape) {
            particleStyle.borderRadius = "50%";
            particleStyle.backgroundColor =
              idx % 7 === 0
                ? `rgba(251, 145, 25, ${particle.opacity || 0.3})`
                : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
          }
          // Add other shapes if you want: triangle, star, etc...

          return (
            <motion.div
              key={idx}
              style={particleStyle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, particle.opacity || 0.8, 0],
                scale: [0.5, 1.2, 0.5],
                x: [particle.x, particle.x + particle.xEnd],
                y: [particle.y, particle.y + particle.yEnd],
                rotate: [0, particle.rotation],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          );
        })}
    </motion.div>
  );
}
