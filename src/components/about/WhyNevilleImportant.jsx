"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Zap,
  TrendingUp,
  BookOpen,
  Scale,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { NEVILLE_PILLARS as defaultPillars } from "@/data/why-neville-important-data";

/* ============================================================================
   ICON REGISTRY
   ----------------------------------------------------------------------------
   Maps string identifier keys to actual Lucide SVG icon components.
   Ensures seamless serialization when data is sourced from Sanity.io CMS.
============================================================================ */
const ICON_MAP = {
  Zap,
  TrendingUp,
  BookOpen,
  Scale,
  HeartHandshake,
};

/* ============================================================================
   WHY IS NEVILLE IMPORTANT? (SECTION 5 OF /about)
   ----------------------------------------------------------------------------
   Directly reproduces the COP31 horizontal card slider / carousel architecture:
   - Left-aligned header with narrative subtitle block.
   - Mobile "SCROLL →" prompt positioned above cards.
   - Embla Carousel track with smooth touch/drag physics and momentum.
   - Desktop peek (~3.5 cards) & mobile peek (1 full card + partial next card).
   - Elevated bg-card surfaces with subtle ambient color gradients.
   - Top-left vibrant rounded squircle badge with distinct color identity.
   - Centered/offset faint outline ghost watermark icon.
   - Bottom-left authoritative bold typography.
   - Synchronized elongated active pill pagination indicators.
============================================================================ */

export function WhyNevilleImportant({
  title = "Why is NEVILLE Important?",
  subtitle = "Systemic barriers in Bangladesh have long gatekept STEM Olympiads and academic mentorship behind elite socioeconomic walls. NEVILLE dismantles these boundaries through peer instruction, open archives, and public financial accountability.",
  pillars = defaultPillars,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section
      aria-label="Why is NEVILLE Important"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-background text-foreground transition-colors overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER BLOCK ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              {title}
            </h2>
            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
              {subtitle}
            </p>
          </div>

          {/* Mobile Interaction Cue */}
          <div className="sm:hidden flex justify-end mt-4">
            <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground/80 uppercase flex items-center gap-1.5 select-none">
              SCROLL <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </div>
        </div>

        {/* ================= CAROUSEL TRACK (EMBLA) ================= */}
        <div
          ref={emblaRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing focus:outline-none"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="NEVILLE Strategic Pillars"
        >
          <div className="flex gap-4 sm:gap-6 py-2">
            {pillars.map((pillar, index) => {
              const IconComponent =
                typeof pillar.icon === "string"
                  ? ICON_MAP[pillar.icon] || Zap
                  : pillar.icon || Zap;

              return (
                <div
                  key={pillar.id || index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${pillars.length}: ${pillar.title}`}
                  className="h-[340px] sm:h-[370px] lg:h-[390px] w-[82vw] sm:w-[320px] lg:w-[340px] shrink-0 rounded-3xl sm:rounded-[2.25rem] bg-card border border-border/70 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-7 sm:p-8 select-none"
                >
                  {/* Subtle Ambient Gradient Tint */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.gradientClass} pointer-events-none transition-opacity duration-300`}
                  />

                  {/* Top-Left Vibrant Icon Pill */}
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${pillar.badgeColor}`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Center Faint Ghost Watermark Icon */}
                  <IconComponent
                    aria-hidden="true"
                    className="text-foreground/[0.04] dark:text-white/[0.05] w-36 h-36 sm:w-44 sm:h-44 absolute -right-6 top-12 pointer-events-none stroke-[1] select-none transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Bottom-Left Authoritative Title */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-card-foreground leading-snug max-w-[85%]">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= PAGINATION INDICATORS ================= */}
        <div
          className="flex items-center justify-center gap-1.5 sm:gap-2 pt-8 sm:pt-10"
          role="tablist"
          aria-label="Carousel slide navigation"
        >
          {scrollSnaps.map((_, index) => {
            const isActive = selectedIndex === index;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={isActive}
                className="min-h-[44px] min-w-[28px] sm:min-w-[32px] flex items-center justify-center focus:outline-none group cursor-pointer"
              >
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-8 h-2 sm:h-2.5 bg-primary shadow-xs"
                      : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-border group-hover:bg-muted-foreground/40"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyNevilleImportant;
