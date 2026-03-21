"use client";

import { useEffect } from "react";
import { useStore } from "@/store/gamificationStore";
import { Flag, Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "Phase 1",
    title: "The Foundation",
    desc: "Began journey in cybersecurity fundamentals, networking concepts, and Linux administration.",
    status: "completed"
  },
  {
    year: "Phase 2",
    title: "Automation & Robotics",
    desc: "Explored microcontrollers, IoT, and hardware automation, realizing the need for physical-digital security.",
    status: "completed"
  },
  {
    year: "Phase 3",
    title: "Innovation Prototyping",
    desc: "Designed holistic system concepts like EduTrack and Pipeline Protector focusing on real-world impact.",
    status: "completed"
  },
  {
    year: "Current",
    title: "AI Integration & CTF",
    desc: "Actively solving CTF challenges and researching how AI pipelines can revolutionize threat hunting.",
    status: "active"
  }
];

export default function TimelineSection() {
  const { markVisited } = useStore();

  useEffect(() => {
    markVisited(6);
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative max-w-5xl mx-auto py-10">
      <div className="flex items-center gap-3 mb-16 w-full">
        <Flag className="text-[#00f0ff] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Learning Journey
        </h2>
      </div>

      <div className="relative w-full max-w-4xl px-4">
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00f0ff] via-[#bc13fe] to-transparent" />

        <div className="space-y-12">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-20 h-20 flex items-center justify-center z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.status === 'active' ? 'bg-[#bc13fe] animate-pulse shadow-[0_0_15px_#bc13fe]' : 'bg-[#0a0a1a] border-2 border-[#00f0ff]'
                  }`}>
                    {item.status === 'active' ? <Play size={16} className="text-white ml-1" /> : <CheckCircle size={16} className="text-[#00f0ff]" />}
                  </div>
                </div>

                {/* Content Box */}
                <div className={`ml-20 md:ml-0 md:w-[45%] glass-panel p-6 rounded-lg border ${
                  item.status === 'active' ? 'border-[#bc13fe]' : 'border-[#00f0ff]/30'
                }`}>
                  <span className={`text-xs font-mono font-bold tracking-widest ${item.status === 'active' ? 'text-[#bc13fe]' : 'text-[#00f0ff]'}`}>
                    {item.year}
                  </span>
                  <h3 className="text-xl font-orbitron font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
