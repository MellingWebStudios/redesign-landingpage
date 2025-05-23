"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import Navbar from "./navbar";
import Footer from "./footer";
import { useLoadingContext } from "./loading-context";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const { setIsLoading } = useLoadingContext();

  // Manage loading state in context for other components to access
  useEffect(() => {
    setIsLoading(!loaded);
  }, [loaded, setIsLoading]);

  // Handle transition complete
  const handleLoadComplete = () => {
    setLoaded(true);
    
    // Scroll to top when content is loaded
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <Preloader onLoadComplete={handleLoadComplete}>
      <AnimatePresence mode="wait">
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="relative" // For proper stacking context
          >
            <Navbar />
            <motion.main 
              className="min-h-screen"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              {children}
            </motion.main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Preloader>
  );
}