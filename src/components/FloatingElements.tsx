
import React from 'react';
import { Shield, Brain, Lock } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Shield */}
      <div className="absolute top-1/4 left-10 animate-pulse">
        <div className="bg-blue-500/10 rounded-full p-6 blur-sm">
          <Shield className="h-12 w-12 text-blue-400/30" />
        </div>
      </div>

      {/* Floating Brain */}
      <div className="absolute top-1/3 right-20 animate-pulse delay-1000">
        <div className="bg-purple-500/10 rounded-full p-6 blur-sm">
          <Brain className="h-10 w-10 text-purple-400/30" />
        </div>
      </div>

      {/* Floating Lock */}
      <div className="absolute bottom-1/4 left-1/4 animate-pulse delay-2000">
        <div className="bg-green-500/10 rounded-full p-6 blur-sm">
          <Lock className="h-8 w-8 text-green-400/30" />
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1500"></div>
      <div className="absolute top-3/4 left-1/2 w-12 h-12 bg-teal-500/5 rounded-full blur-xl animate-pulse delay-3000"></div>
    </div>
  );
};

export default FloatingElements;
