"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/gamificationStore";
import { User, Cpu, ShieldAlert, Crosshair } from "lucide-react";

export default function AboutSection() {
  const { markVisited } = useStore();

  useEffect(() => {
    markVisited(1);
  }, [markVisited]);

  const cards = [
    {
      icon: <ShieldAlert className="text-[#00f0ff] mb-4 h-8 w-8" />,
      title: "Cyber Defense",
      desc: "Undergraduate student deeply immersed in network security, threat intelligence, and SOC fundamentals."
    },
    {
      icon: <Cpu className="text-[#bc13fe] mb-4 h-8 w-8" />,
      title: "AI & Automation",
      desc: "Passionate about robotics, automation, and AI-assisted workflows to build next-generation resilient systems."
    },
    {
      icon: <Crosshair className="text-[#00f0ff] mb-4 h-8 w-8" />,
      title: "Problem Solver",
      desc: "Focused on bridging the gap between imaginative concepts and real-world technology solutions."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-start pt-16 md:pt-0 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <User className="text-[#bc13fe] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Identity Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full max-h-[70vh]">
        {/* Left visually representing the avatar / self */}
        <div className="glass-panel rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#bc13fe]/5" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-48 rounded-full border-2 border-[#00f0ff] p-2 relative"
          >
            <div className="absolute inset-0 rounded-full border border-[#bc13fe] border-dashed animate-[spin_10s_linear_infinite]" />
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#0a0a1a] to-[#00f0ff]/20 flex items-center justify-center">
               <User size={64} className="text-[#00f0ff] opacity-80" />
            </div>
          </motion.div>
          
          <h3 className="text-xl font-bold font-orbitron mt-6 tracking-wider">M.V. STATUS: <span className="text-[#00f0ff]">ONLINE</span></h3>
          <p className="text-gray-400 text-center mt-4 max-w-xs text-sm">
            Constant curiosity-driven learner building at the intersection of security and intelligence.
          </p>
        </div>

        {/* Right side story cards */}
        <div className="flex flex-col justify-center gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
              className="glass-panel p-6 rounded-lg border-l-4 border-l-[#00f0ff] hover:bg-[#00f0ff]/5 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#0a0a1a] border border-[#00f0ff]/20">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-orbitron mb-2 text-white group-hover:text-[#00f0ff] transition-colors">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
