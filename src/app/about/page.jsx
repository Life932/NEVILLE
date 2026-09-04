import { AboutHero } from "@/components/about/AboutHero";
import { AboutTeamShowcase } from "@/components/about/AboutTeamShowcase";
import { AboutBriefSection } from "@/components/about/about-brief";
import { AboutHistorySection } from "@/components/about/about-history";
import { WhoParticipatesSection } from "@/components/about/who-participates";
import { WhyNevilleImportant } from "@/components/about/WhyNevilleImportant";
import { HowNevilleWorks } from "@/components/about/HowNevilleWorks";
import { AboutStrategicFramework } from "@/components/about/AboutStrategicFramework";
import { CommonGoalBanner } from "@/components/about/CommonGoalBanner";

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
       images: [{ url: "/og-team-image.jpg", width: 1200, height: 630 }],
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
      - `bg-background`: Inherits the primary background from the global theme.
    */
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      {/* 1. The Executive Summary / Manifesto */}
      <AboutHero />

      {/* 2. Core Mission & Brief Purpose */}
      <AboutBriefSection />

      {/* 3. History & Institutional Framework */}
      <AboutHistorySection />

      {/* 4. Leadership: Interactive Team Showcase ("Leading the Change") */}
      <AboutTeamShowcase />

      {/* 5. Ecosystem Grid: Who Participates */}
      <WhoParticipatesSection />

      {/* 6. Strategic Pillars: Why is NEVILLE Important? */}
      <WhyNevilleImportant />

      {/* 7. Operational Blueprint: How Does NEVILLE Work? */}
      <HowNevilleWorks />

      {/* 8. Strategic Framework & Impact Matrix */}
      <AboutStrategicFramework />

      {/* 9. North-Star Mandate: Common Goal Manifesto */}
      <CommonGoalBanner />
    </main>
  );
}
