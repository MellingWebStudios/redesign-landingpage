"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLoading } from "./loading-context";
import type { ReactNode } from "react";

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
  const pathname = usePathname();
  const { isLoading } = useLoading();

  return (
    <div style={{ position: "relative", width, overflow: "visible", minHeight: 1 }}>
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
