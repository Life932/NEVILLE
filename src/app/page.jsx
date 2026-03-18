import Hero from "./ui/home/Hero";
import Navbar from "./ui/Navbar";
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section at the very top */}
      <Hero />

      {/* 
        Later, we will add more sections here! Like:
        <OurMission />
        <RecentCauses />
        <VolunteerCTA />
      */}
    </div>
  );
}
