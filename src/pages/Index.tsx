import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import AppointmentSection from "@/components/home/AppointmentSection";
import ResultsShowcase from "@/components/home/ResultsShowcase";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import OfficeHours from "@/components/home/OfficeHours";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AppointmentSection />
      <ServicesGrid />
      <ResultsShowcase />
      <TeamSection />
      <TestimonialSection />
      <OfficeHours />
    </Layout>
  );
};

export default Index;
