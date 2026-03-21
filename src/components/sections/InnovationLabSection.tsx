"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Box, Droplets, Battery, Wind, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "edutrack",
    title: "EduTrack",
    icon: <Battery size={24} />,
    problem: "Inefficient manual tracking in government schools.",
    idea: "A teacher assistant automation system concept.",
    arch: "Mobile Client -> Edge Server -> Cloud DB -> Dashboard",
    tech: ["React Native", "Node.js", "MongoDB", "IoT Sensors"],
    future: "Building a hardware prototype with RFID.",
    insight: "Learned about scaling low-cost infrastructure."
  },
  {
    id: "bodyguard",
    title: "Bodyguard Robot",
    icon: <Box size={24} />,
    problem: "Lack of portable personal safety solutions.",
    idea: "A portable robotic safety system concept using embedded sensors.",
    arch: "Sensors -> Microcontroller -> Cellular Module -> Emergency Contacts",
    tech: ["Arduino", "GPS/GSM Modules", "C++", "Proximity Sensors"],
    future: "Miniaturizing the design for wearable integration.",
    insight: "Hardware integration requires robust error handling."
  },
  {
    id: "pipeline",
    title: "Pipeline Protector",
    icon: <Droplets size={24} />,
    problem: "Massive contextual water loss due to undetected pipeline damage.",
    idea: "A system for detecting damage and automatically stopping water loss.",
    arch: "Flow Sensors -> Edge AI Analyzer -> Automated Valves",
    tech: ["IoT Flow Meters", "Python", "Actuators", "MQTT"],
    future: "Testing computer vision for visual leak detection.",
    insight: "Predictive maintenance saves more than reactive fixes."
  },
  {
    id: "aerolime",
    title: "Aerolime",
    icon: <Wind size={24} />,
    problem: "Ecological damage from acid rain in industrial zones.",
    idea: "AI-driven acid rain neutralization system concept using lime dispersion.",
    arch: "Weather API -> AI Predictor -> Drone Dispersion Fleet",
    tech: ["Python", "TensorFlow", "Drone SDK", "Weather Data"],
    future: "Simulating dispersion patterns in virtual environments.",
    insight: "Environmental AI requires massive geospatial datasets."
  }
];

export default function InnovationLabSection() {
  const { markVisited } = useStore();
  const [activeProj, setActiveProj] = useState(0);

  useEffect(() => {
    markVisited(3);
  }, [markVisited]);

  const p = projects[activeProj];

  return (
    <div className="w-full h-full flex flex-col pt-12 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Box className="text-[#00f0ff] w-8 h-8" />
        <div>
          <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
            Innovation Lab
          </h2>
          <p className="text-xs text-[#bc13fe] tracking-widest font-mono mt-1">CONCEPT DESIGNS & SYSTEM ARCHITECTURE PROPOSALS</p>
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setActiveProj(idx)}
            className={`flex items-center gap-2 px-5 py-3 rounded-md border transition-all duration-300 min-w-max ${
              activeProj === idx 
                ? "bg-[#bc13fe]/20 border-[#bc13fe] text-white box-glow" 
                : "glass-panel border-[#00f0ff]/20 text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50"
            }`}
          >
            {proj.icon}
            <span className="font-orbitron text-sm">{proj.title}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 glass-panel border border-[#00f0ff]/30 rounded-xl relative overflow-hidden flex flex-col lg:flex-row">
        {/* Decorative BG */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#bc13fe]/10 rounded-full blur-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 grid lg:grid-cols-2 gap-10 w-full h-full overflow-y-auto"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-orbitron text-[#00f0ff] mb-2">{p.title}</h3>
                <p className="text-gray-300 font-medium">{p.idea}</p>
              </div>

              <div className="bg-[#0a0a1a] rounded p-4 border-l-2 border-[#bc13fe]">
                <h4 className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><ChevronRight size={14}/> Problem</h4>
                <p className="text-sm text-gray-300">{p.problem}</p>
              </div>

              <div className="bg-[#0a0a1a] rounded p-4 border-l-2 border-[#00f0ff]">
                <h4 className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><ChevronRight size={14}/> System Architecture</h4>
                <p className="text-sm text-[#00f0ff] font-mono">{p.arch}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-5 rounded border border-gray-800">
                <h4 className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3 flex items-center gap-1"><ChevronRight size={14}/> Possible Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a1a] rounded p-4 border-l-2 border-[#bc13fe]">
                <h4 className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><ChevronRight size={14}/> Future Implementation</h4>
                <p className="text-sm text-gray-300">{p.future}</p>
              </div>

              <div className="bg-[#0a0a1a] rounded p-4 border-l-2 border-[#00f0ff]">
                <h4 className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><ChevronRight size={14}/> Learning Insight</h4>
                <p className="text-sm text-gray-300 italic">"{p.insight}"</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
