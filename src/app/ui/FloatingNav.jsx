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

/* ============================================================================
   DEV NOTE: THEME & COLOR MAPPING
   ----------------------------------------------------------------------------
   Celestial Sea Palette is mapped to specific routes.
   The 'color' property here defines both the active text color and the 
   thick dotted focus outline color for keyboard accessibility.
============================================================================ */
const NAV_LINKS = [
  { name: "Home", href: "/", color: "#b8e0d4" },
  { name: "About", href: "/about", color: "#809bce" },
  { name: "Work", href: "/work", color: "#b8e0d4" },
  { name: "Expertise", href: "/expertise", color: "#809bce" },
  { name: "Thinking", href: "/thinking", color: "#eac4d5" },
  { name: "Contact", href: "/contact", color: "#eac4d5" },
];

export default function FloatingNav() {
  const pathname = usePathname();

  /* 
     DEV NOTE: OPTIMISTIC UI STATE
     'activePath' updates instantly on MouseDown to trigger the sliding 
     animation before the Next.js router completes the page transition.
  */
  const [activePath, setActivePath] = useState(pathname);
  const [hoveredPath, setHoveredPath] = useState(null);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
      {/* THE MAIN WHITE PILL BAR */}
      <div
        className="flex items-center gap-0.5 p-1.5 bg-white rounded-full shadow-2xl border border-black/5 relative"
        onMouseLeave={() => setHoveredPath(null)}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.name}
            link={link}
            isActive={activePath === link.href}
            isHovered={hoveredPath === link.href}
            setHoveredPath={setHoveredPath}
            setActivePath={setActivePath}
          />
        ))}
      </div>
    </nav>
  );
}

function NavLink({ link, isActive, isHovered, setHoveredPath, setActivePath }) {
  const ref = useRef(null);

  /* 
     DEV NOTE: MAGNETIC X-AXIS ONLY
     We use a high stiffness spring for a responsive, mechanical feel. 
     The 'y' axis is omitted to maintain the strict horizontal alignment 
     seen in agency-level "mechanical" headers.
  */
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 35 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      // Multiplier (0.2) controls the "magnetic" stickiness
      x.set((e.clientX - centerX) * 0.2);
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
      onMouseDown={() => setActivePath(link.href)}
      className="relative px-5 py-2.5 outline-none group flex items-center justify-center"
    >
      {/* 1. THE BLACK ACTIVE PILL */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="activePill"
            className="absolute inset-x-1 inset-y-1 bg-[#0c1117] rounded-full"
            style={{ x: springX, zIndex: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>

      {/* 2. THE GHOST HOVER BUBBLE */}
      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.div
            layoutId="ghostHover"
            className="absolute inset-x-1 inset-y-1 bg-slate-100 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ x: springX, zIndex: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
        )}
      </AnimatePresence>

      {/* 3. RECTANGULAR DOTTED OUTLINE (Accessibility Focus) */}
      {/* 
          DEV NOTE: OPTIMIZED FOR "THICK & DARK" 
          - border-[2.5px]: Increased from 1.5px for higher visibility.
          - border-black: Removed transparency (/80) for maximum darkness.
          - opacity-0 -> group-focus-visible:opacity-100: Ensures clean UI 
            for mouse users, but clear feedback for keyboard users.
      */}
      <div
        className={`
          absolute inset-0 border-[2.5px] border-dashed border-black rounded-none 
          opacity-0 group-focus-visible:opacity-100 pointer-events-none transition-opacity
        `}
        style={{ zIndex: 20 }}
      />

      {/* 4. STATIC TEXT CONTENT (No Jiggle) */}
      <span
        className={`relative z-10 text-[14px] font-bold tracking-tight transition-colors duration-300
          ${isActive ? "" : "text-slate-700 group-hover:text-black"}`}
        style={{ color: isActive ? link.color : undefined }}
      >
        {link.name}
      </span>
    </Link>
  );
}
