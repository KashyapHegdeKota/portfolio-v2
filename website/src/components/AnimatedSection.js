// src/components/AnimatedSection.js
"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // Trigger animation when element enters viewport
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      variants={variants}
      transition={{ delay }} // Apply optional delay
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
