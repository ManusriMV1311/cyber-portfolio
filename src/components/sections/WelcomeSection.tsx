"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  const scrollToNext = () => {
    document.getElementById("level-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative w-full pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl flex flex-col items-center"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-sm border border-blue-200">
          Level 0 • Welcome
        </div>
        
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-[#0F172A] mb-6 leading-tight">
          Exploring the Intersection of <span className="text-blue-600">Cybersecurity</span> & <span className="text-cyan-500">AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Hi, I’m Manusri, a cybersecurity student exploring AI, automation, and innovative technology ideas. Step into my digital lab.
        </p>
        
        <button
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-3">
            Start the Journey
            <svg 
              className="w-5 h-5 group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </button>
      </motion.div>
    </div>
  );
}
