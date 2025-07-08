"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLoading } from "./loading-context";
import type { ReactNode } from "react";
import { useMemo } from "react";
import React from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function Reveal({
  children,
  width,
  delay = 0,
}: RevealProps) {
  const pathname = usePathname();
  const { isLoading } = useLoading();

  // Auto-detect if we need full width based on common centering patterns
  const autoWidth = useMemo(() => {
    if (width) return width; // Use explicit width if provided
    
    // Use a safer approach to detect centering in className props
    let shouldUseFullWidth = false;
    
    // Helper function to check for centering classes in a string
    const hasCenteringClass = (classStr?: string) => {
      if (!classStr) return false;
      
      const centeringPatterns = [
        'text-center',
        'justify-center',
        'items-center',
        'mx-auto',
        'flex justify-center',
        'max-w-3xl mx-auto',
        'max-w-4xl mx-auto'
      ];
      
      return centeringPatterns.some(pattern => classStr.includes(pattern));
    };      // Check immediate child's className
      try {
        React.Children.forEach(children, (child) => {
          if (React.isValidElement(child)) {
            // Check className directly
            const className = (child.props as { className?: string }).className;
            if (className && hasCenteringClass(className)) {
              shouldUseFullWidth = true;
            }
            
            // Check for flexbox centering in style prop
            const style = (child as React.ReactElement).props && typeof (child as React.ReactElement).props === 'object'
              ? (child as React.ReactElement).props.style as Record<string, any> | undefined
              : undefined;
            if (style && 
                ((style.display === 'flex' && style.justifyContent === 'center') ||
                 style.textAlign === 'center')) {
              shouldUseFullWidth = true;
            }
          }
        });
      } catch (e) {
        // If any error occurs during inspection, default to fit-content
        console.error("Error in Reveal component:", e);
      }
    
    return shouldUseFullWidth ? "100%" : "fit-content";
  }, [children, width]);

  return (
    <div style={{ position: "relative", width: autoWidth, overflow: "visible", minHeight: 1 }}>
      <motion.div
        key={pathname + String(isLoading)} // <--- changes on route and preloader change!
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.5,
          delay: isLoading ? 0 : delay,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
