"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, ShieldAlert, Cpu, CheckCircle2 } from "lucide-react";

// Categories and matching logic
const skillsData = [
  { id: "sec", title: "Cybersecurity", icon: ShieldAlert, desc: "Network defense, SOC workflows, and threat intelligence.", matchId: "use-sec" },
  { id: "prog", title: "Programming", icon: Code2, desc: "Python, Java, C++ for building scalable logic.", matchId: "use-prog" },
  { id: "web", title: "Web Development", icon: Database, desc: "React, Next.js, Tailwind for responsive interfaces.", matchId: "use-web" },
  { id: "tech", title: "Emerging Tech", icon: Cpu, desc: "Robotics, AI, IoT integrations.", matchId: "use-tech" },
];

const useCases = [
  { id: "use-web", label: "Interactive user interfaces" },
  { id: "use-prog", label: "Automated backend scripts" },
  { id: "use-tech", label: "Autonomous hardware logic" },
  { id: "use-sec", label: "Security monitoring & defense" },
];

export default function SkillsNetwork() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);

  const handleSkillClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedSkill(id);
    setWrongMatch(null);
  };

  const handleUseCaseClick = (useCaseId: string) => {
    if (!selectedSkill) return;

    const skill = skillsData.find(s => s.id === selectedSkill);
    if (skill && skill.matchId === useCaseId) {
      setMatchedPairs([...matchedPairs, selectedSkill]);
      setSelectedSkill(null);
      setWrongMatch(null);
    } else {
      setWrongMatch(useCaseId);
      setTimeout(() => setWrongMatch(null), 800);
      setSelectedSkill(null);
    }
  };

  const isAllMatched = matchedPairs.length === skillsData.length;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center py-12">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 2
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          Core Proficiencies
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Explore my technical skills. Select a skill card on the left and match it to its real-world application on the right.
        </p>
      </div>

      <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col lg:flex-row gap-12">
        {/* Left: Skills Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData.map((skill) => {
            const isMatched = matchedPairs.includes(skill.id);
            const isSelected = selectedSkill === skill.id;
            
            return (
              <button
                key={skill.id}
                onClick={() => handleSkillClick(skill.id)}
                disabled={isMatched}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col items-start ${
                  isMatched 
                    ? "bg-green-50/50 border-green-200 opacity-60" 
                    : isSelected
                    ? "bg-blue-50 border-blue-400 shadow-md ring-4 ring-blue-400/10 -translate-y-1"
                    : "bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-slate-100 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${isMatched ? "bg-green-100 text-green-600" : "bg-white text-blue-600 shadow-sm"}`}>
                    <skill.icon size={22} />
                  </div>
                  <h3 className="font-semibold text-[#0F172A] font-poppins">{skill.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{skill.desc}</p>
                
                {isMatched && (
                  <div className="absolute top-5 right-5 text-green-500">
                    <CheckCircle2 size={24} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Use cases (Challenge) */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-3 bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
          <h3 className="font-poppins font-semibold text-[#0F172A] mb-4 text-center">
            Mission: Match to Applications
          </h3>
          
          {useCases.map((useCase) => {
            const matchedSkill = skillsData.find(s => s.matchId === useCase.id && matchedPairs.includes(s.id));
            const isWrong = wrongMatch === useCase.id;

            return (
              <button
                key={useCase.id}
                onClick={() => handleUseCaseClick(useCase.id)}
                disabled={!!matchedSkill || !selectedSkill}
                className={`w-full p-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                  matchedSkill
                    ? "bg-green-500 text-white border-green-600 shadow-inner"
                    : isWrong
                    ? "bg-red-50 text-red-600 border-red-300 translate-x-1"
                    : selectedSkill
                    ? "bg-white border-blue-300 text-[#0F172A] hover:bg-blue-50 hover:shadow-sm cursor-pointer border-dashed border-2"
                    : "bg-white/50 border-slate-200 text-slate-400 cursor-not-allowed border-dashed"
                }`}
              >
                {matchedSkill ? `Matches: ${matchedSkill.title}` : useCase.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Level Button */}
      {isAllMatched && (
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mt-12"
        >
          <button
            onClick={() => document.getElementById("level-3")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-[#0F172A] hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg transition-colors flex items-center gap-3"
          >
            System Unlocked: Proceed to Project Missions
            <CheckCircle2 size={20} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
