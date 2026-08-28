import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   DEV NOTE: HERO 2 (VISUAL SHOWCASE HERO) — SEMANTIC DESIGN SYSTEM
   ============================================================================ */

export default function Hero2() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-background text-foreground md:min-h-[calc(100vh-4.5rem)]">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE                          */}
      {/* ========================================= */}
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
      <div className="absolute inset-0 bg-black/70 md:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-black/95 via-black/70 to-black/20 md:block" />
      {/* Bottom vignette for stats legibility */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent md:h-40" />
      {/* Soft top gradient */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent md:hidden" />

      {/* ========================================= */}
      {/* HERO CONTENT AREA                         */}
      {/* ========================================= */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-start px-6 py-12 text-left sm:px-8 sm:py-16 md:py-20 lg:px-16">
        <div className="w-full max-w-2xl text-white xl:max-w-3xl">
          {/* EYEBROW */}
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary md:mb-4 md:text-xs">
            <span aria-hidden="true" className="h-px w-6 bg-secondary/70" />
            Dhaka &middot; Youth-Led Ecosystem
          </div>

          {/* HEADLINE */}
          <h1 className="mb-3 text-[2rem] leading-[1.05] font-extrabold tracking-tight text-balance text-white drop-shadow-2xl sm:text-[2.75rem] sm:mb-4 md:mb-6 md:text-6xl lg:text-7xl">
            Reforming society,
            <br />
            <span className="relative inline-block text-secondary">
              making an impact.
              {/* Hand-stitched underline flourish */}
              <svg
                viewBox="0 0 150 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full text-secondary/80"
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
          <p className="mb-6 max-w-xl text-sm leading-snug font-medium text-white/90 drop-shadow-lg sm:text-base sm:mb-7 md:text-lg md:leading-relaxed lg:text-xl">
            NEVILLE is a youth-led ecosystem based in Dhaka. We replace
            one-off charity with systemic support, data-driven research, and
            peer-to-peer mentorship.
          </p>

          {/* CALL TO ACTION (CTA) BUTTONS */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mb-10">
            <Link
              href="https://forms.gle/j11RnDdtBDZ8PyZq5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground font-bold px-7 py-3.5 rounded-full shadow-sm hover:opacity-90 active:scale-95 transition-all inline-flex items-center justify-center text-sm sm:text-base cursor-pointer"
            >
              Join the movement
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold px-7 py-3.5 rounded-full shadow-sm active:scale-95 transition-all inline-flex items-center justify-center text-sm sm:text-base cursor-pointer"
            >
              See our impact
            </Link>
          </div>

          {/* STATISTICS */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6 md:mb-10 md:gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight tabular-nums text-secondary drop-shadow-xl sm:text-4xl md:text-5xl">
                ৳28K+
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
                Community funds mobilized
              </span>
            </div>
            <div aria-hidden="true" className="hidden h-px w-full bg-white/20 sm:block sm:h-auto sm:w-px" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight tabular-nums text-secondary drop-shadow-xl sm:text-3xl md:text-4xl lg:text-5xl">
                20+
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
                Youth reached directly
              </span>
            </div>
          </div>

          {/* PARTNERS */}
          <div className="flex flex-col gap-2 border-t border-white/15 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:pt-6 md:gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              Working alongside
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
              <Link
                href="#"
                aria-label="Partner: MUBC"
                className="font-bold tracking-tight text-white/80 transition-colors hover:text-secondary"
              >
                MUBC
              </Link>
              <span aria-hidden="true" className="text-white/30">/</span>
              <Link
                href="#"
                aria-label="Partner: DRMC"
                className="font-bold tracking-tight text-white/80 transition-colors hover:text-secondary"
              >
                DRMC
              </Link>
              <span aria-hidden="true" className="text-white/30">/</span>
              <Link
                href="#"
                aria-label="Partner: NDC"
                className="font-bold tracking-tight text-white/80 transition-colors hover:text-secondary"
              >
                NDC
              </Link>
              <span aria-hidden="true" className="text-white/30">/</span>
              <Link
                href="#"
                aria-label="Partner: Global Innovators"
                className="font-bold tracking-tight text-white/80 transition-colors hover:text-secondary"
              >
                Global Innovators
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 hidden justify-center md:flex">
        <div className="flex flex-col items-center gap-1 text-white/70 motion-safe:animate-bounce">
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