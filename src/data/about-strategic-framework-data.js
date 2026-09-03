/* ============================================================================
   NEVILLE STRATEGIC FRAMEWORK DATA (SECTION 7 OF /about)
   ----------------------------------------------------------------------------
   Decoupled data structure for Section 7: "Strategic Framework & Impact Matrix".
   Includes Top Tier institutional narrative and Bottom Tier deep emerald
   summit mega-card specifications.
   Prepared for Headless CMS (Sanity.io GROQ queries) integration.
============================================================================ */

export const STRATEGIC_FRAMEWORK_DATA = {
  topTier: {
    title: "National STEM Literacy & Educational Equity",
    icon: "Globe",
    quote:
      "“Academic rigor and scientific discovery must not remain an elite socioeconomic privilege in Bangladesh.”",
    narrative:
      "To this end, NEVILLE aligns grassroots science competitions with national educational equity. By decentralizing Olympiads beyond Dhaka, this initiative creates pathways for scholars from every district to access advanced STEM mentorship and global competition opportunities.",
  },
  bottomTier: {
    badgeText: "ACADEMIC EQUITY AT THE SOURCE",
    badgeIcon: "Sparkles",
    heading: "NEVILLE and the Decentralized Olympiad Approach",
    description:
      "The NEVILLE framework expands academic empowerment beyond standardized curricula by focusing on original problem-solving, open peer mentorship, free access, and radical financial transparency.",
    callout:
      "“In this context, NEVILLE's active peer network contributes directly to accelerating youth-led scientific talent and community resilience across all 64 districts.”",
    backdropImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    backdropAlt:
      "Hands holding soil and green seedling representing grassroots empowerment",
    actionPills: [
      {
        id: "pill-1",
        icon: "Leaf",
        text: "Democratize access: 100% free participation and open STEM archives.",
      },
      {
        id: "pill-2",
        icon: "ShieldCheck",
        text: "Dismantle gatekeeping: Blind peer grading and merit-first laureate selection.",
      },
      {
        id: "pill-3",
        icon: "Share2",
        text: "Public accountability: 100% auditable ledgers for every single disbursed taka.",
      },
    ],
  },
};
