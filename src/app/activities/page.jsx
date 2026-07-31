import ActivitiesClient from "./ActivitiesClient";
import { allActivities } from "@/data/activities";

export const metadata = {
  title: "Activities | Neville Youth Initiative",
  description: "Explore our events, publications, and initiatives.",
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <ActivitiesClient initialActivities={allActivities} />
    </div>
  );
}
