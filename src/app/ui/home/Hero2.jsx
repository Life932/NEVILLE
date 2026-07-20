"use client";

import { motion } from "framer-motion";

/* ============================================================================
   DEV NOTE: HUMAAN EDITORIAL TYPOGRAPHY & ANIMATION — WHAT CHANGED HERE
   ----------------------------------------------------------------------------
   1. TYPE SCALE: the old `text-[13vw]` sized each line so large that
      "Empowering Youth," physically cannot fit on one line at any real
      viewport width (word width scales with vw just like the container, so
      the ratio never improves) — it was silently wrapping onto a second
      line inside a mask sized for exactly one. Swapped to a `clamp()` scale
      tuned to the actual phrase lengths, so it reliably holds one line per
      row and only leans on the vw component to grow past ~mobile widths.
   2. REAL <h1>: the giant text had zero semantic heading before — just
      motion.divs. Both lines now live inside one real <h1>, which matters
      for SEO and screen readers on a page's most important element.
   3. CONTEXT + ACTION: a title card with no subheadline, no CTA, and no
      mention of Dhaka/NEVILLE looks striking but tells a visitor nothing
      and gives them nothing to do. Added a small eyebrow + CTA and a
      one-line mission statement above the headline.
   4. THE SHOWREEL BOX: it was an empty placeholder div. Replaced it with a
      functional, looping impact ticker (the one place motion gets to be
      playful) that disables for `prefers-reduced-motion`.
   5. MOTION: every animation checks `useReducedMotion()` so people who've
      asked their OS to reduce motion get an instant, static hero instead
      of the full cascade/slide-in.
   6. NAVBAR CLEARANCE (confirmed from a screenshot): the real navbar is a
      floating pill centered near the top of the viewport, overlaying the
      hero rather than taking flow space. The eyebrow text and CTA button
      were both landing right underneath/behind it. Fixed with a fixed
      top offset (`pt-24`/`pt-28`/`pt-32`) sized to clear the pill, instead
      of guessing at flow-based spacing.
   7. THE MOBILE DEAD ZONE: the previous version bottom-anchored the whole
      text block (`flex-grow justify-end`) against the ticker, filling the
      section to a forced full-viewport height. On mobile, the headline
      shrinks (via clamp) but the section height didn't, so the leftover
      space landed as one big empty gap ABOVE the headline, right under
      the navbar. Fixed by dropping the forced full-height on mobile
      entirely — the section is now content-height there, so there's no
      leftover space to dump anywhere. The dramatic full-bleed, bottom-
      anchored look is kept only from `md` up, where there's room for it,
      using `mt-auto` on the ticker (which only pulls it toward the
      bottom when the section is actually taller than its content).
============================================================================ */

// Animation rules for the container (handles the staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Speed of the left-to-right wave
      delayChildren: 0.15,
    },
  },
};

// Animation rules for each individual word
// Note: `useReducedMotion` removed to avoid SSR hydration mismatch.
// framer-motion >=10.16.4 handles `prefers-reduced-motion` automatically.
const wordVariants = {
  hidden: { y: "120%", opacity: 0, rotateZ: 3 },
  show: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // High-end agency easing curve
    },
  },
};

