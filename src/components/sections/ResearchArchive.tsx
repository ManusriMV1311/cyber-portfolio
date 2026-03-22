"use client";

import { Target, FlaskConical, BrainCircuit, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const entries = [
  {
    topic: "Autonomous Sentinel Systems",
    overview: "Using artificial intelligence to monitor network traffic and spot unusual activities instantly, much like a digital security guard that never sleeps.",
    why: "Older security systems rely on knowing what an attack looks like beforehand. This new approach catches brand new, unknown threats.",
    approach: "Teaching an AI model what 'normal' network traffic looks like, so it can flag anything out of the ordinary.",
    future: "Building this intelligence directly into network routers and hardware devices.",
    icon: Target,
    color: "#2DD4BF" // Teal
  },
  {
    topic: "Zero-Trust Robotics",
    overview: "Ensuring that robots working in groups constantly verify their identity to prevent a compromised robot from attacking the others.",
    why: "As physical robots become more common, a hacked robot could cause real-world damage if other robots blindly trust it.",
    approach: "Using physical behavior analysis and secure communication channels to constantly re-verify a robot's identity.",
    future: "Creating a secure, shared record system (ledger) for robots to agree on safe tasks.",
    icon: FlaskConical,
    color: "#8B5CF6" // Violet
  },
  {
    topic: "Adversarial Machine Learning",
    overview: "Studying how artificial intelligence can be tricked or poisoned by subtly changing the data it learns from.",
    why: "AI makes critical decisions in society today. If its learning data is corrupted, its decisions cannot be trusted.",
    approach: "Testing AI models by purposely feeding them slightly altered data to see where they fail.",
    future: "Developing an 'immune system' that automatically filters out bad data before the AI learns from it.",
    icon: BrainCircuit,
    color: "#FF6B6B" // Coral
  }
];

export default function ResearchArchive() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-16 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/5 text-[#FF6B6B] text-xs font-mono font-bold mb-4 tracking-widest uppercase">
          Neural Map Interpreted
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#E6EDF3] mb-4">
          Research Ideas
        </h2>
        <p className="text-lg text-slate-400 font-inter leading-relaxed">
          Concepts and theories I am currently exploring for future technological development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {entries.map((entry, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-[#0B0F1A] rounded-3xl border border-slate-800 shadow-sm hover:border-slate-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col items-start group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity"
                style={{ color: entry.color }}
              >
                <entry.icon size={120} />
              </div>

              <div className="p-8 pb-0 flex-1 w-full flex flex-col">
                <div 
                  className="p-3 rounded-2xl mb-6 w-max border"
                  style={{ backgroundColor: `${entry.color}10`, borderColor: `${entry.color}30`, color: entry.color }}
                >
                  <entry.icon size={24} />
                </div>
                
                <h3 className="font-poppins font-bold text-[#E6EDF3] group-hover:text-white text-xl mb-4 leading-tight relative z-10 transition-colors">
                  {entry.topic}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-800 relative z-10 leading-relaxed">
                  {entry.overview}
                </p>

                <div className="space-y-5 flex-1 w-full relative z-10 pb-6">
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">Why it matters</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">{entry.why}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">Technical Approach</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{entry.approach}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F172A] p-6 px-8 border-t border-slate-800 w-full relative z-10 transition-colors" style={{ borderTopColor: `${entry.color}20` }}>
                <h4 
                  className="text-[11px] font-bold tracking-wider uppercase mb-2 flex items-center gap-2"
                  style={{ color: entry.color }}
                >
                  Future Direction <ArrowRight size={12} />
                </h4>
                <p className="text-sm text-slate-400 italic leading-relaxed">
                  &quot;{entry.future}&quot;
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
