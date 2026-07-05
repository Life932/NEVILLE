import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   DEV NOTE: COMPONENT ARCHITECTURE (FUTURE SCALING)
   ----------------------------------------------------------------------------
   When you move to a CMS (Contentful, Sanity, or Strapi), convert this to accept props:

   export default function Hero({
     headline,
     highlightWord,
     subheadline,
     primaryCta,
     secondaryCta,
     stats,
     partners,
     bgImage
   }) { ... }

   This allows us to reuse this EXACT layout for the Home page, the "About Us"
   page, or even specific "Course Category" pages just by passing different data!
============================================================================ */

/* ============================================================================
   DEV NOTE: WHAT CHANGED IN THIS PASS
   ----------------------------------------------------------------------------
   1. HEIGHT/ALIGNMENT: the old version stepped `min-h` and `items-start/center`
      independently across sm/md/lg/xl, which made the content visibly "jump"
      position as the viewport crossed breakpoints. Now there's a single rule
      (`100svh` on mobile, `calc(100vh-4.5rem)` from md up, assuming a ~72px
      navbar) and content is ALWAYS vertically centered — no jump.
   2. SIGNATURE DETAIL: replaced the generic icon-badge partner row with a
      small hand-stitched underline beneath "building leaders" — a nod to
      nakshi-kantha (Bengali running-stitch embroidery), which fits a
      youth-led, hand-built, community movement better than a stock icon.
   3. MOBILE CTAs: buttons now stack full-width on small screens for easier
      tapping, and sit side-by-side from `sm` up.
   4. MOTION: background has a slow one-time zoom-out, and the underline
      "stitches in" on load. Both respect `prefers-reduced-motion`.
============================================================================ */

