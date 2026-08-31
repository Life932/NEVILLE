"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/* ============================================================================
   ABOUT BRIEF SECTION (CORE MISSION & PURPOSE)
   ----------------------------------------------------------------------------
   Layered institutional summit architecture.
   - Desktop: Hero image card stands significantly taller than the floating text card.
   - Mobile: Edge-to-edge full-bleed image with rounded base, overlapped by 
             an elevated content sheet.
============================================================================ */

export function AboutBriefSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-background text-foreground transition-colors overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Layered Composite Grid */}
        <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-center">
          {/* ================= LEFT / TOP MEDIA BLOCK ================= */}
          {/* 
              - Mobile: Full-bleed edge-to-edge (-mx-4 w-[calc(100%+2rem)]), rounded bottom edge
              - Desktop: Strict tall container (h-[580px] xl:h-[620px]) taller than the text card
          */}
          <div className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full lg:w-[54%] shrink-0 relative h-[380px] sm:h-[460px] lg:h-[580px] rounded-none rounded-bl-none sm:rounded-3xl lg:rounded-[2.5rem] rounded-b-[2.5rem] sm:rounded-b-3xl lg:rounded-b-[2.5rem] overflow-hidden border-0 sm:border border-border/60 bg-muted shadow-neo-md group">
            {/* Background Photography */}
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1400&auto=format&fit=crop"
              alt="Nature & Botanical Background"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center brightness-90 contrast-105"
              priority
            />

            {/* Vignette Overlay for Crisp Logo Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40 pointer-events-none" />

            {/* Centered NEVILLE Official Logo */}
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 select-none pb-12 sm:pb-0">
              <Image
                src="/logo.png"
                alt="NEVILLE Youth Initiative"
                width={280}
                height={100}
                className="w-44 sm:w-52 lg:w-64 h-auto object-contain brightness-0 invert drop-shadow-2xl"
                priority
              />
            </div>

            {/* Bottom-Left Micro-Pill Badge (Desktop Only) */}
            <div className="hidden lg:flex absolute bottom-7 left-7 xl:bottom-8 xl:left-8 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/15 dark:bg-black/40 backdrop-blur-md border border-white/25 dark:border-white/15 text-white shadow-neo-md">
              <div className="w-9 h-9 rounded-xl bg-accent/25 flex items-center justify-center text-accent">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold leading-tight text-white">
                  Academic Rigor
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/80 mt-0.5">
                  PEER EMPOWERMENT
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT / ELEVATED CONTENT CARD ================= */}
          {/* 
              - Mobile: Overlaps upward with -mt-16 sm:-mt-20
              - Desktop: Overlaps horizontal right with lg:-ml-24 xl:-ml-28, sits centered against tall image
          */}
          <div className="w-full lg:w-1/2 lg:-ml-12 relative z-10 -mt-16 sm:-mt-20 lg:mt-0 px-2 sm:px-0">
            <div className="p-7 sm:p-8 lg:p-8 xl:p-10 rounded-3xl lg:rounded-[2rem] bg-card text-card-foreground border border-border/70 shadow-neo-lg flex flex-col justify-center space-y-4">
              <div className="space-y-3 sm:space-y-4">
                {/* High-Energy Blue-to-Green Gradient Overline */}
                <span className="inline-block bg-gradient-to-r from-primary font-semibold to-accent bg-clip-text text-transparent tracking-widest uppercase text-md sm:text-lg">
                  A BRIEF LOOK AT OUR MISSION &amp; PURPOSE
                </span>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-4xl font-extrabold tracking-tight leading-[1.18] text-foreground">
                  NEVILLE is an independent, youth-driven platform uniting
                  student researchers, Olympiad laureates, and grassroots
                  organizers across Bangladesh.
                </h2>
              </div>

              {/* Secondary Editorial Prose */}
              <p className="text-sm sm:text-base font-normal text-muted-foreground leading-relaxed">
                Founded by student medallists in Dhaka, our initiative was
                created to dismantle academic gatekeeping. We curate nationwide
                science and informatics Olympiads, conduct intensive peer-guided
                masterclasses, and publish open-access STEM problem
                archives—while backing every program with 100% publicly
                auditable financial ledgers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutBriefSection;
