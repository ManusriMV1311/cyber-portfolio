"use client";

import React from "react";
import AIAssistantWidget from "@/components/ui/AIAssistantWidget";
import JourneyProgress from "@/components/layout/JourneyProgress";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-[#0B0F1A] text-[#E6EDF3] font-inter overflow-x-hidden">
      
      {/* Futuristic Grid Background (Dark Theme) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `
            linear-gradient(#2DD4BF 1px, transparent 1px),
            linear-gradient(90deg, #2DD4BF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Aurora Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#2DD4BF]/10 blur-[150px] pointer-events-none z-0" />

      {/* Sticky Journey Progress (contains the logo) */}
      <JourneyProgress />

      {/* Main Content Area */}
      <main className="flex-1 relative w-full flex flex-col items-center z-10 max-w-7xl mx-auto pb-24 px-4 sm:px-6">
        {children}
      </main>
      
      <AIAssistantWidget />
    </div>
  );
}

