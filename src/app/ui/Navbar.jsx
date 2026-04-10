"use client"; // Essential for Hooks (usePathname) and Interactivity (Click handlers)

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Added to detect active routes
import { HandHeart, Menu } from "lucide-react";

/**
 * DEV NOTE: CENTRALIZED NAVIGATION CONFIG
 * ---------------------------------------
 * We use an array to avoid repeating JSX code.
 * To add a new page (e.g., 'Courses'), simply add an object to this list.
 * Future: This could be fetched from a CMS if the menu changes frequently.
 */
const NAV_LINKS = [
  { name: "Home", href: "/" },
  // { name: "Initiatives", href: "/initiatives" },
  // { name: "Donation Info", href: "/donation-info" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // Get current URL path

  /**
   * DEV NOTE: SPA FOCUS MANAGEMENT (THE "BLUR" FIX)
   * ----------------------------------------------
   * In Single Page Applications (Next.js), clicking a link doesn't trigger
   * a full browser refresh. This causes two issues:
   * 1. The focus highlight stays on the button after clicking.
   * 2. On mobile, the dropdown menu stays open.
   * This function forces the browser to "let go" (blur) of the element.
   */
  const handleLinkClick = (e) => {
    // 1. Remove focus from the link itself
    e.currentTarget.blur();

    // 2. Programmatically close the mobile dropdown
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  };

  return (
    // DEV NOTE: 'sticky top-0' + 'z-50' ensures the bar stays above all content
    // during scroll. 'bg-neutral' matches your Dhaka/Charity-Blue theme.
    <nav className="navbar bg-neutral text-neutral-content shadow-md sticky top-0 z-50 px-2 md:px-4">
      {/* ----------------------------- */}
      {/* START: Mobile Menu & Logo     */}
      {/* ----------------------------- */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* 
            DEV NOTE: aria-label improves accessibility for screen readers.
            The focus/active/hover overrides prevent the button from flashing 
            different colors on mobile taps.
          */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden focus:bg-transparent! active:bg-transparent! hover:bg-transparent!"
            aria-label="Open Mobile Navigation"
          >
            <Menu className="h-6 w-6" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-neutral/50"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`
                      ${isActive ? "bg-white/20 text-white" : "text-white"}
                      hover:bg-white/10 active:bg-white/20! focus-visible:bg-white/20!
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 
           LOGO SECTION
           DEV NOTE: 'priority' on <Image> is a Next.js best practice for logos 
           to improve LCP (Largest Contentful Paint) and SEO rankings.
        */}
        <div className="lg:pl-8 pl-4">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="hover:opacity-80 transition-opacity flex items-center"
            aria-label="NEVILLE Homepage"
          >
            <Image
              src="/logo.png"
              alt="NEVILLE Organization Logo"
              width={200} // Set optimized width
              height={100} // Set optimized height
              className="w-20 h-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* ----------------------------- */}
      {/* CENTER: Desktop Navigation    */}
      {/* ----------------------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium gap-1">
          {NAV_LINKS.map((link) => {
            // Check if this link matches the current URL
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`
                    ${isActive ? "bg-white/15 text-white underline decoration-accent decoration-2 underline-offset-8" : ""}
                    hover:bg-white/10 focus:bg-transparent! focus:text-white! rounded-md transition-all duration-300
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ----------------------------- */}
      {/* END: Call to Action (Donate)  */}
      {/* ----------------------------- */}
      <div className="navbar-end lg:pr-10 pr-2">
        {/* 
           DEV NOTE: External Links Best Practice
           Always include target="_blank" and rel="noopener noreferrer" 
           for links leading away from your site for security and performance.
        */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeX0mLA_rme9yY6-YeERKpTCVAvHdHHP7S1F6ieA6yg5CBZtg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-md lg:w-40 text-lg rounded-full text-white shadow-md flex items-center gap-2 border-none transition-transform hover:scale-105"
        >
          <HandHeart className="w-5 h-5" />
          <span>Donate</span>
        </a>
      </div>
    </nav>
  );
}
