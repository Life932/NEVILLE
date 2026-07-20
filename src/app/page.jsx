import Hero2 from "./ui/home/Hero2";
import InfoSection from "./ui/home/InfoSection";
import ImpactGrid from "./ui/home/ImpactGrid";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section at the very top */}
      <Hero2 />
      <InfoSection />
      <ImpactGrid />

      {/* 
        Later, we will add more sections here! Like:
        <OurMission />
        <RecentCauses />
        <VolunteerCTA />
      */}
    </div>
  );
}
