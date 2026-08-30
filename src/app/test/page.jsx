"use client";

import React, { useState } from "react";
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
  Linkedin,
  MapPin,
  Landmark,
  GraduationCap,
  Award,
  Microscope,
  HeartHandshake,
  Building2,
  Eye,
  ShieldCheck,
  Target,
  Compass,
  ExternalLink,
  Activity,
  Layers,
  Search,
  Check,
  Flame,
  ArrowUpRight
} from "lucide-react";

export default function ThemeTestPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans pb-24 overflow-x-hidden">

      {/* =========================================================================
          1. INSTITUTIONAL SUMMIT HERO (COP31 High-Energy Header & Dual Action)
         ========================================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-muted/30 py-20 md:py-28 px-4 sm:px-6 lg:px-12">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          
          {/* Overline Badges with Earth Accent Green & Royal Blue */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              NEVILLE SUMMIT • 2026
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-mono font-bold tracking-wider uppercase">
              DHAKA CHAPTER • 14 DISTRICTS
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border text-xs font-mono font-medium">
              EST. 2024
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-5xl">
            Democratizing <span className="text-primary">Academic Rigor</span> &amp; <br className="hidden sm:inline" />
            Empowering Youth Through <span className="text-accent">Grassroots Action</span>.
          </h1>

          {/* Editorial Subtext */}
          <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
            A comprehensive design &amp; layout playground based on the COP summit framework. 
            Stress-test your warm off-white and icy-black canvases, high-energy Royal Blue tokens, 
            Bright Earth Green accents, live tickers, and 6-stage numbered execution blueprints.
          </p>

          {/* Primary, Accent & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-neo-md hover:shadow-neo-lg active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer min-h-[44px]">
              <span>Explore National Olympiads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-neo-md hover:shadow-neo-lg active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer min-h-[44px]">
              <span>View Impact Ledger</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="bg-secondary text-secondary-foreground border border-border font-semibold px-7 py-4 rounded-xl hover:bg-border/40 active:scale-95 transition-all cursor-pointer min-h-[44px]">
              Read Charter
            </button>
          </div>
        </div>
      </section>


      {/* =========================================================================
          2. LIVE CONTINUOUS IMPACT TICKER MARQUEE (COP31 Live Metric Style)
         ========================================================================= */}
      <section className="w-full bg-muted/70 dark:bg-card border-b border-border py-3.5 overflow-hidden select-none">
        <div className="flex items-center whitespace-nowrap animate-[marquee_30s_linear_infinite] gap-12 font-mono text-xs tracking-wider uppercase text-foreground/85">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bold">LIVE METRIC:</span>
                <span className="text-muted-foreground">STUDENTS MENTORED</span>
                <span className="font-bold text-foreground">14,500+ DELEGATES</span>
              </div>
              <span className="text-border">|</span>

              <div className="flex items-center gap-2.5">
                <Trophy className="w-3.5 h-3.5 text-primary" />
                <span className="text-muted-foreground">OLYMPIADS HOSTED:</span>
                <span className="font-bold text-foreground">18 NATIONAL ROUNDS</span>
              </div>
              <span className="text-border">|</span>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span className="text-muted-foreground">REGIONAL DIVISIONS:</span>
                <span className="font-bold text-foreground">14 DISTRICTS COVERED</span>
              </div>
              <span className="text-border">|</span>

              <div className="flex items-center gap-2.5">
                <Landmark className="w-3.5 h-3.5 text-primary" />
                <span className="text-muted-foreground">TRANSPARENT LEDGER:</span>
                <span className="font-bold text-foreground">৳ 2,850,000 DISBURSED</span>
              </div>
              <span className="text-border">|</span>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-muted-foreground">AUDIT STATUS:</span>
                <span className="font-bold text-accent">100% PUBLIC VERIFIED</span>
              </div>
              <span className="text-border">|</span>
            </div>
          ))}
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-24 pt-16">

        {/* =========================================================================
            3. LIVE BRAND COLOR PALETTE SWATCHES & CONTRAST
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3 flex justify-between items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">01. Theme Engine</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Color Token Stress-Test</h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">Tailwind v4 @theme inline</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            {/* Primary: Royal Blue */}
            <div className="p-4 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between h-36 shadow-neo-sm border border-primary/40">
              <span className="text-xs font-mono font-bold uppercase opacity-85">Primary</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Royal Blue</p>
                <span className="text-[11px] opacity-80 font-mono">Brand &amp; Actions</span>
              </div>
            </div>

            {/* Accent: Bright Earth Green */}
            <div className="p-4 rounded-2xl bg-accent text-accent-foreground flex flex-col justify-between h-36 shadow-neo-sm border border-accent/40">
              <span className="text-xs font-mono font-bold uppercase opacity-85">Accent</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Bright Green</p>
                <span className="text-[11px] opacity-80 font-mono">Earth &amp; Impact</span>
              </div>
            </div>

            {/* Secondary: Icy Bluish White */}
            <div className="p-4 rounded-2xl bg-secondary text-secondary-foreground flex flex-col justify-between h-36 shadow-neo-sm border border-border">
              <span className="text-xs font-mono font-bold uppercase opacity-80">Secondary</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Icy Blue-White</p>
                <span className="text-[11px] opacity-75 font-mono">Support Surface</span>
              </div>
            </div>

            {/* Canvas Background */}
            <div className="p-4 rounded-2xl bg-background text-foreground border border-border flex flex-col justify-between h-36 shadow-neo-sm">
              <span className="text-xs font-mono font-bold uppercase text-muted-foreground">Background</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Canvas Base</p>
                <span className="text-[11px] text-muted-foreground font-mono">Yellow-Ivory / Icy-Black</span>
              </div>
            </div>

            {/* Muted Surface */}
            <div className="p-4 rounded-2xl bg-muted text-muted-foreground border border-border flex flex-col justify-between h-36 shadow-neo-sm">
              <span className="text-xs font-mono font-bold uppercase">Muted / Card</span>
              <div>
                <p className="font-extrabold text-lg leading-none text-foreground">Surface Card</p>
                <span className="text-[11px] font-mono">Parchment / Slate</span>
              </div>
            </div>

            {/* Foreground Ink */}
            <div className="p-4 rounded-2xl bg-foreground text-background flex flex-col justify-between h-36 shadow-neo-sm">
              <span className="text-xs font-mono font-bold uppercase opacity-80">Foreground</span>
              <div>
                <p className="font-extrabold text-lg leading-none">Text Ink</p>
                <span className="text-[11px] opacity-75 font-mono">Deep Ink / Frost White</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. "WHO PARTICIPATES?" (COP31 6-Card Ecosystem Grid)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">02. Ecosystem Stakeholders</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Who Participates in NEVILLE?</h2>
            <p className="text-muted-foreground text-sm">Interactive participant cards modeled after the COP31 delegate framework.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Ages 14–19
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold block">
                DELEGATES
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                High School Scholars
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Students from over 120 institutions nationwide competing across Mathematics, Physics, Chemistry, and Informatics Olympiads.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Coaches
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-primary font-bold block">
                FACULTY
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                Olympiad Medallists
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                International and National Olympiad alumni delivering advanced analytical masterclasses and proof-writing bootcamps.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Microscope className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Researchers
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold block">
                CURRICULUM
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                University Academics
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Undergraduate and graduate researchers curating original problem sets adhering to international benchmark standards.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Field Ops
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold block">
                OUTREACH
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                Grassroots Volunteers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Youth leaders directing winter warmth drives, school library reconstructions in flood zones, and venue logistics.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Patrons
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-primary font-bold block">
                INSTITUTIONS
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Academic Partners
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Universities and educational centers granting auditorium access, computing hardware, and student scholarships.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 shadow-neo-sm hover:shadow-neo-md space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                  Public Audit
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold block">
                TRANSPARENCY
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                Civic Observers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Parents, educators, and community members auditing public receipts, score sheets, and ledger disbursements.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. FOUNDATION & TURNING POINT (COP31 Editorial Spotlight)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">03. Editorial Narrative</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Origins &amp; Turning Point</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: High-Impact Quote Callout */}
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-neo-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-mono uppercase font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founding Philosophy</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-light text-foreground leading-snug">
                  &ldquo;Curiosity is not a luxury reserved for the privileged—it is the foundational catalyst for national transformation.&rdquo;
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  NEVILLE was conceived by students in Dhaka who experienced the deep structural imbalance between capital schools and regional districts. We broke down proprietary coaching silos to build an open-access academic collective.
                </p>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>FOUNDING CHARTER</span>
                <span className="font-bold text-primary">DHAKA, 2024</span>
              </div>
            </div>

            {/* Right: Milestone Card with High-Contrast Stats */}
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-muted/60 border border-border shadow-neo-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase font-bold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>The Turning Point</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  From Weekly Study Circles to 14 District Divisions
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  What started as problem-solving sessions at Dhanmondi Lake has expanded into synchronized multi-round Olympiads, student journals, and open-source science problem archives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <span className="block text-3xl font-black text-primary font-mono">100%</span>
                  <span className="text-xs text-muted-foreground font-mono uppercase mt-1 block">Open Curriculum</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <span className="block text-3xl font-black text-accent font-mono">৳ 0.00</span>
                  <span className="text-xs text-muted-foreground font-mono uppercase mt-1 block">Delegate Entry Cost</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            6. "HOW IT WORKS" (COP31 6-Step Numbered Execution Pipeline)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">04. Execution Mechanism</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How NEVILLE Operates (6-Step Protocol)</h2>
            <p className="text-muted-foreground text-sm">A structured, reproducible pipeline ensuring academic rigor and transparency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Curriculum Engineering",
                desc: "Vetting committee drafts multi-tiered problem sets across Physics, Math, Chemistry, and IT adhering to International Olympiad standards.",
                tag: "Academic Board"
              },
              {
                step: "02",
                title: "District Outreach",
                desc: "Decentralized regional coordination across 14 divisions ensuring under-resourced schools receive free contest access and prep kits.",
                tag: "Regional Divisions"
              },
              {
                step: "03",
                title: "Preliminary Rounds",
                desc: "Nationwide synchronized online & regional offline qualifiers evaluated with automated anti-cheat and rubric-based moderation.",
                tag: "Qualifiers"
              },
              {
                step: "04",
                title: "Mentorship Masterclasses",
                desc: "Qualifiers undergo 4 weeks of hands-on bootcamps with Olympiad alumni, focusing on advanced proof-writing and intuition.",
                tag: "Bootcamp"
              },
              {
                step: "05",
                title: "National Finale & Summit",
                desc: "Top 200 delegates convene in Dhaka for the championship round, keynotes from leading scientists, and award ceremonies.",
                tag: "Grand Stage"
              },
              {
                step: "06",
                title: "Public Ledger Audit",
                desc: "100% of event costs, prize distributions, and sponsor contributions are published on our open transparency ledger.",
                tag: "Open Data"
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-7 rounded-2xl bg-card border border-border flex flex-col justify-between group hover:border-accent transition-all duration-300 shadow-neo-sm hover:shadow-neo-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-mono font-black text-foreground/20 group-hover:text-accent transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-1 bg-muted group-hover:bg-accent/60 transition-colors mt-6 rounded-full" />
              </div>
            ))}
          </div>
        </section>


        {/* =========================================================================
            7. THREE STRATEGIC IMPACT PILLARS (Bento Sustainability Cards)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">05. Core Pillars</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Three Strategic Value Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-2xl bg-card border border-border shadow-neo-sm space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Merit &amp; Rigorous Inquiry</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Curating Olympiad problem sets that challenge rote memorization and cultivate first-principles analytical reasoning in secondary education.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-neo-sm space-y-4 hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Radical Financial Transparency</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Every single Taka received from sponsors or institutional patrons is itemized, receipt-backed, and publicly auditable on our live ledger page.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-neo-sm space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Grassroots Direct Action</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Reinvesting community resources into winter blankets, student emergency relief funds, and post-flood school library rebuilding.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================================
            8. STRUCTURED FINANCIAL TRANSPARENCY LEDGER & DATA TABLE
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">06. Public Ledger</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">On-Chain &amp; Public Transparency Table</h2>
              <p className="text-muted-foreground text-sm">Testing tabular data density, status badges, amounts, and receipts.</p>
            </div>
            
            <div className="flex items-center gap-2">
              {["all", "disbursements", "grants"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all cursor-pointer ${
                    activeTab === tab 
                      ? "bg-primary text-primary-foreground font-bold shadow-neo-sm" 
                      : "bg-muted border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-neo-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/80 text-foreground uppercase text-xs font-mono font-bold tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">Transaction / Initiative</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Allocation</th>
                    <th className="px-6 py-4">Date &amp; District</th>
                    <th className="px-6 py-4 text-right">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-foreground">STEM Olympiad Prize Grants &amp; Crests</div>
                      <div className="text-xs text-muted-foreground font-mono">ID: TX-2026-0814</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold">
                        Academic
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-foreground">
                      ৳ 150,000 BDT
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs font-mono">
                      Aug 18, 2026 • Dhaka Central
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                        Receipt Audited
                      </span>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-foreground">Sylhet Division Flood School Books Drive</div>
                      <div className="text-xs text-muted-foreground font-mono">ID: TX-2026-0792</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-bold">
                        Social Action
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-foreground">
                      ৳ 85,000 BDT
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs font-mono">
                      Jul 24, 2026 • Sylhet
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                        Receipt Audited
                      </span>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-foreground">Open-Source Chemistry &amp; Physics Journal Print</div>
                      <div className="text-xs text-muted-foreground font-mono">ID: TX-2026-0740</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border text-xs font-bold">
                        Publication
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-foreground">
                      ৳ 45,000 BDT
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs font-mono">
                      Jun 12, 2026 • Chittagong
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                        Receipt Audited
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* =========================================================================
            9. TYPOGRAPHY, EDITORIAL PROSE & SELECTION HIGHLIGHT
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-border pb-16">
          
          {/* Left: Typography Scale */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">07. Typography Scale</span>
              <h2 className="text-2xl font-bold tracking-tight">Editorial Hierarchy</h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Display H1</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Empowering Dhaka Youth</h1>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Section Heading H2</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">National Science Olympiad</h2>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Sub-Heading H3</span>
                <h3 className="text-xl font-bold text-foreground">Advanced Physics &amp; Math Syllabus</h3>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Card Title H4</span>
                <h4 className="text-lg font-semibold text-accent">Number Theory and Kinematic Proofs</h4>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Timestamp &amp; Metadata</span>
                <p className="text-sm text-muted-foreground">
                  Updated 2 hours ago by Academic Committee • 4 min read
                </p>
              </div>
            </div>
          </div>

          {/* Right: Article Prose Block */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">08. Prose &amp; Blockquote</span>
              <h2 className="text-2xl font-bold tracking-tight">Article Reading Experience</h2>
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
              <p>
                NEVILLE is structured to dismantle the artificial divide between competitive theoretical science and real-world civic impact. Students across Dhaka and regional districts engage in intensive multi-round competitions coupled with community action drives.
              </p>

              {/* Editorial Callout Quote */}
              <blockquote className="p-5 rounded-2xl bg-muted border-l-4 border-primary text-foreground italic my-4 shadow-neo-sm">
                &ldquo;True youth empowerment begins when academic rigor meets selfless, transparent community service.&rdquo;
                <span className="block not-italic text-xs font-mono font-bold text-primary mt-2 uppercase tracking-wide">
                  — NEVILLE Founding Charter, 2024
                </span>
              </blockquote>

              <p>
                Select this sentence with your cursor. Notice how the{" "}
                <span className="font-bold underline text-primary cursor-pointer hover:text-accent transition-colors">
                  interactive inline links
                </span>{" "}
                and the custom <code className="px-2 py-0.5 rounded bg-muted border border-border text-xs font-mono text-accent">::selection</code> highlight 
                retain complete clarity against both the warm yellow-cream canvas and icy-black midnight theme.
              </p>
            </div>
          </div>

        </section>


        {/* =========================================================================
            10. INSTITUTIONAL CTA BANNER & COMPREHENSIVE FOOTER
           ========================================================================= */}
        <section className="space-y-12">
          
          {/* Institutional Banner (COP31 Style) */}
          <div className="p-8 sm:p-14 rounded-3xl bg-card border border-border shadow-neo-lg text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            
            <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-muted border border-border text-foreground font-semibold inline-block">
              JOIN THE ACADEMIC MOVEMENT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground max-w-2xl mx-auto leading-tight">
              Ready to Compete, Mentor, or <span className="text-primary">Collaborate?</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join over 14,000 students and researchers transforming the academic landscape of Bangladesh through science and transparency.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-neo-md transition-all cursor-pointer">
                Register as Delegate
              </button>
              <button className="px-8 py-3.5 rounded-xl bg-secondary text-secondary-foreground border border-border hover:bg-border/40 font-bold text-sm transition-all cursor-pointer">
                Partner with NEVILLE
              </button>
            </div>
          </div>

          {/* Full Institutional Footer */}
          <footer className="rounded-3xl border border-border bg-card p-8 md:p-12 space-y-10 shadow-neo-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2 font-black text-2xl tracking-tight text-foreground">
                  <span>NEVILLE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                  A youth-led educational and community-action initiative organizing national Olympiads, peer mentorship, workshops, and transparent impact ledgers across Bangladesh.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="p-2.5 rounded-xl border border-border bg-muted hover:border-primary text-foreground transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-xl border border-border bg-muted hover:border-accent text-foreground transition-colors cursor-pointer">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-xl border border-border bg-muted hover:border-primary text-foreground transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">Divisions</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">STEM Olympiad</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Peer Mentorship</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Academic Journals</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Social Action Drives</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">Governance</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-accent transition-colors">Transparency Ledger</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Code of Conduct</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">District Chapters</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Audit Reports</a></li>
                </ul>
              </div>

            </div>

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4 font-mono">
              <p>© 2026 NEVILLE Initiative. Built with radical transparency.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Verification Ledger</a>
              </div>
            </div>
          </footer>

        </section>

      </div>
    </main>
  );
}