"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      className="cursor-glow hidden md:block"
      style={{ left: smoothX, top: smoothY }}
    />
  );
}
