"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLoading } from "./loading-context";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function Reveal({
  children,
  width = "fit-content",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const pathname = usePathname();
  const { isLoading } = useLoading();

  // Reset animation state when route changes
  useEffect(() => {
    setHasTriggered(false);
    mainControls.set("hidden");
  }, [pathname, mainControls]);

  // Only start reveal animations after preloader is complete
  useEffect(() => {
    if (!isLoading && isInView && !hasTriggered) {
      setHasTriggered(true);
      mainControls.start("visible");
    }
  }, [isInView, hasTriggered, mainControls, isLoading]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "visible", minHeight: 1 }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
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
