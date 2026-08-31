import Image from "next/image";
import { Sparkles, Layers } from "lucide-react";

/* ============================================================================
   DEV NOTE: ABOUT BRIEF SECTION (CORE MISSION & PURPOSE)
   ----------------------------------------------------------------------------
   Static, high-performance executive manifesto section.
   Features an asymmetrical 2-column composition on desktop with an elevated
   floating content card, and an overlapping sheet-card stack on mobile.
============================================================================ */

export function AboutBriefSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background text-foreground transition-colors overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Responsive Card Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-stretch relative">
          
          {/* ================= LEFT MEDIA BLOCK ================= */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-border bg-muted shadow-neo-sm group">
            
            {/* Background Photography */}
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop"
              alt="Nature & Growth"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center brightness-90 contrast-105"
              priority
            />

            {/* Dark Vignette Overlay for Crisp White Emblem Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 pointer-events-none" />

            {/* Centered NEVILLE Emblem Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 select-none">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-none">
                    NEVILLE
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/85 uppercase block mt-1 font-semibold">
                    YOUTH INITIATIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-Left Floating Micro-Pill Badge */}
            <div className="hidden sm:flex absolute bottom-6 left-6 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/15 dark:bg-black/40 backdrop-blur-md border border-white/25 dark:border-white/15 text-white shadow-neo-md">
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

          {/* ================= RIGHT ELEVATED CONTENT CARD ================= */}
          <div className="lg:col-span-6 relative -mt-8 sm:-mt-12 lg:mt-0 z-20 flex flex-col justify-center">
            <div className="p-8 sm:p-10 lg:p-14 rounded-3xl lg:rounded-[2.5rem] bg-muted text-foreground border border-border shadow-neo-md flex flex-col justify-between space-y-6 h-full">
              
              <div className="space-y-4">
                {/* Overline Kicker in Bright Earth Green */}
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                  A BRIEF LOOK AT OUR MISSION &amp; PURPOSE
                </span>

                {/* Hero Lead Statement */}
                <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-foreground leading-[1.22]">
                  NEVILLE is an independent, youth-driven platform uniting student researchers, Olympiad laureates, and grassroots organizers across Bangladesh.
                </h2>
              </div>

              {/* Detailed Narrative Body */}
              <p className="text-sm sm:text-base font-normal text-muted-foreground leading-relaxed pt-2">
                Founded by student medallists in Dhaka, our initiative was created to dismantle academic gatekeeping. We curate nationwide science and informatics Olympiads, conduct intensive peer-guided masterclasses, and publish open-access STEM problem archives—while backing every program with 100% publicly auditable financial ledgers.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutBriefSection;
