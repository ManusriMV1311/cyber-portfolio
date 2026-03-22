"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeaderLogo() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // In actual routing we could use router.push('/') but smooth scroll works for one-page
  };

  return (
    <motion.div 
      className="fixed top-6 left-6 z-50 cursor-pointer group"
      onClick={handleScrollToTop}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-[#0B0F1A] border border-[#2DD4BF]/30 group-hover:border-[#2DD4BF] transition-colors duration-300 shadow-[0_0_15px_rgba(45,212,191,0.1)] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] overflow-hidden">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 via-[#8B5CF6]/10 to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Monogram "MV" built with simple circuit-like geometry */}
        <div className="relative z-10 font-bold text-lg tracking-tighter flex items-end">
          <span className="text-[#E6EDF3] group-hover:text-[#2DD4BF] transition-colors duration-300">M</span>
          <span className="text-[#8B5CF6] group-hover:text-[#FF6B6B] transition-colors duration-300 -ml-0.5">V</span>
        </div>
        
        {/* Corner Circuit Accents */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#2DD4BF]/50 opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#8B5CF6]/50 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
