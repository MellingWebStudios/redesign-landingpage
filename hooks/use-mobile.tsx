"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    let resizeTimeout: NodeJS.Timeout | null = null;

    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkIfMobile, 150);
    };

    checkIfMobile();
    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
