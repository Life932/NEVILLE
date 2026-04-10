import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";

/* ============================================================================
   DEV NOTE: ARCHITECTURE & DATA LAYER (PHASE 1 -> PHASE 2)
   ----------------------------------------------------------------------------
   Current State (Phase 1): Static arrays allow rapid UI development and prototyping.
   Future State (Phase 2): Move this data to a Headless CMS (Sanity, Contentful).
   
   Why? 
   1. It decouples content from code. HR can update team members without developer intervention.
   2. You can fetch this via Next.js React Server Components (RSC) using `fetch()` 
      with `next: { revalidate: 3600 }` to rebuild the cache automatically.
============================================================================ */

const CO_FOUNDERS = [
  {
    id: "mehedi",
    name: "Mehedi Hassan",
    role: "Co-Founder",
    title: "Director",
    quote:
      "Finding hope in every kit distributed and every new student who joins our growing Dhaka movement.",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=MH",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
    gridClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    id: "ayman",
    name: "Ayman Abid Adipto",
    role: "Co-Founder",
    title: "Head of Logistics",
    quote:
      "Obsessed with Dhaka's potential and seeing our peers rise to the challenge of serving our neighborhoods.",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=AA",
    socials: { facebook: "#", instagram: "", linkedin: "#" },
    gridClass: "lg:col-start-1 lg:row-start-2",
  },
  {
    id: "shahrier",
    name: "Shahrier Zaman",
    role: "Co-Founder",
    title: "Head of Finance",
    quote:
      "Believing that local action in our neighborhoods leads to global ripples of meaningful change.",
    image: "/Joy.jpg",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "rehanur",
    name: "Rehanur Rahman",
    role: "Co-Founder",
    title: "Senior Officer, M&O",
    quote:
      "I entertain fellows in serious moments. Dreaming of a new generation.",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=RR",
    socials: { facebook: "#", instagram: "#", linkedin: "" },
    gridClass: "lg:col-start-2 lg:row-start-3",
  },
];

