"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    motionValue.set(0);
    setDisplay(0);
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [isInView, motionValue, value]);

  useEffect(() => {
    if (isInView) return;
    setDisplay(value);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
