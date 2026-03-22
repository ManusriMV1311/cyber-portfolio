"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeaderLogo() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      onClick={scrollToHero}
      className="flex items-center gap-2 group cursor-pointer"
    >
      <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#0F172A] border border-[#00D4FF]/30 group-hover:border-[#00D4FF] transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.05)] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] overflow-hidden">
        
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200" />
        </div>

        {/* Minimalist Circuit Monogram "MV" */}
        <div className="relative z-10 font-poppins font-black text-lg tracking-tighter flex items-end">
          <span className="text-[#E5E7EB] group-hover:text-[#00D4FF] transition-colors duration-300">M</span>
          <span className="text-[#8B5CF6] group-hover:text-[#F97316] transition-colors duration-300 -ml-0.5">V</span>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#00D4FF]/50 rounded-tl-sm group-hover:border-[#00D4FF] transition-colors" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#8B5CF6]/50 rounded-br-sm group-hover:border-[#8B5CF6] transition-colors" />
      </div>
    </div>
  );
}
