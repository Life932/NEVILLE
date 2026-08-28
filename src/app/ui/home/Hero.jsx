"use client";

import { motion } from "framer-motion";

/* ============================================================================
   NEVILLE EDITORIAL TYPOGRAPHY & ANIMATION — SEMANTIC DESIGN SYSTEM
   ============================================================================ */

// Animation rules for the container (handles the staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Speed of the left-to-right wave
      delayChildren: 0.15,
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

// Reusable component to safely animate lines without chopping letters.
function AnimatedLine({ text, className }) {
  return (
    <span className="-mb-4 block w-full overflow-hidden pb-4 md:-mb-6 md:pb-6">
      <motion.span
        className={`flex flex-wrap gap-x-[0.28em] ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
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
      </motion.span>
    </span>
  );
}

const tickerItems = [
  "Youth-Led Ecosystem",
  "Systemic Support",
  "Data-Driven Research",
  "Peer-to-Peer Mentorship",
  "Dhaka, Bangladesh",
];

function ImpactTicker() {
  // Duplicated once so translating the track by exactly -50% loops seamlessly.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="flex h-full items-center overflow-hidden">
      <motion.div
        className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap px-6 md:gap-12 md:px-12"
        animate={{ x: ["0%", "-25%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-8 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:gap-12 md:text-sm"
          >
            {item}
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] w-full flex-col overflow-hidden bg-background text-foreground md:min-h-[calc(100vh-4.5rem)] transition-colors duration-300">
      {/* ========================================= */}
      {/* MAIN TYPOGRAPHY (Bottom-Left Aligned)     */}
      {/* ========================================= */}
      <div className="z-10 flex w-full flex-col px-6 pt-24 pb-6 sm:pt-28 md:px-12 md:pb-8 lg:px-20 lg:pt-32">
        {/* Eyebrow + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:mb-4"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase md:text-xs">
            Dhaka &middot; Youth-Led Ecosystem
          </span>
          <a
            href="https://forms.gle/j11RnDdtBDZ8PyZq5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all shadow-sm md:text-sm md:px-6 md:py-2.5 cursor-pointer"
          >
            Join the movement &rarr;
          </a>
        </motion.div>

        {/* One-line mission statement */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-6 max-w-md text-sm leading-snug text-muted-foreground md:mb-8 md:text-base font-medium"
        >
          We replace one-off charity with systemic support, real data, and
          peer-to-peer mentorship.
        </motion.p>

        <h1 className="max-w-[100rem]">
          <AnimatedLine
            text="Empowering Youth,"
            className="text-[clamp(1.75rem,8.5vw,7.5rem)] leading-[1.05] font-extrabold tracking-tight text-foreground"
          />
          <AnimatedLine
            text="Building Leaders."
            className="text-[clamp(1.75rem,8.5vw,7.5rem)] leading-[1.05] font-extrabold tracking-tight text-foreground"
          />
        </h1>
      </div>

      {/* ========================================= */}
      {/* IMPACT TICKER                             */}
      {/* ========================================= */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-20 mt-auto h-10 w-full min-h-10 bg-muted/70 border-t border-border shadow-neo-sm md:h-[16vh] md:min-h-16"
      >
        <div className="flex h-full items-center">
          <ImpactTicker />
        </div>
      </motion.div>
    </section>
  );
}
