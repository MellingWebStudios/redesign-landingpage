// components/AnimatedBackground.tsx
"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBackground({
  className = "",
  color = "",
  intensity = "normal",
}: {
  className?: string;
  color?: string;
  intensity?: "subtle" | "normal" | "high";
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Use theme-aware colors if no explicit color is provided
  const defaultColor = theme === "dark" ? "text-white" : "text-slate-900";
  const actualColor = color || defaultColor;
  
  // Set opacity based on intensity
  const getOpacityValues = () => {
    switch (intensity) {
      case "subtle": return { base: 0.01, pulse: 0.04 };
      case "high": return { base: 0.04, pulse: 0.12 };
      default: return { base: 0.02, pulse: 0.08 };
    }
  };
  
  const { base: baseOpacity, pulse: pulseOpacity } = getOpacityValues();
  
  // Ensure we only render this component after mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create responsive circle positions
  const circlePositions = [
    [100, 100],
    [700, 100],
    [100, 700],
    [700, 700],
    [400, 200], // Add an extra circle for more visual interest
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${actualColor} ${className}`}
      aria-hidden="true" // This is decorative content
    >
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="btcOrange"
            x1="0"
            y1="0"
            x2="800"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#f7931a" />
            <stop offset="50%" stopColor="#ffcd34" />
            <stop offset="100%" stopColor="#f7931a" />
          </linearGradient>
          
          {/* Add a radial gradient for more depth */}
          <radialGradient
            id="orangeGlow"
            cx="400"
            cy="400"
            r="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffcd34" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#f7931a" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <motion.circle
          cx="400"
          cy="400"
          r="300"
          fill="url(#orangeGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Pulsing circles with staggered animations */}
        {circlePositions.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={120 + i * 10}
            fill="currentColor"
            opacity={baseOpacity}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.9, 1.2, 0.9], 
              opacity: [baseOpacity, pulseOpacity, baseOpacity] 
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Rotating sine-wave layers with improved motion */}
        {[0, 1].map((layer) => {
          const direction = layer % 2 === 0 ? 1 : -1;
          return (
            <motion.g
              key={layer}
              style={{ originX: "50%", originY: "50%" }}
              animate={{ rotate: direction * 360 }}
              transition={{
                duration: 90 + layer * 20, // Slower rotation for subtlety
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[0, 1, 2].map((i) => {
                const t = i / 2;
                const y = 200 + t * 400;
                const amp = 25 + layer * 8; // Slightly less amplitude
                const d = `
                  M0,${y}
                  C200,${y + amp}
                   400,${y - amp}
                   800,${y}
                `;
                return (
                  <motion.path
                    key={i}
                    d={d.trim()}
                    stroke="url(#btcOrange)"
                    strokeWidth={1.5} // Thinner lines
                    strokeOpacity={0.08} // More subtle
                    strokeDasharray="4 4" // Add a dash pattern for texture
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: {
                        duration: 25 + layer * 8 + i * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      opacity: { duration: 1.5 }
                    }}
                  />
                );
              })}
            </motion.g>
          );
        })}

        {/* Central pulsing ring with smoother animation */}
        <motion.circle
          cx={400}
          cy={400}
          r={250}
          stroke="url(#btcOrange)"
          strokeWidth={1}
          strokeOpacity={0.06}
          fill="transparent"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ 
            scale: [0.95, 1.05, 0.95], 
            opacity: [0.04, 0.08, 0.04] 
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "easeInOut",
            opacity: { duration: 1.5, delay: 0.5 }
          }}
        />
        
        {/* Additional decorative elements for visual interest */}
        <motion.circle
          cx={400}
          cy={400}
          r={50}
          fill="url(#btcOrange)"
          opacity={0.03}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
