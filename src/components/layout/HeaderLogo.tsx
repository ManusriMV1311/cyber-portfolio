"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#0F172A] border border-[#2DD4BF]/30 group-hover:border-[#2DD4BF] transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0.05)] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] overflow-hidden">
        
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Minimalist Monogram "MV" */}
        <div className="relative z-10 font-poppins font-bold text-base tracking-tighter flex items-end">
          <span className="text-[#E6EDF3] group-hover:text-[#2DD4BF] transition-colors duration-300">M</span>
          <span className="text-[#8B5CF6] group-hover:text-[#FF6B6B] transition-colors duration-300 -ml-0.5">V</span>
        </div>
      </div>
    </div>
  );
}
