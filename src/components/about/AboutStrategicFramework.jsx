"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Sparkles,
  ArrowRight,
  Leaf,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { STRATEGIC_FRAMEWORK_DATA as defaultData } from "@/data/about-strategic-framework-data";

/* ============================================================================
   ICON REGISTRY
   ----------------------------------------------------------------------------
   Maps string identifier keys to actual Lucide SVG icon components.
   Ensures seamless serialization when data is sourced from Sanity.io CMS.
============================================================================ */
const ICON_MAP = {
  Globe,
  Sparkles,
  ArrowRight,
  Leaf,
  ShieldCheck,
  Share2,
};

/* ============================================================================
   STRATEGIC FRAMEWORK & IMPACT MATRIX (SECTION 7 OF /about)
   ----------------------------------------------------------------------------
   Directly reproduces the COP31 dual-block layout:
   1. Top Tier: Institutional narrative block with accent vertical rule,
      globe icon, italic quote, and descriptive prose.
   2. Bottom Tier: Deep emerald summit mega-card with 2-column layout on desktop
      and stacked on mobile. Inset callout on left, photo backdrop with 3
      frosted glass action pills on right.
============================================================================ */

export function AboutStrategicFramework({ data = defaultData }) {
  const { topTier, bottomTier } = data;

  // Resolve top-tier icon
  const TopIconComponent =
    typeof topTier.icon === "string"
      ? ICON_MAP[topTier.icon] || Globe
      : topTier.icon || Globe;

  return (
    <section
      aria-label="Strategic Framework and Impact Matrix"
      className="relative w-full bg-background text-foreground transition-colors overflow-hidden"
    >
      {/* =====================================================================
          1. TOP TIER: INSTITUTIONAL NARRATIVE BLOCK
          ===================================================================== */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-l-2 border-primary pl-4 sm:pl-5 space-y-3"
        >
          {/* Header Title Line */}
          <div className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            <TopIconComponent className="w-5 h-5 text-primary shrink-0 stroke-[2.2]" />
            <span>{topTier.title}</span>
          </div>

          {/* Quote Callout */}
          <p className="text-base sm:text-lg italic font-medium text-foreground/85 leading-relaxed max-w-3xl">
            {topTier.quote}
          </p>

          {/* Narrative Prose */}
          <p className="text-sm sm:text-base font-normal text-muted-foreground leading-relaxed max-w-3xl mt-3">
            {topTier.narrative}
          </p>
        </motion.div>
      </div>

      {/* =====================================================================
          2. BOTTOM TIER: DEEP EMERALD SUMMIT MEGA-CARD
          ===================================================================== */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#054231] dark:bg-[#032e22] text-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-700/40 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] xl:min-h-[540px]">
            {/* ----------------- LEFT HALF: STRATEGY & INSET CALLOUT ----------------- */}
            <div className="p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between space-y-6 sm:space-y-8 z-10">
              <div className="space-y-4 sm:space-y-5">
                {/* Overline Micro-Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-widest font-semibold w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{bottomTier.badgeText}</span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {bottomTier.heading}
                </h3>

                {/* Prose Description */}
                <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">
                  {bottomTier.description}
                </p>
              </div>

              {/* Inset Emphasis Callout Box (COP31 Signature Feature) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/25 dark:bg-black/40 border border-white/10 flex items-start gap-4 shadow-inner">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold italic text-white leading-snug self-center">
                  {bottomTier.callout}
                </p>
              </div>
            </div>

            {/* ----------------- RIGHT HALF: PHOTO BACKDROP WITH 3 FROSTED PILLS ----------------- */}
            <div className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              {/* Photo Background */}
              <Image
                src={bottomTier.backdropImage}
                alt={bottomTier.backdropAlt || "NEVILLE Educational Empowerment"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-75 contrast-110"
                priority={false}
              />

              {/* Multi-Angle Gradient Vignette Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-black/20 lg:to-[#054231]/80 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3 Stacked Frosted Action Pills */}
              <div className="space-y-3.5 sm:space-y-4 relative z-10 w-full max-w-lg mx-auto lg:mx-0">
                {bottomTier.actionPills.map((pill, index) => {
                  const PillIconComponent =
                    typeof pill.icon === "string"
                      ? ICON_MAP[pill.icon] || Leaf
                      : pill.icon || Leaf;

                  return (
                    <motion.div
                      key={pill.id || index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="p-4 sm:p-4.5 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 flex items-center gap-3.5 text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-black/65 transition-colors duration-300 select-none"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <PillIconComponent className="w-4.5 h-4.5 stroke-[2.2]" />
                      </div>
                      <span className="leading-snug">{pill.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const StrategicFramework = AboutStrategicFramework;
export default AboutStrategicFramework;
