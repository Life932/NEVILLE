import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   DEV NOTE: DATA LAYER & STATE MANAGEMENT
   ----------------------------------------------------------------------------
   1. Dynamic Data: This array should eventually be fetched from your database 
      (e.g., Prisma + PostgreSQL or Sanity CMS).
   2. Number Formatting: Always store financial data as raw numbers (integers), 
      and format them in the UI. This prevents math errors on the backend.
============================================================================ */
const INITIATIVES = [
  {
    id: "clean-water",
    title: "Clean Water for All",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 120000,
    raised: 60000,
    donations: 14,
    image: 1, // Using numbers for placehold.co logic below
  },
  {
    id: "improve-education",
    title: "Improve Education",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 150000,
    raised: 120000,
    donations: 25,
    image: 2,
  },
  {
    id: "end-hunger",
    title: "End Hunger",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 200000,
    raised: 80000,
    donations: 6,
    image: 3,
  },
  {
    id: "reduce-homelessness",
    title: "Reduce Homelessness",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 80000,
    raised: 32000,
    donations: 12,
    image: 4,
  },
  {
    id: "refugee-support",
    title: "Immigration and Refugees",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 220000,
    raised: 90000,
    donations: 24,
    image: 5,
  },
  {
    id: "climate-change",
    title: "Climate Change Mitigation",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 120000,
    raised: 80000,
    donations: 8,
    image: 6,
  },
];

export default function InitiativesGrid() {
  return (
    // DEV NOTE: 'bg-base-100' (white) alternates perfectly with the 'bg-base-200'
    // from the previous section to create clean visual striping on the page.
    <section className="py-16 md:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        {/* ========================================= */}
        {/* SECTION HEADER                            */}
        {/* ========================================= */}
        {/* 
          DEV NOTE (Mobile Layout): 
          Used `flex-col md:flex-row`. On mobile, the title and button stack perfectly 
          and align to the left. On desktop, they spread to opposite sides.
        */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral tracking-tight">
            Latest Causes
          </h2>

          <Link
            href="/initiatives"
            className="btn btn-outline border-neutral text-neutral hover:bg-neutral hover:text-white rounded-full px-8 uppercase tracking-widest text-xs font-bold transition-all"
          >
            More Causes
          </Link>
        </div>

        {/* ========================================= */}
        {/* GRID LAYOUT                               */}
        {/* ========================================= */}
        {/* 
          DEV NOTE (Responsiveness): 
          - Mobile: 1 column
          - Tablet (md): 2 columns
          - Desktop (lg): 3 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {INITIATIVES.map((cause) => {
            // DEV NOTE: Calculate percentage for the progress bar
            const progressPercent = Math.min(
              (cause.raised / cause.goal) * 100,
              100,
            );

            return (
              /* 
                DEV NOTE: THE "NEVILLE" CARD DESIGN
                We use `rounded-[2rem]` for that soft, modern app feel.
                `group` allows us to animate the image when the card is hovered.
              */
              <div
                key={cause.id}
                className="bg-white border border-neutral/5 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative w-full h-60 overflow-hidden bg-neutral/10">
                  <Image
                    // DEV NOTE: Safe placeholder logic. Replace with real images later!
                    src={`https://placehold.co/600x400/333333/666666?text=Cause+${cause.image}`}
                    alt={cause.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* DEV NOTE: Subtle inner shadow to make the image blend into the white card seamlessly */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[2rem]"></div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Title & Description */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-xl font-bold text-neutral mb-3 line-clamp-1">
                      {cause.title}
                    </h3>
                    {/* DEV NOTE: `line-clamp-3` forces descriptions to be exactly 3 lines long, 
                        ensuring all cards are exactly the same height! */}
                    <p className="text-sm text-neutral/70 leading-relaxed line-clamp-3">
                      {cause.desc}
                    </p>
                  </div>

                  {/* PROGRESS BAR & STATS */}
                  <div className="mb-8">
                    {/* 
                      DEV NOTE (DaisyUI): We use the native `<progress>` element. 
                      `progress-primary` colors it with your Trust Blue theme color.
                    */}
                    <progress
                      className="progress progress-primary w-full h-2.5 bg-neutral/10"
                      value={cause.raised}
                      max={cause.goal}
                      aria-label={`${progressPercent}% of goal raised`}
                    ></progress>

                    <div className="flex justify-between items-end mt-4">
                      <div className="space-y-1">
                        {/* DEV NOTE: .toLocaleString() automatically adds commas (e.g., 120,000) */}
                        <p className="text-xs font-extrabold text-neutral tracking-wide">
                          Goal: ৳{cause.goal.toLocaleString()}
                        </p>
                        <p className="text-xs font-semibold text-neutral/60">
                          Raised: ৳{cause.raised.toLocaleString()}
                        </p>
                      </div>

                      <div className="text-right space-y-1">
                        <p className="text-xs font-extrabold text-neutral">
                          {cause.donations.toLocaleString()}
                        </p>
                        <p className="text-[10px] font-semibold text-neutral/50 uppercase tracking-widest">
                          donations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  {/* 
                    DEV NOTE: In Figma, this was pitch black. We use `bg-neutral` (Deep Navy) 
                    so it fits the theme, but hovers into your `primary` (Trust Blue) color!
                  */}
                  <Link
                    href={`/initiatives/${cause.id}`}
                    className="btn bg-neutral text-white hover:bg-primary border-none w-full rounded-full shadow-md hover:shadow-primary/30 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