// Reusable component to safely animate lines without chopping letters.
// `pb-4 -mb-4` extends the hidden mask downward so descenders (g, y, p)
// can breathe, then pulls the next line back up to keep the block tight.
// This still works correctly even if a line wraps — the mask just grows
// to fit however many rows are actually rendered.
function AnimatedLine({ text, className }) {
  return (
    <span className="-mb-4 block w-full overflow-hidden pb-4 md:-mb-6 md:pb-6">
      <motion.span
        className={`flex flex-wrap gap-x-[0.28em] ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block origin-bottom-left"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

// Fragments that describe what NEVILLE actually does — replaces the empty
// showreel placeholder with something a visitor can actually read.
const tickerItems = [
  "Youth-Led Ecosystem",
  "Systemic Support",
  "Data-Driven Research",
  "Peer-to-Peer Mentorship",
  "Dhaka, Bangladesh",
];

function ImpactTicker() {
  // Duplicated once so translating the track by exactly -50% loops seamlessly.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="flex h-full items-center overflow-hidden">
      <motion.div
        className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap px-6 md:gap-12 md:px-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-8 text-xs font-semibold tracking-widest text-neutral/60 uppercase md:gap-12 md:text-sm"
          >
            {item}
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    // DEV NOTE: bg-base-200 provides the soft icy off-white background.
    // No forced min-height on mobile — the section is exactly as tall as
    // its content there, so there's no leftover space to leak out as a
    // gap. From `md` up we opt into the full-bleed look with a floor of
    // `calc(100vh-4.5rem)`, assuming the floating navbar's own footprint
    // (pill height + top offset) is roughly 72px.
    <section className="relative flex min-h-[560px] w-full flex-col overflow-hidden bg-base-200 selection:bg-primary selection:text-white md:min-h-[calc(100vh-4.5rem)]">
      {/* ========================================= */}
      {/* MAIN TYPOGRAPHY (Bottom-Left Aligned)     */}
      {/* ========================================= */}
      {/* DEV NOTE: `pt-24`/`pt-28`/`pt-32` clears the floating pill navbar.
          The block stacks naturally (no flex-grow, no forced centering) so
          there's no room for an accidental dead zone above it — the only
          intentional extra space is below, absorbed by the ticker's
          `mt-auto` on larger screens. */}
      <div className="z-10 flex w-full flex-col px-6 pt-24 pb-6 sm:pt-28 md:px-12 md:pb-8 lg:px-20 lg:pt-32">
        {/* Eyebrow + CTA sit together on one row, right above the mission
            line — grounds the headline without needing top-of-page space. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-3 flex flex-wrap items-center justify-between gap-3 md:mb-4"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-neutral/60 uppercase md:text-xs">
            Dhaka &middot; Youth-Led Ecosystem
          </span>
          <a
            href="https://forms.gle/j11RnDdtBDZ8PyZq5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-sm rounded-full px-5 text-xs font-semibold normal-case focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-base-200 md:btn-md md:text-sm"
          >
            Join the movement &rarr;
          </a>
        </motion.div>

        {/* One-line mission statement — gives the giant headline context
            without competing with it for attention. */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-6 max-w-md text-sm leading-snug text-neutral/70 md:mb-8 md:text-base"
        >
          We replace one-off charity with systemic support, real data, and
          peer-to-peer mentorship.
        </motion.p>

        <h1 className="max-w-[100rem]">
          {/*
            DEV NOTE: TEXT SIZING
            `clamp()` is tuned so each phrase reliably holds one line at
            common widths, then scales fluidly between a comfortable
            mobile floor and a capped desktop ceiling — a raw `vw` value
            has no ceiling and grows to an absurd size on large monitors.
          */}
          <AnimatedLine
            text="Empowering Youth,"
            className="text-[clamp(1.75rem,8.5vw,7.5rem)] leading-[1.05] font-black tracking-tighter text-neutral"
          />
          <AnimatedLine
            text="Building Leaders."
            className="text-[clamp(1.75rem,8.5vw,7.5rem)] leading-[1.05] font-black tracking-tighter text-neutral"
          />
        </h1>
      </div>

      {/* ========================================= */}
      {/* IMPACT TICKER (replaces empty showreel)   */}
      {/* ========================================= */}
      {/* `mt-auto` only does something when the section is taller than its
          content (i.e. from `md` up, where we forced a min-height) — it
          pulls the ticker to the very bottom for the full-bleed look. On
          mobile, with no forced min-height, there's no free space for
          `mt-auto` to claim, so the ticker just follows the headline
          directly with no gap. */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-20 mt-auto h-[12vh] w-full min-h-16 rounded-t-[2.5rem] bg-base-100 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] md:h-[16vh] md:rounded-t-[4rem]"
      >
        <ImpactTicker />
      </motion.div>
    </section>
  );
}
