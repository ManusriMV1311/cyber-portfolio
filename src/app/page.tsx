"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/gamificationStore";

// Arcade components
import ArcadeLanding from "@/components/arcade/ArcadeLanding";
import OrbHunterGame from "@/components/arcade/OrbHunterGame";
import MemoryMatchGame from "@/components/arcade/MemoryMatchGame";
import MazeExplorerGame from "@/components/arcade/MazeExplorerGame";
import LogicExperimentGame from "@/components/arcade/LogicExperimentGame";
import IdeaDiscoveryGame from "@/components/arcade/IdeaDiscoveryGame";
import MissionComplete from "@/components/arcade/MissionComplete";

// Portfolio sections (unlocked as rewards)
import IdentityCore from "@/components/sections/IdentityCore";
import SkillsNetwork from "@/components/sections/SkillsNetwork";
import SystemMap from "@/components/sections/SystemMap";
import TechExperiments from "@/components/sections/TechExperiments";
import ResearchArchive from "@/components/sections/ResearchArchive";
import ContactNode from "@/components/sections/ContactNode";

// Fade-in wrapper for revealed sections
function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

// Badges that pop up after each game win
const GAME_BADGES = [
  { level: 1, emoji: "🎯", label: "Orb Hunter", color: "#2DD4BF" },
  { level: 2, emoji: "🧠", label: "Memory Ace", color: "#8B5CF6" },
  { level: 3, emoji: "🧭", label: "Maze Runner", color: "#FF6B6B" },
  { level: 4, emoji: "🔐", label: "Logic Breaker", color: "#2DD4BF" },
  { level: 5, emoji: "💡", label: "Idea Hunter", color: "#8B5CF6" },
];

function BadgeToast({ badge, onDone }: { badge: typeof GAME_BADGES[0]; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full border shadow-lg font-mono text-sm font-bold tracking-wider"
      style={{
        backgroundColor: `${badge.color}15`,
        borderColor: `${badge.color}60`,
        color: badge.color,
        boxShadow: `0 0 20px ${badge.color}30`,
      }}
    >
      <span className="text-xl">{badge.emoji}</span>
      <span>BADGE UNLOCKED — {badge.label.toUpperCase()}</span>
    </motion.div>
  );
}

