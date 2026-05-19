import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorks";
import FeaturesSection from "@/components/Features";

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col p-2 gap-y-16 md:gap-y-40 md:py-16 md:px-50">
          <Hero/>
          <HowItWorksSection/>
          <FeaturesSection/>
        </div>
    </div>
  );
}
