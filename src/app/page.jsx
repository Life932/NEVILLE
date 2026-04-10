import Hero from "./ui/home/Hero";
import Navbar from "./ui/Navbar";
import InfoSection from "./ui/home/InfoSection";
import ImpactGrid from "./ui/home/ImpactGrid";
import InitiativesGrid from "./ui/home/InitiativesGrid";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section at the very top */}
      <Hero />
      <InfoSection />
      <ImpactGrid />
      <InitiativesGrid />

      {/* 
        Later, we will add more sections here! Like:
        <OurMission />
        <RecentCauses />
        <VolunteerCTA />
      */}
    </div>
  );
}
