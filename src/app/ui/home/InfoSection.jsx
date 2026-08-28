import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   NEVILLE INFO SECTION — SEMANTIC DESIGN SYSTEM
   ============================================================================ */

const STEPS = [
  { id: 1, text: "Identify your passion" },
  { id: 2, text: "Connect with mentors" },
  { id: 3, text: "Develop critical skills" },
  { id: 4, text: "Lead community action" },
];

export default function InfoSection() {
  return (
    <section className="overflow-hidden bg-background text-foreground py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ========================================= */}
          {/* LEFT COLUMN: THE VISUAL ANCHOR            */}
          {/* ========================================= */}
          <div className="group relative aspect-square w-full">
            <Image
              src="/info-image.jpeg"
              alt="Youth working together at NEVILLE"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAI8QMpSj7f7wAAAABJRU5ErkJggg=="
              className="rounded-[2rem] md:rounded-[2.5rem] object-cover shadow-neo-lg transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* DECORATIVE GLOW */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* STAT BADGE */}
            <div className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 rounded-2xl bg-card border border-border px-4 py-3 shadow-neo-md sm:-bottom-6 sm:-left-6 sm:gap-3 sm:px-5 sm:py-4">
              <span className="text-xl font-extrabold text-primary sm:text-2xl">
                20+
              </span>
              <span className="max-w-[6rem] text-[11px] leading-tight font-semibold tracking-wide text-muted-foreground uppercase sm:text-xs">
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

              <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-foreground md:text-5xl">
                Transforming Youth <br className="hidden md:block" />
                Potential into{" "}
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  Sustainable Action.
                </span>
              </h2>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
                We don't just talk about the future; we build it. NEVILLE
                connects driven young minds in Dhaka with the mentorship, tools,
                and research needed to execute real-world community projects.
              </p>
            </div>

            {/* STEPS GRID */}
            <div className="mt-2 grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:gap-x-6">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="group flex cursor-default items-center gap-3 md:gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-neo-sm transition-colors duration-300 group-hover:bg-secondary md:h-11 md:w-11">
                    {step.id}
                  </div>

                  <span className="text-sm leading-tight font-bold text-foreground/90 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary md:text-base">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="flex w-full justify-center pt-4 md:justify-start md:pt-6">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-9 py-3.5 rounded-full shadow-neo-sm hover:opacity-90 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-sm md:text-base cursor-pointer"
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
