import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";

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
