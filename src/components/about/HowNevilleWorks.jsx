"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Sun,
  Leaf,
  Lightbulb,
  SearchCheck,
  Target,
  Layers,
  Rocket,
  BarChart3,
} from "lucide-react";
import { NEVILLE_WORKFLOW as defaultWorkflow } from "@/data/how-neville-works-data";

/* ============================================================================
   ICON REGISTRY
   ----------------------------------------------------------------------------
   Maps string identifier keys to actual Lucide SVG icon components.
   Ensures seamless serialization when data is sourced from Sanity.io CMS.
============================================================================ */
const ICON_MAP = {
  Lightbulb,
  SearchCheck,
  Target,
  Layers,
  Rocket,
  BarChart3,
};

/* ============================================================================
   ANIMATION VARIANTS
   ----------------------------------------------------------------------------
   Staggered entrance with smooth easing on scroll into view.
============================================================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================================
   HOW DOES NEVILLE WORK? (SECTION 6 OF /about)
   ----------------------------------------------------------------------------
   Reproduces the COP31 6-card operational protocol grid:
   - Centered summit micro-icon cluster (Blue, Red, Yellow, Green).
   - Clean mono overline badge ("OPERATIONAL PROTOCOL").
   - Bold authoritative centered headline.
   - 3×2 grid of minimal rounded cards with soft pastel circular icon badges
     and bold centered labels.
   - Mobile-first responsive matrix with zero horizontal overflow.
============================================================================ */

export function HowNevilleWorks({
  overline = "OPERATIONAL PROTOCOL",
  heading = "HOW DOES NEVILLE WORK?",
  workflow = defaultWorkflow,
}) {
  return (
    <section
      aria-label="How Does NEVILLE Work"
      className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-background text-foreground transition-colors overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Micro-Icon Cluster (COP31 Mobile/Desktop Signature) */}
          <div
            className="flex items-center justify-center gap-3.5 mb-3 select-none"
            aria-hidden="true"
          >
            <Droplets className="w-5 h-5 text-blue-500 stroke-[2.2]" />
            <Zap className="w-5 h-5 text-red-500 stroke-[2.2]" />
            <Sun className="w-5 h-5 text-amber-500 stroke-[2.2]" />
            <Leaf className="w-5 h-5 text-emerald-500 stroke-[2.2]" />
          </div>

          {/* Overline Tag */}
          <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase text-center block mb-2">
            {overline}
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-center text-foreground uppercase">
            {heading}
          </h2>
        </div>

        {/* ================= 3×2 OPERATIONAL CARD MATRIX ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-7 mt-12 sm:mt-14 lg:mt-16"
        >
          {workflow.map((item, index) => {
            const IconComponent =
              typeof item.icon === "string"
                ? ICON_MAP[item.icon] || Lightbulb
                : item.icon || Lightbulb;

            return (
              <motion.div
                key={item.step || index}
                variants={cardVariants}
                className="h-44 sm:h-48 lg:h-52 w-full rounded-3xl sm:rounded-[2rem] bg-card text-card-foreground border border-border/70 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center group cursor-pointer select-none"
              >
                {/* Centered Pastel Icon Circle */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.circleBg}`}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>

                {/* Centered Title Label */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-foreground leading-snug max-w-[90%]">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export const HowNevilleWorksSection = HowNevilleWorks;
export default HowNevilleWorks;
