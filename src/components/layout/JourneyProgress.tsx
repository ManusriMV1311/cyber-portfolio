"use client";

import React, { useEffect, useState } from "react";
import { Beaker } from "lucide-react";

const levels = [
  { id: "level-0", title: "Welcome" },
  { id: "level-1", title: "About Me" },
  { id: "level-2", title: "Skills" },
  { id: "level-3", title: "Project Missions" },
  { id: "level-4", title: "Tech Experiments" },
  { id: "level-5", title: "Research Ideas" },
  { id: "level-6", title: "Contact" },
];

export default function JourneyProgress() {
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Find the deeply scrolled section
      const sections = levels.map(level => document.getElementById(level.id));
      let currentIdx = 0;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section's top is at or above the middle of viewport
          if (rect.top <= window.innerHeight / 2) {
            currentIdx = i;
            break;
          }
        }
      }
      
      setActiveLevel(currentIdx);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-auto bg-[#F8FAFC]/80 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="p-2 lab-panel bg-white border border-blue-100 rounded-lg shadow-sm">
          <Beaker size={20} className="text-blue-500" />
        </div>
        <div>
          <h1 className="font-poppins font-semibold text-lg text-[#0F172A] tracking-wider uppercase">
            Digital Innovation Lab
          </h1>
          <p className="text-xs text-blue-600 mt-0.5 font-medium uppercase">
            {levels[activeLevel]?.title || "Journey"}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <span className="text-sm font-semibold text-[#0F172A] mb-1">
          Journey Progress
        </span>
        <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-inner">
          Level {activeLevel} of 6
        </span>
      </div>
    </header>
  );
}
