import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, MapPin, Mail, Sparkles } from "lucide-react";

/* ============================================================================
   DEV NOTE: SEO & METADATA
   ----------------------------------------------------------------------------
   Accurate metadata is crucial. When partners or youth search for NEVILLE 
   contact info, this description will appear in Google Search results.
============================================================================ */
export const metadata = {
  title: "Contact Us | NEVILLE",
  description:
    "Get in touch with NEVILLE. We are a youth initiative operating nationwide from Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden transition-colors duration-300">
      {/* ================================================================== */}
      {/* PART 1: THE SPLIT HERO (Text Left, Floating 3D Object Right)       */}
      {/* ================================================================== */}
      <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: TYPOGRAPHY & BUTTON */}
          <div className="flex flex-col items-start z-10 lg:-mt-16 xl:-mt-24">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-foreground tracking-tight leading-[1.05] mb-8">
              We've got a <br className="hidden md:block" />
              great feeling <br className="hidden md:block" />
              about this
            </h1>

            <Link
              href="mailto:org.neville@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold transition-all hover:opacity-90 hover:-translate-y-1 shadow-lg shadow-primary/30 group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT: THE 3D / HERO IMAGE */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <div className="relative w-full h-full animate-[bounce_6s_ease-in-out_infinite]">
              <Image
                src="/heart.png"
                alt="NEVILLE 3D Heart Visual"
                fill
                priority
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 h-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PART 2: THE 3-COLUMN CONTACT INFO GRID                             */}
      {/* ================================================================== */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto w-full border-t border-border pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Column 1: General Contact */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground font-bold mb-1">
                <Mail className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Reach Out
                </span>
              </div>
              <a
                href="mailto:org.neville@gmail.com"
                className="text-xl md:text-2xl font-extrabold text-foreground hover:text-primary transition-colors"
              >
                org.neville@gmail.com
              </a>
              <a
                href="tel:+8801764078003"
                className="text-base font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                +8801764078003
              </a>
            </div>

            {/* Column 2: Operations / Location */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground font-bold mb-1">
                <MapPin className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Base of Operations
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                Dhaka, Bangladesh
              </h3>
              <p className="text-muted-foreground font-medium text-base">
                Operating nationwide to empower{" "}
                <br className="hidden lg:block" />
                youth across all communities.
              </p>
            </div>

            {/* Column 3: Collaboration & Opportunities */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground font-bold mb-1">
                <Globe className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Collaborate
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                Partner with us
              </h3>
              <p className="text-muted-foreground font-medium text-base mb-2">
                Looking to mentor, volunteer, or fund an initiative? Let's build
                the future.
              </p>
              <Link
                href="https://forms.gle/j11RnDdtBDZ8PyZq5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4" />
                Join the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
