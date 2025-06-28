
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Dashboard from "@/components/Dashboard";
import Pricing from "@/components/Pricing";
import BookDemo from "@/components/BookDemo";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Dashboard />
        <Pricing />
        <BookDemo />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
