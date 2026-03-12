"use client";

import { motion, MotionProps } from "framer-motion";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