export default function Hero() {
  return (
    <section className="hero relative flex min-h-[100svh] items-center overflow-hidden md:min-h-[calc(100vh-4.5rem)]">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE                          */}
      {/* ========================================= */}
      {/*
        DEV NOTE (Performance):
        1. `priority` disables lazy loading — always keep this on Hero images.
        2. `sizes="100vw"` tells the browser to fetch an image matched to
           screen width, which matters a lot for mobile data costs in Dhaka.
        3. Future: serve these off a CDN (Cloudinary) for auto WebP/AVIF.
      */}
      <div className="hero-bg-zoom absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="NEVILLE Youth Educational Platform background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
      </div>

      {/* ========================================= */}
      {/* GRADIENT OVERLAYS                         */}
      {/* ========================================= */}
      {/*
        DEV NOTE (Design System): if we add dark-mode theming later, swap
        `bg-black/65` for a theme variable like `bg-base-300/80`.
      */}
      <div className="absolute inset-0 bg-black/65 md:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-black/95 via-black/65 to-black/10 md:block" />
      {/* Bottom vignette so the stats/partner row stays legible over any
          part of the photo, regardless of what's in that corner. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/70 to-transparent" />

      {/* ========================================= */}
      {/* HERO CONTENT AREA                         */}
      {/* ========================================= */}
      <div className="hero-content relative z-10 w-full max-w-7xl flex-col items-start px-5 py-14 text-left sm:px-8 md:py-10 lg:px-16">
        <div className="w-full max-w-2xl text-neutral-content xl:max-w-3xl">
          {/* EYEBROW */}
          {/* DEV NOTE: this label carries real info (who + where), not
              decoration — that's what earns it a spot above the headline. */}
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent md:mb-4 md:text-xs">
            <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
            Dhaka &middot; Youth-Led Ecosystem
          </div>

          {/* HEADLINE */}
          {/* DEV NOTE (i18n & SEO): keep "Youth", "Education", "Dhaka" in
              here — this line matters a lot for discoverability. If Bengali
              support is added later, check ligature rendering (e.g. Noto
              Sans Bengali) before swapping fonts. */}
          <h1 className="mb-4 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-balance text-white drop-shadow-2xl sm:text-6xl md:mb-6 lg:text-7xl">
            Empowering youth,
            <br />
            <span className="relative inline-block text-accent">
              building leaders
              {/* Hand-stitched underline: the page's one signature flourish.
                  `pathLength={1}` normalizes the curve so the dash math
                  below always works, regardless of the exact path shape. */}
              <svg
                viewBox="0 0 150 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent/80"
              >
                <path
                  d="M2 6 Q 20 0 38 6 T 74 6 T 110 6 T 146 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  className="stitch-line"
                />
              </svg>
            </span>
          </h1>

          {/* SUB-HEADLINE */}
          <p className="mb-6 max-w-xl text-sm leading-snug font-medium text-gray-100 opacity-90 drop-shadow-lg sm:text-base md:mb-7 md:text-lg md:leading-relaxed lg:text-xl">
            NEVILLE is a youth-led ecosystem based in Dhaka. We replace
            one-off charity with systemic support, data-driven research, and
            peer-to-peer mentorship.
          </p>

          {/* CALL TO ACTION (CTA) BUTTONS */}
          {/*
            DEV NOTE (Analytics & Tracking):
            Add `onClick` handlers here later to fire Google Analytics or
            Mixpanel events, e.g. onClick={() => trackEvent('Hero CTA Clicked', { button: 'Get Started' })}
          */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mb-10">
            <Link
              href="https://forms.gle/j11RnDdtBDZ8PyZq5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent rounded-full border-none px-7 text-center text-sm text-accent-content shadow-lg outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"
            >
              Join the movement
            </Link>
            <Link
              href="/about"
              className="btn btn-outline rounded-full px-7 text-center text-sm text-white shadow-lg outline-none transition-colors hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"
            >
              See our impact
            </Link>
          </div>

          {/* STATISTICS */}
          {/*
            DEV NOTE (Animations & Data):
            1. Fetch this via React Server Components once it's backed by
               real data, so it's baked into the HTML on load.
            2. Consider `react-countup` for a count-up-from-0 effect — a
               nice trust-builder, but skip it if it starts feeling gimmicky.
          */}
          <div className="mb-8 flex items-stretch gap-6 md:mb-10 md:gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight tabular-nums text-accent drop-shadow-xl sm:text-4xl md:text-5xl">
                ৳28K+
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
                Community funds mobilized
              </span>
            </div>
            <div aria-hidden="true" className="w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight tabular-nums text-accent drop-shadow-xl sm:text-4xl md:text-5xl">
                20+
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
                Youth reached directly
              </span>
            </div>
          </div>

          {/* PARTNERS */}
          {/*
            DEV NOTE: swap these for real logo marks (SVG, monochrome-white
            variant) as soon as they're available — wordmarks are a
            placeholder that at least don't misrepresent them as icons.
          */}
          <div className="flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:gap-5 md:pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Working alongside
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="#"
                aria-label="Partner: MUBC"
                className="font-bold tracking-tight text-white/70 transition-colors hover:text-accent"
              >
                MUBC
              </Link>
              <span aria-hidden="true" className="text-white/25">/</span>
              <Link
                href="#"
                aria-label="Partner: DRMC"
                className="font-bold tracking-tight text-white/70 transition-colors hover:text-accent"
              >
                DRMC
              </Link>
              <span aria-hidden="true" className="text-white/25">/</span>
              <Link
                href="#"
                aria-label="Partner: NDC"
                className="font-bold tracking-tight text-white/70 transition-colors hover:text-accent"
              >
                NDC
              </Link>
              <span aria-hidden="true" className="text-white/25">/</span>
              <Link
                href="#"
                aria-label="Partner: Global Innovators"
                className="font-bold tracking-tight text-white/70 transition-colors hover:text-accent"
              >
                Global Innovators
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL CUE — small, desktop-only, tells people there's more below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 hidden justify-center md:flex">
        <div className="flex flex-col items-center gap-1 text-white/60 motion-safe:animate-bounce">
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 4v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Plain <style> (not styled-jsx) on purpose: it renders as a literal
          <style> tag, so it works whether this stays a Server Component or
          not, with no 'use client' boundary required. */}
      <style>{`
        .hero-bg-zoom {
          animation: hero-zoom 20s ease-out forwards;
        }
        @keyframes hero-zoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        .stitch-line {
          animation: hero-stitch 1s ease-out 0.5s both;
        }
        @keyframes hero-stitch {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-zoom,
          .stitch-line {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
