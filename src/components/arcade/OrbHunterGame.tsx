"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target } from "lucide-react";

interface OrbHunterProps {
  onComplete: () => void;
}

export default function OrbHunterGame({ onComplete }: OrbHunterProps) {
  const [hits, setHits] = useState(0);
  const [orbPos, setOrbPos] = useState({ top: 50, left: 50 });
  const [orbActive, setOrbActive] = useState(false);
  const requiredHits = 5;

  useEffect(() => {
    if (hits >= requiredHits) {
      onComplete();
      return;
    }

    // Spawn an orb
    setOrbActive(true);
    
    // Pick random position within central area (10% to 90%)
    setOrbPos({
      top: Math.floor(Math.random() * 60) + 20,
      left: Math.floor(Math.random() * 80) + 10,
    });

    // Despawn orb if missed after 1.5 seconds
    const timer = setTimeout(() => {
      setOrbActive(false);
      // Wait a bit before spawning next one
      setTimeout(() => { if (hits < requiredHits) setOrbActive(true); }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [hits, onComplete]);

  const handleOrbClick = () => {
    if (!orbActive) return;
    setOrbActive(false);
    setHits(prev => prev + 1);
  };

  return (
    <div className="w-full h-[500px] relative bg-[#0B0F1A] border border-[#2DD4BF]/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(45,212,191,0.05)] flex flex-col pt-6 font-inter group">
      
      {/* Game HUD */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-1">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center gap-2">
          <Target size={18} className="text-[#2DD4BF]" /> Orb Hunter
        </h3>
        <p className="text-xs text-slate-400 font-mono">Click the orb before it vanishes.</p>
      </div>

      <div className="absolute top-6 right-6 z-20 text-right">
        <div className="text-xs text-[#2DD4BF] font-mono tracking-widest uppercase mb-1">Integrity</div>
        <div className="flex gap-1">
          {Array.from({ length: requiredHits }).map((_, i) => (
            <div 
              key={i} 
              className={`w-8 h-2 rounded-full transition-all duration-300 ${
                i < hits ? "bg-[#2DD4BF] shadow-[0_0_10px_rgba(45,212,191,0.8)]" : "bg-slate-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative w-full h-full cursor-crosshair">
        <AnimatePresence>
          {orbActive && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleOrbClick}
              className="absolute w-12 h-12 rounded-full flex items-center justify-center bg-[#2DD4BF]/20 border border-[#2DD4BF] shadow-[0_0_25px_rgba(45,212,191,0.8)] outline-none hover:bg-[#2DD4BF]/40 transition-colors"
              style={{ top: `${orbPos.top}%`, left: `${orbPos.left}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-3 h-3 bg-[#E6EDF3] rounded-full shadow-[0_0_10px_#FFF]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
