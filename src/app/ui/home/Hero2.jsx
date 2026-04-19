"use client";

import { motion } from "framer-motion";

/* ============================================================================
   DEV NOTE: HUMAAN EDITORIAL TYPOGRAPHY & ANIMATION
   ----------------------------------------------------------------------------
   1. Bottom-Left Anchor: We use `flex-col justify-end` on the main container 
      so the text naturally sits at the bottom left, above the white showreel box.
   2. The "Overlap" Fix: Added `pb-4 md:pb-8` to the overflow mask. This allows 
      descending letters (like 'g' or 'p') to render fully without getting cut off!
   3. The "Left-to-Right" Cascade: `staggerChildren: 0.1` ensures the words 
      appear in a smooth wave from left to right.
============================================================================ */

// Animation rules for the container (handles the staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Speed of the left-to-right wave
      delayChildren: 0.1,
    },
  },
};

// Animation rules for each individual word
const wordVariants = {
  hidden: { y: "120%", opacity: 0, rotateZ: 3 },
  show: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // High-end agency easing curve
    },
  },
};

// Reusable component to safely animate lines without chopping letters
const AnimatedLine = ({ text, className }) => (
  // DEV NOTE: 'pb-6 -mb-6' is the magic fix! It extends the hidden mask downward
  // so the 'g' and 'y' can breathe, then pulls the next line back up to keep it tight.
  <div className="overflow-hidden pb-4 md:pb-8 -mb-4 md:-mb-8 w-full">
    <motion.div
      className={`flex flex-wrap gap-x-[2vw] md:gap-x-[1.5vw] ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block origin-bottom-left"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  </div>
);

export default function Hero() {
  return (
    // DEV NOTE: bg-base-200 provides the soft icy off-white background.
    <section className="relative min-h-screen w-full bg-base-200 flex flex-col justify-end pt-32 selection:bg-primary selection:text-white overflow-hidden">
      {/* ========================================= */}
      {/* 1. MAIN TYPOGRAPHY (Bottom-Left Aligned)  */}
      {/* ========================================= */}
      {/* DEV NOTE: 'flex-grow flex flex-col justify-end pb-12' pushes the text to the bottom */}
      <div className="w-full px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-24 z-10 flex-grow flex flex-col justify-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-[100rem]"
        >
          {/* 
            DEV NOTE: TEXT SIZING
            Using text-[13vw] ensures it scales perfectly across all monitors.
            'leading-[1.1]' ensures there is a perfect, breathable gap between lines.
          */}
          <AnimatedLine
            text="Empowering Youth,"
            className="text-[13vw] md:text-[11vw] lg:text-[10vw] font-black text-neutral leading-[1.1] tracking-tighter"
          />
          <AnimatedLine
            text="Building Leaders."
            className="text-[13vw] md:text-[11vw] lg:text-[10vw] font-black text-neutral leading-[1.1] tracking-tighter"
          />
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* 2. THE BOTTOM WHITE SHOWREEL CONTAINER    */}
      {/* ========================================= */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-base-100 rounded-t-[2.5rem] md:rounded-t-[4rem] h-[15vh] md:h-[22vh] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-20"
      >
        {/* Placeholder for the upcoming video/image showreel block */}
      </motion.div>
    </section>
  );
}
