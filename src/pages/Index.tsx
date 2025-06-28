
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
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
    <SidebarProvider>
      <div className="min-h-screen bg-slate-950 relative w-full flex">
        <FloatingElements />
        <Navigation />
        
        <SidebarInset className="flex-1">
          {/* Sidebar trigger button - always visible */}
          <header className="h-12 flex items-center border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-40">
            <SidebarTrigger className="ml-4 text-white hover:bg-slate-800" />
          </header>
          
          <main className="flex-1">
            <section id="home">
              <Hero />
            </section>
            <WhoWeAre />
            <section id="services">
              <Services />
            </section>
            <section id="dashboard">
              <Dashboard />
            </section>
            <Pricing />
            <section id="demo">
              <BookDemo />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
