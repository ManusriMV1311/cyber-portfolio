"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Trophy, ArrowLeft, Play, Info, Target, Zap, Waves } from "lucide-react";
import OrbHunterGame from "./OrbHunterGame";
import MemoryMatchGame from "./MemoryMatchGame";
import MazeExplorerGame from "./MazeExplorerGame";

/**
 * Technical arcade menu with Aurora Fusion styling.
 */
const GAMES = [
  {
    id: "reaction",
    title: "Orb Hunter",
    type: "Reaction Test",
    icon: <Target size={24} />,
    desc: "Test your reflex speed by catching data orbs before they vanish from the network.",
    component: OrbHunterGame,
    color: "#00D4FF"
  },
  {
    id: "memory",
    title: "Memory Sector",
    type: "Cognitive Sync",
    icon: <Zap size={24} />,
    desc: "Match identical system fragments to restore encrypted data integrity.",
    component: MemoryMatchGame,
    color: "#8B5CF6"
  },
  {
    id: "maze",
    title: "Hub Patrol",
    type: "Navigational Logic",
    icon: <Waves size={24} />,
    desc: "Navigate through secure corridors to reach the core Innovation Lab.",
    component: MazeExplorerGame,
    color: "#F97316"
  }
];

export default function ArcadeSection() {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [completedGames, setCompletedGames] = useState<string[]>([]);

  const activeGame = GAMES.find(g => g.id === activeGameId);

  const handleGameComplete = () => {
    if (activeGameId && !completedGames.includes(activeGameId)) {
      setCompletedGames(prev => [...prev, activeGameId]);
    }
  };

  return (
    <section id="arcade" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Interactive_Layer
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-6 uppercase tracking-tighter">
          Tech <span className="text-[#8B5CF6]">Arcade</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          Short technical mini-games designed to test your focus and reflexes.
        </p>
      </div>

      <div className="relative min-h-[600px] w-full bg-[#111827] rounded-[3rem] border border-slate-800 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {!activeGameId ? (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 lg:p-12 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {GAMES.map((game) => (
                  <motion.div
                    key={game.id}
                    className="group relative bg-[#0A0F1F] border border-slate-800 rounded-[2rem] p-8 hover:border-[#8B5CF6]/50 transition-all duration-500 flex flex-col h-full shadow-inner"
                  >
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: game.color }}
                    />
                    
                    <div className="relative z-10 flex-1">
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-4 bg-[#111827] rounded-2xl text-slate-500 border border-slate-800 group-hover:text-[#E5E7EB] group-hover:border-[#E5E7EB]/20 transition-all">
                          {game.icon}
                        </div>
                        {completedGames.includes(game.id) && (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[9px] font-black font-mono text-[#00D4FF] uppercase tracking-widest">
                            <Trophy size={10} />
                            Mission_Passed
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-black font-poppins text-[#E5E7EB] mb-1 tracking-tight">{game.title}</h3>
                      <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest mb-6">{game.type}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-10 font-inter">{game.desc}</p>

                      <button 
                        onClick={() => setActiveGameId(game.id)}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#111827] border border-slate-800 text-[#E5E7EB] font-black font-poppins text-xs uppercase tracking-widest hover:bg-[#8B5CF6] hover:text-[#0A0F1F] hover:border-[#8B5CF6] transition-all shadow-inner group/btn"
                      >
                        <Play size={14} fill="currentColor" className="group-hover/btn:scale-125 transition-transform" />
                        Initialize_Game
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-[#0A0F1F]/50 border border-slate-800/50 flex flex-col sm:flex-row items-center gap-4 text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">
                <Info size={16} className="text-[#8B5CF6]" />
                <span>Optional_Module: Educational and interactive layer. Operational_Status: Stable.</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="active-game"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 lg:p-12 flex flex-col items-center justify-center min-h-[600px] relative z-20"
            >
              <div className="w-full max-w-2xl bg-[#0A0F1F] border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
                <button 
                  onClick={() => setActiveGameId(null)}
                  className="flex items-center gap-3 text-[10px] font-black font-mono text-slate-500 hover:text-[#00D4FF] transition-colors mb-10 uppercase tracking-widest group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Terminate_Module_Return_To_Menu
                </button>
                
                <div className="relative">
                  {activeGame && (
                    <activeGame.component onComplete={handleGameComplete} />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
