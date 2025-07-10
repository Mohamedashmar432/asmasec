
import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Background floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-medium">Who We Are</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Defenders in the <span className="text-blue-400">Digital Age</span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
            At Asmasec, we empower solo founders, developers, and small teams with intelligent security agents. As AI enables faster, more sophisticated attacks, we deliver simplified, automated defense tools—so you stay secure without the complexity.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We understand that cybersecurity shouldn't be a luxury reserved for enterprise giants. 
              Every startup deserves military-grade protection, every developer needs intelligent 
              monitoring, and every small business should sleep soundly knowing they're defended.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto" />
                </div>
                <div className="text-sm text-slate-300">AI-Powered</div>
              </div>
              <div className="text-center">
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <Users className="h-8 w-8 text-green-400 mx-auto" />
                </div>
                <div className="text-sm text-slate-300">Small Business Focus</div>
              </div>
              <div className="text-center">
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto" />
                </div>
                <div className="text-sm text-slate-300">Real-time Defense</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">1+</div>
                  <div className="text-xs text-slate-400">Protected Businesses</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                  <div className="text-xs text-slate-400">Threat Detection</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-900 rounded-lg p-3">
                  <span className="text-slate-300">Startups Protected</span>
                  <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-blue-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-slate-900 rounded-lg p-3">
                  <span className="text-slate-300">Developers Secured</span>
                  <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-slate-900 rounded-lg p-3">
                  <span className="text-slate-300">Enterprise Clients</span>
                  <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
