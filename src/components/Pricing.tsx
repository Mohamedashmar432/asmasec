
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out our AI agents",
      icon: Zap,
      features: [
        "Use any 1 AI agent",
        "No signup required",
        "Basic threat detection",
        "Community support",
        "Monthly reports"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-slate-600 to-slate-700"
    },
    {
      name: "Solo Pack",
      price: "$29",
      period: "per month",
      description: "Ideal for individual developers and small startups",
      icon: Star,
      features: [
        "Choose 3 AI agents",
        "Full dashboard access",
        "Real-time alerts",
        "Email notifications",
        "Weekly detailed reports",
        "Priority support"
      ],
      cta: "Book a Demo",
      popular: true,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Enterprise Bundle",
      price: "Custom",
      period: "contact us",
      description: "Complete security suite for growing businesses",
      icon: Crown,
      features: [
        "All AI agents included",
        "Advanced reporting",
        "Slack integration",
        "Email support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      cta: "Contact for Access",
      popular: false,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Defense Level</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From free protection to enterprise-grade security, we have a plan that fits your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${plan.gradient} p-0.5 rounded-2xl group-hover:scale-105 transition-all duration-300`}>
                <div className="bg-slate-900 rounded-2xl p-8 h-full">
                  <div className="text-center mb-8">
                    <div className="bg-slate-800 rounded-lg p-4 w-16 h-16 mx-auto mb-4">
                      <plan.icon className="h-8 w-8 text-blue-400 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-slate-400 ml-2">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 hover:bg-slate-600'}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
