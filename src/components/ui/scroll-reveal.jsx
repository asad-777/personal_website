"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  yOffset = 40,
  blur = "12px",
  duration = 0.8,
  delay = 0,
  once = true,
  amount = 0.15, // Percentage of element that must be in view to trigger
}) {
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
