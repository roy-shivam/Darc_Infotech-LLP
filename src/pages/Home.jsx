import Hero from "../components/Sections/Hero.jsx";
import TrustedBy from "../components/Sections/TrustedBy.jsx";
import WorkshopsSection from "../components/Sections/WorkshopsSection.jsx";
import EcosystemSection from "../components/Sections/EcosystemSection.jsx";
import CoursesSection from "../components/Sections/CoursesSection.jsx";
import TestimonialsSection from "../components/Sections/TestimonialsSection.jsx";
import CtaBand from "../components/Sections/CtaBand.jsx";
import HighlightsSection from "../components/Sections/HighlightsSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WorkshopsSection />
      <EcosystemSection />
      <CoursesSection />
      <TestimonialsSection />
      <CtaBand />
      <HighlightsSection />
    </>
  );
}
