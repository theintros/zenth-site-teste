import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import OurMethodology from "@/components/about/OurMethodology";
import TeamPhilosophy from "@/components/about/TeamPhilosophy";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <OurStory />
        <CoreValues />
        <OurMethodology />
        <TeamPhilosophy />
      </main>
      <Footer />
    </div>
  );
}
