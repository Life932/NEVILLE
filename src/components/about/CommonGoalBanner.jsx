"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMMON_GOAL_DATA as defaultData } from "@/data/common-goal-data";

/* ============================================================================
   COMMON GOAL MANIFESTO BANNER (SECTION 8 OF /about)
   ----------------------------------------------------------------------------
   Directly reproduces the COP31 editorial statement band:
   - Full-width soft mint/ice-green tinted ambient band.
   - Centered emerald uppercase overline tag.
   - Large, high-impact italicized quote serving as the organization's
     north-star mandate.
   - Smooth Framer Motion entrance on scroll.
============================================================================ */

export function CommonGoalBanner({
  overline = defaultData.overline,
  statement = defaultData.statement,
}) {
  return (
    <section
      aria-label="Common Goal Manifesto"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-emerald-500/[0.05] dark:bg-emerald-950/20 border-y border-emerald-500/10 dark:border-emerald-500/15 overflow-hidden transition-colors"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Overline Tag */}
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-accent uppercase mb-4 sm:mb-6 block select-none">
            {overline}
          </span>

          {/* Main Manifesto Statement */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold italic tracking-tight text-foreground leading-[1.22] sm:leading-[1.2] text-balance">
            {statement}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default CommonGoalBanner;
