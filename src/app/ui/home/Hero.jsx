import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Globe, HeartHandshake } from "lucide-react";

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
     sponsors,
     bgImage 
   }) { ... }
   
   This allows us to reuse this EXACT layout for the Home page, the "About Us" 
   page, or even specific "Course Category" pages just by passing different data!
============================================================================ */

export default function Hero() {
  return (
    // DEV NOTE (Layout): Using `items-start md:items-center` is the perfect responsive fix.
    // It prevents mobile text from getting pushed below the fold.
    <div className="hero min-h-[calc(78svh-70px)] md:min-h-[calc(100vh-70px)] relative overflow-hidden flex items-start md:items-center justify-start pt-6 md:pt-0">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE SETTINGS                 */}
      {/* ========================================= */}
      {/* 
        DEV NOTE (Performance): 
        1. Always keep `priority` on Hero images (disables lazy loading).
        2. `sizes="100vw"` tells the browser to download the exact image size for the screen width, saving massive data for mobile users in Bangladesh.
        3. Future: Host these images on a CDN like Cloudinary for auto-format to WebP/AVIF.
      */}
      <Image
        src="/hero-bg.jpg"
        alt="NEVILLE Youth Educational Platform background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={90}
      />

      {/* ========================================= */}
      {/* GRADIENT OVERLAYS                         */}
      {/* ========================================= */}
      {/* 
        DEV NOTE (Design System): If we eventually want dark mode support, 
        we can swap `bg-black/60` to a dynamic theme variable like `bg-base-300/80`.
      */}
      <div className="absolute inset-0 bg-black/60 md:hidden"></div>
      <div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/95 via-black/60 to-transparent"></div>

      {/* ========================================= */}
      {/* HERO CONTENT AREA                         */}
      {/* ========================================= */}
      <div className="hero-content relative z-10 w-full max-w-7xl px-4 md:px-12 py-4 md:py-12 flex-col items-start text-left">
        <div className="max-w-3xl text-neutral-content w-full">
          {/* HEADLINE */}
          {/* 
            DEV NOTE (i18n & SEO): 
            1. If NEVILLE supports Bengali later, ensure the font handles complex ligatures well (like Noto Sans Bengali).
            2. The `<h1>` tag is critical for SEO. Keep keywords like "Youth", "Education", "Dhaka" in here dynamically. This part is especially important for Google rankings and discoverability in Bangladesh!
          */}
          <h1 className="mb-2 md:mb-6 text-[2.5rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-white drop-shadow-2xl">
            Word Word, <br className="sm:block" />{" "}
            <span className="text-accent">Word</span> Words
          </h1>

          {/* SUB-HEADLINE */}
          <p className="mb-5 md:mb-7 text-sm md:text-base lg:text-xl opacity-90 leading-snug md:leading-relaxed max-w-xl font-medium drop-shadow-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* CALL TO ACTION (CTA) BUTTONS */}
          {/* 
            DEV NOTE (Analytics & Tracking): 
            Add `onClick` handlers here later to fire Google Analytics or Mixpanel events.
            Example: onClick={() => trackEvent('Hero CTA Clicked', { button: 'Get Started' })}
          */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-7">
            <Link
              href="/join"
              className="btn btn-accent text-accent-content rounded-full px-8 border-none shadow-lg hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
            <Link
              href="/courses"
              className="btn btn-outline text-white hover:bg-white hover:text-black rounded-full px-8 shadow-lg"
            >
              Learn More
            </Link>
          </div>

          {/* STATISTICS */}
          {/* 
            DEV NOTE (Animations & Data): 
            1. Data: Fetch this data via React Server Components (Next.js 14+) so it's baked into the HTML on load.
            2. Animation: Use `framer-motion` or `react-countup` to make these numbers quickly count up from 0 when the page loads. It's a huge psychological trust-builder.
          */}
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 md:gap-16 mb-5 md:mb-12 border-t border-white/20 pt-4 md:pt-8 w-full">
            <div className="flex items-baseline gap-1.5 md:gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight drop-shadow-xl">
                ৳ 28 220
              </span>
              <span className="text-[10px] sm:text-xs md:text-base opacity-100 font-bold uppercase tracking-widest text-white drop-shadow-md">
                Stat One
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 md:gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight drop-shadow-xl">
                105
              </span>
              <span className="text-[10px] sm:text-xs md:text-base opacity-100 font-bold uppercase tracking-widest text-white drop-shadow-md">
                Stat Two
              </span>
            </div>
          </div>

          {/* PARTNER/SPONSOR LOGOS! */}
          {/* 
            DEV NOTE (Accessibility & UX): 
            1. Changed `div` to `Link` elements because they act as buttons/links. This fixes keyboard tab-targeting.
            2. Added `aria-label` so screen readers know what company logo is being highlighted.
            3. Future Feature: Wrap this entire div in a CSS marquee animation to make them slowly scroll horizontally if you get more than 4-5 partners!
          */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-10 opacity-80 text-white">
            <Link
              href="#"
              aria-label="Partner 1"
              className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-accent transition-all"
            >
              <Shield className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </Link>

            <Link
              href="#"
              aria-label="Partner 2"
              className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-accent transition-all"
            >
              <Award className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                HYPER BEST
              </span>
            </Link>

            <Link
              href="#"
              aria-label="Partner 3"
              className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-accent transition-all"
            >
              <Globe className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </Link>

            <Link
              href="#"
              aria-label="Partner 4"
              className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-accent transition-all"
            >
              <HeartHandshake className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
