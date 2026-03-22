"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Shield, Zap } from "lucide-react";

/**
 * Categorised skill cards group mapping strictly following Aurora Fusion specs.
 */
const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: <Code2 className="text-[#00D4FF]" />,
    skills: [
      { name: "C", desc: "Low-level system programming and memory management." },
      { name: "C++", desc: "Object-oriented programming for high-performance apps." },
      { name: "Java", desc: "Enterprise-grade application development." },
      { name: "Python", desc: "Versatile scripting, AI, and security automation." }
    ]
  },
  {
    title: "Web Development",
    icon: <Globe className="text-[#8B5CF6]" />,
    skills: [
      { name: "HTML", desc: "Standard markup for structural web content." },
      { name: "CSS", desc: "Advanced styling, layouts, and animations." },
      { name: "React", desc: "Building dynamic and interactive user interfaces." },
      { name: "MongoDB", desc: "Scalable NoSQL database management." }
    ]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="text-[#F97316]" />,
    skills: [
      { name: "Networking Fundamentals", desc: "TCP/IP, DNS, and secure data transmission." },
      { name: "SOC Workflow Basics", desc: "Incident response and security monitoring." },
      { name: "Threat Intelligence", desc: "Analyzing and predicting potential cyber threats." },
      { name: "CTF Practice", desc: "Hands-on vulnerability research and exploitation." }
    ]
  },
  {
    title: "Emerging Tech",
    icon: <Zap className="text-[#E5E7EB]" />,
    skills: [
      { name: "IoT Fundamentals", desc: "Connecting and securing smart devices." },
      { name: "Robotics Concepts", desc: "Autonomous logic and physical-world interaction." },
      { name: "Automation Systems", desc: "Streamlining workflows with intelligent logic." },
      { name: "AI Research Workflows", desc: "Leveraging AI for technical discovery." }
    ]
  }
];

export default function SkillsNetwork() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Technical_Capacities
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-6 uppercase tracking-tighter">
          Mastered <span className="text-[#00D4FF]">Skillsets</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          A structured breakdown of technical proficiency across core development and security domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="h-full bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-[#00D4FF]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#0A0F1F] rounded-2xl border border-slate-800 group-hover:bg-[#00D4FF]/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-[#E5E7EB] tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="relative pl-4 border-l border-slate-800 group-hover:border-[#00D4FF]/30 transition-colors">
                    <h4 className="text-sm font-bold text-[#E5E7EB] mb-1">{skill.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
