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
    <section className="py-16 md:py-24 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* DEV NOTE (Z-Pattern Reading): This grid sets up a classic UI "Z-Pattern". 
            Users look at the Image (Left), read the Headline (Right), and scan 
            down to the Button (Bottom Right). It maximizes conversion rates. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* ========================================= */}
          {/* LEFT COLUMN: THE VISUAL ANCHOR            */}
          {/* ========================================= */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full group">
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
              className="object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* DECORATIVE GLOW: Uses your theme's 'primary' color to create a soft halo */}
            <div className="absolute -z-10 -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: CONTENT & STEPS             */}
          {/* ========================================= */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* HEADLINE & PARAGRAPH */}
            <div className="space-y-6 text-center md:text-left">
              {/* 
                DEV NOTE (Typography): 
                - 'leading-[1.15]' tightens the line height. Big fonts need tighter lines.
                - 'tracking-tight' pulls the letters slightly closer for a premium look.
              */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral leading-[1.15] tracking-tight">
                Transforming Youth <br className="hidden md:block" />
                Potential into{" "}
                {/* DEV NOTE: The underline-offset-8 creates a modern marker-highlight effect */}
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  Sustainable Action.
                </span>
              </h2>

              <p className="text-base md:text-lg text-neutral/70 leading-relaxed max-w-xl mx-auto md:mx-0">
                We don't just talk about the future; we build it. NEVILLE
                connects driven young minds in Dhaka with the mentorship, tools,
                and research needed to execute real-world community projects.
              </p>
            </div>

            {/* ========================================= */}
            {/* STEPS GRID (BULLETPROOF LAYOUT)           */}
            {/* ========================================= */}
            {/* 
              DEV NOTE (The "No-Squish" Fix): 
              By keeping the gap tight (`gap-x-4 lg:gap-x-6`), we ensure the text 
              has maximum physical width to expand into, preventing unwanted line breaks.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 lg:gap-x-6 mt-2 w-full">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center gap-3 md:gap-4 group cursor-default"
                >
                  {/* NUMBER CIRCLE */}
                  {/* 
                    DEV NOTE (Micro-Interaction): 
                    When hovered, the circle inverts colors (bg-primary to bg-neutral).
                    This gives immediate tactile feedback to the user.
                  */}
                  <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:bg-neutral transition-colors duration-300">
                    {step.id}
                  </div>

                  {/* STEP TEXT */}
                  {/* 
                    DEV NOTE (Font Scaling & Animation): 
                    - 'text-[15px] xl:text-base': A hyper-specific responsive font size 
                      guarantees the text fits perfectly on standard 1366px laptop screens.
                    - Added `group-hover:translate-x-1`: The text subtly slides right 
                      when hovered, mimicking a button interaction!
                  */}
                  <span className="text-sm md:text-[15px] xl:text-base font-bold text-neutral/80 leading-tight transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral">
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
            <div className="pt-4 md:pt-6 w-full flex justify-center md:justify-start">
              <Link
                href="/about"
                className="btn btn-primary rounded-full px-10 shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
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
