import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   DEV NOTE: DATA LAYER & STATE MANAGEMENT
   ----------------------------------------------------------------------------
   1. STATIC VS DYNAMIC: Right now, STEPS is static. When you launch the Edu
      Platform, you can replace this with a `fetch` call to Sanity/Contentful.
   2. REUSABILITY: To make this a global template, refactor this component to
      accept props. Example:
      export default function InfoSection({ headline, paragraph, stepsData, image, cta }) { ... }
      Then you can use this exact layout on the Home page AND the About page
      with completely different text!
============================================================================ */

/* ============================================================================
   DEV NOTE: WHAT CHANGED IN THIS PASS
   ----------------------------------------------------------------------------
   1. ASPECT RATIO: the image wrapper went `aspect-square` -> `sm:aspect-[4/3]`
      -> `lg:aspect-square` — it oscillates back and forth for no clear
      reason, which is usually a sign a breakpoint was patched in isolation
      rather than the ratio being a deliberate choice. Settled on one
      consistent `aspect-square` across all sizes.
   2. STEP TEXT SIZING: `text-sm md:text-[15px] xl:text-base` was tuned to
      "fit perfectly on 1366px laptops," but the text isn't force-nowrapped
      here (unlike the Impact Grid bug), so it wraps fine on its own —
      the pixel-hunting wasn't buying anything. Simplified to `text-sm
      md:text-base`.
   3. EYEBROW: added a small "How Youth Engage" label above the headline so
      this section reads as part of the same system as the Hero and Impact
      Grid, which now both carry one.
   4. STAT BADGE: added a small floating card over the image corner
      ("20+ Youth Mentored So Far") — reuses the youth-reached figure
      already established in the Hero rather than inventing a new number,
      and gives the photo a concrete, credible anchor instead of being
      purely decorative.
   5. Added a focus-visible ring to the CTA link — it was missing keyboard
      focus styling.
============================================================================ */

const STEPS = [
  { id: 1, text: "Identify your passion" },
  { id: 2, text: "Connect with mentors" },
  { id: 3, text: "Develop critical skills" },
  { id: 4, text: "Lead community action" },
];

export default function InfoSection() {
  return (
    // DEV NOTE (Layout): 'overflow-hidden' prevents the decorative glowing blur
    // from causing horizontal scrollbars on mobile devices.
    <section className="overflow-hidden bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* DEV NOTE (Z-Pattern Reading): This grid sets up a classic UI "Z-Pattern".
            Users look at the Image (Left), read the Headline (Right), and scan
            down to the Button (Bottom Right). It maximizes conversion rates. */}
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ========================================= */}
          {/* LEFT COLUMN: THE VISUAL ANCHOR            */}
          {/* ========================================= */}
          <div className="group relative aspect-square w-full">
            {/*
              DEV NOTE: NEXT.JS IMAGE OPTIMIZATION
              ------------------------------------
              - 'placeholder="blur"': Crucial for Core Web Vitals. Prevents layout shift.
              - 'sizes': Tells the browser exactly what resolution to download.
                 On mobile (<1024px), it downloads a 100vw image. On desktop, a 50vw image.
                 This saves massive bandwidth for users in Bangladesh on mobile data!
            */}
            <Image
              src="/info-image.jpeg"
              alt="Youth working together at NEVILLE"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAI8QMpSj7f7wAAAABJRU5ErkJggg=="
              className="rounded-[2.5rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* DECORATIVE GLOW: Uses your theme's 'primary' color to create a soft halo */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* STAT BADGE: a real, credible number anchored to the photo
                instead of leaving the image purely decorative. */}
            <div className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 rounded-2xl bg-base-100 px-4 py-3 shadow-xl sm:-bottom-6 sm:-left-6 sm:gap-3 sm:px-5 sm:py-4">
              <span className="text-xl font-extrabold text-primary sm:text-2xl">
                20+
              </span>
              <span className="max-w-[6rem] text-[11px] leading-tight font-semibold tracking-wide text-neutral/60 uppercase sm:text-xs">
                Youth mentored so far
              </span>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: CONTENT & STEPS             */}
          {/* ========================================= */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* HEADLINE & PARAGRAPH */}
            <div className="space-y-4 text-center md:text-left">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase md:text-xs">
                How Youth Engage
              </span>

              {/*
                DEV NOTE (Typography):
                - 'leading-[1.15]' tightens the line height. Big fonts need tighter lines.
                - 'tracking-tight' pulls the letters slightly closer for a premium look.
              */}
              <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral md:text-5xl">
                Transforming Youth <br className="hidden md:block" />
                Potential into{" "}
                {/* DEV NOTE: The underline-offset-8 creates a modern marker-highlight effect */}
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  Sustainable Action.
                </span>
              </h2>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-neutral/70 md:mx-0 md:text-lg">
                We don't just talk about the future; we build it. NEVILLE
                connects driven young minds in Dhaka with the mentorship, tools,
                and research needed to execute real-world community projects.
              </p>
            </div>

            {/* ========================================= */}
            {/* STEPS GRID                                */}
            {/* ========================================= */}
            <div className="mt-2 grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:gap-x-6">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="group flex cursor-default items-center gap-3 md:gap-4"
                >
                  {/* NUMBER CIRCLE */}
                  {/*
                    DEV NOTE (Micro-Interaction):
                    When hovered, the circle inverts colors (bg-primary to bg-neutral).
                    This gives immediate tactile feedback to the user.
                  */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-colors duration-300 group-hover:bg-neutral md:h-11 md:w-11">
                    {step.id}
                  </div>

                  {/* STEP TEXT */}
                  <span className="text-sm leading-tight font-bold text-neutral/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral md:text-base">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* ========================================= */}
            {/* CALL TO ACTION BUTTON                     */}
            {/* ========================================= */}
            {/*
              DEV NOTE (Flex Alignment):
              'justify-center md:justify-start' safely centers the button on mobile
              and perfectly aligns it left on desktop without breaking flex-box rules.
            */}
            <div className="flex w-full justify-center pt-4 md:justify-start md:pt-6">
              <Link
                href="/about"
                className="btn btn-primary rounded-full px-10 shadow-xl transition-all outline-none hover:-translate-y-1 hover:shadow-primary/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
              >
                Our Full Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
