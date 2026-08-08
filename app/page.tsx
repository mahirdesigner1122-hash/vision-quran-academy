import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import LearningPath from "@/components/LearningPath";
import Courses from "@/components/Courses";
import TeacherMatch from "@/components/TeacherMatch";
import WorldwideSection from "@/components/WorldwideSection";
import HowItWorks from "@/components/HowItWorks";
import FreeTrialCTA from "@/components/FreeTrialCTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import MobileCTA from "@/components/ui/MobileCTA";

export default function Home() {
  return (
    <main className="pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <LearningPath />
      <Courses />
      <TeacherMatch />
      <WorldwideSection />
      <HowItWorks />
      <FreeTrialCTA />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </main>
  );
}
