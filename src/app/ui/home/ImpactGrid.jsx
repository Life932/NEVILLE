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

/* ============================================================================
   DEV NOTE: WHAT CHANGED IN THIS PASS
   ----------------------------------------------------------------------------
   1. TITLE TRUNCATION: `whitespace-nowrap` + `text-ellipsis` meant a title
      would silently cut to "…" the moment a card got narrow — very likely
      at 4-across around 1280–1366px, which is exactly what the old
      non-monotonic font scale (`text-lg sm:text-xl lg:text-lg xl:text-2xl`
      — note it shrinks, THEN grows again) was patching around. Removed
      both hacks: titles now wrap normally, and since CSS grid stretches
      row children to equal height by default, wrapped titles don't throw
      cards out of alignment with their neighbors.
   2. NO HEADING: the grid dropped straight into four items with nothing
      telling a visitor what they collectively represent. Added a small
      eyebrow + heading above the grid.
   3. FROM LIST TO GRID: the section is named "Impact Grid" but rendered as
      a plain icon+text list with no definition between items. Gave each
      item a real card (bg-base-100 surface, border, padding) — this also
      reuses the "elevated card on a cream background" language already
      established elsewhere on the page instead of inventing a new motif.
   4. ICON TREATMENT: bare oversized icons swapped for a soft rounded badge
      (bg-primary/10) — reads as more considered than an icon floating in
      space, and gives the hover micro-interaction somewhere to live.
   5. Added a quiet index number (01–04) per card — helps scanning ("there
      are exactly four of these") without adding decoration that doesn't
      carry information.
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
    // DEV NOTE (Design): 'bg-base-200' provides a very soft gray/off-white
    // background. This creates a "zebra stripe" layout separating it from
    // the Hero/Info sections.
    <section className="overflow-hidden border-y border-neutral/5 bg-base-200 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* ========================================= */}
        {/* SECTION HEADING                           */}
        {/* ========================================= */}
        {/* DEV NOTE: gives the four cards below a frame to sit in — without
            this, a first-time visitor has to infer what ties them together. */}
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:max-w-xl">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase md:text-xs">
            Where We Show Up
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral md:text-3xl lg:text-4xl">
            Four ways the ecosystem moves youth forward.
          </h2>
        </div>

        {/* ========================================= */}
        {/* RESPONSIVE GRID SYSTEM                    */}
        {/* ========================================= */}
        {/*
          DEV NOTE (Mobile Optimization):
          - Mobile (Default): `grid-cols-1` (Stacks vertically, easy to read).
          - Tablet (`sm:`): `grid-cols-2` (2x2 grid to save vertical space).
          - Desktop (`lg:`): `grid-cols-4` (Matches Figma perfectly: 4 in a row).
          - Grid's default `align-items: stretch` keeps every card in a row
            the same height even when a title wraps to two lines.
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_AREAS.map((item, index) => (
            /*
              DEV NOTE (UX/Interactivity):
              `hover:-translate-y-1` + a slightly deeper shadow gives a subtle
              "lift" on hover — the icon badge gets its own small rotation so
              the two micro-interactions read as one coordinated moment
              rather than competing.
            */
            <div
              key={item.id}
              className="group relative flex flex-col rounded-2xl border border-neutral/10 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral/5 md:p-7"
            >
              {/* ========================================= */}
              {/* ICON BADGE + INDEX                        */}
              {/* ========================================= */}
              {/*
                DEV NOTE (Neville Theme Matching):
                Mapped to your 'primary' Neville theme color. If the brand
                guidelines for NEVILLE change in globals.css, this updates
                automatically.
              */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-primary stroke-[1.75px] transition-transform duration-300 group-hover:-rotate-6"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs font-semibold text-neutral/30"
                >
                  0{index + 1}
                </span>
              </div>

              {/* ========================================= */}
              {/* TEXT CONTENT                              */}
              {/* ========================================= */}
              {/*
                DEV NOTE (Typography & Layout Fix): titles now wrap instead
                of truncating, using one steady size instead of a scale that
                shrinks then grows again to dodge overflow.
              */}
              <h3 className="mb-2 text-lg font-bold tracking-tight text-neutral md:text-xl">
                {item.title}
              </h3>

              {/*
                DEV NOTE (Visual Hierarchy):
                'text-neutral/70' fades the description so the bold Title
                catches the user's eye first.
              */}
              <p className="text-sm leading-relaxed font-medium text-neutral/70 md:text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
