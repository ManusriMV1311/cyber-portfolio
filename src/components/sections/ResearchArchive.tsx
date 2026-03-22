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
    color: "blue"
  },
  {
    topic: "Zero-Trust Robotics",
    overview: "Ensuring that robots working in groups constantly verify their identity to prevent a compromised robot from attacking the others.",
    why: "As physical robots become more common, a hacked robot could cause real-world damage if other robots blindly trust it.",
    approach: "Using physical behavior analysis and secure communication channels to constantly re-verify a robot's identity.",
    future: "Creating a secure, shared record system (ledger) for robots to agree on safe tasks.",
    icon: FlaskConical,
    color: "purple"
  },
  {
    topic: "Adversarial Machine Learning",
    overview: "Studying how artificial intelligence can be tricked or poisoned by subtly changing the data it learns from.",
    why: "AI makes critical decisions in society today. If its learning data is corrupted, its decisions cannot be trusted.",
    approach: "Testing AI models by purposely feeding them slightly altered data to see where they fail.",
    future: "Developing an 'immune system' that automatically filters out bad data before the AI learns from it.",
    icon: BrainCircuit,
    color: "cyan"
  }
];

export default function ResearchArchive() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-16 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 5
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          Research Ideas
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Concepts and theories I am currently exploring for future technological development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {entries.map((entry, idx) => {
          const colorStyles = {
            blue: "bg-blue-50 text-blue-600 border-blue-200",
            purple: "bg-purple-50 text-purple-600 border-purple-200",
            cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
          }[entry.color];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <entry.icon size={120} />
              </div>

              <div className="p-8 pb-0 flex-1 w-full flex flex-col">
                <div className={`p-3 rounded-2xl mb-6 w-max border ${colorStyles}`}>
                  <entry.icon size={24} />
                </div>
                
                <h3 className="font-poppins font-bold text-[#0F172A] text-xl mb-4 leading-tight relative z-10">
                  {entry.topic}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-100 relative z-10 leading-relaxed">
                  {entry.overview}
                </p>

                <div className="space-y-5 flex-1 w-full relative z-10 pb-6">
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1">Why it matters</h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">{entry.why}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1">Technical Approach</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{entry.approach}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 px-8 border-t border-slate-100 w-full relative z-10 group-hover:bg-blue-50 transition-colors">
                <h4 className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-2 flex items-center gap-2">
                  Future Direction <ArrowRight size={12} />
                </h4>
                <p className="text-sm text-slate-600 italic leading-relaxed">
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
