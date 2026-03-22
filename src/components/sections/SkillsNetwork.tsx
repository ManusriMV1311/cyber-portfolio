"use client";

import { motion } from "framer-motion";
import { Code2, Globe, ShieldCheck, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: <Code2 className="text-[#2DD4BF]" size={20} />,
    skills: ["C", "C++", "Java", "Python"],
    color: "#2DD4BF"
  },
  {
    title: "Web Development",
    icon: <Globe className="text-[#8B5CF6]" size={20} />,
    skills: ["HTML", "CSS", "React", "MongoDB"],
    color: "#8B5CF6"
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="text-[#FF6B6B]" size={20} />,
    skills: ["Networking Fundamentals", "SOC Basics", "Threat Intelligence", "CTF Practice"],
    color: "#FF6B6B"
  },
  {
    title: "Emerging Technology",
    icon: <Cpu className="text-[#E6EDF3]" size={20} />,
    skills: ["IoT", "Robotics", "Automation", "AI Assisted Workflows"],
    color: "#E6EDF3"
  }
];

export default function SkillsNetwork() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Technical Arsenal
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-6">
          Skills & <span className="text-[#8B5CF6]">Expertise</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          A comprehensive breakdown of my technical capabilities across various domains of computer science and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#0B0F1A] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            {/* Background Glow */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
              style={{ backgroundColor: category.color }}
            />

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-[#0F172A] border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold font-poppins text-[#E6EDF3] tracking-tight">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              {category.skills.map(skill => (
                <div 
                  key={skill}
                  className="flex items-center gap-3 text-slate-400 font-inter text-sm group/skill"
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/skill:scale-150"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="group-hover/skill:text-[#E6EDF3] transition-colors">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/50">
              <div className="w-full h-1.5 bg-[#0F172A] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.2 + 0.5 }}
                  className="h-full rounded-full opacity-40"
                  style={{ backgroundColor: category.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
