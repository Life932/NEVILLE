"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Facebook, Instagram, Twitter, Github } from "lucide-react";
import { TEAM_MEMBERS as defaultMembers } from "@/data/about-team-showcase-data";

/* ============================================================================
   ABOUT TEAM SHOWCASE ("LEADING THE CHANGE")
   ----------------------------------------------------------------------------
   Directly reproduces the COP31 leadership showcase & switcher architecture:
   - Deep dark evergreen canvas with soft watermark leader silhouette.
   - Centered "LEADING THE CHANGE" overline with emerald divider line.
   - Left Column: Active leader portrait card with dashed contour, gradient
     vignette, authoritative typography, and social links.
   - Right Column: Dynamic quote block with ghost quote glyph + multi-avatar
     interactive switcher ring matrix with grayscale/active glow states.
============================================================================ */

export function AboutTeamShowcase({ members = defaultMembers }) {
  const [activeId, setActiveId] = useState(members[0]?.id || "mehedi");

  const activeMember =
    members.find((member) => member.id === activeId) || members[0];

  return (
    <section
      aria-label="Leadership Team Showcase"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#041c14] dark:bg-[#03150f] text-white overflow-hidden transition-colors"
    >
      {/* ================= BACKGROUND WATERMARK SILHOUETTE ================= */}
      <div
        className="absolute right-0 top-0 h-full w-full lg:w-1/2 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMember.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full"
          >
            <Image
              src={activeMember.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top blur-[1px] mix-blend-screen"
              priority={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-emerald-400 uppercase text-center block select-none">
            LEADING THE CHANGE
          </span>
          <div
            className="w-12 h-0.5 bg-emerald-500/40 mx-auto mt-2.5"
            aria-hidden="true"
          />
        </div>

        {/* ================= 2-COLUMN SHOWCASE GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ----------------- LEFT COLUMN: ACTIVE LEADER CARD ----------------- */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[480px] sm:h-[530px]">
              {/* Dashed Outer Contour */}
              <div
                className="absolute -inset-2.5 rounded-[3rem] border border-dashed border-emerald-500/25 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Squircle Portrait Card */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-500/30 bg-[#06241a]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMember.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeMember.image}
                      alt={activeMember.name}
                      fill
                      sizes="(max-width: 768px) 340px, 380px"
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Vignette & Metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10 pointer-events-none">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {activeMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1 uppercase tracking-wider">
                    {activeMember.role}
                  </p>

                  {/* Social Icon Links */}
                  {activeMember.socials && (
                    <div className="pointer-events-auto flex items-center gap-2 mt-4">
                      {activeMember.socials.linkedin && (
                        <Link
                          href={activeMember.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s LinkedIn Profile`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      )}
                      {activeMember.socials.facebook && (
                        <Link
                          href={activeMember.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s Facebook Profile`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Facebook className="w-4 h-4" />
                        </Link>
                      )}
                      {activeMember.socials.instagram && (
                        <Link
                          href={activeMember.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s Instagram Profile`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Instagram className="w-4 h-4" />
                        </Link>
                      )}
                      {activeMember.socials.twitter && (
                        <Link
                          href={activeMember.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s Twitter/X Profile`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Twitter className="w-4 h-4" />
                        </Link>
                      )}
                      {activeMember.socials.github && (
                        <Link
                          href={activeMember.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s GitHub Profile`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                      {activeMember.socials.email && (
                        <Link
                          href={activeMember.socials.email}
                          aria-label={`Email ${activeMember.name}`}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center text-white/90 backdrop-blur-sm"
                        >
                          <Mail className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- RIGHT COLUMN: LEADER QUOTE & AVATAR MATRIX ----------------- */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:space-y-12 max-w-2xl">
            {/* Quote Block with Ghost Glyph */}
            <div className="relative pr-4 sm:pr-8 min-h-[140px] flex items-center">
              <div
                className="absolute -top-10 -right-2 sm:right-4 text-7xl sm:text-8xl font-serif text-white/10 pointer-events-none select-none"
                aria-hidden="true"
              >
                “
              </div>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeMember.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white leading-[1.35] tracking-tight relative z-10"
                >
                  “{activeMember.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Avatar Switcher Matrix */}
            <div className="pt-2 sm:pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-3 block">
                Select Leader / Council Member
              </span>
              <div
                role="tablist"
                aria-label="Leadership team switcher"
                className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center"
              >
                {members.map((member) => {
                  const isActive = member.id === activeMember.id;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      role="tab"
                      onClick={() => setActiveId(member.id)}
                      aria-label={`Select ${member.name}, ${member.role}`}
                      aria-selected={isActive}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full relative shrink-0 transition-all duration-300 focus:outline-none p-0.5 cursor-pointer min-w-[44px] min-h-[44px] ${
                        isActive
                          ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#041c14] scale-110 shadow-lg shadow-emerald-500/30 z-10"
                          : "grayscale opacity-50 hover:opacity-90 hover:grayscale-0 hover:scale-105"
                      }`}
                    >
                      <span className="block relative w-full h-full rounded-full overflow-hidden bg-black/40">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeamShowcase;
