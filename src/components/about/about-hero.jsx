"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StrokeText from "@/components/ui/stroke-text";

export function AboutHero({
  title = "ABOUT US",
  subtitle = "Overview of National Academic Olympiads & Impact Initiatives",
  bgImage = "/about_us_hero.jpg",
  strokeColor = "#1A4FB4", // Royal Blue
  fillColor = "#FFFFFF",   // Crisp White
}) {
  return (
    <section className="relative w-full h-[65vh] min-h-[480px] max-h-[700px] flex items-center justify-center overflow-hidden select-none">
      
      {/* 1. Background Image with Initial Zoom-Out Living Animation */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={bgImage}
          alt="About Us Hero Background"
          fill
          priority
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* 2. Dual Black Vignette & Atmospheric Overlay (COP31 Summit Style) */}
      <div className="absolute inset-0 z-10 bg-black/55 backdrop-blur-[1.5px]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />

      {/* 3. Centered Content Stage */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        
        {/* Animated Stroke Title */}
        <div className="w-full flex justify-center items-center py-2">
          <StrokeText
            text={title}
            strokeColor={strokeColor}
            fillColor={fillColor}
            strokeWidth={1.8}
            drawDuration={0.85}
            fillDelay={0.2}
            stagger={0.04}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={110}
            fontWeight={700}
            letterSpacing={3}
            className="text-center"
          />
        </div>

        {/* Subtext with Delayed Smooth Fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-normal text-slate-200 tracking-wide max-w-2xl text-center leading-relaxed"
        >
          {subtitle}
        </motion.p>

      </div>
    </section>
  );
}

export default AboutHero;
