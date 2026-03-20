import Hero from "./ui/home/Hero";
import Navbar from "./ui/Navbar";
import InfoBLock from "./ui/home/InfoBlock";
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section at the very top */}
      <Hero />
      <InfoBLock />

      {/* 
        Later, we will add more sections here! Like:
        <OurMission />
        <RecentCauses />
        <VolunteerCTA />
      */}
    </div>
  );
}
