"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/gamificationStore";
import { Play, Forward } from "lucide-react";

export default function ArcadeLanding() {
  const { setSkipGames, setGameStarted } = useStore();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[85vh] text-center relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.1)] mb-4">
          <span className="text-xs font-mono text-[#2DD4BF] tracking-widest uppercase font-bold">
            Interactive Portfolio System
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-poppins font-extrabold tracking-tight text-[#E6EDF3] leading-tight">
          Manusri&apos;s <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#2DD4BF] to-[#8B5CF6] drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]">
            Tech Arcade
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-inter max-w-2xl mt-4 leading-relaxed">
          Explore my journey through cybersecurity, AI, and technology innovation by recovering data fragments.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-md justify-center">
          <button 
            onClick={() => setGameStarted(true)}
            className="group relative flex-1"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2DD4BF] to-[#8B5CF6] rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0B0F1A] border border-[#2DD4BF]/50 rounded-xl leading-none font-bold text-[#2DD4BF] uppercase tracking-wider overflow-hidden">
               <Play size={18} className="fill-[#2DD4BF]/20 group-hover:fill-[#2DD4BF] transition-all" />
               <span>Start Playing</span>
               <div className="absolute inset-0 bg-[#2DD4BF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          </button>

          <button 
            onClick={() => setSkipGames(true)}
            className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-700 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 rounded-xl leading-none font-bold text-slate-400 hover:text-[#E6EDF3] uppercase tracking-wider transition-all"
          >
            <Forward size={18} className="group-hover:translate-x-1 transition-transform" />
            <span>Skip Games</span>
          </button>
        </div>
      </motion.div>

    </div>
  );
}
