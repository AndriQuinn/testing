import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col p-2 gap-y-16 md:gap-y-40 md:py-16 md:px-50">
          <Hero/>
          <HowItWorksSection/>
        </div>
    </div>
  );
}
