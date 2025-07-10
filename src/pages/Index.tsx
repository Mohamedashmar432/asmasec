
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
          {/* Enhanced header with better styling */}
          <header className="h-14 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm sticky top-0 z-40 px-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="text-white hover:bg-slate-800 transition-colors" />
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-white">Asma Sec</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
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
