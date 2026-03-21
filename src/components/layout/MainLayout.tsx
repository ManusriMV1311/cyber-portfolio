"use client";

import React from "react";
import { useSlide } from "@/components/providers/SlideProvider";
import AIAssistantWidget from "@/components/ui/AIAssistantWidget";
import { motion } from "framer-motion";
import { Terminal, User, Code, Shield, BrainCircuit, Flag, Compass, Mail, Box } from "lucide-react";

const NAV_ITEMS = [
  { id: 0, label: "Mission Control", icon: <Terminal size={18} /> },
  { id: 1, label: "About Me", icon: <User size={18} /> },
  { id: 2, label: "Skills Matrix", icon: <Code size={18} /> },
  { id: 3, label: "Innovation Lab", icon: <Box size={18} /> },
  { id: 4, label: "Cyber Playground", icon: <Shield size={18} /> },
  { id: 5, label: "AI Research", icon: <BrainCircuit size={18} /> },
  { id: 6, label: "Learning Journey", icon: <Flag size={18} /> },
  { id: 7, label: "Resume Terminal", icon: <Terminal size={18} /> },
  { id: 8, label: "Contact", icon: <Mail size={18} /> },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { currentSlide, goToSlide } = useSlide();

  return (
    <div className="flex h-screen w-full relative overflow-hidden text-white font-inter bg-[#0a0a1a]">
      {/* Dynamic Cyber Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: `translateY(${(-currentSlide * 10)}px)`,
          transition: "transform 0.8s ease-out"
        }}
      />

      {/* Left Navigation Panel */}
      <nav className="z-50 w-64 glass-panel border-r border-[#00f0ff]/20 hidden md:flex flex-col h-full bg-[#0a0a1a]/80 py-8 relative">
        <div className="px-6 mb-10">
          <h1 className="font-orbitron font-bold text-xl text-[#00f0ff] tracking-wider text-glow flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#bc13fe] animate-pulse"></span>
            SYS.ADMIN
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Manusri M V</p>
        </div>

        <ul className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goToSlide(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                  currentSlide === item.id 
                    ? "bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 box-glow" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={currentSlide === item.id ? "text-[#bc13fe]" : "text-gray-500"}>
                  {item.icon}
                </span>
                <span className="text-sm tracking-wide font-medium">{item.label}</span>
                {currentSlide === item.id && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute right-0 w-1 h-8 bg-[#00f0ff] rounded-l-md"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="px-6 mt-auto">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent mb-4" />
          <div className="text-[10px] text-gray-500 font-mono text-center">
            CONNECTION_SECURE // {new Date().getFullYear()}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative h-full w-full">
        {children}
      </main>
      
      <AIAssistantWidget />

      {/* Decorative corners */}
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff]/40 pointer-events-none z-50"></div>
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00f0ff]/40 pointer-events-none z-50"></div>
    </div>
  );
}
