
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const BookDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <section id="demo" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">Book a Demo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See Asmasec in <span className="text-blue-400">Action</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Schedule a personalized demo and discover how our AI agents can protect your business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-300">Company (Optional)</Label>
                <Input 
                  id="company" 
                  placeholder="Enter your company name"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your security needs and challenges..."
                  className="bg-slate-800 border-slate-700 text-white min-h-[120px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-300">Preferred Date</Label>
                  <div className="relative">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-slate-800 border-slate-700 text-white"
                      onClick={() => setShowCalendar(!showCalendar)}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? date.toDateString() : "Pick a date"}
                    </Button>
                    {showCalendar && (
                      <div className="absolute top-full mt-2 z-10 bg-slate-800 border border-slate-700 rounded-lg p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate);
                            setShowCalendar(false);
                          }}
                          className="text-white"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Preferred Time</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        <Clock className="mr-1 h-3 w-3" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule Demo
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
