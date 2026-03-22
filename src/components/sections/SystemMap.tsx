"use client";

import { useState } from "react";
import { FileCode2, Target, Cpu, Wrench, Lightbulb, Workflow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const missions = [
  {
    id: "01",
    title: "EduTrack System",
    problem: "Inefficient manual tracking in government schools leading to resource misallocation.",
    idea: "A teacher assistant automation system concept leveraging localized edge networks.",
    arch: "[Mobile Client] ⟷ [Edge Server] ⟷ [Cloud DB] ⟷ [Dashboard]",
    tech: ["React Native", "Node.js", "MongoDB", "IoT Sensors"],
    future: "Building a hardware prototype integrated with RFID checkpoints.",
    insight: "Learned about scaling low-cost infrastructure and offline-first data sync."
  },
  {
    id: "02",
    title: "Bodyguard Robot",
    problem: "Lack of portable, autonomous personal safety solutions in high-risk zones.",
    idea: "A portable robotic safety system concept using embedded environmental sensors.",
    arch: "[Sensors] ⟷ [Microcontroller] ⟷ [Cellular Module] ⟷ [Emergency Contacts]",
    tech: ["Arduino", "GPS/GSM Modules", "C++", "Proximity Sensors"],
    future: "Miniaturizing the design for stealth wearable integration.",
    insight: "Hardware integration requires robust physical error handling and redundancy."
  },
  {
    id: "03",
    title: "Automated Water Pipeline Protection",
    problem: "Massive contextual water loss due to undetected subsurface pipeline damage.",
    idea: "A system for detecting pressure anomalies and automatically triggering valve locks.",
    arch: "[Flow Sensors] ⟷ [Edge AI Analyzer] ⟷ [Automated Control Valves]",
    tech: ["IoT Flow Meters", "Python", "Actuators", "MQTT Protocols"],
    future: "Testing computer vision for localized visual leak detection via drones.",
    insight: "Predictive maintenance saves exponentially more than reactive fixes."
  },
  {
    id: "04",
    title: "Aerolime Environmental System",
    problem: "Ecological and structural damage from acid rain in heavy industrial zones.",
    idea: "AI-driven acid rain neutralization system concept using precisely timed lime dispersion.",
    arch: "[Weather API] ⟷ [AI Predictor Model] ⟷ [Drone Dispersion Fleet]",
    tech: ["Python", "TensorFlow", "Drone SDK", "Meteorological Datasets"],
    future: "Simulating dispersion patterns in isolated virtual aerodynamic environments.",
    insight: "Environmental AI requires massive, continuous geospatial datasets to be accurate."
  }
];

export default function SystemMap() {
  const [activeMission, setActiveMission] = useState(0);
  const p = missions[activeMission];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 3
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          Project Missions
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Explore my conceptual projects and research systems through this dashboard interface.
        </p>
      </div>

      <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Sidebar / Mission Index */}
        <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-3">
          <h3 className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2 px-2">Active Missions</h3>
          {missions.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveMission(idx)}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-300 ${
                activeMission === idx 
                  ? "bg-blue-50 border-blue-400 shadow-sm ring-1 ring-blue-400/20" 
                  : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileCode2 size={16} className={activeMission === idx ? "text-blue-500" : "text-slate-400"} />
                <span className={`font-mono text-xs tracking-wider ${activeMission === idx ? "text-blue-600 font-semibold" : "text-slate-500"}`}>MISSION {m.id}</span>
              </div>
              <span className={`font-poppins font-semibold text-sm leading-tight ${activeMission === idx ? "text-[#0F172A]" : "text-slate-600"}`}>{m.title}</span>
            </button>
          ))}
        </div>

        {/* Main Dashboard Panel */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="w-full border-b border-slate-100 p-6 bg-white flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Target size={20} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-[#0F172A]">{p.title}</h3>
                <span className="font-mono text-xs text-blue-600 uppercase tracking-wider">Mission Details</span>
              </div>
            </div>
            <span className="text-[10px] uppercase text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full border border-green-200">System Logged</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 overflow-y-auto flex-1 h-full"
            >
              
              <div className="mb-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
                  <Lightbulb size={16} className="text-blue-500"/> Concept Idea
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">{p.idea}</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                
                {/* Column 1 */}
                <div className="space-y-8">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                      <Target size={14} className="text-red-500"/> Problem
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.problem}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">
                      <Workflow size={14} className="text-indigo-500"/> System Workflow
                    </h4>
                    <div className="p-4 bg-slate-50 rounded-xl font-mono text-xs text-indigo-700 font-medium leading-relaxed border border-indigo-100 flex items-center justify-center text-center">
                      {p.arch}
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                      <Cpu size={14} className="text-cyan-500"/> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                      <Wrench size={14} className="text-blue-500"/> Future Implementation
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.future}</p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
                    <h4 className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
                      <Lightbulb size={14} className="text-blue-600"/> Learning Insights
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed italic">
                      &quot;{p.insight}&quot;
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
