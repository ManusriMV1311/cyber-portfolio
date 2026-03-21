"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { BrainCircuit, Cpu, Shield, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const concepts = [
  {
    title: "AI & Threat Hunting",
    icon: <Shield size={32} className="text-[#00f0ff]" />,
    topic: "Autonomous Sentinel Systems",
    explanation: "Using deep learning to detect anomalies in real-time network traffic faster than signature-based IDSs.",
    potential: "Predictive threat hunting that identifies zero-day attacks before execution."
  },
  {
    title: "Neural Robotics",
    icon: <Cpu size={32} className="text-[#bc13fe]" />,
    topic: "Edge Computing in Automations",
    explanation: "Deploying quantized neural networks directly to microcontrollers for untethered robotic decision-making.",
    potential: "Swarms of autonomous drones for emergency response and environmental mapping."
  },
  {
    title: "Adversarial Machine Learning",
    icon: <Bot size={32} className="text-[#00f0ff]" />,
    topic: "Model Poisoning Defense",
    explanation: "Exploring how AI models can be attacked through dataset manipulation and designing robust validation pipelines.",
    potential: "Creating unhackable biometric and behavioral authentication models."
  }
];

export default function AIConceptsSection() {
  const { markVisited } = useStore();
  const [active, setActive] = useState(0);

  useEffect(() => {
    markVisited(5);
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto pt-10">
      <div className="flex items-center gap-3 mb-10 w-full">
        <BrainCircuit className="text-[#00f0ff] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          AI Research Concepts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {concepts.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`p-6 rounded-lg border transition-all duration-300 text-left relative overflow-hidden \${
              active === idx 
                ? "bg-[#00f0ff]/10 border-[#00f0ff]" 
                : "glass-panel border-gray-800 hover:border-[#00f0ff]/50"
            }`}
          >
            {active === idx && (
              <motion.div layoutId="ai-active-bg" className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/20 to-transparent pointer-events-none" />
            )}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
               {c.icon}
               <h3 className="font-orbitron font-bold text-lg">{c.title}</h3>
            </div>
          </button>
        ))}
      </div>

      <div className="flex-1 glass-panel border border-[#bc13fe]/30 rounded-xl p-8 relative overflow-hidden min-h-[50%]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc13fe]/5 rounded-full blur-3xl" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-center"
          >
             <h3 className="text-sm font-mono tracking-widest text-[#bc13fe] uppercase mb-2">Concept Exploration</h3>
             <h4 className="text-3xl font-orbitron font-bold text-[#00f0ff] mb-6">{concepts[active].topic}</h4>
             
             <div className="space-y-6">
               <div>
                  <h5 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">Theory</h5>
                  <p className="text-gray-300 leading-relaxed text-lg">{concepts[active].explanation}</p>
               </div>
               
               <div className="bg-[#0a0a1a] p-4 rounded border-l-2 border-[#bc13fe]">
                  <h5 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">Future Potential</h5>
                  <p className="text-[#bc13fe] font-medium">{concepts[active].potential}</p>
               </div>
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
