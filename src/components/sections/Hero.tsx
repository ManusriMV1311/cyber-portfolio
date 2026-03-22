"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Aurora Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono font-bold mb-8 tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(0,212,255,0.1)]"
        >
          Securing the Future of Automation
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-poppins font-black text-[#E5E7EB] mb-6 tracking-tighter">
          Manusri <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#F97316]">M V</span>
        </h1>

        <div className="flex flex-col items-center gap-2 mb-10">
          <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-bold">
            Cybersecurity Engineering Student
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-slate-500 font-inter text-lg">
            <span>Exploring <span className="text-[#00D4FF]">AI</span></span>
            <span className="hidden md:inline">•</span>
            <span><span className="text-[#8B5CF6]">Automation</span></span>
            <span className="hidden md:inline">•</span>
            <span>Secure <span className="text-[#F97316]">Technology Systems</span></span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-400 font-inter max-w-2xl mx-auto mb-12 leading-relaxed">
          Building ideas that combine <span className="text-[#E5E7EB] font-medium italic">cybersecurity thinking</span> with <span className="text-[#E5E7EB] font-medium">automation</span> and innovative technology concepts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0F1F] rounded-2xl font-black font-poppins transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("arcade")}
            className="group px-10 py-5 bg-[#111827] border border-slate-800 text-[#E5E7EB] rounded-2xl font-bold font-poppins transition-all hover:border-[#00D4FF]/50 hover:bg-[#111827]/80 flex items-center gap-3"
          >
            <Play size={20} className="text-[#00D4FF] fill-[#00D4FF]" />
            Explore Tech Arcade
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-6 py-4 text-slate-500 hover:text-[#00D4FF] transition-colors font-bold font-mono text-sm tracking-widest uppercase flex items-center gap-2"
          >
            <Mail size={18} />
            Contact
          </button>
        </div>
      </motion.div>

      {/* Grid Pattern in bottom corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#00D4FF_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
    </section>
  );
}
