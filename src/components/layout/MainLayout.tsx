"use client";

import React from "react";
import AIAssistantWidget from "@/components/ui/AIAssistantWidget";
import JourneyProgress from "@/components/layout/JourneyProgress";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-[#F8FAFC] text-[#0F172A] font-inter">
      {/* Soft Lab Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(#3B82F6 1px, transparent 1px),
            linear-gradient(90deg, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Subtle background glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none z-0" />

      {/* Sticky Journey Progress */}
      <JourneyProgress />

      {/* Main Content Area */}
      <main className="flex-1 relative w-full flex flex-col items-center z-10 w-full max-w-7xl mx-auto pb-24">
        {children}
      </main>
      
      <AIAssistantWidget />
    </div>
  );
}
