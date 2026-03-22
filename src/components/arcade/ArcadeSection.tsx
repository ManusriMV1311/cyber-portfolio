"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Trophy, ArrowLeft, Play, Info } from "lucide-react";
import OrbHunterGame from "./OrbHunterGame";
import MemoryMatchGame from "./MemoryMatchGame";
import MazeExplorerGame from "./MazeExplorerGame";

const GAMES = [
  {
    id: "reaction",
    title: "Orb Hunter",
    type: "Reaction Game",
    desc: "Test your reflex speed by catching data orbs before they vanish.",
    component: OrbHunterGame,
    color: "#2DD4BF"
  },
  {
    id: "memory",
    title: "Memory Sector",
    type: "Memory Game",
    desc: "Match identical system fragments to restore data integrity.",
    component: MemoryMatchGame,
    color: "#8B5CF6"
  },
  {
    id: "maze",
    title: "Hub Patrol",
    type: "Maze Game",
    desc: "Navigate through the secure corridors to reach the Innovation Lab.",
    component: MazeExplorerGame,
    color: "#FF6B6B"
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
    <section id="arcade" className="w-full max-w-6xl mx-auto px-6 py-24 order-5">
      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/5 text-[#FF6B6B] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Entertainment Core
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-6">
          Tech <span className="text-[#FF6B6B]">Arcade</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          Take a break and test your skills with these fast-paced technical mini-games. All games are designed to be completed in under 20 seconds.
        </p>
      </div>

      <div className="relative min-h-[600px] w-full bg-[#0F172A] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {!activeGameId ? (
            <motion.div 
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {GAMES.map((game) => (
                  <motion.div
                    key={game.id}
                    whileHover={{ y: -5 }}
                    className="group relative bg-[#0B0F1A] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all overflow-hidden flex flex-col h-full"
                  >
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: game.color }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:text-[#E6EDF3] transition-colors">
                          <Gamepad2 size={24} />
                        </div>
                        {completedGames.includes(game.id) && (
                          <div className="flex items-center gap-1 text-[10px] font-bold font-mono text-[#2DD4BF] uppercase tracking-widest">
                            <Trophy size={12} />
                            Cleared
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold font-poppins text-[#E6EDF3] mb-2">{game.title}</h3>
                      <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">{game.type}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{game.desc}</p>

                      <button 
                        onClick={() => setActiveGameId(game.id)}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-800 border border-slate-700 text-[#E6EDF3] font-bold font-poppins hover:bg-[#E6EDF3] hover:text-[#0B0F1A] transition-all group-hover:shadow-[0_0_20px_rgba(230,237,243,0.1)]"
                      >
                        <Play size={16} fill="currentColor" />
                        Start Game
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-[#0B0F1A] border border-slate-800 flex items-center gap-4 text-xs font-mono text-slate-500">
                <Info size={16} className="text-[#8B5CF6]" />
                <span>The arcade is an optional interactive layer of the portfolio. Enjoy the challenge!</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="active-game"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 lg:p-12 flex flex-col items-center justify-center min-h-[600px]"
            >
              <div className="w-full max-w-2xl">
                <button 
                  onClick={() => setActiveGameId(null)}
                  className="flex items-center gap-2 text-xs font-bold font-mono text-slate-500 hover:text-[#E6EDF3] transition-colors mb-8 uppercase tracking-widest"
                >
                  <ArrowLeft size={14} />
                  Exit to Arcade Menu
                </button>
                
                {activeGame && (
                  <activeGame.component onComplete={handleGameComplete} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
