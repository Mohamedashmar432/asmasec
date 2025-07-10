import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Building, Github, Key, FileText, Eye, BarChart3, Zap, Lock, Brain, Monitor } from 'lucide-react';
import { link } from 'fs';

const Services = () => {
  const serviceCategories = [
    {
      title: "For Developers",
      icon: Github,
      description: "Secure your code and development workflow",
      gradient: "from-blue-500/20 to-cyan-500/20",
      services: [
        {
          name: "GitHub Repo Hardener",
          icon: Github,
          description: "Automatically scan and secure your repositories",
          status: "testing",
          action: "coming soon"
          
        },
        {
          name: "API Key Exposure",
          icon: Key,
          description: "Monitor for exposed API keys in your codebase",
          status: "active",
          action: "use now",
          link: "https://tally.so/r/w70M89"

        },
        {
          name: "Security Policy Generator",
          icon: FileText,
          description: "Generate security policies for your projects",
          status: "coming-soon",
          action: "Coming Soon"
        }
      ]
    },
    {
      title: "For Solo Startup Founders",
      icon: Users,
      description: "Comprehensive security for your growing business",
      gradient: "from-purple-500/20 to-pink-500/20",
      services: [
        {
          name: "Credential Leak Watcher",
          icon: Eye,
          description: "Monitor for leaked credentials across the web",
          status: "active",
          action: "use now",
          link: "https://tally.so/r/3l1W8W" 
        },
        {
          name: "SSL Monitor",
          icon: BarChart3,
          description: "Monitor SSL certificates and renewals",
          status: "coming-soon",
          action: "Coming Soon"
        },
        {
          name: "Threat Aggregator",
          icon: Zap,
          description: "Centralized threat intelligence dashboard",
          status: "coming-soon",
          action: "Coming Soon"
        }
      ]
    },
    {
      title: "For Security researchers & Individuals",
      icon: Building,
      description: "Enterprise-grade security made accessible",
      gradient: "from-green-500/20 to-teal-500/20",
      services: [
        {
          name: "Vulnerability Exploit Tracker Agent",
          icon: Lock,
          description: "Monitor SSL certificates and renewals",
          status: "coming-soon",
          action: "Coming Soon"
        },
        {
          name: "Bug Bountry reconnaisance agent",
          icon: Brain,
          description: "automatic target information gathering",
          status: "coming-soon",
          action: "Coming Soon"
        },
        {
          name: "IOC Monitor",
          icon: Monitor,
          description: "Indicators of Compromise monitoring",
          status: "coming-soon",
          action: "Coming Soon"
        }
      ]
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.status === 'active' && service.link) {
      window.open(service.link, '_self','noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            AI-Powered Security <span className="text-blue-400">Agents</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Choose from our specialized security agents designed for different needs and use cases
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${category.gradient} p-0.5 rounded-2xl hover:scale-105 transition-all duration-300`}>
                <div className="bg-slate-900 rounded-2xl p-6 h-full">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <div className="bg-slate-800 rounded-lg p-4 w-16 h-16 mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-blue-400 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </div>

                  {/* Services List */}
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <service.icon className="h-5 w-5 text-blue-400" />
                            <h4 className="font-semibold text-white text-sm">{service.name}</h4>
                          </div>
                          <Badge 
                            variant={service.status === 'active' ? 'default' : 'secondary'}
                            className={service.status === 'active' ? 'bg-green-500 text-white' : 'bg-slate-600 text-slate-300'}
                          >
                            {service.status === 'active' ? '✅ Active' : '🕓 Coming Soon'}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">{service.description}</p>
                        <Button 
                          size="sm" 
                          variant={service.status === 'active' ? 'default' : 'outline'}
                          disabled={service.status === 'coming-soon'}
                          className="w-full"
                          onClick={() => handleServiceClick(service)}
                        >
                          {service.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
