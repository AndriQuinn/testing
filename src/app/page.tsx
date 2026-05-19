import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import HowItWorksSection from "@/components/HowItWorks";
import FeaturesSection from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col p-2 gap-y-16 md:gap-y-30 md:py-16 md:px-50">
          <Hero/>
          <StatCard/>
          <HowItWorksSection/>
          <FeaturesSection/>
          <CTASection/>
        </div>
        <Footer/>
    </div>
  );
}
