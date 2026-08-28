import Image from "next/image";
import Link from "next/link";

/* ============================================================================
   NEVILLE INITIATIVES GRID — SEMANTIC DESIGN SYSTEM
   ============================================================================ */
const INITIATIVES = [
  {
    id: "clean-water",
    title: "Clean Water for All",
    desc: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida.",
    goal: 120000,
    raised: 60000,
    donations: 14,
    image: 1,
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
    <section className="py-16 md:py-24 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Latest Causes
          </h2>

          <Link
            href="/initiatives"
            className="border border-border text-foreground hover:bg-muted hover:border-primary px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold transition-all"
          >
            More Causes
          </Link>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {INITIATIVES.map((cause) => {
            const progressPercent = Math.min(
              (cause.raised / cause.goal) * 100,
              100
            );

            return (
              <div
                key={cause.id}
                className="bg-card text-card-foreground border border-border rounded-2xl md:rounded-[2rem] shadow-neo-sm hover:shadow-neo-md transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative w-full h-60 overflow-hidden bg-muted">
                  <Image
                    src={`https://placehold.co/600x400/333333/666666?text=Cause+${cause.image}`}
                    alt={cause.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-border/20 rounded-t-2xl md:rounded-t-[2rem]"></div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Title & Description */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {cause.desc}
                    </p>
                  </div>

                  {/* PROGRESS BAR & STATS */}
                  <div className="mb-8">
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <div className="space-y-1">
                        <p className="text-xs font-extrabold text-foreground tracking-wide">
                          Goal: ৳{cause.goal.toLocaleString()}
                        </p>
                        <p className="text-xs font-semibold text-muted-foreground">
                          Raised: ৳{cause.raised.toLocaleString()}
                        </p>
                      </div>

                      <div className="text-right space-y-1">
                        <p className="text-xs font-extrabold text-foreground">
                          {cause.donations.toLocaleString()}
                        </p>
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                          donations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  <Link
                    href={`/initiatives/${cause.id}`}
                    className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-center hover:opacity-90 active:scale-95 shadow-neo-sm transition-all duration-200"
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
