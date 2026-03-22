"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Bot, Database, Workflow } from "lucide-react";

interface IdeaDiscoveryProps {
  onComplete: () => void;
}

const NODES = [
  { id: 'ai', icon: BrainCircuit, label: "AI Systems", color: "#FF6B6B" },
  { id: 'bot', icon: Bot, label: "Robotics", color: "#2DD4BF" },
  { id: 'sys', icon: Database, label: "Data Integrity", color: "#8B5CF6" },
  { id: 'work', icon: Workflow, label: "Automation", color: "#E6EDF3" },
];

export default function IdeaDiscoveryGame({ onComplete }: IdeaDiscoveryProps) {
  const [discovered, setDiscovered] = useState<string[]>([]);

  const handleDiscover = (id: string) => {
    if (discovered.includes(id)) return;
    const next = [...discovered, id];
    setDiscovered(next);
    if (next.length === NODES.length) {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="w-full h-[400px] relative bg-[#0B0F1A] border border-[#8B5CF6]/30 py-8 px-6 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.05)] font-inter flex flex-col items-center">
      
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-1">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center gap-2">
          <BrainCircuit size={18} className="text-[#8B5CF6]" /> Neural Map
        </h3>
        <p className="text-xs text-slate-400 font-mono">Click floating nodes to discover core ideas.</p>
      </div>

      <div className="absolute inset-0 z-10">
        {NODES.map((node, i) => {
          const isDiscovered = discovered.includes(node.id);
          const Icon = node.icon;
          // Predefined random-ish positions to avoid true randomness jumps on re-render
          const positions = [
            { top: '25%', left: '20%' },
            { top: '60%', left: '30%' },
            { top: '30%', left: '70%' },
            { top: '65%', left: '80%' }
          ];

          return (
            <motion.button
              key={node.id}
              onClick={() => handleDiscover(node.id)}
              className="absolute flex flex-col items-center gap-2 group"
              style={positions[i]}
              animate={{ 
                y: isDiscovered ? 0 : [0, -15, 0], 
                scale: isDiscovered ? 1.1 : 1 
              }}
              transition={{ 
                duration: 3, 
                repeat: isDiscovered ? 0 : Infinity, 
                delay: i * 0.4,
                ease: "easeInOut" 
              }}
            >
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border border-t-[#FFF]/20
                  ${isDiscovered ? 'shadow-[0_0_20px_var(--node-color)]' : 'bg-[#0F172A] border-slate-800 shadow-md group-hover:scale-110'}`}
                style={{ 
                  backgroundColor: isDiscovered ? `${node.color}20` : '#0F172A',
                  borderColor: isDiscovered ? node.color : '#334155',
                  '--node-color': node.color 
                } as any}
              >
                <Icon size={28} color={isDiscovered ? node.color : '#64748B'} />
              </div>
              <div className="text-xs font-mono font-bold tracking-widest px-2 py-1 bg-[#0F172A] border border-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {isDiscovered ? node.label : "UNKNOWN"}
              </div>
            </motion.button>
          );
        })}

        {/* Neural Lines connecting them when all discovered */}
        {discovered.length === NODES.length && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <motion.path 
              d="M 20% 25% L 30% 60% L 80% 65% L 70% 30% Z" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeLinecap="round" 
              fill="transparent" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1 }}
              style={{ filter: "drop-shadow(0 0 5px rgba(139,92,246,0.5))" }}
            />
          </svg>
        )}
      </div>

    </div>
  );
}
