"use client";

import Image from "next/image";
import { BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/* ============================================================================
   ABOUT HISTORY & FRAMEWORK SECTION (SECTION 3 OF /about)
   ----------------------------------------------------------------------------
   Institutional summit architecture inspired by COP31 high-contrast layout.
   - Deep dark canvas (#060913) creates dramatic elevation between lighter zones.
   - Left Column: Faint ghost watermark year (2022), emerald micro-pill badge,
     editorial headline, emerald vertical accent quote bar, and narrative prose.
   - Right Column: Organic rounded media container with subtle vignette and a
     floating frosted glass milestone card pinned inside the bottom.
============================================================================ */

export function AboutHistorySection({
  watermarkYear = "2022",
  tagText = "NEVILLE GENESIS",
  heading = "Our History & Framework",
  quote = "“Democratizing academic rigor is not a privilege—it is Bangladesh’s national imperative.”",
  bodyText = "In 2022, a circle of international Olympiad laureates and student researchers convened in Dhaka with a shared conviction: academic excellence must not remain confined to elite enclaves. What began as grassroots peer-tutoring circles has transformed into NEVILLE—a nationwide institutional framework empowering thousands of high-school and undergraduate innovators through open problem archives, rigorous masterclasses, and decentralized regional governance.",
  imageSrc = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
  turningPointLabel = "TURNING POINT",
  turningPointText = "The historic moment student medallists united for nationwide peer empowerment.",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#060913] text-white transition-colors overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Balanced 2-Column Institutional Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: HISTORY NARRATIVE & WATERMARK ================= */}
          <div className="relative z-10 flex flex-col justify-center">
            
            {/* Ghost Watermark Year (Behind Typography) */}
            <span
              aria-hidden="true"
              className="absolute -top-12 -left-4 sm:-top-16 sm:-left-6 pointer-events-none select-none text-[8rem] sm:text-[11rem] lg:text-[13rem] font-black text-white/[0.04] leading-none tracking-tighter z-0"
            >
              {watermarkYear}
            </span>

            {/* Content Container (Layered above watermark) */}
            <div className="relative z-10 space-y-6 sm:space-y-7">
              
              {/* Micro-Pill Category Tag */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{tagText}</span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {heading}
              </h2>

              {/* Vertical Accent Quote Callout Bar */}
              <div className="flex items-stretch gap-4 pt-1">
                {/* Left Vertical Accent Bar */}
                <div className="w-1 bg-emerald-500 rounded-full shrink-0 self-stretch" />
                
                {/* Italicized Bold Quote */}
                <blockquote className="text-base sm:text-lg italic font-medium text-slate-200 leading-snug pl-0 my-0">
                  {quote}
                </blockquote>
              </div>

              {/* Narrative Body Text */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {bodyText}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ORGANIC MEDIA & FLOATING CARD ================= */}
          <div className="relative w-full">
            {/* Media Container with Organic Radii */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-slate-900">
              
              {/* Background Photography */}
              <Image
                src={imageSrc}
                alt="NEVILLE Genesis & History Framework"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating "Turning Point" Frosted Glass Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/65 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-4 transition-all duration-300 hover:border-white/25">
                  {/* Vibrant Emerald Icon Circle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/25">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>

                  {/* Card Editorial Content */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                      {turningPointLabel}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5">
                      {turningPointText}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export const AboutHistory = AboutHistorySection;
export default AboutHistorySection;
