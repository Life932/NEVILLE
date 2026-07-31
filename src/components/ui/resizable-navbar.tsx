"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// Link type definition with optional dropdown sub-items
export interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Activities",
    href: "/activities",
    subItems: [
      { name: "Events", href: "/activities/events" },
      { name: "Initiatives", href: "/activities/initiatives" },
      { name: "Publications", href: "/activities/publications" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Ledger", href: "/ledger" },
  { name: "Contact", href: "/contact" },
];

/* ============================================================================
   ACETERNITY RESIZABLE NAVBAR CORE PRIMITIVES
============================================================================ */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full pt-3 pb-2 px-3 sm:px-6 transition-all duration-300",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child;
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        );
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(12px)",
        boxShadow: visible
          ? "0 10px 35px -10px rgba(72, 102, 250, 0.15), 0 4px 20px -2px rgba(0, 0, 0, 0.05)"
          : "0 4px 25px -4px rgba(0, 0, 0, 0.04)",
        width: visible ? "90%" : "100%",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 35,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full border px-6 py-2.5 transition-all duration-300 lg:flex",
        // LIGHT THEME: Pristine glassy translucent white pill with blur
        // DARK THEME: Pristine glassy dark slate pill with blur
        visible
          ? "bg-white/85 border-[#d1def0] shadow-md dark:bg-[#0f172a]/90 dark:border-slate-800 text-[#36454F] dark:text-white"
          : "bg-white/75 border-white/80 dark:bg-[#0f172a]/75 dark:border-slate-800/60 text-[#36454F] dark:text-white",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child;
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        );
      })}
    </motion.div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-6 flex items-center space-x-2 py-1 text-lg font-extrabold tracking-tight transition-opacity hover:opacity-90 min-h-[44px]"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#4866FA] text-white font-black text-sm shadow-md">
        N
      </div>
      <span className="font-bold tracking-tight text-lg text-[#36454F] dark:text-white transition-colors duration-300">
        NEVILLE<span className="text-[#4866FA]">.</span>
      </span>
    </Link>
  );
};

/* ============================================================================
   DESKTOP NAV ITEMS WITH DROPDOWN SUPPORT
============================================================================ */

