import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedIn from "@/components/home/FeaturedIn";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesGrid from "@/components/home/ServicesGrid";
import MissionStatement from "@/components/home/MissionStatement";
import Differentiators from "@/components/home/Differentiators";
import SocialProof from "@/components/home/SocialProof";
import PricingCards from "@/components/home/PricingCards";
import FAQAccordion from "@/components/home/FAQAccordion";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedIn />
        <ProblemSolution />
        <HowItWorks />
        <ServicesGrid />
        <TestimonialsCarousel />
        <MissionStatement />
        <Differentiators />
        <SocialProof />
        <PricingCards />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}