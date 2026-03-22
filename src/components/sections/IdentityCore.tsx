"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/gamificationStore";
import { User, Cpu, ShieldCheck, Crosshair, Fingerprint } from "lucide-react";

export default function IdentityCore() {
  const { markVisited } = useStore();

  useEffect(() => {
    markVisited(1);
  }, [markVisited]);

  const identityModules = [
    {
      icon: <ShieldCheck className="text-blue-400 mb-4 h-6 w-6" />,
      title: "Security Foundation",
      desc: "Deep immersion in network security, threat intelligence logic, and SOC workflows.",
      delay: 0.3
    },
    {
      icon: <Cpu className="text-purple-400 mb-4 h-6 w-6" />,
      title: "AI Integration",
      desc: "Focus on AI-assisted workflows and how intelligent automation scales resilient systems.",
      delay: 0.4
    },
    {
      icon: <Crosshair className="text-blue-400 mb-4 h-6 w-6" />,
      title: "Practical Solutioning",
      desc: "Bridging the gap between conceptual technology and scalable, real-world utility.",
      delay: 0.5
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto py-10">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <Fingerprint className="text-blue-500 w-12 h-12 mb-4 animate-pulse opacity-80" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-soft-glow mb-2">
          Identity Core
        </h2>
        <p className="text-gray-400 text-sm font-mono tracking-widest">// SUBJECT: MANUSRI M V</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-h-[70vh]">
        {/* Profile Card */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="lab-panel p-8 w-full md:w-1/3 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          
          <div className="w-32 h-32 rounded-full border border-blue-400/30 p-2 mb-6 relative">
            <div className="absolute inset-0 rounded-full border-t border-purple-400/50 animate-[spin_4s_linear_infinite]" />
            <div className="w-full h-full rounded-full bg-[#05050f] flex items-center justify-center">
              <User size={48} className="text-blue-400 opacity-80" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold font-orbitron text-white mt-2">Manusri M V</h3>
          <p className="text-xs text-blue-300 font-mono tracking-widest mt-1 mb-6 uppercase">System Architect / Analyst</p>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Cybersecurity undergraduate driven by curiosity. Focused on designing technology solutions for real-world problems.
          </p>

          <div className="mt-auto pt-6 border-t border-gray-800 w-full flex justify-between text-xs font-mono text-gray-500">
             <span>STATUS: </span>
             <span className="text-green-400">ACTIVE</span>
          </div>
        </motion.div>

        {/* Story Modules */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
          {identityModules.map((mod, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: mod.delay }}
              className={`lab-panel p-6 hover:bg-white/5 transition-all group ${idx === 2 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#05050f] border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                  {mod.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-orbitron mb-2 text-white group-hover:text-blue-300 transition-colors">{mod.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Visual Data Block */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 lab-panel p-6 flex items-center justify-center text-xs font-mono text-gray-500 overflow-hidden relative"
          >
             <div className="w-full h-12 flex flex-col gap-1 justify-center opacity-30">
                <div className="w-full bg-blue-500/20 h-1 rounded overflow-hidden">
                  <div className="w-3/4 bg-blue-500 h-full" />
                </div>
                <div className="w-full bg-purple-500/20 h-1 rounded overflow-hidden">
                  <div className="w-1/2 bg-purple-500 h-full" />
                </div>
                <div className="w-full bg-blue-500/20 h-1 rounded overflow-hidden">
                  <div className="w-5/6 bg-blue-500 h-full" />
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center bg-[#05050f]/60">
                 <span className="tracking-widest uppercase text-blue-400/50">Processing Core Metrics...</span>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
