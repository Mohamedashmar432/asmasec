
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Brain } from 'lucide-react';
import PhishingIcon from './PhishingIcon';
import AIAttackIcon from './AIAttackIcon';
import LeakedCredentialsIcon from './LeakedCredentialsIcon';
import FloatingShield from './FloatingShield';
import FloatingBrain from './FloatingBrain';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-teal-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-30">
          <PhishingIcon />
        </div>
        <div className="absolute top-40 right-20 opacity-40">
          <AIAttackIcon />
        </div>
        <div className="absolute bottom-32 left-20 opacity-35">
          <LeakedCredentialsIcon />
        </div>
        <div className="absolute top-32 right-40 opacity-25">
          <PhishingIcon />
        </div>
        <div className="absolute bottom-20 right-32 opacity-30">
          <AIAttackIcon />
        </div>
      </div>

      {/* Floating Graphics */}
      <FloatingShield />
      <FloatingBrain />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent mb-4">
              ASMASEC
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full glow-blue"></div>
          </div>

          {/* Hero Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent text-glow">
              AI-Powered Cyber Defense
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              for the AI Era
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop AI attacks before they strike — <span className="text-teal-400 font-semibold">no signup, no credit card, one service free.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 glow-blue hover:glow-blue transform hover:scale-105"
            >
              <Shield className="mr-2 h-5 w-5" />
              Try for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 glow-teal hover:glow-teal transform hover:scale-105"
            >
              <Brain className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
              <div className="text-3xl font-bold text-teal-400 mb-2">&lt;1ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
