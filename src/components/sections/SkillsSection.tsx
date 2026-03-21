"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Network, Database, Code2, Cpu, Scan, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const skills = [
  {
    category: "Programming",
    icon: <Code2 size={24} className="text-[#bc13fe]" />,
    items: ["C", "C++", "Java", "Python"],
    desc: "Core algorithmic foundations and backend logic."
  },
  {
    category: "Web Development",
    icon: <Database size={24} className="text-[#00f0ff]" />,
    items: ["HTML", "CSS", "React", "MongoDB"],
    desc: "Building interactive, accessible, and dynamic user interfaces."
  },
  {
    category: "Cybersecurity",
    icon: <Scan size={24} className="text-[#bc13fe]" />,
    items: ["Networking", "SOC Basics", "Threat Intel", "CTF Solving"],
    desc: "Securing applications and understanding vulnerability landscapes."
  },
  {
    category: "Emerging Tech",
    icon: <Cpu size={24} className="text-[#00f0ff]" />,
    items: ["IoT", "Robotics", "Automation Focus", "AI Integration"],
    desc: "Designing scalable real-world automation systems."
  }
];

export default function SkillsSection() {
  const { markVisited } = useStore();
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    markVisited(2);
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="flex items-center gap-3 mb-10 w-full max-w-5xl">
        <Network className="text-[#00f0ff] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Skills Matrix
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl h-[60vh]">
        {/* Left: Interactive Categories */}
        <div className="flex flex-col gap-4">
          {skills.map((skill, idx) => (
            <motion.button
              key={skill.category}
              onClick={() => setActiveCategory(idx)}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className={`p-6 rounded-lg border text-left flex items-start justify-between transition-all duration-300 ${
                activeCategory === idx 
                  ? "bg-[#00f0ff] text-black border-[#00f0ff] box-glow" 
                  : "glass-panel border-[#00f0ff]/20 text-gray-300 hover:border-[#bc13fe] hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-md ${activeCategory === idx ? "bg-black/20" : "bg-black"}`}>
                  <div className={activeCategory === idx ? "text-black" : ""}>
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-lg">{skill.category}</h3>
                  <p className={`text-sm mt-1 max-w-xs ${activeCategory === idx ? "text-black/70" : "text-gray-500"}`}>
                    {skill.desc}
                  </p>
                </div>
              </div>
              <ArrowRight className={`transition-transform duration-300 ${activeCategory === idx ? "opacity-100 translate-x-0 text-black" : "opacity-0 -translate-x-4"}`} />
            </motion.button>
          ))}
        </div>

        {/* Right: Network Nodes View */}
        <div className="glass-panel border border-[#00f0ff]/20 rounded-xl relative p-8 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-[#00f0ff]/5 opacity-20" style={{ backgroundImage: "radial-gradient(#00f0ff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
           
           <AnimatePresence mode="wait">
             <motion.div
               key={activeCategory}
               initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               exit={{ scale: 1.1, opacity: 0, rotate: 10 }}
               transition={{ duration: 0.4 }}
               className="grid grid-cols-2 gap-6 relative z-10 w-full"
             >
               {skills[activeCategory].items.map((item, index) => (
                 <div key={item} className="flex flex-col items-center gap-3">
                   <div className="w-20 h-20 rounded-full border-2 border-[#bc13fe] flex items-center justify-center bg-[#0a0a1a] shadow-[0_0_15px_rgba(188,19,254,0.3)] hover:scale-110 transition-transform cursor-crosshair">
                      <span className="font-orbitron text-[#00f0ff] text-sm text-center px-2">{item}</span>
                   </div>
                   {/* Connective simulation lines (static representation) */}
                   <div className="h-4 w-[1px] bg-[#00f0ff]/50" />
                 </div>
               ))}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
