"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Database, Code2, Cpu, Scan } from "lucide-react";

// The Nodes
const nodes = [
  { id: "Cybersecurity", top: "10%", left: "20%", icon: Scan, desc: "Networking, SOC basics, Threat Intelligence, CTF Solving." },
  { id: "Programming", top: "20%", left: "80%", icon: Code2, desc: "C, C++, Java, Python core backend foundations." },
  { id: "Emerging Tech", top: "70%", left: "75%", icon: Cpu, desc: "IoT, Robotics, AI logic, Automation systems." },
  { id: "Web Dev", top: "80%", left: "25%", icon: Database, desc: "HTML, CSS, React, MongoDB interfaces." },
];

export default function SkillsNetwork() {
  const { markVisited } = useStore();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    markVisited(2);
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto py-10 relative">
      <div className="absolute top-0 left-0 flex items-center gap-3">
        <Network className="text-blue-500 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-2xl font-orbitron font-bold tracking-widest uppercase text-soft-glow">
            Skills Network
          </h2>
          <p className="text-xs text-gray-500 font-mono tracking-widest mt-1">MODULE.CAPABILITIES</p>
        </div>
      </div>

      <div className="relative w-full h-[60vh] lab-panel mt-16 overflow-hidden rounded-2xl flex items-center justify-center border border-blue-500/20 box-soft-glow">
        
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Programming -> Emerging Tech */}
          <line x1="80%" y1="20%" x2="75%" y2="70%" className={`transition-all duration-300 ${hoveredNode === 'Programming' || hoveredNode === 'Emerging Tech' ? 'node-link-active' : 'node-link'}`} />
          
          {/* Cybersecurity -> Emerging Tech */}
          <line x1="20%" y1="10%" x2="75%" y2="70%" className={`transition-all duration-300 ${hoveredNode === 'Cybersecurity' || hoveredNode === 'Emerging Tech' ? 'node-link-active' : 'node-link'}`} />
          
          {/* Web Dev -> Cybersecurity */}
          <line x1="25%" y1="80%" x2="20%" y2="10%" className={`transition-all duration-300 ${hoveredNode === 'Web Dev' || hoveredNode === 'Cybersecurity' ? 'node-link-active' : 'node-link'}`} />

          {/* Programming -> Web Dev */}
          <line x1="80%" y1="20%" x2="25%" y2="80%" className={`transition-all duration-300 ${hoveredNode === 'Programming' || hoveredNode === 'Web Dev' ? 'node-link-active' : 'node-link'}`} />
        </svg>

        {/* Interactive Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
            className="absolute -ml-8 -mt-8 flex flex-col items-center group z-10"
            style={{ top: node.top, left: node.left }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              hoveredNode === node.id 
                ? "bg-blue-600 border-2 border-white box-soft-glow" 
                : "bg-[#05050f] border-2 border-blue-500 hover:border-blue-400"
            }`}>
              <node.icon className={`transition-colors duration-300 ${hoveredNode === node.id ? "text-white" : "text-blue-400"}`} size={24} />
            </div>
            
            <div className="mt-3 text-center bg-[#05050f]/80 px-3 py-1 rounded backdrop-blur border border-blue-400/20">
              <h3 className={`font-orbitron font-bold text-xs tracking-wider transition-colors ${hoveredNode === node.id ? "text-white" : "text-blue-100"}`}>
                {node.id}
              </h3>
            </div>
          </motion.div>
        ))}

        {/* Central Info Panel (Responsive to Hover) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={hoveredNode || "empty"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="z-0 max-w-sm text-center px-6 pointer-events-none"
          >
            {hoveredNode ? (
              <div className="lab-panel p-6 border-blue-400/40">
                <h4 className="text-xl font-orbitron font-bold text-white mb-2">{hoveredNode}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{nodes.find(n => n.id === hoveredNode)?.desc}</p>
              </div>
            ) : (
              <div className="opacity-50">
                <Scan size={48} className="mx-auto text-gray-600 mb-4" />
                <p className="text-sm font-mono tracking-widest text-gray-400">HOVER OVER NODES TO DECRYPT DATA</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
