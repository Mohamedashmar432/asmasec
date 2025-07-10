
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Clock, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const alerts = [
    {
      service: "GitHub Repo Hardener",
      time: "2 minutes ago",
      severity: "high",
      recommendation: "Outdated dependency found: lodash@4.17.15. Recommend upgrading to 4.17.21.",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      service: "SSL Monitor",
      time: "15 minutes ago",
      severity: "medium",
      recommendation: "Certificate for example.com expires in 7 days. Renewal suggested.",
      icon: Clock,
      color: "text-yellow-400"
    },
    {
      service: "API Key Exposure",
      time: "1 hour ago",
      severity: "low",
      recommendation: "No keys found in recent commits. Repositories appear secure.",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      service: "Threat Aggregator",
      time: "3 hours ago",
      severity: "medium",
      recommendation: "Suspicious phishing indicators in open threat feeds relevant to your tech stack.",
      icon: Shield,
      color: "text-blue-400"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">User Dashboard</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Real-Time Insights from Your Active  <span className="text-blue-400">Security Agents</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Get smart alerts and guided recommendations from your currently enabled AI agents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Alerts</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <alert.icon className={`h-5 w-5 ${alert.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{alert.service}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={`border ${getSeverityColor(alert.severity)}`}
                          >
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-slate-400">{alert.time}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {alert.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">2</div>
                  <div className="text-xs text-slate-400">High Priority</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">3</div>
                  <div className="text-xs text-slate-400">Medium Priority</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">12</div>
                  <div className="text-xs text-slate-400">Resolved Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
