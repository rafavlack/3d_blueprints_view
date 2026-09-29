"use client";

import { useEffect, useState } from "react";

export function useResponsive3D() {
  const [config, setConfig] = useState({
    isMobile: false,
    dpr: [1, 2],
    shadows: true,
    simplify: false,
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const apply = () => {
      const isMobile = media.matches;
      const dprCap = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);
      setConfig({
        isMobile,
        dpr: [1, dprCap],
        shadows: !isMobile,
        simplify: isMobile,
      });
    };

    apply();
    media.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return config;
}
