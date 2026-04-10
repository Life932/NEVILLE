import { BookOpen, Droplets, HeartPulse, Users } from "lucide-react";

/* ============================================================================
   DEV NOTE: DATA ARCHITECTURE & LOCALIZATION (i18n)
   ----------------------------------------------------------------------------
   1. Data Structure: Storing this in an array keeps the JSX clean.
   2. CMS Integration: If using Sanity.io or Strapi, map this array to a 
      "Features" document type so content writers can update it.
   3. Localization: Since NEVILLE operates out of Dhaka, if you ever add a 
      Bengali toggle, replace these hardcoded strings with translation keys 
      (e.g., `t('features.education.title')`).
============================================================================ */

const IMPACT_AREAS = [
  {
    id: "skill-development",
    title: "Skill Development",
    desc: "Equipping Dhaka's youth with future-ready skills and peer-to-peer education.",
    icon: BookOpen,
  },
  {
    id: "sustainable-action",
    title: "Sustainable Action",
    desc: "Creating a ripple effect of change through targeted, youth-led community projects.",
    icon: Droplets,
  },
  {
    id: "youth-wellbeing",
    title: "Youth Well-being",
    // DEV NOTE: Swapped 'Stethoscope' for 'HeartPulse' to perfectly match the
    // Figma "Cross/Heart" icon aesthetic.
    desc: "Advocating for mental health awareness and holistic support networks for students.",
    icon: HeartPulse,
  },
  {
    id: "leadership",
    title: "Youth Leadership",
    desc: "Empowering a new generation to build systemic, lasting support in their neighborhoods.",
    icon: Users,
  },
];

export default function ImpactGrid() {
  return (
    // DEV NOTE (Design): 'bg-base-200' provides a very soft gray/off-white background.
    // This creates a "zebra stripe" layout separating it from the Hero/Info sections.
    <section className="py-16 md:py-24 bg-base-200 border-y border-neutral/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* ========================================= */}
        {/* RESPONSIVE GRID SYSTEM                    */}
        {/* ========================================= */}
        {/* 
          DEV NOTE (Mobile Optimization):
          - Mobile (Default): `grid-cols-1` (Stacks vertically, easy to read).
          - Tablet (`sm:`): `grid-cols-2` (2x2 grid to save vertical space).
          - Desktop (`lg:`): `grid-cols-4` (Matches Figma perfectly: 4 in a row).
          - Gap (`gap-10 lg:gap-8`): Gives plenty of breathing room between items.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {IMPACT_AREAS.map((item) => (
            /* 
              DEV NOTE (UX/Interactivity): 
              Added `group` and `hover:-translate-y-1` to create a subtle "lift" effect 
              when hovered. It transforms static text into an interactive, premium feel.
            */
            <div
              key={item.id}
              className="flex items-start gap-4 md:gap-5 group hover:-translate-y-1 transition-transform duration-300 cursor-default"
            >
              {/* ========================================= */}
              {/* ICON CONTAINER                            */}
              {/* ========================================= */}
              {/* 
                DEV NOTE (Neville Theme Matching): 
                Mapped to your 'primary' Neville theme color. If the brand guidelines 
                for NEVILLE change in globals.css, these update automatically.
                Added `-rotate-3` on hover for a highly polished micro-interaction!
              */}
              <div className="shrink-0 mt-1">
                <item.icon className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 text-primary stroke-[1.5px] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
              </div>

              {/* ========================================= */}
              {/* TEXT CONTENT                              */}
              {/* ========================================= */}
              <div className="flex flex-col gap-1.5 md:gap-2 overflow-hidden">
                {/* 
                  DEV NOTE (Typography & Layout Fix): 
                  Your `whitespace-nowrap` addition is brilliant for keeping the 
                  Figma alignment strict. 
                  HOWEVER: To prevent it from overlapping on 1366px screens, I added 
                  fluid typography (`text-lg lg:text-xl xl:text-2xl`). This ensures 
                  the text shrinks slightly on mid-sized laptops so `whitespace-nowrap` 
                  doesn't break the layout!
                */}
                <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-neutral tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h3>

                {/* 
                  DEV NOTE (Visual Hierarchy): 
                  'text-neutral/70' fades the description so the bold Title catches 
                  the user's eye first.
                */}
                <p className="text-sm md:text-[15px] text-neutral/70 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
