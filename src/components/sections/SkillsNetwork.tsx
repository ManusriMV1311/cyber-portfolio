"use client";

import { motion } from "framer-motion";
import { Code2, Database, ShieldAlert, Cpu } from "lucide-react";

const skillsData = [
  { 
    id: "prog", 
    title: "Programming", 
    icon: Code2, 
    color: "text-[#2DD4BF]",
    bg: "bg-[#2DD4BF]/10",
    border: "border-[#2DD4BF]/30",
    skills: ["C", "C++", "Java", "Python"] 
  },
  { 
    id: "web", 
    title: "Web Development", 
    icon: Database, 
    color: "text-[#8B5CF6]",
    bg: "bg-[#8B5CF6]/10",
    border: "border-[#8B5CF6]/30",
    skills: ["HTML", "CSS", "React", "MongoDB"] 
  },
  { 
    id: "sec", 
    title: "Cybersecurity", 
    icon: ShieldAlert, 
    color: "text-[#FF6B6B]",
    bg: "bg-[#FF6B6B]/10",
    border: "border-[#FF6B6B]/30",
    skills: ["Networking fundamentals", "SOC workflow basics", "Threat intelligence", "CTF practice"] 
  },
  { 
    id: "tech", 
    title: "Emerging Tech", 
    icon: Cpu, 
    color: "text-[#E6EDF3]",
    bg: "bg-slate-800",
    border: "border-slate-700",
    skills: ["IoT fundamentals", "Robotics concepts", "Automation systems", "AI assisted workflows"] 
  },
];

export default function SkillsNetwork() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-xs font-mono font-bold mb-4 tracking-widest uppercase">
          Memory Sector Unlocked
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#E6EDF3] mb-4">
          Core Proficiencies
        </h2>
        <p className="text-lg text-slate-400 font-inter leading-relaxed">
          A structured index of my technical capabilities and theoretical knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-8 rounded-2xl border ${category.border} bg-[#0B0F1A] shadow-sm hover:shadow-[0_0_25px_rgba(45,212,191,0.05)] transition-all flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${category.bg} ${category.color}`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#E6EDF3] font-poppins">{category.title}</h3>
            </div>
            
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-slate-400 font-inter">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${category.bg.split('/')[0].replace('bg-', 'bg-')}`} />
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
