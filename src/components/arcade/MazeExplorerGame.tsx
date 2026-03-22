"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Compass, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface MazeExplorerProps {
  onComplete: () => void;
}

// 0: wall, 1: path, 2: exit
const MAZE_LAYOUT = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 2, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const START = { r: 5, c: 1 };

export default function MazeExplorerGame({ onComplete }: MazeExplorerProps) {
  const [playerPos, setPlayerPos] = useState(START);
  const [steps, setSteps] = useState(0);
  const [done, setDone] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  const move = useCallback((dr: number, dc: number) => {
    if (done) return;
    setPlayerPos(prev => {
      const newR = prev.r + dr;
      const newC = prev.c + dc;
      if (
        newR >= 0 && newR < MAZE_LAYOUT.length &&
        newC >= 0 && newC < MAZE_LAYOUT[0].length
      ) {
        const cell = MAZE_LAYOUT[newR][newC];
        if (cell === 1 || cell === 2) {
          setSteps(s => s + 1);
          if (cell === 2) {
            setDone(true);
            setTimeout(onComplete, 600);
          }
          return { r: newR, c: newC };
        }
      }
      return prev;
    });
  }, [done, onComplete]);

  // Keyboard support (desktop)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
        e.preventDefault();
        if (e.key === "ArrowUp") move(-1, 0);
        else if (e.key === "ArrowDown") move(1, 0);
        else if (e.key === "ArrowLeft") move(0, -1);
        else if (e.key === "ArrowRight") move(0, 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [move]);

  // Touch swipe support
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      move(0, dx > 0 ? 1 : -1);
    } else {
      move(dy > 0 ? 1 : -1, 0);
    }
  };

  const CELL_COLORS: Record<number, string> = {
    0: "bg-slate-800/80",
    1: "bg-[#0B0F1A]",
    2: "bg-[#2DD4BF]/15 border border-[#2DD4BF]/50",
  };

  const DPadBtn = ({ dr, dc, icon: Icon, label }: { dr: number; dc: number; icon: any; label: string }) => (
    <button
      onPointerDown={(e) => { e.preventDefault(); move(dr, dc); }}
      aria-label={label}
      className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center rounded-xl
                 bg-[#0F172A] border border-[#FF6B6B]/30 text-[#FF6B6B]
                 active:bg-[#FF6B6B]/20 active:border-[#FF6B6B] active:scale-95
                 hover:bg-[#FF6B6B]/10 hover:border-[#FF6B6B]/60
                 transition-all duration-100 select-none shadow-md
                 shadow-[0_0_12px_rgba(255,107,107,0.1)]
                 touch-none"
    >
      <Icon size={28} strokeWidth={2.5} />
    </button>
  );

  return (
    <div
      ref={gameRef}
      className="w-full relative bg-[#0B0F1A] border border-[#FF6B6B]/20 py-6 px-4 rounded-2xl flex flex-col items-center gap-6 shadow-[0_0_30px_rgba(255,107,107,0.05)] font-inter"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="text-center">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center justify-center gap-2 mb-1">
          <Compass size={18} className="text-[#FF6B6B]" /> Innovation Hub Patrol
        </h3>
        <p className="text-xs text-slate-400 font-mono">
          Find the lab. Use the D-pad, arrow keys, or swipe.
        </p>
      </div>

      {/* Maze Grid */}
      <div
        className="bg-[#0F172A] p-2 border border-slate-800 rounded-xl shadow-inner select-none"
        style={{ touchAction: "none" }}
      >
        {MAZE_LAYOUT.map((row, rIdx) => (
          <div key={rIdx} className="flex">
            {row.map((cell, cIdx) => {
              const isPlayer = playerPos.r === rIdx && playerPos.c === cIdx;
              return (
                <div
                  key={cIdx}
                  className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-colors duration-150 ${CELL_COLORS[cell] ?? ""}`}
                >
                  {isPlayer && (
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-150
                        ${done
                          ? "bg-[#2DD4BF] shadow-[0_0_18px_#2DD4BF]"
                          : "bg-[#FF6B6B] shadow-[0_0_10px_#FF6B6B]"
                        }`}
                    />
                  )}
                  {cell === 2 && !isPlayer && (
                    <span className="text-[9px] sm:text-[10px] text-[#2DD4BF] font-mono font-bold tracking-wider">LAB</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 text-xs font-mono">
        <span className="text-slate-500">STEPS: <span className="text-[#FF6B6B] font-bold">{steps}</span></span>
        <span className="text-slate-700">|</span>
        <span className="text-slate-500">
          {done
            ? <span className="text-[#2DD4BF] font-bold animate-pulse">✓ LAB REACHED</span>
            : <span className="text-slate-400">REACH THE LAB →</span>
          }
        </span>
      </div>

      {/* D-Pad Control Panel — always visible, large touch targets */}
      <div className="flex flex-col items-center gap-1">
        <p className="text-[10px] font-mono text-slate-600 tracking-widest uppercase mb-2">Navigation Panel</p>

        {/* 3×3 grid D-pad */}
        <div className="grid grid-cols-3 gap-2" style={{ gridTemplateRows: "repeat(3, 1fr)" }}>
          {/* Row 1 */}
          <div />
          <DPadBtn dr={-1} dc={0} icon={ChevronUp} label="Move Up" />
          <div />

          {/* Row 2 */}
          <DPadBtn dr={0} dc={-1} icon={ChevronLeft} label="Move Left" />
          {/* Center dot */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-[#0F172A]/50">
            <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 shadow-inner" />
          </div>
          <DPadBtn dr={0} dc={1} icon={ChevronRight} label="Move Right" />

          {/* Row 3 */}
          <div />
          <DPadBtn dr={1} dc={0} icon={ChevronDown} label="Move Down" />
          <div />
        </div>
      </div>
    </div>
  );
}
