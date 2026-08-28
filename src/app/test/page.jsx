"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Trophy, 
  Calendar, 
  User, 
  CheckCircle2, 
  Share2, 
  Github, 
  Twitter, 
  Linkedin 
} from "lucide-react";

export default function ThemeTestPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans pb-24">

      {/* =========================================================================
          1. HERO & FULL-WIDTH PROMO BLOCK (Testing High-Impact Headers & CTAs)
         ========================================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Kicker / Overline with Hot Pink Accent */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs md:text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design System Verification • 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Calm, Airy & Minimalist <br className="hidden sm:inline" />
            <span className="text-primary">Aquamarine</span> &amp;{" "}
            <span className="text-secondary">Hot Pink</span> Palette
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A complete stress-test playground. Inspect your off-white and off-black bases, 
            typography contrast, card elevations, interactive buttons, and media blocks across both themes.
          </p>

          {/* Primary & Secondary Action Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
              <span>Primary Aquamarine CTA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-secondary text-secondary-foreground font-bold px-7 py-3.5 rounded-xl shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
              <span>Hot Pink Secondary</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <button className="bg-background text-foreground border border-border font-semibold px-6 py-3.5 rounded-xl hover:bg-muted active:scale-95 transition-all cursor-pointer">
              Outline Action
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-20 pt-16">

        {/* =========================================================================
            2. LIVE BRAND COLOR PALETTE SWATCHES
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">01. Brand Color Swatches</h2>
            <p className="text-muted-foreground text-sm">Visual balance of base tokens in the active theme mode.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            {/* Primary (Aquamarine) */}
            <div className="p-4 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase opacity-80">Primary</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Aquamarine</p>
                <span className="text-[11px] opacity-75">Brand Main</span>
              </div>
            </div>

            {/* Secondary / Accent (Hot Pink) */}
            <div className="p-4 rounded-2xl bg-secondary text-secondary-foreground flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase opacity-80">Secondary</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Hot Pink</p>
                <span className="text-[11px] opacity-75">Vibrant Accent</span>
              </div>
            </div>

            {/* Canvas Background */}
            <div className="p-4 rounded-2xl bg-background text-foreground border border-border flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase text-muted-foreground">Background</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Canvas Base</p>
                <span className="text-[11px] text-muted-foreground">Off-White / Off-Black</span>
              </div>
            </div>

            {/* Muted / Surface */}
            <div className="p-4 rounded-2xl bg-muted text-muted-foreground border border-border flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase">Surface / Card</span>
              <div>
                <p className="font-extrabold text-lg leading-none text-foreground">Muted Layer</p>
                <span className="text-[11px]">Card Elevation</span>
              </div>
            </div>

            {/* Border Token */}
            <div className="p-4 rounded-2xl bg-card text-card-foreground border-2 border-border flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase text-muted-foreground">Border</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Line Border</p>
                <span className="text-[11px] text-muted-foreground">Subtle 1px divider</span>
              </div>
            </div>

            {/* Foreground Ink */}
            <div className="p-4 rounded-2xl bg-foreground text-background flex flex-col justify-between h-32 shadow-sm">
              <span className="text-xs font-bold uppercase opacity-80">Text Ink</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Foreground</p>
                <span className="text-[11px] opacity-75">Primary Body Copy</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            3. BADGES, STATUS PILLS & TAGS
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">02. Badges &amp; Status Tags</h2>
            <p className="text-muted-foreground text-sm">Used for Olympiad categories, dates, rounds, and subjects.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
              Primary Aquamarine Badge
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
              Hot Pink Accent Badge
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs font-bold">
              ⚡ Registrations Open
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold">
              Junior (Class 6-8)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-muted text-muted-foreground border border-border text-xs font-medium">
              National Round
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-background text-foreground border border-border text-xs font-semibold">
              Dhaka Venue • 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Status
            </span>
          </div>
        </section>


        {/* =========================================================================
            4. TYPOGRAPHY & EDITORIAL ARTICLE PROSE
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-border pb-16">
          
          {/* Left: Typography Scale */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <h2 className="text-2xl font-bold tracking-tight">03. Headings &amp; Hierarchy</h2>
              <p className="text-muted-foreground text-sm">System typography rendered at crisp native resolutions.</p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Display H1</span>
                <h1 className="text-4xl font-extrabold tracking-tight">Empowering Dhaka's Youth</h1>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Section Heading H2</span>
                <h2 className="text-2xl font-bold tracking-tight">National Science &amp; Math Olympiad</h2>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Sub-Heading H3</span>
                <h3 className="text-xl font-bold text-foreground">Preparation Guidelines &amp; Syllabus</h3>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Card Title H4</span>
                <h4 className="text-lg font-semibold text-primary">Microbiology and Atomic Structure</h4>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Subtext / Secondary Label</span>
                <p className="text-sm text-muted-foreground">
                  Updated 2 hours ago by Academic Committee • 4 min read
                </p>
              </div>
            </div>
          </div>

          {/* Right: Article Prose Block */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <h2 className="text-2xl font-bold tracking-tight">04. Article &amp; Prose Reading</h2>
              <p className="text-muted-foreground text-sm">Testing long-form text, inline links, and blockquotes.</p>
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
              <p>
                NEVILLE is structured to dismantle the barrier between theoretical science education 
                and real-world application. Students across secondary schools in Dhaka participate 
                in intensive 2-round academic competitions alongside peer-guided workshops.
              </p>

              {/* Editorial Callout Quote */}
              <blockquote className="p-4 rounded-xl bg-muted border-l-4 border-primary text-foreground italic my-4">
                "True youth empowerment begins when academic rigor meets selfless community service."
                <span className="block not-italic text-xs font-bold text-primary mt-2 uppercase tracking-wide">
                  — NEVILLE Founding Charter, 2024
                </span>
              </blockquote>

              <p>
                Try selecting any portion of this text with your mouse. Notice how the{" "}
                <span className="font-bold underline text-primary cursor-pointer hover:text-secondary transition-colors">
                  interactive inline links
                </span>{" "}
                and the custom <code className="px-2 py-0.5 rounded bg-muted border border-border text-xs font-mono text-secondary">::selection</code> highlight 
                retain complete clarity without visual harshness.
              </p>
            </div>
          </div>

        </section>


        {/* =========================================================================
            5. CARDS & MEDIA PREVIEWS (Testing Image Under Text & Cards)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">05. Cards &amp; Media Containers</h2>
            <p className="text-muted-foreground text-sm">Testing card elevations, image contrast, and nested metadata.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Event Card with Top Image */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="relative h-48 w-full bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" 
                  alt="Olympiad Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-extrabold uppercase shadow-md">
                  Olympiad
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>October 15, 2026</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  National Junior Science Olympiad
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Covering Class 6-8 NCTB advanced concepts, earth gravitation, circuit physics, and chemical counting.
                </p>
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">2 Rounds • 12 Champions</span>
                  <button className="text-sm font-bold text-foreground hover:text-secondary transition-colors inline-flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Editorial Article / Publication Card */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-6 flex flex-col justify-between gap-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-xs font-bold uppercase">
                    Publication
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">5 min read</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer">
                  The Future of STEM Education in Dhaka High Schools
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An in-depth analysis on how practical lab training bridges educational inequity across urban institutions.
                </p>
              </div>

              {/* Author & Profile Badge */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary font-bold text-xs">
                    NA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Neville Academic</p>
                    <p className="text-[10px] text-muted-foreground">Research Team</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Statistic / Impact Card */}
            <div className="bg-muted text-muted-foreground rounded-2xl p-6 border border-border flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground pt-2">Prize Pool &amp; Recognition</h3>
                <p className="text-sm">
                  Over 12 prestigious crests, honor badges, and verified certificates awarded per category.
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <div className="flex justify-between text-xs font-semibold py-1 border-b border-border/60">
                  <span className="text-foreground">National Champions</span>
                  <span className="text-secondary font-bold">12 Crests + Badges</span>
                </div>
                <div className="flex justify-between text-xs font-semibold py-1 border-b border-border/60">
                  <span className="text-foreground">Runners Up</span>
                  <span className="text-primary font-bold">12 Crests + Certs</span>
                </div>
                <div className="flex justify-between text-xs font-semibold py-1">
                  <span className="text-foreground">Campus Ambassadors</span>
                  <span className="text-foreground font-bold">10+ Brings Badge</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            6. STRUCTURED DATA TABLE (Testing Olympiad Mark Distribution)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">06. Structured Data &amp; Table Matrix</h2>
            <p className="text-muted-foreground text-sm">Testing table rows, cell contrast, headers, and alternating fills.</p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/80 text-foreground uppercase text-xs font-bold tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">Stage / Round</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Question Format</th>
                    <th className="px-6 py-4">Total Marks</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Selection Round
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">20 Minutes</td>
                    <td className="px-6 py-4 text-muted-foreground">15 MCQ (15m) + 10 SAQ (20m)</td>
                    <td className="px-6 py-4 font-bold text-foreground">35 Marks</td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Final Grand Round
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">60 Minutes</td>
                    <td className="px-6 py-4 text-muted-foreground">10 Long Analytical Problems</td>
                    <td className="px-6 py-4 font-bold text-foreground">100 Marks</td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold">
                        On-Site
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* =========================================================================
            7. FOOTER PREVIEW BLOCK (Testing Bottom Links & Copyright Contrast)
           ========================================================================= */}
        <section className="space-y-6 border-t border-border pt-12">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">07. Footer &amp; End-of-Page Preview</h2>
            <p className="text-muted-foreground text-sm">Testing subtle copyright labels, legal links, and brand icons.</p>
          </div>

          <footer className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-2 font-black text-2xl tracking-tight text-foreground">
                  <span>NEVILLE</span>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Youth-led educational &amp; community-action initiative • Dhaka, Bangladesh.
                </p>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center gap-3">
                <button className="p-2.5 rounded-xl border border-border bg-background hover:border-primary text-foreground transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-xl border border-border bg-background hover:border-secondary text-foreground transition-colors cursor-pointer">
                  <Github className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-xl border border-border bg-background hover:border-primary text-foreground transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
              <p>© 2026 NEVILLE Initiative. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors">Campus Ambassador Portal</a>
              </div>
            </div>
          </footer>
        </section>

      </div>
    </main>
  );
}