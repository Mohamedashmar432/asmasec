
import React, { useState } from 'react';
import { Shield, Home, BarChart3, Wrench, Calendar, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: BarChart3, label: 'Dashboard', href: '#dashboard' },
    { icon: Wrench, label: 'Services', href: '#services' },
    { icon: Calendar, label: 'Book Demo', href: '#demo' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-900/80 backdrop-blur-sm border border-slate-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar Navigation */}
      <nav className={`fixed left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-800 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">ASMASEC</span>
          </div>
          
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
