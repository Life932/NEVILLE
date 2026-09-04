"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StrokeText from "@/components/ui/stroke-text";

export function AboutHero({
  title = "ABOUT US",
  subtitle = "Overview of what Neville stands for.",
  bgImage = "/about_us_hero.jpg",
  strokeColor = "#1A4FB4",
  fillColor = "#FFFFFF",
}) {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] max-h-[760px] flex items-center justify-center overflow-hidden select-none bg-black">
      
      {/* 1. Background Image with Delayed Cinematic Pan-Out */}
      {/* Starts zoomed-in at scale: 1.15 (static). After 1.1s, slowly scales down to 1.0 over 8.0s */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.0 }}
        transition={{
          delay: 0,
          duration: 30.0,
          ease: [0.25, 1, 0.5, 1], // Smooth cinematic easing
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={bgImage}
          alt="Hero Background"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* 2. Dual Atmospheric Vignette & Soft Blur Overlay */}
      <div className="absolute inset-0 z-10 bg-black/55 backdrop-blur-[1px]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-transparent to-black/80 pointer-events-none" />

      {/* 3. Centered Content Container with 5xl / 8xl / 9xl Scale */}
      <div className="relative z-20 w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        
        {/* Animated Stroke Title (Scales to 5xl mobile, 8xl tablet, 9xl desktop) */}
        <div className="w-full flex justify-center items-center py-2 max-w-4xl lg:max-w-5xl">
          <StrokeText
            text={title}
            strokeColor={strokeColor}
            fillColor={fillColor}
            strokeWidth={2.0}
            drawDuration={0.65}
            fillDelay={0.10}
            stagger={0.025}
            ease="power3.out"
            trigger="mount"
            fillMode="fade"
            fontSize={138}
            fontWeight={700}
            letterSpacing={3}
            className="text-center drop-shadow-sm"
          />
        </div>

        {/* Subtext with Delayed Fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
          className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl font-normal text-slate-200 tracking-wide max-w-2xl text-center leading-relaxed"
        >
          {subtitle}
        </motion.p>

      </div>
    </section>
  );
}

export default AboutHero;