export default function Home() {
  const { skipGames, setSkipGames, gameStarted, unlockedLevels, unlockLevel, awardBadge } = useStore();

  // Has user made a choice yet (start vs skip)?
  const hasChosen = gameStarted || skipGames;

  // Badge notification state
  const [activeBadge, setActiveBadge] = React.useState<typeof GAME_BADGES[0] | null>(null);

  // When a game is won: award badge, unlock next level
  const handleGameComplete = (gameLevel: number) => {
    const badge = GAME_BADGES.find(b => b.level === gameLevel);
    if (badge) {
      awardBadge(badge.label);
      setActiveBadge(badge);
    }
    // Unlock the portfolio section that corresponds to this game:
    // Game 1 → level 1 (About Me), Game 2 → level 2 (Skills), etc.
    unlockLevel(gameLevel);
    // After the last game, also unlock the contact (level 6)
    if (gameLevel === 5) {
      unlockLevel(6);
    }
  };

  // Current active game = the first locked level that has a preceding unlocked section
  // Games are displayed at level N before the section at that level is shown
  const currentGame = (() => {
    for (let n = 1; n <= 5; n++) {
      if (!unlockedLevels.includes(n)) return n;
    }
    return null; // all games done
  })();

  const allComplete = unlockedLevels.includes(5) || unlockedLevels.includes(6);

  // If skip requested, unlock all levels at once
  const handleSkip = () => {
    setSkipGames(true);
    [1, 2, 3, 4, 5, 6].forEach(n => unlockLevel(n));
  };

  // Replace the store's skip button to use our handler above
  // We need to intercept the ArcadeLanding's skip call.
  // The ArcadeLanding calls setSkipGames(true) directly.
  // We handle that in a useEffect:
  useEffect(() => {
    if (skipGames && !unlockedLevels.includes(1)) {
      [1, 2, 3, 4, 5, 6].forEach(n => unlockLevel(n));
    }
  }, [skipGames, unlockedLevels, unlockLevel]);

  const isUnlocked = (n: number) => unlockedLevels.includes(n);

  if (!hasChosen) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <ArcadeLanding />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col relative z-10 pt-8 pb-24">
      <AnimatePresence>
        {activeBadge && (
          <BadgeToast
            key={activeBadge.label}
            badge={activeBadge}
            onDone={() => setActiveBadge(null)}
          />
        )}
      </AnimatePresence>

      {/* ── MISSION COMPLETE banner (shown in skip mode or after all games) ── */}
      {(skipGames || allComplete) && (
        <Reveal>
          <section className="w-full flex items-center justify-center py-12">
            <MissionComplete />
          </section>
        </Reveal>
      )}

      {/* ── GAME 1: Orb Hunter (before About Me is revealed) ── */}
      {!isUnlocked(1) && currentGame === 1 && (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-6">
          <div className="text-center mb-2">
            <span className="text-[#2DD4BF] font-mono text-xs tracking-widest uppercase font-bold">Level 1 — Unlock About Me</span>
          </div>
          <div className="w-full max-w-2xl">
            <OrbHunterGame onComplete={() => handleGameComplete(1)} />
          </div>
          <button onClick={handleSkip} className="text-xs text-slate-600 hover:text-slate-400 font-mono tracking-wider mt-2 transition-colors">
            skip games →
          </button>
        </section>
      )}

      {/* ── LEVEL 1: About Me ── */}
      {isUnlocked(1) && (
        <Reveal>
          <section id="level-1" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <IdentityCore />
          </section>
        </Reveal>
      )}

      {/* ── GAME 2: Memory Match (before Skills) ── */}
      {isUnlocked(1) && !isUnlocked(2) && currentGame === 2 && (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-6">
          <div className="text-center mb-2">
            <span className="text-[#8B5CF6] font-mono text-xs tracking-widest uppercase font-bold">Level 2 — Unlock Skills</span>
          </div>
          <div className="w-full max-w-2xl">
            <MemoryMatchGame onComplete={() => handleGameComplete(2)} />
          </div>
          <button onClick={handleSkip} className="text-xs text-slate-600 hover:text-slate-400 font-mono tracking-wider mt-2 transition-colors">
            skip games →
          </button>
        </section>
      )}

      {/* ── LEVEL 2: Skills ── */}
      {isUnlocked(2) && (
        <Reveal>
          <section id="level-2" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <SkillsNetwork />
          </section>
        </Reveal>
      )}

      {/* ── GAME 3: Maze Explorer (before Projects) ── */}
      {isUnlocked(2) && !isUnlocked(3) && currentGame === 3 && (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-6">
          <div className="text-center mb-2">
            <span className="text-[#FF6B6B] font-mono text-xs tracking-widest uppercase font-bold">Level 3 — Unlock Projects</span>
          </div>
          <div className="w-full max-w-2xl">
            <MazeExplorerGame onComplete={() => handleGameComplete(3)} />
          </div>
          <button onClick={handleSkip} className="text-xs text-slate-600 hover:text-slate-400 font-mono tracking-wider mt-2 transition-colors">
            skip games →
          </button>
        </section>
      )}

      {/* ── LEVEL 3: Projects ── */}
      {isUnlocked(3) && (
        <Reveal>
          <section id="level-3" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <SystemMap />
          </section>
        </Reveal>
      )}

      {/* ── GAME 4: Logic Experiment (before Tech Experiments) ── */}
      {isUnlocked(3) && !isUnlocked(4) && currentGame === 4 && (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-6">
          <div className="text-center mb-2">
            <span className="text-[#2DD4BF] font-mono text-xs tracking-widest uppercase font-bold">Level 4 — Unlock Tech Lab</span>
          </div>
          <div className="w-full max-w-2xl">
            <LogicExperimentGame onComplete={() => handleGameComplete(4)} />
          </div>
          <button onClick={handleSkip} className="text-xs text-slate-600 hover:text-slate-400 font-mono tracking-wider mt-2 transition-colors">
            skip games →
          </button>
        </section>
      )}

      {/* ── LEVEL 4: Tech Experiments ── */}
      {isUnlocked(4) && (
        <Reveal>
          <section id="level-4" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <TechExperiments />
          </section>
        </Reveal>
      )}

      {/* ── GAME 5: Idea Discovery (before Research) ── */}
      {isUnlocked(4) && !isUnlocked(5) && currentGame === 5 && (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-6">
          <div className="text-center mb-2">
            <span className="text-[#8B5CF6] font-mono text-xs tracking-widest uppercase font-bold">Level 5 — Unlock Research Ideas</span>
          </div>
          <div className="w-full max-w-2xl">
            <IdeaDiscoveryGame onComplete={() => handleGameComplete(5)} />
          </div>
          <button onClick={handleSkip} className="text-xs text-slate-600 hover:text-slate-400 font-mono tracking-wider mt-2 transition-colors">
            skip games →
          </button>
        </section>
      )}

      {/* ── LEVEL 5: Research Ideas ── */}
      {isUnlocked(5) && (
        <Reveal>
          <section id="level-5" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <ResearchArchive />
          </section>
        </Reveal>
      )}

      {/* ── LEVEL 6: Contact (always shown after all unlocks) ── */}
      {isUnlocked(6) && (
        <Reveal>
          <section id="level-6" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 py-12">
            <ContactNode />
          </section>
        </Reveal>
      )}
    </div>
  );
}
