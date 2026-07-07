import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { Treatments } from "@/components/sections/Treatments";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { Gallery } from "@/components/sections/Gallery";
import { EducationalReels } from "@/components/sections/EducationalReels";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <Treatments />
      <WhyChooseUs />
      <DoctorProfile />
      <PatientJourney />
      <Gallery />
      <EducationalReels />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
