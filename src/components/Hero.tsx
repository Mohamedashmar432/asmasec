
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Brain, CheckCircle, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-slate-950 md:ml-64">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-sm font-medium">Next-Generation Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">AI-Powered Cyber</span>
                <br />
                <span className="text-blue-400">Defense for the AI Era</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Stop AI attacks before they strike — no signup, no credit card, one service free. 
                Protect your business with enterprise-grade security powered by advanced artificial intelligence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Shield className="mr-2 h-5 w-5" />
                Try for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg font-semibold"
              >
                <Brain className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-slate-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-slate-300">500+ Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-slate-300">Real-time Protection</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
              <div className="bg-slate-950 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Threat Detection Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-400">0</div>
                      <div className="text-xs text-slate-400">Active Threats</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">847</div>
                      <div className="text-xs text-slate-400">Blocked Today</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                      <div className="text-xs text-slate-400">Protection Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">AI Phishing Detection</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Malware Scanning</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Network Monitoring</span>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Security Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-lg p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-300">Advanced Firewall</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 text-center">
                  <Brain className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-300">AI Analysis</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Join hundreds of companies that trust ASMASEC to protect their digital assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-slate-300">Threat Detection Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-green-400 mb-2">&lt;1ms</div>
                <div className="text-slate-300">Average Response Time</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-slate-300">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
