import Image from "next/image";
import { Award, Shield, Globe, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    // 1. HEIGHT FIX: Uses 100svh (Small Viewport Height) for mobile so it perfectly fills the phone screen
    // minus the Navbar, and 100vh for desktops.
    <div className="hero min-h-[calc(78svh-70px)] md:min-h-[calc(100vh-80px)] relative overflow-hidden flex items-center justify-start">
      {/* BACKGROUND IMAGE */}
      {/* DEV NOTE (Future): Fetch the background image URL dynamically from a Headless CMS (like Sanity/Contentful) so admins can change the hero image without coding. */}
      <Image
        src="/hero-bg.jpg"
        alt="Smiling children in Bangladesh supported by NEVILLE"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* ========================================= */}
      {/* 2. GRADIENT OVERLAYS (Fixed for all screens) */}
      {/* ========================================= */}

      {/* MOBILE OVERLAY: Solid dark tint so text is readable anywhere on the screen */}
      <div className="absolute inset-0 bg-black/60 md:hidden"></div>

      {/* DESKTOP OVERLAY: Left-to-right gradient */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>

      {/* ========================================= */}
      {/* 3. HERO CONTENT */}
      {/* ========================================= */}
      {/* ALIGNMENT FIX: Removed 'mt-auto' so the text sits naturally in the middle/top-middle */}
      <div className="hero-content relative z-10 w-full max-w-7xl px-4 md:px-12 py-10 md:py-12 flex-col items-start text-left mb-10 md:mb-0">
        <div className="max-w-3xl text-neutral-content w-full">
          {/* HEADLINE */}
          {/* DEV NOTE (Future): Connect this text to a CMS text field for live marketing updates. */}
          <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-2xl">
            Word Word, <br className="hidden sm:block" />{" "}
            <span className="text-accent">Word</span> Words
          </h1>

          {/* SUBHEADLINE */}
          <p className="mb-8 md:mb-12 text-sm md:text-base lg:text-xl opacity-90 leading-snug md:leading-relaxed max-w-xl font-medium drop-shadow-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            provident pariatur quae illum possimus dolore eveniet at enim eius.
          </p>

          {/* STATISTICS */}
          {/* DEV NOTE (Future): Create an API route to fetch real-time donation totals from your payment gateway (e.g., Stripe/SSLCommerz) and pass them as props here. */}
          <div className="flex flex-row flex-wrap gap-6 md:gap-16 mb-8 md:mb-12">
            <div className="flex items-baseline gap-1.5 md:gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight drop-shadow-xl">
                ৳ 28 220
              </span>
              <span className="text-[10px] sm:text-xs md:text-base opacity-100 font-bold uppercase tracking-widest text-white drop-shadow-md">
                Donation
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 md:gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight drop-shadow-xl">
                1 05
              </span>
              <span className="text-[10px] sm:text-xs md:text-base opacity-100 font-bold uppercase tracking-widest text-white drop-shadow-md">
                Helped
              </span>
            </div>
          </div>

          {/* PARTNER LOGOS */}
          {/* DEV NOTE (Future): Map over an array of partner objects fetched from a database. Replace Lucide icons with real <Image> tags of corporate sponsor logos. */}
          <div className="flex flex-wrap items-center gap-4 md:gap-10 opacity-80 text-white">
            <div className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-primary transition-all cursor-pointer">
              <Shield className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-primary transition-all cursor-pointer">
              <Award className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                HYPER BEST
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-primary transition-all cursor-pointer">
              <Globe className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 hover:opacity-100 hover:text-primary transition-all cursor-pointer">
              <HeartHandshake className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs md:text-lg font-bold tracking-tighter drop-shadow-md">
                logoipsum
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
