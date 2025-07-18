
import React from 'react';
import { Shield, Home, BarChart3, Wrench, Calendar, Mail } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';

const Navigation = () => {
  const { state } = useSidebar();

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: BarChart3, label: 'Dashboard', href: '#dashboard' },
    { icon: Wrench, label: 'Services', href: '#services' },
    { icon: Calendar, label: 'Book Demo', href: '#demo' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sidebar className="bg-slate-900/95 backdrop-blur-sm border-r border-slate-800">
      <SidebarHeader className="p-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-blue-500 flex-shrink-0" />
          {state === 'expanded' && (
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide">ASMASEC</span>
              <span className="text-xs text-slate-400">AI Cyber Defense</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 px-2 py-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    onClick={() => handleNavClick(item.href)}
                    className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 px-3 py-2"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Navigation;
