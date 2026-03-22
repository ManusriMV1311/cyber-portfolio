"use client";

import { useState, useEffect } from "react";
import { Compass } from "lucide-react";

interface MazeExplorerProps {
  onComplete: () => void;
}

// 0: wall, 1: path, 2: exit
const MAZE_LAYOUT = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 2, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export default function MazeExplorerGame({ onComplete }: MazeExplorerProps) {
  const [playerPos, setPlayerPos] = useState({ r: 5, c: 1 });
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let { r, c } = playerPos;
      if (e.key === "ArrowUp") r -= 1;
      else if (e.key === "ArrowDown") r += 1;
      else if (e.key === "ArrowLeft") c -= 1;
      else if (e.key === "ArrowRight") c += 1;
      else return;

      e.preventDefault(); // prevent window scrolling

      if (r >= 0 && r < MAZE_LAYOUT.length && c >= 0 && c < MAZE_LAYOUT[0].length) {
        const cell = MAZE_LAYOUT[r][c];
        if (cell === 1 || cell === 2) {
          setPlayerPos({ r, c });
          if (cell === 2) {
            setTimeout(() => onComplete(), 300);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, onComplete]);

  // Touch controls
  const handleMove = (dr: number, dc: number) => {
    const newR = playerPos.r + dr;
    const newC = playerPos.c + dc;
    if (newR >= 0 && newR < MAZE_LAYOUT.length && newC >= 0 && newC < MAZE_LAYOUT[0].length) {
      const cell = MAZE_LAYOUT[newR][newC];
      if (cell === 1 || cell === 2) {
        setPlayerPos({ r: newR, c: newC });
        if (cell === 2) {
          setTimeout(() => onComplete(), 300);
        }
      }
    }
  };

  return (
    <div className="w-full relative bg-[#0B0F1A] border border-[#FF6B6B]/20 py-8 px-4 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(255,107,107,0.05)] font-inter">
      <div className="text-center mb-6">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center justify-center gap-2 mb-2">
          <Compass size={18} className="text-[#FF6B6B]" /> Maze Explorer
        </h3>
        <p className="text-xs text-slate-400 font-mono">Navigate to the Innovation Lab using Arrow Keys or D-Pad.</p>
      </div>

      {/* Maze Grid */}
      <div className="bg-[#0F172A] p-2 border border-slate-800 rounded-lg">
        {MAZE_LAYOUT.map((row, rIdx) => (
          <div key={rIdx} className="flex">
            {row.map((cell, cIdx) => {
              const isPlayer = playerPos.r === rIdx && playerPos.c === cIdx;
              return (
                <div 
                  key={cIdx} 
                  className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                    ${cell === 0 ? "bg-slate-800" : cell === 2 ? "bg-[#2DD4BF]/20 border border-[#2DD4BF]" : "bg-[#0B0F1A]"}`}
                >
                  {isPlayer && (
                    <div className="w-4 h-4 rounded-full bg-[#FF6B6B] shadow-[0_0_10px_#FF6B6B]" />
                  )}
                  {cell === 2 && !isPlayer && (
                    <div className="text-[10px] text-[#2DD4BF] font-mono font-bold">LAB</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile D-Pad */}
      <div className="mt-8 grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button onClick={() => handleMove(-1, 0)} className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[#FF6B6B] active:bg-slate-700">↑</button>
        <div />
        <button onClick={() => handleMove(0, -1)} className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[#FF6B6B] active:bg-slate-700">←</button>
        <button onClick={() => handleMove(1, 0)} className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[#FF6B6B] active:bg-slate-700">↓</button>
        <button onClick={() => handleMove(0, 1)} className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[#FF6B6B] active:bg-slate-700">→</button>
      </div>
    </div>
  );
}
