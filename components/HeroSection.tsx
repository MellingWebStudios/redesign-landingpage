"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HalftoneBackground from "./HalftoneBackground";
import Reveal from "@/components/reveal-animation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.section 
      className="relative min-h-[calc(100vh-4rem)] bg-background text-foreground flex items-center justify-center pt-24 pb-16"
      initial={{ opacity: 0, scale: 0.98 }} // Start slightly smaller and invisible
      animate={{ opacity: 1, scale: 1 }}    // Fade in and scale to normal size
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1, // Slight delay to allow preloader to finish exiting
      }}
    >
      {/* Improved background with fading entrance */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }} // Slightly delayed background reveal
      >
        <HalftoneBackground />
      </motion.div>

      <div className="container-wide relative z-10 py-20 flex flex-col items-center md:items-center">
        <motion.div 
          className="max-w-3xl w-full flex flex-col items-center md:items-start"
          initial={{ y: 30, opacity: 0 }}  // Start further down and invisible
          animate={{ y: 0, opacity: 1 }}   // Move up and fade in
          transition={{ 
            duration: 0.9, 
            delay: 0.3,     // Additional delay for content
            ease: "easeOut" 
          }}
        >
          <Reveal>
            <div className="w-full text-center md:text-left">
              {/* Badge with improved animation */}
              <motion.div 
                className="mb-4 inline-block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  ease: "easeOut" 
                }}
              >
                <div className="relative">
                  <span className="inline-block py-1 px-3 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full text-[#FF9E2C] shadow-sm">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.95, 1, 0.95]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-block"
                    >
                      Powered by AI
                    </motion.span>
                  </span>
                </div>
              </motion.div>

              <h1 className="mb-0">
                Web Experiences, <br /> Built for Growth.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-full text-center md:text-left">
              <p className="text-xl mb-8 text-muted-1">
                Supercharging your online presence!
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full text-center md:text-left">
              <div className="flex flex-col md:flex-row gap-1 items-center md:items-start">
                <Link href="/free-redesign">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button className="btn btn-primary btn-lg">
                      Free Website Redesign
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/work">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="text">View Our Work</Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="w-full text-center md:text-left">
              <motion.div 
                className="mt-6 md:mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-start gap-1 text-sm text-muted-foreground mx-auto md:mx-0"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.5 + (i * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      <Star
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4 text-primary"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm">
                  <motion.span 
                    className="font-medium text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    5.0/5
                  </motion.span>
                  <motion.span 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    (1 review)
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </motion.section>
  );
}