const DEPARTMENTS = [
  {
    name: "Human Resource",
    members: [
      {
        name: "M.A. Chowdhury Monon",
        role: "Head of Human Resource",
        image: "/Monon.png",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "Irfan Aunkon",
        role: "Senior Officer",
        image: "/Aunkon.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
    ],
  },
  {
    name: "Logistics",
    members: [
      {
        name: "Ayman Abid Adipto",
        role: "Head of Logistics",
        image: "https://placehold.co/400x400/cccccc/666666?text=AA",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "MD. Shohanur Rahman",
        role: "Senior Officer",
        image: "/Shohan.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
    ],
  },
  {
    name: "Finance",
    members: [
      {
        name: "Shahrier Zaman",
        role: "Head of Finance",
        image: "/Joy.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "Ahanaf Adil",
        role: "Senior Officer",
        image: "/Adil.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "Hasib Bin Haroon",
        role: "Officer",
        image: "/Hasib.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
    ],
  },
  {
    name: "IT",
    members: [
      {
        name: "Abdullah Ahmad Sadik",
        role: "Head of IT",
        image: "/Abdullah.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
    ],
  },
  {
    name: "Marketing & Outreach",
    members: [
      {
        name: "Muhammad Farhan Hossain",
        role: "Head of M&O",
        image: "https://placehold.co/400x400/cccccc/666666?text=MH",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "Rehanur Rahman",
        role: "Senior Officer",
        image: "https://placehold.co/400x400/cccccc/666666?text=RR",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
      {
        name: "Nubaid Khan",
        role: "Senior Officer",
        image: "/Nubaid.jpg",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
      },
    ],
  },
];

/* ============================================================================
   DEV NOTE: REUSABLE UTILITY COMPONENT (MemberSocials)
   ----------------------------------------------------------------------------
   Optimization: Added a guard clause `Object.values(socials).every(val => !val)` 
   to completely prevent rendering the wrapper `<div>` if no links exist.
   Accessibility: Added `title` attributes alongside `aria-label` for better 
   tooltip support on desktop devices.
============================================================================ */
const MemberSocials = ({ socials, containerClass, iconClass, hoverClass }) => {
  if (!socials || Object.values(socials).every((val) => !val)) return null;

  return (
    <div
      className={`flex items-center justify-center gap-2 mt-5 ${containerClass}`}
    >
      {socials.facebook && (
        <Link
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Profile"
          title="Facebook"
          className={`p-2 rounded-full transition-all duration-300 ${iconClass} ${hoverClass}`}
        >
          <Facebook className="w-5 h-5" />
        </Link>
      )}
      {socials.instagram && (
        <Link
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          title="Instagram"
          className={`p-2 rounded-full transition-all duration-300 ${iconClass} ${hoverClass}`}
        >
          <Instagram className="w-5 h-5" />
        </Link>
      )}
      {socials.linkedin && (
        <Link
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
          className={`p-2 rounded-full transition-all duration-300 ${iconClass} ${hoverClass}`}
        >
          <Linkedin className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="flex flex-col w-full overflow-hidden">
      {/* ================================================================== */}
      {/* PART 1: THE CO-FOUNDERS (Dark Diamond Layout)                      */}
      {/* ================================================================== */}
      <div className="bg-neutral text-neutral-content py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
        {/* 
          DEV NOTE: BACKGROUND WATERMARK
          `select-none` and `pointer-events-none` ensure this massive text 
          doesn't interfere with mobile scrolling or accidental highlighting. 
        */}
        <div className="absolute top-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none">
          <h2 className="text-[10rem] md:text-[15rem] font-black whitespace-nowrap tracking-tighter">
            NEVILLE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <header className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
              The Hearts Behind NEVILLE
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-primary/90 mb-6 font-serif italic">
              Meet Our Co-Founders
            </h3>
            <p className="text-sm md:text-base text-neutral-content/70 max-w-lg mx-auto font-medium leading-relaxed">
              From tea-stall chitchats to late night meetings.{" "}
              <br className="hidden md:block" />
              When Vision turned out, Neville came up.
            </p>
          </header>

          {/* 
            DEV NOTE: CSS GRID "DIAMOND" MATHEMATICS
            By explicitly defining a 3x3 grid on `lg` screens, we map:
            Card 1 -> (Row 1, Col 2) Top
            Card 2 -> (Row 2, Col 1) Left
            Card 3 -> (Row 2, Col 3) Right
            Card 4 -> (Row 3, Col 2) Bottom
            This forms a perfect diamond geometry without hacky absolute positioning.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* BRAND BADGE (CENTRAL GRID VOID FILLER) */}
            <div className="hidden lg:flex lg:col-start-2 lg:row-start-2 items-center justify-center flex-col opacity-20 select-none">
              <Sparkles className="w-12 h-12 mb-3" />
              <span className="font-black tracking-widest uppercase text-xl text-center leading-tight">
                Neville
                <br />
                Youth
                <br />
                Initiative
              </span>
            </div>

            {CO_FOUNDERS.map((founder) => (
              /* 
                DEV NOTE: SEMANTIC HTML
                Changed `div` to `article` for better SEO and accessibility 
                since each card represents an independent entity/person.
              */
              <article
                key={founder.id}
                className={`bg-base-100 text-neutral rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group ${founder.gridClass}`}
              >
                {/* 
                  DEV NOTE: IMAGE OPTIMIZATION
                  `sizes` prop is configured perfectly. On mobile (<768px), it requests 
                  a 128px image. Above that, 160px. This prevents loading massive files 
                  into small UI containers.
                */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-lg">
                  <Image
                    src={founder.image}
                    alt={`Portrait of ${founder.name}`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1 underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary/80 transition-colors line-clamp-1">
                  {founder.name}
                </h4>

                <div className="flex flex-col text-xs font-bold text-primary uppercase tracking-wider mb-4 gap-0.5">
                  <span>{founder.role}</span>
                  <span className="opacity-80">{founder.title}</span>
                </div>

                <p className="text-sm text-neutral/70 leading-relaxed font-medium italic flex-grow">
                  &quot;{founder.quote}&quot;
                </p>

                <MemberSocials
                  socials={founder.socials}
                  iconClass="text-neutral/40 hover:bg-primary/10"
                  hoverClass="hover:text-primary hover:scale-110"
                  containerClass="border-t border-neutral/10 w-full pt-5"
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* PART 2: THE DEPARTMENTS (Light Multi-Card Layout)                  */}
      {/* ================================================================== */}
      <div className="bg-[#E5EDFF] py-20 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-20 md:space-y-32">
          {DEPARTMENTS.map((dept, index) => (
            <div key={index} className="flex flex-col gap-8 md:gap-12">
              <header className="flex flex-col">
                <h3 className="text-sm md:text-base font-medium text-neutral/60 uppercase tracking-widest mb-1">
                  Department Of
                </h3>
                <h2 className="text-4xl md:text-6xl font-black text-neutral tracking-tighter uppercase">
                  {dept.name}
                </h2>
              </header>

              {/* 
                DEV NOTE: RESPONSIVE FLEX/GRID
                Changed to a max of 4 columns (lg:grid-cols-4). Using 5 columns 
                would squish the new larger images (w-40/h-40) on standard laptops. 
                If a department has 5 members, the 5th naturally wraps to the next row safely.
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {dept.members.map((member, idx) => (
                  <article
                    key={idx}
                    className="bg-[#9EB8FF] rounded-[2.5rem] p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
                  >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-inner ring-4 ring-white/30 group-hover:ring-white/60 transition-all">
                      <Image
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-neutral mb-1.5 line-clamp-2 leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold text-blue-700 opacity-90 uppercase tracking-wider mb-2">
                      {member.role}
                    </p>

                    {/* 
                      DEV NOTE: mt-auto pushes the socials to the absolute bottom 
                      of the card, ensuring vertical alignment across rows even if 
                      name lengths vary.
                    */}
                    <div className="mt-auto w-full">
                      <MemberSocials
                        socials={member.socials}
                        iconClass="text-blue-800/50 hover:bg-white/30"
                        hoverClass="hover:text-blue-900 hover:scale-110"
                        containerClass="border-t border-white/20 pt-5 w-full"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
