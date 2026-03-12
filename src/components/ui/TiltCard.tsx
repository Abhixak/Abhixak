"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 12 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
