
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-950"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have questions about our security solutions? We're here to help you secure your digital assets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-slate-300">Name</Label>
                  <Input 
                    id="contact-name" 
                    placeholder="Your name"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-slate-300">Email</Label>
                  <Input 
                    id="contact-email" 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-slate-300">Message</Label>
                <Textarea 
                  id="contact-message" 
                  placeholder="Tell us more about your inquiry..."
                  className="bg-slate-800 border-slate-700 text-white min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect with us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <p className="text-slate-400">contact@asmasec.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-slate-400">We typically respond within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 text-blue-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#demo" className="block text-slate-400 hover:text-white transition-colors duration-200">
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
