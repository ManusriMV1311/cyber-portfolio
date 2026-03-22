"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Binoculars, Zap, Search, Activity, Cpu, ArrowRight } from "lucide-react";

/**
 * Technical experiments and learning topics following Aurora Fusion specs.
 */
const EXPERIMENTS = [
  {
    title: "SOC Workflows",
    category: "Security Operations",
    icon: <Shield className="text-[#00D4FF]" />,
    desc: "Developing conceptual frameworks for incident response, alert triage, and security monitoring in enterprise environments.",
    tags: ["SIEM Concepts", "Incident Response", "Threat Hunting"],
    color: "#00D4FF"
  },
  {
    title: "CTF Challenges",
    category: "Vulnerability Research",
    icon: <Terminal className="text-[#8B5CF6]" />,
    desc: "Continuous practice in web exploitation, reverse engineering, and cryptography through competitive Capture The Flag events.",
    tags: ["Pwn", "Web Security", "Reverse Engineering"],
    color: "#8B5CF6"
  },
  {
    title: "Network Auditing",
    category: "Infrastructure Security",
    icon: <Search className="text-[#F97316]" />,
    desc: "Researching methodologies for detecting unauthorized devices and assessing protocol vulnerabilities in local networks.",
    tags: ["Nmap", "Wireshark", "Packet Analysis"],
    color: "#F97316"
  },
  {
    title: "AI Research",
    category: "Technical Discovery",
    icon: <Cpu className="text-[#E5E7EB]" />,
    desc: "Leveraging large language models and neural networks to accelerate technical discovery and automate pattern recognition.",
    tags: ["LLMs", "Data Analysis", "Automation"],
    color: "#E5E7EB"
  }
];

export default function TechExperiments() {
  return (
    <section id="experiments" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#F97316]/30 bg-[#F97316]/5 text-[#F97316] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Research_Lab
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-6 uppercase tracking-tighter">
          Learning & <span className="text-[#F97316]">Experiments</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          Active technical research areas and ongoing development labs focusing on security and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIMENTS.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-[#111827] border border-slate-800 rounded-[2rem] p-8 lg:p-10 hover:border-[#F97316]/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            {/* Background Glow */}
            <div 
              className="absolute -top-10 -right-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
              style={{ backgroundColor: exp.color }}
            />

            <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10 flex-1">
              <div className="p-5 bg-[#0A0F1F] rounded-2xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {exp.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#F97316] uppercase tracking-widest">{exp.category}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest italic tracking-tighter">Module_{idx + 1}</span>
                </div>
                
                <h3 className="text-2xl font-black font-poppins text-[#E5E7EB] mb-4 group-hover:text-[#F97316] transition-colors tracking-tight">{exp.title}</h3>
                
                <p className="text-slate-400 font-inter leading-relaxed mb-8 text-sm">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#0A0F1F] border border-slate-800 text-[9px] font-mono text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-800/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#F97316] transition-colors" />
                <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest group-hover:text-slate-500 transition-colors">Lab_Access: Open</span>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-black font-poppins text-[#F97316] hover:translate-x-1 transition-transform uppercase tracking-widest group/btn">
                Launch Module <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
