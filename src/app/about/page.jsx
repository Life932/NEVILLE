import TeamSection from "../ui/about/TeamSection.jsx";

/* ============================================================================
   DEV NOTE: PAGE METADATA (SEO)
   ----------------------------------------------------------------------------
   Even though the page code is tiny, always keep your metadata here so 
   when someone shares the "About Us" link on WhatsApp or Facebook, it 
   generates a beautiful preview card!
============================================================================ */
export const metadata = {
  title: "About Us | NEVILLE - A Youth Led Initiative",
  description:
    "Meet the Founders and Department Leaders driving NEVILLE's mission in Dhaka.",
};

export default function AboutPage() {
  return (
    // DEV NOTE: 'min-h-screen' ensures the page is always at least the height of the monitor,
    // pushing your Footer neatly to the bottom even if the content is short.
    <main className="min-h-screen bg-base-100 flex flex-col w-full overflow-hidden">
      {/* 
        ========================================= 
        THE TEAM COMPONENT
        ========================================= 
        Because we handled all the complex logic, grids, and styling inside 
        TeamSection.jsx, we just drop it in here like a Lego brick!
      */}
      <TeamSection />
    </main>
  );
}