export const NavItems = ({
  items = NAV_ITEMS,
  className,
}: {
  items?: NavItem[];
  className?: string;
  visible?: boolean;
}) => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Reset hover state on route change
  useEffect(() => {
    setHovered(null);
    setDropdownOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setHovered(null);
    setDropdownOpen(false);
  };

  return (
    <div
      onMouseLeave={() => {
        setHovered(null);
        setDropdownOpen(false);
      }}
      className={cn(
        "relative flex flex-1 flex-row items-center justify-center space-x-1 sm:space-x-2 text-sm font-medium",
        className
      )}
    >
      {items.map((item, idx) => {
        const isActive =
          pathname === item.href ||
          (item.subItems && item.subItems.some((sub) => pathname === sub.href));
        const hasSub = !!item.subItems && item.subItems.length > 0;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => {
              setHovered(idx);
              if (hasSub) setDropdownOpen(true);
              else setDropdownOpen(false);
            }}
          >
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                "relative flex items-center rounded-full text-[15px] font-semibold transition-colors duration-200 cursor-pointer min-h-[44px]",
                hasSub ? "pl-4 pr-2.5 gap-1" : "px-4 py-2.5",
                isActive
                  ? "text-[#4866FA] font-bold"
                  : "text-[#36454F] dark:text-slate-300 hover:text-[#4866FA] dark:hover:text-white"
              )}
            >
              <span
                className={cn(
                  "absolute bottom-1 left-3 right-3 h-[2px] bg-[#4866FA] rounded-full transition-all duration-200 ease-out origin-left",
                  hovered === idx || isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                )}
              />
              <span className="relative z-10">{item.name}</span>
              {hasSub && (
                <ChevronDown
                  className={cn(
                    "relative z-10 w-4 h-4 transition-transform duration-200",
                    hovered === idx && dropdownOpen
                      ? "rotate-180 text-[#4866FA]"
                      : "text-[#36454F]/70 dark:text-slate-400"
                  )}
                />
              )}
            </Link>

            {/* Desktop Floating Dropdown Card */}
            {hasSub && (
              <AnimatePresence>
                {hovered === idx && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-[#e5edff] dark:border-slate-800 bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-2xl p-1.5 shadow-2xl z-50 transition-colors duration-200 text-[#36454F] dark:text-slate-200"
                  >
                    {item.subItems!.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "flex items-center w-full px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors min-h-[44px]",
                            isSubActive
                              ? "bg-[#4866FA] text-white font-bold"
                              : "text-[#36454F] dark:text-slate-200 hover:bg-[#4866FA]/10 hover:text-[#4866FA] dark:hover:bg-[#4866FA]/20 dark:hover:text-[#4866FA]"
                          )}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ============================================================================
   NAVBAR CTA BUTTON
============================================================================ */

export const NavbarButton = ({
  href = "/contact",
  children = "Join Us",
  className,
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-full text-sm font-bold text-white bg-[#4866FA] shadow-md hover:bg-[#3b55e6] hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer",
        className
      )}
    >
      {children}
    </Link>
  );
};

/* ============================================================================
   MOBILE NAVIGATION PRIMITIVES & DRAWER MENU
============================================================================ */

export const MobileNav = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(12px)",
        boxShadow: visible
          ? "0 10px 35px -10px rgba(72, 102, 250, 0.12)"
          : "0 4px 20px -4px rgba(0, 0, 0, 0.03)",
        y: visible ? 2 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 35 }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 lg:hidden",
        visible
          ? "bg-white/85 border-[#e5edff] dark:bg-[#0f172a]/90 dark:border-slate-800 text-[#36454F] dark:text-white"
          : "bg-white/70 border-white/80 dark:bg-[#0f172a]/70 dark:border-slate-800/60 text-[#36454F] dark:text-white",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child;
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        );
      })}
    </motion.div>
  );
};

export const ResizableNavbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activitiesExpanded, setActivitiesExpanded] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <Navbar>
      {/* DESKTOP VIEW */}
      <NavBody>
        <NavbarLogo />
        <NavItems />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <NavbarButton href="/contact">Join Us</NavbarButton>
        </div>
      </NavBody>

      {/* MOBILE VIEW */}
      <MobileNav>
        <div className="flex w-full items-center justify-between">
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl border border-border bg-background text-foreground hover:bg-muted min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-4 pb-2 px-1 border-t border-border/50 mt-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const hasSub = !!item.subItems && item.subItems.length > 0;

                  if (hasSub) {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex-1 px-4 py-3 text-base font-bold rounded-xl min-h-[44px] flex items-center transition-colors",
                              isActive
                                ? "text-[#4866FA]"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setActivitiesExpanded(!activitiesExpanded)}
                            className="p-3 rounded-xl hover:bg-muted text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                            aria-label="Toggle activities sub-menu"
                          >
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform duration-200",
                                activitiesExpanded ? "rotate-180 text-[#4866FA]" : ""
                              )}
                            />
                          </button>
                        </div>

                        {/* Collapsible Accordion Sub-items */}
                        <AnimatePresence>
                          {(activitiesExpanded || pathname.startsWith("/activities")) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col gap-1 border-l-2 border-[#4866FA]/30 ml-4 my-1"
                            >
                              {item.subItems!.map((sub) => {
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                      "px-4 py-2.5 text-sm font-semibold rounded-lg min-h-[44px] flex items-center transition-colors",
                                      isSubActive
                                        ? "bg-[#4866FA] text-white"
                                        : "text-foreground/80 hover:bg-muted hover:text-[#4866FA]"
                                    )}
                                  >
                                    {sub.name}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-bold rounded-xl min-h-[44px] flex items-center transition-colors",
                        isActive
                          ? "bg-[#4866FA] text-white"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-border/50 flex flex-col gap-2">
                  <NavbarButton href="/contact" className="w-full text-center justify-center">
                    Join Us
                  </NavbarButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  );
};

export default ResizableNavbar;
