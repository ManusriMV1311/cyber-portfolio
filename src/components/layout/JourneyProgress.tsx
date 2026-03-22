"use client";

import React from "react";
import { useStore } from "@/store/gamificationStore";

export default function JourneyProgress() {
  const { unlockedLevels, badges } = useStore();
  const levelsUnlocked = Math.max(0, unlockedLevels.length - 1);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="sticky top-0 w-full z-50 px-6 py-3 flex items-center justify-between pointer-events-auto bg-[#0B0F1A]/90 backdrop-blur-md border-b border-slate-800/60">
      {/* Left: Inline MV Logo + Title */}
      <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
        {/* MV Monogram — inline (no fixed positioning) */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B0F1A] border border-[#2DD4BF]/30 group-hover:border-[#2DD4BF] transition-colors duration-300 shadow-[0_0_10px_rgba(45,212,191,0.1)] group-hover:shadow-[0_0_16px_rgba(45,212,191,0.35)] overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 via-[#8B5CF6]/10 to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 font-bold text-base tracking-tighter flex items-end leading-none select-none">
            <span className="text-[#E6EDF3] group-hover:text-[#2DD4BF] transition-colors duration-300">M</span>
            <span className="text-[#8B5CF6] group-hover:text-[#FF6B6B] transition-colors duration-300 -ml-0.5">V</span>
          </div>
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#2DD4BF]/50 opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#8B5CF6]/50 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="hidden sm:block">
          <h1 className="font-poppins font-bold text-sm text-[#E6EDF3] tracking-wide leading-tight">
            Manusri&apos;s Tech Arcade
          </h1>
          <p className="text-[10px] text-[#2DD4BF] font-mono font-bold tracking-widest uppercase mt-0.5">
            Cybersecurity · AI · Innovation
          </p>
        </div>
      </div>

      {/* Right: Progress & Badges */}
      <div className="flex items-center gap-3">
        {badges.length > 0 && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] font-mono text-xs font-bold tracking-widest">
            🏅 {badges.length} BADGE{badges.length > 1 ? "S" : ""}
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500 tracking-widest hidden sm:block">LEVELS</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div
                key={n}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  unlockedLevels.includes(n)
                    ? "bg-[#2DD4BF] shadow-[0_0_6px_rgba(45,212,191,0.8)]"
                    : "bg-slate-800"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-slate-400 tracking-widest">
            {levelsUnlocked}<span className="text-slate-600">/6</span>
          </span>
        </div>
      </div>
    </header>
  );
}
