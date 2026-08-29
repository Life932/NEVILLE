"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, Linkedin, Twitter, Github, Mail, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function MemberDetailCard({ member, allMembers, onSelectMember, onClose }) {
  const currentIndex = allMembers.findIndex((m) => m.id === member.id);
  const prevMember = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
  const nextMember = allMembers[(currentIndex + 1) % allMembers.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-6xl mx-auto py-6 md:py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT COLUMN: DIAMOND PORTRAIT & CLOSE ================= */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          {/* Main Visual Diamond Stage */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center my-6">
            
            {/* Background Offset Accent Diamond */}
            <motion.div
              initial={{ scale: 0.8, rotate: 45, opacity: 0 }}
              animate={{ scale: 1, rotate: 45, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88 bg-secondary/15 dark:bg-secondary/25 rounded-2xl border border-secondary/40 pointer-events-none"
            />

            {/* Geometric Framing Lines (Editorial Detail) */}
            <div className="absolute inset-0 rotate-45 border border-dashed border-border/70 rounded-2xl pointer-events-none" />

            {/* Main Diamond Image Mask */}
            <motion.div
              layoutId={`member-diamond-${member.id}`}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-76 md:h-76 rotate-45 overflow-hidden rounded-2xl border-2 border-border shadow-neo-lg bg-muted z-10"
            >
              <div className="absolute inset-0 -rotate-45 scale-[1.48] w-full h-full">
                <Image
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  sizes="(max-width: 768px) 320px, 480px"
                  className="object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </motion.div>

            {/* Accent Floating Diamond Close Button (Globule Bleu Style) */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 45 }}
              whileTap={{ scale: 0.94 }}
              onClick={onClose}
              aria-label="Close details"
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-neo-md rotate-45 flex flex-col items-center justify-center cursor-pointer transition-colors z-30 min-h-[44px] min-w-[44px]"
            >
              <div className="-rotate-45 flex flex-col items-center justify-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase mt-0.5 font-bold">
                  CLOSE
                </span>
              </div>
            </motion.button>
          </div>

          {/* Member Pagination Pill */}
          <div className="flex items-center gap-3 mt-4 text-xs font-mono text-muted-foreground">
            <button
              onClick={() => onSelectMember(prevMember)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border hover:bg-muted hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center"
              aria-label="Previous member"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <span className="px-2">
              {currentIndex + 1} / {allMembers.length}
            </span>
            <button
              onClick={() => onSelectMember(nextMember)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border hover:bg-muted hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center"
              aria-label="Next member"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL TYPOGRAPHY & QUOTE ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          
          {/* Department / Category Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-secondary font-semibold">
              {member.departmentLabel}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground">
              <span className="font-normal block sm:inline">{member.firstName} </span>
              <span className="text-foreground/85 uppercase tracking-wide">{member.lastName}</span>
            </h2>
            <p className="text-lg sm:text-xl font-light text-muted-foreground">
              {member.role}
            </p>
          </div>

          {/* Hairline Divider with Accent */}
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-12 bg-secondary" />
            <div className="h-[1px] flex-1 bg-border" />
          </div>

          {/* Pull Quote */}
          <div className="relative pl-6 py-2 border-l-2 border-secondary/50">
            <Quote className="absolute -top-3 -left-3 w-6 h-6 text-secondary/30 bg-background p-0.5" />
            <blockquote className="text-lg sm:text-xl italic font-light leading-relaxed text-foreground">
              &ldquo;{member.quote}&rdquo;
            </blockquote>
          </div>

          {/* Narrative Bio */}
          <p className="text-sm sm:text-base font-normal leading-relaxed text-muted-foreground max-w-xl">
            {member.bio}
          </p>

          {/* Initiatives & Key Focus Badges */}
          {member.initiatives?.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground/80 block">
                Active Projects & Curricula:
              </span>
              <div className="flex flex-wrap gap-2">
                {member.initiatives.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-muted border border-border text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Channels */}
          <div className="flex items-center gap-3 pt-4">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-border bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors min-h-[44px] min-w-[44px]"
                aria-label={`${member.firstName}'s LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-border bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors min-h-[44px] min-w-[44px]"
                aria-label={`${member.firstName}'s X profile`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-border bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors min-h-[44px] min-w-[44px]"
                aria-label={`${member.firstName}'s GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {member.socials.email && (
              <a
                href={`mailto:${member.socials.email}`}
                className="w-11 h-11 rounded-full border border-border bg-muted flex items-center justify-center text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors min-h-[44px] min-w-[44px]"
                aria-label={`Email ${member.firstName}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}