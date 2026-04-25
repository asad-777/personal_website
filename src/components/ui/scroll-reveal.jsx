"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  yOffset = 30,
  blur = "8px",
  duration = 0.45,
  delay = 0,
  once = false,
  amount = 0.05, // Trigger almost immediately when entering view
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsEnabled(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  if (!isEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-[opacity,transform,filter]", className)}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cinematic easing
      }}
    >
      {children}
    </motion.div>
  );
}
