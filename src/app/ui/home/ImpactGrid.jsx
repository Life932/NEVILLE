import { BookOpen, Droplets, HeartPulse, Users } from "lucide-react";

/* ============================================================================
   NEVILLE IMPACT AREAS GRID — SEMANTIC DESIGN SYSTEM
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
    <section className="overflow-hidden border-y border-border bg-muted/40 py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:max-w-xl">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase md:text-xs">
            Where We Show Up
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Four ways the ecosystem moves youth forward.
          </h2>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_AREAS.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-neo-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-neo-md md:p-7"
            >
              {/* ICON BADGE + INDEX */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-primary stroke-[1.75px] transition-transform duration-300 group-hover:-rotate-6"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs font-semibold text-muted-foreground/50"
                >
                  0{index + 1}
                </span>
              </div>

              {/* TEXT CONTENT */}
              <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors md:text-xl">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed font-medium text-muted-foreground md:text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
