"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSlide } from "@/components/providers/SlideProvider";
import { useStore } from "@/store/gamificationStore";
import { Terminal } from "lucide-react";
import CyberCube from "@/components/ui/CyberCube";

export default function HeroSection() {
  const { markVisited } = useStore();
  const { nextSlide, goToSlide } = useSlide();
  
  useEffect(() => {
    markVisited(0);
  }, [markVisited]);

  const roles = [
    "Cybersecurity Learner",
    "AI Explorer",
    "Automation Thinker",
    "Future Technologist"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
      <CyberCube />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl relative z-20 glass-panel p-10 rounded-2xl border border-[#00f0ff]/20 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[#00f0ff] text-sm mb-6 uppercase tracking-widest border-[#00f0ff]/30">
          <Terminal size={14} /> System Initialized
        </div>
        
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 tracking-tight">
          Hello, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#bc13fe]">Manusri M V</span>
        </h1>
        
        <div className="h-12 mb-10 overflow-hidden relative">
          <motion.div
             key={currentRole}
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -20, opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="text-xl md:text-2xl text-gray-300 font-mono absolute w-full"
          >
            &gt; {roles[currentRole]}<span className="animate-pulse">_</span>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button 
            onClick={() => nextSlide()}
            className="px-8 py-3 rounded-md bg-[#00f0ff] text-black font-bold uppercase tracking-wider hover:box-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Portfolio
          </button>
          <button 
            onClick={() => goToSlide(3)}
            className="px-8 py-3 rounded-md glass-panel text-white font-bold uppercase tracking-wider hover:bg-[#bc13fe]/20 hover:border-[#bc13fe] transition-all duration-300 transform hover:-translate-y-1"
          >
            Enter Cyber Lab
          </button>
        </div>
      </motion.div>
    </div>
  );
}
