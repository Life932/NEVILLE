/* ============================================================================
   NEVILLE ECOSYSTEM PARTICIPANTS DATA
   ----------------------------------------------------------------------------
   Decoupled data structure representing the 6 primary stakeholder groups
   participating in the NEVILLE youth initiative ecosystem across Bangladesh.
   Prepared for Headless CMS (Sanity.io GROQ queries) integration.
   Includes alternating horizontal column span distribution (Wide vs Compact).
============================================================================ */

export const participantsData = [
  {
    id: "olympiad-laureates",
    title: "Olympiad Laureates & Scholars",
    icon: "Trophy",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "Olympiad Laureates and Scholars celebrating academic excellence",
    span: "wide", // md:col-span-7 (Long horizontally)
  },
  {
    id: "peer-mentors",
    title: "Youth Peer Mentors & Instructors",
    icon: "GraduationCap",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    alt: "Youth peer mentors conducting collaborative workshop and teaching",
    span: "compact", // md:col-span-5 (Short horizontally)
  },
  {
    id: "student-researchers",
    title: "Student Researchers & Scientists",
    icon: "Atom",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    alt: "Student researchers conducting STEM laboratory research",
    span: "compact", // md:col-span-5 (Short horizontally)
  },
  {
    id: "grassroots-organizers",
    title: "Grassroots Organizers & Volunteers",
    icon: "HeartHandshake",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
    alt: "Grassroots organizers and volunteers working together for community impact",
    span: "wide", // md:col-span-7 (Long horizontally)
  },
  {
    id: "institutional-partners",
    title: "Institutional Partners & Sponsors",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    alt: "Institutional partners and sponsors at an official summit summit hall",
    span: "wide", // md:col-span-7 (Long horizontally)
  },
  {
    id: "observers-media",
    title: "Independent Observers & Media",
    icon: "Camera",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    alt: "Independent observers and broadcast media press conference",
    span: "compact", // md:col-span-5 (Short horizontally)
  },
];
