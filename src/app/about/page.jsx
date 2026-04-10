import TeamSection from "../ui/about/TeamSection";

/* ============================================================================
   DEV NOTE: SEO & SOCIAL SHARING (METADATA)
   ----------------------------------------------------------------------------
   Next.js App Router utilizes the exported `metadata` object for Server-Side 
   Rendering (SSR) of `<head>` tags. This ensures search engines and social 
   platforms instantly read the page context.
   
   Future Enhancements:
   - Implement the `openGraph` and `twitter` objects to format the preview card 
     specifically for WhatsApp, LinkedIn, and Facebook sharing.
   - Example implementation:
     openGraph: {
       title: "About NEVILLE",
       description: "Meet the minds behind Dhaka's premier youth initiative.",
       url: "https://neville.org.bd/about",
       images:[{ url: "/og-team-image.jpg", width: 1200, height: 630 }],
     }
============================================================================ */
export const metadata = {
  title: "About Us | NEVILLE - A Youth Led Initiative",
  description:
    "Meet the Founders and Dedicated Members driving NEVILLE's mission in Bangladesh.",
};

/* ============================================================================
   DEV NOTE: PAGE ARCHITECTURE (COMPONENT-DRIVEN DEVELOPMENT)
   ----------------------------------------------------------------------------
   This file acts strictly as a "Page Assembly Wrapper". Complex business logic, 
   state management, and UI grids reside inside modular, reusable components 
   (e.g., `TeamSection.jsx`).
   
   Performance Benefit:
   By omitting the "use client" directive, this file remains a React Server 
   Component (RSC) by default. It renders securely on the server and ships 
   zero JavaScript bundle weight to the end-user's device.
============================================================================ */
export default function AboutPage() {
  return (
    /* 
      DEV NOTE: STRUCTURAL FOUNDATION
      - `min-h-screen`: Forces the layout to stretch full height, ensuring the 
        global Footer remains pinned to the bottom on short pages.
      - `overflow-hidden`: Acts as a safety net against horizontal scrolling 
        caused by wide animations (e.g., Framer Motion slide-ins).
      - `bg-base-100`: Inherits the primary background from the global theme.
    */
    <main className="min-h-screen bg-base-100 flex flex-col w-full overflow-hidden">
      {/* 
        =======================================================================
        FUTURE COMPONENT ROADMAP (PHASE 2)
        =======================================================================
        To establish authority as a modern "Youth Organization" rather than a 
        standard charity, the page hierarchy requires mission context prior 
        to the organizational chart.
        
        Planned structural injections:
        
        {/* 1. The Executive Summary / Manifesto */}
      {/* <AboutHero /> */}

      {/* 2. The Core Methodology (Mentorship, Research, Action) */}
      {/* <MissionVisionGrid /> */}

      {/* 3. The "Radical Transparency" Module */}
      {/* <OpenLedgerDashboard /> */}
      {/* ======================================================================= */}

      {/* 
        =======================================================================
        CURRENT ACTIVE COMPONENTS
        =======================================================================
      */}
      <TeamSection />
    </main>
  );
}
