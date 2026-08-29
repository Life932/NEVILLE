"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { teamMembers, teamCategories } from "@/data/team-data";
import { TeamMosaic } from "./TeamMosaic";
import { MemberDetailCard } from "./MemberDetailCard";
import { Sparkles } from "lucide-react";

export function AboutTeamSection() {
  const [selectedId, setSelectedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMembers = teamMembers.filter((m) =>
    activeCategory === "all" ? true : m.department === activeCategory
  );

  const selectedMember = teamMembers.find((m) => m.id === selectedId);

  return (
    <section className="relative w-full py-16 md:py-24 bg-background text-foreground transition-colors overflow-x-hidden">
      
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>The Minds of Neville</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Architects of <span className="font-normal text-secondary">Academic Action</span>
          </h2>

          <p className="text-sm sm:text-base font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A collective of student researchers, Olympiad laureates, and grassroots organizers united across Dhaka.
          </p>

          {/* Category Filter Pills (Visible when in Grid View) */}
          {!selectedMember && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-4"
            >
              {teamCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer min-h-[44px] flex items-center ${
                      isActive
                        ? "bg-primary text-white font-medium shadow-neo-sm"
                        : "bg-muted border border-border text-muted-foreground hover:text-foreground hover:bg-border/40"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* ================= INTERACTIVE VIEW SWITCHER ================= */}
        <AnimatePresence mode="wait">
          {selectedMember ? (
            <MemberDetailCard
              key="detail"
              member={selectedMember}
              allMembers={filteredMembers.length > 0 ? filteredMembers : teamMembers}
              onSelectMember={(m) => setSelectedId(m.id)}
              onClose={() => setSelectedId(null)}
            />
          ) : (
            <motion.div
              key="mosaic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TeamMosaic
                members={filteredMembers}
                onSelectMember={(m) => setSelectedId(m.id)}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}