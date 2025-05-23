"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Braces, Laptop, Sparkles, 
  Globe, Paintbrush, Layout, Layers, 
  MonitorSmartphone, PenTool, Palette, 
  Lightbulb, Zap, Aperture
} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import "../app/Preloader.css";

export default function Preloader({
  onLoadComplete,
  children,
}: {
  onLoadComplete?: () => void;
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [particles, setParticles] = useState<Array<{
    size: number;
    x: number;
    y: number;
    xEnd: number;
    yEnd: number;
    duration: number;
    delay: number;
    rotation: number;
  }>>([]);
  
  const fullText = "MellingWebStudios";
  const typingSpeed = 110; // milliseconds per character
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); // Track the current character index as state
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  
  // Media queries for responsive design
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  
  // Generate floating particles with deterministic values for server/client consistency
  useEffect(() => {
    // Only generate particles on the client side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    // Significantly increase the particle count
    const regularParticlesCount = isMobile ? 60 : isTablet ? 100 : 150;
    const specialParticlesCount = isMobile ? 20 : isTablet ? 35 : 50;
    
    // Regular circular particles
    const regularParticles = Array.from({ length: regularParticlesCount }, (_, idx) => {
      // Use index-based pseudo-random values instead of Math.random()
      const hash = (idx * 13) % 100 / 100; // Deterministic value between 0-1
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
        shape: 'circle',
        opacity: hash3 * 0.3 + 0.1
      };
    });
    
    // Special shaped particles with deterministic shapes
    const specialParticles = Array.from({ length: specialParticlesCount }, (_, idx) => {
      const hash = ((idx * 17) + 3) % 100 / 100;
      const hash2 = ((idx * 31) + 5) % 100 / 100;
      const hash3 = ((idx * 41) + 9) % 100 / 100;
      
      // Use index to determine shape deterministically
      const shapes = ['square', 'triangle', 'star', 'plus', 'diamond'];
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
        opacity: hash3 * 0.5 + 0.2
      };
    });
    
    // Combine both types of particles
    setParticles([...regularParticles, ...specialParticles]);
  }, [isMobile, isTablet]); // Regenerate particles when screen size changes

  // Reset typing animation if component remounts
  useEffect(() => {
    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, []);

  // Handle typing animation with a more direct approach
  useEffect(() => {
    // Only proceed if we haven't completed typing
    if (currentCharIndex < fullText.length) {
      // Set a timeout to type the next character
      const timeout = setTimeout(() => {
        // Increment the index and update typed text
        setCurrentCharIndex(prev => prev + 1);
        setTypedText(fullText.substring(0, currentCharIndex + 1));
      }, typingSpeed);
      
      // Clean up the timeout
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, fullText, typingSpeed]);
  
  // Start typing when progress reaches a certain point
  useEffect(() => {
    // Start typing when progress is at least 5%
    if (progress >= 5 && currentCharIndex === 0) {
      // Start the typing animation
      setCurrentCharIndex(1);
      setTypedText(fullText.charAt(0));
    }
  }, [progress, fullText, currentCharIndex]);
  
  // Simulate loading progress with varying speeds
  useEffect(() => {
    // MUCH faster progress updates - this will make the progress bar reach 100% quickly
    const incrementSpeed = 30; // milliseconds between updates (very fast)
    
    // Simple linear increments that will reliably reach 100%
    const getIncrement = () => {
      // Use faster increments throughout
      if (progress < 60) return 3; // Fast initial progress
      if (progress < 85) return 2; // Still fast progress
      if (progress < 95) return 1; // Slightly slower near end
      return 0.75; // Final approach
    };

    if (progress < 100) {
      progressInterval.current = setTimeout(() => {
        setProgress((prev) => Math.min(prev + getIncrement(), 100));
      }, incrementSpeed); // Much faster updates
    } else { // Progress is 100
      if (!isComplete && progressInterval.current) {
        clearTimeout(progressInterval.current);
        progressInterval.current = null;
        // Show READY! for a clear moment
        const readyTimer = setTimeout(() => {
          setIsComplete(true);
        }, 500); // Ensure "READY!" is visible for half a second
        return () => clearTimeout(readyTimer);
      }
    }
    return () => {
      if (progressInterval.current) clearTimeout(progressInterval.current);
    };
  }, [progress, isComplete]);

  // Effect to handle showing content after element exits
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
        if (onLoadComplete) onLoadComplete();
      }, 1000); // Allow 1 full second to see exit animations
      return () => clearTimeout(timer);
    }
  }, [isComplete, onLoadComplete]);
  
  // Code symbols for animation
  const codeSymbols = [
    { icon: Code, position: { x: "30%", y: "30%" }, rotation: "15deg", delay: 0, zIndex: 5, color: "#fb9119" },
    { icon: Braces, position: { x: "70%", y: "40%" }, rotation: "-15deg", delay: 1, zIndex: 3, color: "#ffcd34" },
    { icon: Laptop, position: { x: "35%", y: "70%" }, rotation: "-10deg", delay: 2, zIndex: 2, color: "rgba(18, 18, 18, 0.7)" },
    { icon: Sparkles, position: { x: "65%", y: "65%" }, rotation: "20deg", delay: 3, zIndex: 4, color: "#fb9119" },
    { icon: Globe, position: { x: "20%", y: "20%" }, rotation: "25deg", delay: 0.5, zIndex: 3, color: "#ffcd34" },
    { icon: Paintbrush, position: { x: "80%", y: "25%" }, rotation: "-20deg", delay: 1.5, zIndex: 2, color: "rgba(18, 18, 18, 0.7)" },
    { icon: Layout, position: { x: "25%", y: "85%" }, rotation: "5deg", delay: 2.5, zIndex: 2, color: "#fb9119" },
    { icon: Layers, position: { x: "75%", y: "15%" }, rotation: "-25deg", delay: 3.5, zIndex: 4, color: "#ffcd34" },
    { icon: MonitorSmartphone, position: { x: "15%", y: "45%" }, rotation: "10deg", delay: 0.2, zIndex: 5, color: "rgba(18, 18, 18, 0.7)" },
    { icon: PenTool, position: { x: "85%", y: "55%" }, rotation: "-10deg", delay: 1.2, zIndex: 4, color: "#fb9119" },
    { icon: Palette, position: { x: "40%", y: "25%" }, rotation: "30deg", delay: 2.2, zIndex: 1, color: "#ffcd34" },
    { icon: Lightbulb, position: { x: "60%", y: "75%" }, rotation: "-30deg", delay: 3.2, zIndex: 3, color: "rgba(18, 18, 18, 0.7)" },
    { icon: Zap, position: { x: "25%", y: "55%" }, rotation: "35deg", delay: 0.7, zIndex: 5, color: "#fb9119" },
    { icon: Aperture, position: { x: "75%", y: "45%" }, rotation: "-35deg", delay: 1.7, zIndex: 4, color: "#ffcd34" },
    { icon: Code, position: { x: "15%", y: "75%" }, rotation: "18deg", delay: 2.7, zIndex: 2, color: "rgba(18, 18, 18, 0.7)" },
    { icon: Braces, position: { x: "85%", y: "15%" }, rotation: "-18deg", delay: 3.7, zIndex: 4, color: "#fb9119" },
    { icon: Laptop, position: { x: "45%", y: "10%" }, rotation: "-12deg", delay: 0.3, zIndex: 4, color: "#ffcd34" },
    { icon: Sparkles, position: { x: "55%", y: "90%" }, rotation: "22deg", delay: 1.3, zIndex: 5, color: "rgba(18, 18, 18, 0.7)" },
    { icon: Globe, position: { x: "10%", y: "10%" }, rotation: "28deg", delay: 2.3, zIndex: 1, color: "#fb9119" },
    { icon: Paintbrush, position: { x: "90%", y: "90%" }, rotation: "-28deg", delay: 3.3, zIndex: 2, color: "#ffcd34" }
  ];

  // Split the typed text to apply different styles
  const mellingPart = typedText.substring(0, 7);
  const webStudiosPart = typedText.substring(7);

  // Component return statement
  return (
    <>
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div // Root motion component for the preloader
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05, // Slight scale up for main exit
              transition: { duration: 0.5, ease: "circOut" }, // Adjusted easing
            }}
          >
            <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
              {/* Grid Background - subtle grid pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              {/* Particle Background - only rendered on client */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={isComplete ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {typeof window !== 'undefined' && particles.map((particle, idx) => {
                  // Determine particle style based on shape
                  let particleStyle: React.CSSProperties = {
                    position: 'absolute',
                    width: particle.size,
                    height: particle.size,
                    left: particle.x,
                    top: particle.y
                  };
                  
                  // Different shape styles
                  if (particle.shape === 'circle' || !particle.shape) {
                    particleStyle.borderRadius = '50%';
                    particleStyle.backgroundColor = idx % 7 === 0 
                      ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                  } else if (particle.shape === 'square') {
                    particleStyle.backgroundColor = idx % 7 === 0 
                      ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                  } else if (particle.shape === 'triangle') {
                    particleStyle.width = 0;
                    particleStyle.height = 0;
                    particleStyle.borderLeft = `${particle.size/2}px solid transparent`;
                    particleStyle.borderRight = `${particle.size/2}px solid transparent`;
                    particleStyle.borderBottom = idx % 7 === 0 
                      ? `${particle.size}px solid rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `${particle.size}px solid rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                    particleStyle.backgroundColor = 'transparent';
                  } else if (particle.shape === 'plus') {
                    // Plus sign is created using a pseudo cross
                    particleStyle.backgroundColor = 'transparent';
                    particleStyle.overflow = 'visible';
                    particleStyle.position = 'absolute';
                    particleStyle.width = particle.size;
                    particleStyle.height = particle.size/3;
                    particleStyle.backgroundColor = idx % 7 === 0 
                      ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                    // Additional vertical bar will be added using :after in CSS
                  } else if (particle.shape === 'diamond') {
                    particleStyle.transform = 'rotate(45deg)';
                    particleStyle.backgroundColor = idx % 7 === 0 
                      ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                  } else if (particle.shape === 'star') {
                    // Star shape approximation using a clipped square
                    particleStyle.backgroundColor = idx % 7 === 0 
                      ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                      : `rgba(18, 18, 18, ${particle.opacity || 0.2})`;
                    particleStyle.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                  }
                  
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
                    >
                      {/* For plus shape, add vertical bar */}
                      {particle.shape === 'plus' && (
                        <div style={{
                          position: 'absolute',
                          width: particle.size/3,
                          height: particle.size,
                          top: -particle.size/3,
                          left: particle.size/3,
                          backgroundColor: idx % 7 === 0 
                            ? `rgba(251, 145, 25, ${particle.opacity || 0.3})` 
                            : `rgba(18, 18, 18, ${particle.opacity || 0.2})`,
                        }}></div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Code Symbols Animation with layered depth */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={isComplete ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {codeSymbols.map((symbol, index) => {
                  // Use consistent style properties that won't change between server/client
                  const symbolStyle: React.CSSProperties = {
                    position: 'absolute',
                    left: symbol.position.x,
                    top: symbol.position.y,
                    color: symbol.color,
                    filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.15))',
                    zIndex: symbol.zIndex,
                  };
                  
                  return (
                    <motion.div
                      key={`symbol-${index}`}
                      style={symbolStyle}
                      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      animate={{
                        opacity: [0, 0.9, 0],
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, parseFloat(symbol.rotation)], // Use consistent rotation value
                        y: [0, (index % 2 === 0 ? -15 : 15), 0], // Slight floating movement
                      }}
                      transition={{
                        duration: 7 + index % 5, // Use deterministic duration based on index
                        delay: symbol.delay,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    >
                      <symbol.icon size={isMobile ? 18 : isTablet ? 24 : 32} 
                        strokeWidth={index % 2 === 0 ? 1.5 : 2}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* Floating binary code background with deterministic values */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {/* Use predefined positions and binary strings to avoid hydration errors */}
                {[
                  { left: "28%", top: "15%", rotate: "10deg", binary: "10010011101000010101010001100101" },
                  { left: "65%", top: "82%", rotate: "-15deg", binary: "00100011000011011100110100010111" },
                  { left: "12%", top: "42%", rotate: "25deg", binary: "11001010110010101000111000110010" },
                  { left: "78%", top: "35%", rotate: "-5deg", binary: "00100111010001010101011001001101" },
                  { left: "45%", top: "75%", rotate: "18deg", binary: "10100001010101000110010110010011" },
                  { left: "86%", top: "65%", rotate: "-20deg", binary: "01010101100100111010000101001001" },
                  { left: "35%", top: "10%", rotate: "8deg", binary: "00110101001000110000110111001101" },
                  { left: "50%", top: "95%", rotate: "-12deg", binary: "10101000110010110010011101000010" }
                ].map((item, idx) => (
                  <motion.div
                    key={`binary-${idx}`}
                    className="absolute text-[8px] sm:text-xs text-gray-700 whitespace-nowrap"
                    style={{
                      left: item.left,
                      top: item.top,
                      transform: `rotate(${item.rotate})`,
                    }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ 
                      opacity: [0, 0.4, 0],
                      y: [0, idx % 2 === 0 ? 50 : -50] 
                    }}
                    transition={{
                      duration: 10 + (idx * 2),
                      delay: idx * 0.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    {item.binary}
                  </motion.div>
                ))}
              </div>

              {/* Main Content (Title, Progress Bar) */}
              <motion.div
                className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-4 gap-8"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                animate={isComplete ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isComplete ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
                  transition={isComplete ? { duration: 0.7, ease: "easeOut" } : { delay: 0.1, duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center"
                  style={{ fontFamily: "'Arial Black', Gadget, sans-serif" }}
                >
                  <span className="text-[#fb9119]">{mellingPart}</span>
                  <span className="text-[#121212]">{webStudiosPart}</span>
                  {typedText.length < fullText.length && <span className="text-cursor"></span>}
                </motion.div>

                <motion.div
                  className="w-full flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isComplete ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  transition={isComplete ? { duration: 0.6, ease: "easeOut" } : { delay: 0.3, duration: 0.4 }}
                >
                  <div className="w-full max-w-[15rem] h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#fb9119] to-[#ffcd34]"
                      style={{ boxShadow: "0 0 10px rgba(251, 145, 25, 0.3)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.1 }}
                    />
                  </div>
                  <motion.p
                    key={progress < 100 ? "loading" : "ready"}
                    initial={{ opacity: 0, scale: 0.8, y: 5 }}
                    animate={{
                      opacity: 1,
                      scale: progress < 100 ? 1 : 1.1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8, y: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: progress < 100 ? 20 : 12,
                      delay: progress < 100 ? 0 : 0.2,
                    }}
                    className="text-sm sm:text-base text-[#fb9119] tracking-wider font-medium"
                  >
                    {progress < 100 ? `LOADING... ${Math.floor(progress)}%` : "READY!"}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={showContent ? "block" : "hidden"}>{children}</div>
    </>
  );
}
