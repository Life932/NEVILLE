import Hero from "./ui/home/Hero";
import Navbar from "./ui/Navbar";
import InfoBLock from "./ui/home/InfoBlock";
import ImpactGrid from "./ui/home/ImpactGrid";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section at the very top */}
      <Hero />
      <InfoBLock />
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
