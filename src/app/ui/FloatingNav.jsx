"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

/* ============================================================================
   DEV NOTE: SITEMAP & ROYAL PALETTE MAPPING
   ----------------------------------------------------------------------------
   The colors assigned here dictate the text color when the pill is active.
   - #4866FA (Royal Blue): Used for primary action/core pages.
   - #99BCF2 (Light Blue): Used for secondary/exploratory pages.
============================================================================ */
const NAV_LINKS = [
  { name: "Home", href: "/", color: "#4866FA" },
  { name: "About", href: "/about", color: "#99BCF2" },
  { name: "Olympiads", href: "/olympiads", color: "#4866FA" },
  { name: "Initiatives", href: "/initiatives", color: "#99BCF2" },
  { name: "Journal", href: "/journal", color: "#4866FA" },
  { name: "Gallery", href: "/gallery", color: "#99BCF2" },
  { name: "Ledger", href: "/ledger", color: "#4866FA" },
  { name: "Contact", href: "/contact", color: "#99BCF2" },
];

export default function FloatingNav() {
  const pathname = usePathname();

  /* 
     DEV NOTE: THE "HUMAAN" GHOST PILL LOGIC (THE FIX)
     --------------------------------------------------------------------------
     Instead of making the ghost pill disappear, we initialize `hoveredPath` 
     to the `pathname`. When the mouse leaves the navbar entirely, `hoveredPath` 
     reverts to `pathname`. 
     This means the grey ghost pill physically slides BACK under the black active 
     pill, creating that exact "comes out of the active pill" Humaan effect!
  */
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync hoveredPath with actual route when navigation completes
  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <>
      {/* ================================================================== */}
      {/* 1. DESKTOP FLOATING GLASS NAV (Top Center)                         */}
      {/* ================================================================== */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[90] hidden lg:block">
        {/* 
          DEV NOTE: SIZE INCREASE FIX
          Increased padding from p-1 to p-1.5 and gap to gap-1 to restore 
          the luxurious, breathable feel of the original design.
          onMouseLeave reverts the ghost bubble back to the active page.
        */}
        <div
          className="flex items-center gap-1 p-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 relative h-14"
          onMouseLeave={() => setHoveredPath(pathname)}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              link={link}
              isActive={pathname === link.href}
              isHovered={hoveredPath === link.href}
              setHoveredPath={setHoveredPath}
            />
          ))}
        </div>
      </nav>

      {/* ================================================================== */}
      {/* 2. MOBILE BOTTOM NAVIGATION (Stacked Bubbles)                      */}
      {/* ================================================================== */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: {
                  transition: { staggerChildren: 0.02, staggerDirection: -1 },
                },
                hidden: {
                  transition: { staggerChildren: 0.015, staggerDirection: 1 },
                },
              }}
              className="flex flex-col-reverse items-center gap-2 mb-4"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    style={{ originY: 1 }} // Ensures elements scale up from the bottom (button origin)
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40, // Pulled tightly into the button
                        scale: 0.4, // Shrunk to give the "expanding out" effect
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 600,
                          damping: 25,
                        }, // Blazing fast, clean snap
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block px-6 py-3 rounded-full text-base font-bold tracking-tight shadow-xl border border-white/20
                        ${isActive ? "bg-[#111111]" : "bg-white/90 backdrop-blur-md text-[#36454F]"}
                      `}
                      style={{ color: isActive ? link.color : undefined }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Toggle Button Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3.5 rounded-full shadow-2xl font-bold tracking-widest uppercase text-sm outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4866FA] active:scale-95 transition-transform"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </>
  );
}

/* ============================================================================
   DESKTOP NAV LINK COMPONENT (The Magnetic Engine)
============================================================================ */
function NavLink({ link, isActive, isHovered, setHoveredPath }) {
  const ref = useRef(null);

  /* 
     DEV NOTE: GLITCH & SHADOW FIX
     Removed the optimistic UI override and the `x.set(0)` resets that caused 
     the shadow glitches and text crossing out during rapid clicking.
     The spring physics naturally handle the momentum without manual overrides.
  */
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      x.set((e.clientX - centerX) * 0.15); // Subtle 15% magnetic pull sideways
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <Link
      ref={ref}
      href={link.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredPath(link.href)}
      onMouseLeave={handleMouseLeave}
      // DEV NOTE: Increased padding back to px-6 py-2.5 for the larger, breathable feel
      className="relative px-6 py-2.5 h-full outline-none group flex items-center justify-center cursor-pointer"
    >
      {/* 
         ==================================================
         1. THE GHOST HOVER BUBBLE (Background Layer)
         ==================================================
         DEV NOTE: This renders underneath the active pill. Because `hoveredPath` 
         reverts to `pathname` on mouse leave, this ghost pill visibly slides 
         out of the active black pill when you hover a new link, and slides 
         back into it when you leave. Exact Humaan replication.
      */}
      {isHovered && (
        <motion.div
          layoutId="ghostHover"
          className="absolute inset-0 bg-black/5 rounded-full"
          style={{ x: springX, zIndex: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        />
      )}

      {/* 
         ==================================================
         2. THE BLACK ACTIVE PILL (Foreground Layer)
         ==================================================
         DEV NOTE: Fixed glitch by separating it completely from the hover logic. 
         It stays anchored to the active link. If hovered, it slightly wobbles 
         along with the ghost pill beneath it.
      */}
      {isActive && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-[#0c1117] rounded-full shadow-md"
          style={{ x: isHovered ? springX : 0, zIndex: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* 
         ==================================================
         3. ACCESSIBILITY FOCUS RING 
         ==================================================
      */}
      <div
        className={`
          absolute inset-0 border-[2.5px] border-dashed border-black rounded-none 
          opacity-0 group-focus-visible:opacity-100 pointer-events-none transition-opacity
        `}
        style={{ zIndex: 20 }}
      />

      {/* 
         ==================================================
         4. STATIC TEXT CONTENT 
         ==================================================
         DEV NOTE: Restored text size to text-[15px] for high legibility.
      */}
      <span
        className={`relative z-10 text-[15px] font-bold tracking-tight transition-colors duration-300
          ${isActive ? "" : "text-[#36454F]/80 group-hover:text-[#111111]"}`}
        style={{ color: isActive ? link.color : undefined }}
      >
        {link.name}
      </span>
    </Link>
  );
}
