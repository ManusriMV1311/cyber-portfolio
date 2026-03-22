"use client";

import { motion } from "framer-motion";
import { FlaskConical, Binary, Fingerprint, ShieldAlert, ArrowRight } from "lucide-react";
import { useState } from "react";

const experiments = [
  {
    id: "exp-01",
    title: "Security Logic Demo",
    type: "Interactive Tool",
    icon: <Fingerprint size={24} className="text-[#FF6B6B]" />,
    desc: "A demonstration of cryptographic logic patterns and digital signature verification processes.",
    color: "#FF6B6B"
  },
  {
    id: "exp-02",
    title: "SOC Basic Monitor",
    type: "Automation Study",
    icon: <Binary size={24} className="text-[#2DD4BF]" />,
    desc: "A conceptual dashboard showing real-time log analysis and threat detection heuristics.",
    color: "#2DD4BF"
  },
  {
    id: "exp-03",
    title: "Vulnerability Scanner",
    type: "Technical Exploration",
    icon: <ShieldAlert size={24} className="text-[#8B5CF6]" />,
    desc: "Exploring automated identification of common misconfigurations in specialized edge networks.",
    color: "#8B5CF6"
  }
];

export default function TechExperiments() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="experiments" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          RnD Laboratory
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-6">
          Technical <span className="text-[#2DD4BF]">Experiments</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          Experimental prototypes and technical explorations focused on cybersecurity, automation, and system integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiments.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => setHovered(exp.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative bg-[#0B0F1A] border border-slate-800 rounded-3xl p-8 hover:border-[#2DD4BF]/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            {/* Visual Background Decoration */}
            <div 
              className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 transition-opacity duration-500 pointer-events-none ${hovered === exp.id ? "opacity-30" : ""}`}
              style={{ backgroundColor: exp.color }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-[#0F172A] rounded-2xl border border-slate-800 group-hover:bg-slate-800 transition-colors">
                  {exp.icon}
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
                  {exp.type}
                </span>
              </div>

              <h3 className="text-xl font-bold font-poppins text-[#E6EDF3] mb-4 group-hover:text-[#2DD4BF] transition-colors">
                {exp.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {exp.desc}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold font-mono text-[#2DD4BF] uppercase tracking-widest group/btn">
                Launch Experiment
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Lab Banner Component */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 w-full p-8 rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#0B0F1A] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="p-4 bg-[#2DD4BF]/10 rounded-full text-[#2DD4BF] animate-pulse">
            <FlaskConical size={32} />
          </div>
          <div>
            <h4 className="text-[#E6EDF3] font-bold font-poppins text-lg leading-none mb-2">Integrated Research Workflows</h4>
            <p className="text-slate-500 text-sm font-inter">Explore my open-source security tools on GitHub</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-[#0B0F1A] border border-slate-700 rounded-xl text-[#2DD4BF] font-bold font-mono text-xs uppercase tracking-widest hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all">
          Browse Repository
        </button>
      </motion.div>
    </section>
  );
}
