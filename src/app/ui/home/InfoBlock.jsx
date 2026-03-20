import Image from "next/image";
import Link from "next/link"; // Changed to Link for proper routing

/**
 * DEV NOTE: COMPONENT REUSABILITY
 * ------------------------------
 * Pro-tip: Eventually, you should pass 'steps' and 'content' as props.
 * This allows you to use this exact same "Split Layout" for other pages
 * (like "How to Volunteer" or "Our Education Modules") without rewriting code.
 */
const STEPS = [
  { id: 1, text: "Choose your cause" },
  { id: 2, text: "Register on our website" },
  { id: 3, text: "Donate the amount you like" },
  { id: 4, text: "Stay tuned about cause" },
];

export default function InfoSection() {
  return (
    <section className="py-16 md:py-24 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* ========================================= */}
          {/* LEFT COLUMN: THE VISUAL ANCHOR            */}
          {/* ========================================= */}
          <div className="relative aspect-square sm:aspect-4/3 lg:aspect-square w-full group">
            {/* 
              DEV NOTE: PROFESSIONAL IMAGE HANDLING
              1. 'placeholder="blur"': Shows a blurred version while the image loads.
              2. 'blurDataURL': A tiny base64 encoded string of the image. 
              3. 'rounded-[2.5rem]': Matches your "Roundy" vibe.
            */}
            <Image
              src="/info-image.jpeg"
              alt="Youth working together at NEVILLE"
              fill
              placeholder="blur"
              // DEV NOTE: This is a tiny grey-blue placeholder.
              // Professionals use a library called 'plaiceholder' to generate
              // these automatically from the real image.
              blurDataURL="./info-image.jpeg"
              className="object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* DECORATIVE ELEMENT: A subtle brand-colored glow behind the image */}
            <div className="absolute -z-10 -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: CONTENT & STEPS             */}
          {/* ========================================= */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral leading-[1.15] tracking-tight">
                Transforming Good <br className="hidden md:block" />
                Intentions into{" "}
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  Lorem, ipsum.
                </span>
              </h2>

              <p className="text-base md:text-lg text-neutral/70 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                nostrum est nisi molestiae pariatur commodi eum corrupti iste
                iusto quia.
              </p>
            </div>

            {/* STEPS GRID */}
            {/* 
              FIX: 'whitespace-nowrap' and 'min-w-max' prevent the text from breaking 
              into two lines on most screen sizes. 
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16 mt-2">
              {STEPS.map((step) => (
                <div key={step.id} className="flex items-center gap-4 group">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:bg-neutral transition-colors duration-300">
                    {step.id}
                  </div>

                  <span className="text-sm md:text-base font-bold text-neutral/80 whitespace-nowrap">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION */}
            <div className="pt-6">
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
