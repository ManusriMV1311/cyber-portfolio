"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { BookOpen, FlaskConical, Target, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const entries = [
  {
    topic: "Autonomous Sentinel Systems",
    overview: "Using deep learning to detect anomalies in real-time network traffic faster than signature-based IDSs.",
    why: "Traditional rules-based detection is failing against novel polymorphism attacks.",
    approach: "Training a variational autoencoder on healthy network traffic baselines.",
    future: "Deploying inference models onto dedicated network edge hardware.",
    icon: Target
  },
  {
    topic: "Zero-Trust Robotics",
    overview: "Implementing continuous re-authentication protocols for individual automated nodes within a swarm.",
    why: "Physical robots act as moving attack vectors if unauthenticated.",
    approach: "Biometric and spatial behavioral analysis layered over M2M communication.",
    future: "Designing a decentralized consensus ledger for robotic tasks.",
    icon: FlaskConical
  },
  {
    topic: "Adversarial Machine Learning",
    overview: "Exploring how AI models can be poisoned through dataset manipulation.",
    why: "AI models are becoming central infrastructure, and their training data is vulnerable.",
    approach: "Fuzzing input datasets with imperceptible noise adjustments.",
    future: "Developing immune-system-like validators for training data.",
    icon: BrainCircuit
  }
];

export default function ResearchArchive() {
  const { markVisited } = useStore();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    markVisited(5);
  }, [markVisited]);

  const activeEntry = entries[activeTab];

  return (
    <div className="w-full h-full flex flex-col pt-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="text-blue-500 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-white">
            Research Archive
          </h2>
          <p className="text-xs text-blue-300 font-mono tracking-widest mt-1">DIGITAL.NOTEBOOK.INDEX</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 h-[60vh]">
        {/* Notebook Index */}
        <div className="lab-panel p-4 flex flex-col gap-2 overflow-y-auto">
          <div className="p-3 bg-[#05050f] rounded border border-gray-800 mb-2">
            <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest">Index Categories</h3>
          </div>
          {entries.map((entry, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`text-left p-4 rounded transition-all duration-300 flex items-center gap-3 ${
                activeTab === idx 
                  ? "bg-blue-600/20 border-l-4 border-blue-500 text-blue-100" 
                  : "hover:bg-white/5 border-l-4 border-transparent text-gray-400"
              }`}
            >
               <entry.icon size={16} className={activeTab === idx ? "text-blue-400" : "text-gray-500"} />
               <span className="font-orbitron text-sm">{entry.topic}</span>
            </button>
          ))}
        </div>

        {/* Note Page */}
        <div className="md:col-span-2 lab-panel p-8 relative overflow-hidden bg-gradient-to-br from-[#05050f] to-[#0a0a1f] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] border-t-[8px] border-t-purple-500">
           {/* Notebook lines visual */}
           <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "linear-gradient(transparent 95%, #ffffff 100%)", backgroundSize: "100% 2rem" }} />
           
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -15 }}
               transition={{ duration: 0.3 }}
               className="relative z-10 space-y-6"
             >
               <div>
                 <h2 className="text-2xl font-orbitron font-bold text-white mb-2">{activeEntry.topic}</h2>
                 <p className="text-sm font-mono text-blue-400 tracking-widest">// CONCEPT OVERVIEW</p>
                 <p className="text-gray-300 leading-relaxed mt-2 p-4 bg-white/5 rounded-md border border-white/5">{activeEntry.overview}</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">Why it matters</h3>
                    <p className="text-sm text-gray-400">{activeEntry.why}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">Implementation Approach</h3>
                    <p className="text-sm text-gray-400">{activeEntry.approach}</p>
                  </div>
               </div>

               <div className="mt-4 pt-6 border-t border-gray-800">
                  <h3 className="text-xs font-mono text-green-400 tracking-widest uppercase mb-2">Future Research Direction</h3>
                  <p className="text-sm text-gray-300 italic">"{activeEntry.future}"</p>
               </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
