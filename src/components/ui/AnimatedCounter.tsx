"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [isInView, motionValue, value]);

  return <span ref={ref}>{display}</span>;
}
