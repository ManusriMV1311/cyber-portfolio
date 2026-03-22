"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function MissionComplete() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[40vh] text-center relative z-10 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="inline-block p-4 rounded-full border border-[#2DD4BF]/50 bg-[#2DD4BF]/10 backdrop-blur-md shadow-[0_0_25px_rgba(45,212,191,0.2)] mb-4">
          <CheckCircle2 size={48} className="text-[#2DD4BF]" />
        </div>

        <h1 className="text-4xl md:text-6xl font-poppins font-extrabold tracking-tight text-[#E6EDF3] leading-tight">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#8B5CF6] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">Online</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-inter max-w-2xl mt-2 leading-relaxed">
          All data fragments recovered successfully. Full portfolio access granted.
        </p>

        <div className="mt-8 relative w-full h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/50 to-transparent shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
      </motion.div>
    </div>
  );
}
