import Image from "next/image";

/* ============================================================================
   DEV NOTE: TEAM DATA ARCHITECTURE
   ----------------------------------------------------------------------------
   By separating the data from the UI, you make it incredibly easy for a 
   non-technical team member to update names or roles later. 
   Future: Fetch this entire object from a CMS (Sanity/Contentful).
============================================================================ */

const CO_FOUNDERS = [
  {
    id: "mehedi",
    name: "Mehedi Hassan",
    role: "Co-Founder",
    title: "Director",
    quote:
      "Finding hope in every kit distributed and every new student who joins our growing Dhaka movement.",
    image: "1",
    // DEV NOTE: Pro Grid positioning for the "Diamond" layout on desktop!
    gridClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    id: "ayman",
    name: "Ayman Abid Adipto",
    role: "Co-Founder",
    title: "Head of Logistics",
    quote:
      "Obsessed with Dhaka's potential and seeing our peers rise to the challenge of serving our neighborhoods.",
    image: "2",
    gridClass: "lg:col-start-1 lg:row-start-2",
  },
  {
    id: "shahrier",
    name: "Shahrier Zaman",
    role: "Co-Founder",
    title: "Head of Finance",
    quote:
      "Believing that local action in our neighborhoods leads to global ripples of meaningful change.",
    image: "3",
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "rehanur",
    name: "Rehanur Rahman",
    role: "Co-Founder",
    title: "Senior Officer, Marketing & Outreach",
    quote:
      "I entertain fellows in serious moments. Dreaming of a new generation.",
    image: "4",
    gridClass: "lg:col-start-2 lg:row-start-3",
  },
];

const DEPARTMENTS = [
  {
    name: "Human Resource",
    members: [
      {
        name: "M.A. Chowdhury Monon",
        role: "Head of Human Resource",
        image: "5",
      },
      { name: "Irfan Aunkon", role: "Senior Officer", image: "6" },
    ],
  },
  {
    name: "Logistics",
    members: [
      { name: "Ayman Abid Adipto", role: "Head of Logistics", image: "7" },
      { name: "MD. Shohanur Rahman", role: "Senior Officer", image: "8" },
    ],
  },
  {
    name: "Finance",
    members: [
      { name: "Shahrier Zaman", role: "Head of Finance", image: "9" },
      { name: "Ahanaf Adil", role: "Senior Officer", image: "10" },
      { name: "Hasib Bin Haroon", role: "Officer", image: "11" },
    ],
  },
  {
    name: "IT",
    members: [
      { name: "Abdullah Ahmad Sadik", role: "Head of IT", image: "12" },
    ],
  },
  {
    name: "Marketing & Outreach",
    members: [
      { name: "Muhammad Farhan Hossain", role: "Head of M&O", image: "13" },
      { name: "Rehanur Rahman", role: "Senior Officer", image: "14" },
      { name: "Nubaid Khan", role: "Senior Officer", image: "15" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="flex flex-col w-full overflow-hidden">
      {/* ================================================================== */}
      {/* PART 1: THE CO-FOUNDERS (Dark Diamond Layout)                      */}
      {/* ================================================================== */}
      {/* DEV NOTE: Using 'bg-neutral' matches your dark grey screenshot. */}
      <div className="bg-neutral text-neutral-content py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
        {/* Background Decorative Text (Like the watermark in your screenshot) */}
        <div className="absolute top-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none">
          <h2 className="text-[10rem] md:text-[15rem] font-black whitespace-nowrap tracking-tighter">
            NEVILLE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
              The Hearts Behind NEVILLE
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-primary/90 mb-6 font-serif italic">
              Meet Our Co-Founders
            </h3>
            <p className="text-sm md:text-base text-neutral-content/70 max-w-lg mx-auto font-medium leading-relaxed">
              From tea-stall chitchats to late night meetings.{" "}
              <br className="hidden md:block" />
              When Vision turned out, Neville came up.
            </p>
          </div>

          {/* DIAMOND GRID LAYOUT */}
          {/* 
            DEV NOTE (Pro Grid Trick): 
            By using a 3-column grid on desktop and assigning specific row/col 
            coordinates in the data array (e.g., `lg:col-start-2`), we easily 
            create that complex "Diamond/Cross" shape without hacky negative margins!
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {CO_FOUNDERS.map((founder) => (
              <div
                key={founder.id}
                className={`bg-base-100 text-neutral rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group ${founder.gridClass}`}
              >
                {/* PROFILE PICTURE */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-lg">
                  <Image
                    src={`https://placehold.co/400x400/e2e8f0/64748b?text=${founder.name.charAt(0)}`}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* NAME & ROLES */}
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1 underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary/80 transition-colors">
                  {founder.name}
                </h4>
                <div className="flex flex-col text-xs font-bold text-primary uppercase tracking-wider mb-4 gap-0.5">
                  <span>{founder.role}</span>
                  <span className="opacity-80">{founder.title}</span>
                </div>

                {/* QUOTE */}
                <p className="text-sm text-neutral/70 leading-relaxed font-medium italic">
                  "{founder.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* PART 2: THE DEPARTMENTS (Light Multi-Card Layout)                  */}
      {/* ================================================================== */}
      {/* DEV NOTE: 'bg-[#D6E4FF]' or 'bg-primary/10' gives it that icy blue/gray soft background from your screenshot */}
      <div className="bg-[#E5EDFF] py-20 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-20 md:space-y-32">
          {DEPARTMENTS.map((dept, index) => (
            <div key={index} className="flex flex-col gap-8 md:gap-12">
              {/* Department Header */}
              <div className="flex flex-col">
                <h3 className="text-sm md:text-base font-medium text-neutral/60 uppercase tracking-widest mb-1">
                  Department Of
                </h3>
                <h2 className="text-4xl md:text-6xl font-black text-neutral tracking-tighter uppercase">
                  {dept.name}
                </h2>
              </div>

              {/* Department Members Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {dept.members.map((member, idx) => (
                  <div
                    key={idx}
                    // DEV NOTE: 'bg-[#93C5FD]' (or similar tailored blue) matches your Figma perfectly
                    className="bg-[#9EB8FF] rounded-[2rem] p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
                  >
                    {/* Avatar */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5 rounded-full overflow-hidden shadow-inner ring-2 ring-white/30 group-hover:ring-white/60 transition-all">
                      <Image
                        src={`https://placehold.co/400x400/cccccc/666666?text=${member.name.charAt(0)}`}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 96px, 112px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <h4 className="text-base md:text-lg font-bold text-neutral mb-1 line-clamp-2 leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-[10px] md:text-xs font-bold text-primary-content/80 text-blue-700 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
