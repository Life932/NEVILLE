"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  GraduationCap,
  Atom,
  HeartHandshake,
  Building2,
  Camera,
} from "lucide-react";
import { participantsData as defaultParticipants } from "@/data/participants-data";

/* ============================================================================
   ICON COMPONENT REGISTRY
   ----------------------------------------------------------------------------
   Maps string identifier keys to actual Lucide SVG icon components.
   Ensures seamless serialization when data is sourced from Sanity.io CMS.
============================================================================ */
const ICON_MAP = {
  Trophy,
  GraduationCap,
  Atom,
  HeartHandshake,
  Building2,
  Camera,
};

/* ============================================================================
   WHO PARTICIPATES SECTION (SECTION 4 OF /about)
   ----------------------------------------------------------------------------
   Reproduces the COP31 institutional ecosystem stakeholder grid:
   - Centered authoritative header with clean subtitle.
   - Alternating horizontal widths: Row 1 (Wide + Short), Row 2 (Short + Wide),
     Row 3 (Wide + Short) via 12-column grid (7 cols / 5 cols).
   - Bottom-to-top vignette gradient for high contrast text readability.
   - Heavy bottom-left label paired with a faint outline ghost watermark icon.
   - Mobile-first, fully responsive with zero horizontal overflow.
============================================================================ */

export function WhoParticipatesSection({
  heading = "WHO PARTICIPATES?",
  subtitle = "Tens of thousands of participants across Bangladesh, including...",
  items = defaultParticipants,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-background text-foreground transition-colors overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
            {heading}
          </h2>
          <p className="text-sm sm:text-base font-normal text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* ================= ALTERNATING WIDE / COMPACT HORIZONTAL GRID ================= */}
        {/* 
            12-Column Responsive Matrix:
            Row 1: Card 1 (7 cols / Wide)  + Card 2 (5 cols / Compact)
            Row 2: Card 3 (5 cols / Compact) + Card 4 (7 cols / Wide)
            Row 3: Card 5 (7 cols / Wide)  + Card 6 (5 cols / Compact)
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-16">
          {items.map((item, index) => {
            // Resolve icon component dynamically
            const IconComponent =
              typeof item.icon === "string"
                ? ICON_MAP[item.icon] || Trophy
                : item.icon || Trophy;

            // Determine alternating horizontal column span:
            // Explicit span override or automatic alternating 7-5 / 5-7 pattern
            const isWide =
              item.span === "wide" ||
              (!item.span && (index % 4 === 0 || index % 4 === 3));

            const colSpanClass = isWide
              ? "md:col-span-7 lg:col-span-7"
              : "md:col-span-5 lg:col-span-5";

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative w-full ${colSpanClass} h-64 sm:h-72 lg:h-80 xl:h-[340px] rounded-3xl lg:rounded-[2.25rem] overflow-hidden group shadow-neo-md border border-border/60 bg-muted cursor-pointer transition-all duration-300 hover:shadow-neo-lg hover:border-border`}
              >
                {/* Background Stakeholder Photography */}
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Gradient Overlay for Crisp Legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10 pointer-events-none transition-opacity duration-300 group-hover:from-black/90"
                />

                {/* Bottom-Left Title Label */}
                <div className="absolute bottom-6 left-6 z-20 pr-16 sm:pr-20 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom-Right Ghost Outline Watermark Icon (COP31 Signature Element) */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 z-20 pointer-events-none select-none text-white/20 transform translate-y-1 group-hover:text-white/35 transition-colors duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20">
                    <IconComponent className="w-full h-full stroke-[1.25]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export const WhoParticipates = WhoParticipatesSection;
export default WhoParticipatesSection;
