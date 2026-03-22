"use client";

import React from "react";
import { useSlide } from "@/components/providers/SlideProvider";
import AIAssistantWidget from "@/components/ui/AIAssistantWidget";
import { ArrowLeft, Beaker } from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { currentSlide, goToSlide } = useSlide();

  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden text-white font-inter bg-[#05050f]">
      {/* Soft Lab Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${(-currentSlide * 5)}px)`,
          transition: "transform 0.8s ease-out"
        }}
      />
      
      {/* Subtle background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      {/* Top Navigation Bar / Breadcrumb */}
      <header className="w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="p-2 lab-panel rounded-lg">
            <Beaker size={20} className="text-blue-400" />
          </div>
          <div>
            <h1 className="font-orbitron font-semibold text-lg text-white tracking-widest uppercase">
              Digital Innovation Lab
            </h1>
            <p className="text-xs text-blue-300 mt-1 tracking-widest uppercase opacity-70">
              M.V. Research Station
            </p>
          </div>
        </div>
        
        {/* Dynamic Back Button if not on System Map */}
        <div className="pointer-events-auto">
          {currentSlide !== 0 && (
            <button 
              onClick={() => goToSlide(0)}
              className="group flex items-center gap-2 px-4 py-2 lab-panel hover:bg-white/5 transition-all text-sm tracking-widest uppercase border-blue-400/30"
            >
              <ArrowLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">System Map</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative w-full flex items-center justify-center p-6 md:p-12 z-10">
        {children}
      </main>
      
      <AIAssistantWidget />

      {/* Minimal Lab Metrics (Decorative) */}
      <div className="absolute bottom-4 left-6 text-[10px] font-mono text-blue-300/40 tracking-widest uppercase pointer-events-none z-50 flex gap-6">
        <span>STATUS: NOMINAL</span>
        <span>UPTIME: 99.9%</span>
        <span>SYS.VER: 2.1.0</span>
      </div>
    </div>
  );
}
