"use client";

import { useState } from "react";
import { FileCode2, Target, Cpu, Wrench, Lightbulb, Workflow, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "EduTrack System",
    problem: "Inefficient manual tracking in government schools leading to resource misallocation and poor attendance monitoring.",
    concept: "A localized teacher assistant automation system concept leveraging edge networks for low-latency data synchronization.",
    workflow: "[Mobile Client] ⟷ [Edge Server] ⟷ [Cloud DB] ⟷ [Insight Dashboard]",
    tech: ["React Native", "Node.js", "MongoDB", "IoT Sensors"],
    future: "Building a hardware prototype integrated with RFID checkpoints for automated classroom entry/exit detection.",
    delay: 0.1
  },
  {
    id: "02",
    title: "Bodyguard Robot",
    problem: "Lack of portable, autonomous personal safety solutions in high-risk zones where manual surveillance is impossible.",
    concept: "A portable robotic safety system concept using embedded environmental sensors and real-time distress signaling.",
    workflow: "[Sensors] ⟷ [Microcontroller] ⟷ [Cellular Module] ⟷ [Emergency Contacts]",
    tech: ["Arduino", "GPS/GSM Modules", "C++", "Proximity Sensors"],
    future: "Miniaturizing the design for stealth wearable integration and long-range Mesh network support.",
    delay: 0.2
  },
  {
    id: "03",
    title: "Water Pipeline Protection",
    problem: "Massive contextual water loss due to undetected subsurface pipeline damage and pressure leakage.",
    concept: "An automated detection system for identifying pressure anomalies and automatically triggering valve locks.",
    workflow: "[Flow Sensors] ⟷ [Edge AI Analyzer] ⟷ [Automated Control Valves]",
    tech: ["IoT Flow Meters", "Python", "Actuators", "MQTT Protocols"],
    future: "Testing autonomous computer vision for localized visual leak detection via tethered inspection drones.",
    delay: 0.3
  },
  {
    id: "04",
    title: "Aerolime Environmental System",
    problem: "Severe ecological and structural damage from acid rain in heavy industrial zones affecting heritage and health.",
    concept: "An AI-driven neutralization system concept using precisely timed lime dispersion based on weather data.",
    workflow: "[Weather API] ⟷ [AI Predictor Model] ⟷ [Drone Dispersion Fleet]",
    tech: ["Python", "TensorFlow", "Drone SDK", "Meteorological Datasets"],
    future: "Simulating dispersion patterns in isolated virtual aerodynamic environments to optimize chemical usage.",
    delay: 0.4
  }
];

export default function SystemMap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const p = projects[activeIdx];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 order-4">
      <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-6">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/5 text-[#FF6B6B] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
          >
            Engineering Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-6">
            Project <span className="text-[#FF6B6B]">Missions</span>
          </h2>
          <p className="text-lg text-slate-400 font-inter leading-relaxed">
            Detailed case studies of my conceptual and technical system designs ranging from automation to hardware robotics.
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-[#0F172A] p-2 rounded-xl border border-slate-800">
          <Info size={14} className="text-[#2DD4BF]" />
          <span>Click missions to expand technical details</span>
        </div>
      </div>

      <div className="w-full bg-[#0B0F1A] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-800 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Sidebar Selector */}
        <div className="w-full lg:w-1/3 bg-[#0F172A] border-b lg:border-b-0 lg:border-r border-slate-800 p-6 space-y-3">
          <h3 className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 px-2">Mission Log</h3>
          {projects.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-full flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 ${
                activeIdx === idx 
                  ? "bg-[#FF6B6B]/10 border-[#FF6B6B]/50 shadow-[0_0_20px_rgba(255,107,107,0.1)]" 
                  : "bg-transparent border-transparent hover:bg-slate-800/50 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${activeIdx === idx ? "bg-[#FF6B6B]" : "bg-slate-700"}`} />
                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${activeIdx === idx ? "text-[#FF6B6B]" : "text-slate-500"}`}>
                  PROJECT {m.id}
                </span>
              </div>
              <span className={`font-poppins font-bold text-base leading-tight ${activeIdx === idx ? "text-[#E6EDF3]" : "text-slate-500"}`}>
                {m.title}
              </span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 flex flex-col bg-[#0B0F1A]">
          <div className="w-full border-b border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FF6B6B]/10 rounded-2xl text-[#FF6B6B] border border-[#FF6B6B]/20">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-2xl text-[#E6EDF3] leading-none mb-1">{p.title}</h3>
                <span className="font-mono text-xs text-slate-500 tracking-wider">SECURE_LEVEL: HIGH_CLEARANCE</span>
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 text-[#2DD4BF] text-[10px] font-bold font-mono tracking-widest uppercase">
              Operational Concept
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 lg:p-12 overflow-y-auto flex-1 h-full max-h-[700px] custom-scrollbar"
            >
              {/* Concept Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb size={20} className="text-[#8B5CF6]"/>
                  <h4 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-[0.2em]">Concept Idea</h4>
                </div>
                <p className="text-[#E6EDF3] text-xl font-medium leading-relaxed">
                  {p.concept}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Problem & Workflow */}
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Target size={16} className="text-[#FF6B6B]"/>
                      <h4 className="text-xs font-bold text-[#FF6B6B] uppercase tracking-[0.2em]">Problem Statement</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed bg-[#0F172A] p-4 rounded-xl border border-slate-800 italic">
                      &quot;{p.problem}&quot;
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Workflow size={16} className="text-[#2DD4BF]"/>
                      <h4 className="text-xs font-bold text-[#2DD4BF] uppercase tracking-[0.2em]">System Workflow</h4>
                    </div>
                    <div className="p-4 bg-[#0F172A] rounded-xl font-mono text-xs text-[#2DD4BF] border border-[#2DD4BF]/20 text-center leading-loose">
                      {p.workflow}
                    </div>
                  </div>
                </div>

                {/* Tech & Future */}
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu size={16} className="text-[#8B5CF6]"/>
                      <h4 className="text-xs font-bold text-[#8B5CF6] uppercase tracking-[0.2em]">Possible Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="text-[10px] px-3 py-1.5 rounded-lg bg-[#0F172A] text-[#E6EDF3] border border-slate-700 font-mono font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Wrench size={16} className="text-[#E6EDF3]"/>
                      <h4 className="text-xs font-bold text-[#E6EDF3] uppercase tracking-[0.2em]">Future implementation plan</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-[#2DD4BF] pl-4">
                      {p.future}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
