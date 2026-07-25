"use client";

import React from "react";
import {motion, useReducedMotion, type Variants} from "framer-motion";

interface ScrollRevealProps {
  text: string;
  className?: string;
  /** Delay (in seconds) applied before the first word animates in. */
  delay?: number;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: {staggerChildren: 0.025, delayChildren: delay},
  }),
};

const word: Variants = {
  hidden: {opacity: 0, y: 8, filter: "blur(8px)"},
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {duration: 0.5, ease: [0.25, 0.1, 0.25, 1]},
  },
};

/**
 * Reveals a paragraph word-by-word as it scrolls into view: each word rises a
 * few pixels and sharpens from a soft blur. Falls back to plain, static text
 * when the user prefers reduced motion.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({text, className, delay = 0}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      {words.map((w, i) => (
        <React.Fragment key={`${w}-${i}`}>
          <motion.span
            variants={word}
            style={{display: "inline-block", willChange: "transform, filter"}}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </motion.p>
  );
};

export default ScrollReveal;
