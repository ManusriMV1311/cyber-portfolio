"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-8 tracking-[0.2em] uppercase"
        >
          Systems & Security Portfolio
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-[#E6EDF3] mb-6 tracking-tight">
          Manusri <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#8B5CF6]">M V</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-inter max-w-2xl mx-auto mb-10 leading-relaxed">
          Cybersecurity Student <span className="text-slate-600 mx-2">|</span> 
          Exploring <span className="text-[#2DD4BF]">AI</span>, 
          <span className="text-[#8B5CF6]"> Robotics</span> and 
          <span className="text-[#FF6B6B]"> Automation</span> Systems
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-[#2DD4BF] text-[#0B0F1A] rounded-xl font-bold font-poppins transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("arcade")}
            className="group px-8 py-4 bg-transparent border border-slate-700 text-[#E6EDF3] rounded-xl font-bold font-poppins transition-all hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/5 flex items-center gap-2"
          >
            <Play size={18} className="text-[#8B5CF6] fill-[#8B5CF6]" />
            Play Tech Arcade
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 text-slate-400 hover:text-[#E6EDF3] transition-colors font-semibold font-poppins flex items-center gap-2"
          >
            <Mail size={18} />
            Contact
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#2DD4BF] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
