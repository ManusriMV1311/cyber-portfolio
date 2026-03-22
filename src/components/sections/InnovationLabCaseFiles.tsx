"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { FolderGit2, ChevronRight, FileCode2, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
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
    title: "Water Pipeline Protection System",
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

export default function InnovationLabCaseFiles() {
  const { markVisited } = useStore();
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    markVisited(3);
  }, [markVisited]);

  const p = cases[activeCase];

  return (
    <div className="w-full h-full flex flex-col pt-12 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <FolderGit2 className="text-blue-500 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-2xl font-orbitron font-bold tracking-widest uppercase text-white">
            Innovation Lab
          </h2>
          <p className="text-xs text-blue-300 font-mono tracking-widest mt-1">SYSTEM.RECORDS.ARCHIVE</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-[70vh]">
        
        {/* Case File Index */}
        <div className="w-full md:w-1/4 flex flex-col gap-2 overflow-y-auto pr-2">
          <h3 className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-2 border-b border-gray-800 pb-2">Active Case Files</h3>
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`flex flex-col text-left p-4 rounded-lg border transition-all duration-300 ${
                activeCase === idx 
                  ? "bg-blue-600/10 border-blue-500 text-white box-soft-glow" 
                  : "bg-[#05050f]/50 border-gray-800 text-gray-400 hover:border-blue-400/50 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-70">
                <FileCode2 size={14} />
                <span className="font-mono text-xs tracking-wider">CASE {c.id}</span>
              </div>
              <span className="font-orbitron font-bold text-sm leading-tight">{c.title}</span>
            </button>
          ))}
        </div>

        {/* Case File Viewer */}
        <div className="flex-1 lab-panel relative overflow-hidden flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="w-full bg-blue-600/20 border-b border-blue-500/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-blue-100">
               <Settings2 size={16} className="text-blue-400" />
               <span>SYSTEM RECORD: #{p.id}</span>
            </div>
            <span className="text-[10px] uppercase text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded">Classified Concept</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 overflow-y-auto flex-1 space-y-8"
            >
              <div>
                <h3 className="text-3xl font-orbitron font-bold text-white mb-2">{p.title}</h3>
                <p className="text-blue-200 text-lg leading-relaxed">{p.idea}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"><ChevronRight size={14} className="text-blue-500"/> Problem Statement</h4>
                    <p className="text-gray-300 text-sm p-4 bg-black/40 rounded border border-gray-800">{p.problem}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"><ChevronRight size={14} className="text-purple-500"/> System Architecture</h4>
                    <div className="p-4 bg-[#05050f]/80 rounded border border-purple-500/30 font-mono text-xs text-purple-200 leading-loose flex items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                      {p.arch}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-3"><ChevronRight size={14} className="text-blue-500"/> Possible Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs px-3 py-1.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"><ChevronRight size={14} className="text-blue-500"/> Future Implementation</h4>
                    <p className="text-gray-300 text-sm p-4 bg-black/40 rounded border border-gray-800">{p.future}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"><ChevronRight size={14} className="text-blue-500"/> Learning Insight</h4>
                    <p className="text-blue-100 text-sm p-4 bg-blue-900/10 rounded border-l-2 border-blue-500 italic">
                      "{p.insight}"
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
