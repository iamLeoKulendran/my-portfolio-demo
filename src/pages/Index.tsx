
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <ContactSection />
    </Layout>
  );
};

export default Index;
