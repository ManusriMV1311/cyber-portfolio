"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, TerminalSquare, Database, ShieldAlert, Code2, Network, Bot, Zap } from "lucide-react";

interface MemoryMatchProps {
  onComplete: () => void;
}

const ICONS = [
  { id: 'cpu', icon: Cpu },
  { id: 'term', icon: TerminalSquare },
  { id: 'db', icon: Database },
  { id: 'shield', icon: ShieldAlert },
  { id: 'code', icon: Code2 },
  { id: 'net', icon: Network },
  { id: 'bot', icon: Bot },
  { id: 'zap', icon: Zap },
];

// MemoryMatch uses only 4 pairs (8 cards total) to keep it under 20 seconds.
const GAME_DECK = [...ICONS.slice(0, 4), ...ICONS.slice(0, 4)]
  .sort(() => Math.random() - 0.5)
  .map((card, idx) => ({ ...card, uniqueId: idx }));

export default function MemoryMatchGame({ onComplete }: MemoryMatchProps) {
  const [cards, setCards] = useState(GAME_DECK);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  const handleCardClick = (index: number) => {
    if (disabled || flipped.includes(index) || matched.includes(cards[index].id)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [first, second] = newFlipped;
      if (cards[first].id === cards[second].id) {
        setMatched(prev => [...prev, cards[first].id]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  useEffect(() => {
    if (matched.length === 4) {
      setTimeout(() => onComplete(), 500);
    }
  }, [matched, onComplete]);

  return (
    <div className="w-full relative bg-[#0B0F1A] border border-[#8B5CF6]/20 py-8 px-4 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(139,92,246,0.05)] font-inter">
      <div className="text-center mb-6">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center justify-center gap-2 mb-2">
          <Database size={18} className="text-[#8B5CF6]" /> Memory Sector
        </h3>
        <p className="text-xs text-slate-400 font-mono">Match identical system fragments to unlock.</p>
      </div>

      <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(card.id);
          const isMatched = matched.includes(card.id);
          const Icon = card.icon;

          return (
            <motion.div
              key={card.uniqueId}
              onClick={() => handleCardClick(idx)}
              className="relative w-full aspect-square cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Back of Card */}
              <div 
                className={`absolute inset-0 backface-hidden bg-[#0F172A] border border-[#8B5CF6]/30 flex items-center justify-center rounded-xl shadow-lg transition-colors
                           ${!isFlipped ? "hover:border-[#8B5CF6]" : ""}`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-1/3 h-1/3 border-t-2 border-l-2 border-[#8B5CF6]/50 rounded-tl-sm opacity-50 absolute top-2 left-2" />
                <div className="w-1/3 h-1/3 border-b-2 border-r-2 border-[#8B5CF6]/50 rounded-br-sm opacity-50 absolute bottom-2 right-2" />
              </div>

              {/* Front of Card */}
              <div 
                className={`absolute inset-0 backface-hidden flex items-center justify-center rounded-xl border
                            ${isMatched ? "bg-[#8B5CF6]/20 border-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.5)]" : "bg-[#0B0F1A] border-[#8B5CF6]/50"}`}
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <Icon size={32} className={isMatched ? "text-[#E6EDF3]" : "text-[#8B5CF6]"} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
