
import React from 'react';
import { Cpu } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

export const HighTechLoader: React.FC<LoadingProps> = ({ message = "Fetching Intelligence Data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-6 animate-fade-in-scale">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Pulsing Outer Rings */}
        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping"></div>
        <div className="absolute inset-4 border border-blue-500/40 rounded-full animate-logo-pulse"></div>
        
        {/* Core Icon */}
        <div className="relative z-10 bg-blue-600 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,112,243,0.5)]">
          <Cpu className="text-white w-8 h-8 animate-pulse" />
        </div>
        
        {/* High-Tech Scanner Line */}
        <div className="absolute -inset-2 overflow-hidden pointer-events-none rounded-full">
          <div className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_10px_#0070f3] opacity-0 animate-scanner"></div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-2">Analyzing Orbit</div>
        <div className="text-white font-bold text-sm tracking-wide">{message}</div>
      </div>
      
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
        ))}
      </div>
    </div>
  );
};
