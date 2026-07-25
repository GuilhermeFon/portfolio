"use client";

import React, {useRef} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element leans toward the cursor (0-1). */
  strength?: number;
  className?: string;
}

const springConfig = {stiffness: 150, damping: 15, mass: 0.1};

/**
 * Wraps an interactive element so it subtly leans toward the cursor while
 * hovered and springs back to center on leave. Layout-neutral (inline-flex
 * wrapper) so it can wrap an existing button without altering its styles.
 * No-ops when the user prefers reduced motion.
 */
const Magnetic: React.FC<MagneticProps> = ({children, strength = 0.35, className}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{x: springX, y: springY, display: "inline-flex"}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
