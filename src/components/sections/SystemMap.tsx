"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSlide } from "@/components/providers/SlideProvider";
import { useStore } from "@/store/gamificationStore";
import { User, Share2, Lightbulb, Beaker, FileText, Compass, Network } from "lucide-react";

const MODULES = [
  { id: 1, label: "Identity Core", desc: "Profile & Focus", icon: User, pos: { top: "25%", left: "5%" }, ringColor: "border-blue-500" },
  { id: 2, label: "Skills Network", desc: "Tech Graph", icon: Share2, pos: { top: "10%", left: "30%" }, ringColor: "border-purple-500" },
  { id: 3, label: "Innovation Lab", desc: "System Proposals", icon: Lightbulb, pos: { top: "15%", left: "65%" }, ringColor: "border-blue-400" },
  { id: 4, label: "Tech Experiments", desc: "Interactive Tests", icon: Beaker, pos: { top: "50%", left: "85%" }, ringColor: "border-purple-400" },
  { id: 5, label: "Research Archive", desc: "Conceptual IDEAS", icon: FileText, pos: { top: "80%", left: "65%" }, ringColor: "border-blue-500" },
  { id: 6, label: "Curiosity Log", desc: "Learning Timeline", icon: Compass, pos: { top: "80%", left: "25%" }, ringColor: "border-purple-500" },
  { id: 7, label: "Contact Node", desc: "Comm Links", icon: Network, pos: { top: "60%", left: "5%" }, ringColor: "border-blue-400" },
];

export default function SystemMap() {
  const { markVisited } = useStore();
  const { goToSlide, setTotalSlides } = useSlide();

  useEffect(() => {
    markVisited(0);
    setTotalSlides(8);
  }, [markVisited, setTotalSlides]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Central Node */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-20 flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-full lab-panel flex items-center justify-center relative shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-[spin_12s_linear_infinite]" />
          <div className="absolute -inset-2 rounded-full border border-dashed border-purple-400/20 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="text-center">
            <h2 className="font-orbitron font-bold text-sm tracking-widest text-[#f0f5ff] text-soft-glow uppercase">Manusri</h2>
            <p className="text-[10px] text-blue-300 font-mono mt-1">MAIN.HUB</p>
          </div>
        </div>
      </motion.div>

      {/* Orbiting / Positioned Modules */}
      <div className="absolute inset-0 z-10">
        {MODULES.map((mod, i) => (
          <motion.button
            key={mod.id}
            onClick={() => goToSlide(mod.id)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8, type: "spring" }}
            className="absolute -ml-16 -mt-16 w-32 flex flex-col items-center gap-3 group"
            style={{ top: mod.pos.top, left: mod.pos.left }}
          >
            {/* SVG Link line to center (visual hack: just radial background lines from center) - Handled separately if precise, but visual abstract connecting is fine here */}
            
            <div className={`w-16 h-16 rounded-2xl lab-panel flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${mod.ringColor}/30 group-hover:${mod.ringColor} box-soft-glow group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]`}>
              <mod.icon className="text-blue-100 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all" size={24} />
            </div>
            
            <div className="text-center opacity-70 group-hover:opacity-100 transition-opacity">
               <h3 className="text-xs font-orbitron font-bold tracking-widest text-blue-100">{mod.label}</h3>
               <p className="text-[10px] text-purple-300/80 font-mono uppercase tracking-widest mt-1">{mod.desc}</p>
            </div>
          </motion.button>
        ))}
        
        {/* Draw abstract SVG lines from center to nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {MODULES.map((mod) => (
            <line 
              key={`line-${mod.id}`}
              x1="50%" y1="50%" 
              x2={mod.pos.left} y2={mod.pos.top} 
              stroke="url(#lineGrad)" 
              strokeWidth="2"
              className="dash-animate"
              strokeDasharray="4 4"
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        .dash-animate {
          animation: dashMove 20s linear infinite;
        }
        @keyframes dashMove {
          to { stroke-dashoffset: 1000; }
        }
      `}</style>
    </div>
  );
}
