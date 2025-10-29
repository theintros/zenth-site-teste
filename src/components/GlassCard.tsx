"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  glowing?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  glowing = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -5 } : undefined}
      className={`relative glass-card rounded-2xl p-6 transition-all duration-300 ${
        hover ? "hover:border-primary/20" : ""
      } ${className}`}
    >
      {glowing && (
        <GlowingEffect
          proximity={200}
          spread={30}
          borderWidth={2}
          movementDuration={1.5}
        />
      )}
      {children}
    </motion.div>
  );
}
