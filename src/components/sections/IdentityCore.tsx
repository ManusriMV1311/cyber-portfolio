"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Bot, Cpu } from "lucide-react";

export default function IdentityCore() {
  const interests = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#FF6B6B]" />,
      title: "Cybersecurity",
      desc: "Specializing in network defense and securing modern digital infrastructure.",
      delay: 0.2
    },
    {
      icon: <Bot className="w-8 h-8 text-[#2DD4BF]" />,
      title: "Robotics",
      desc: "Building autonomous systems and exploring the physical application of intelligent logic.",
      delay: 0.3
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Artificial Intelligence",
      desc: "Leveraging machine learning for automation, predictive security, and scalable problem-solving.",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-4 tracking-widest uppercase">
          Profile Decrypted
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#E6EDF3] mb-4">
          About Me
        </h2>
        <p className="text-lg text-slate-400 font-inter leading-relaxed">
          I am Manusri, a Computer Science Engineering student specializing in cybersecurity with deep interests in AI, robotics, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: interest.delay }}
            className="bg-[#0B0F1A] rounded-2xl p-8 border border-slate-800 shadow-sm hover:border-[#2DD4BF]/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-4 bg-[#0F172A] rounded-2xl border border-slate-800 mb-6 group-hover:bg-[#2DD4BF]/10 transition-colors">
              {interest.icon}
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#E6EDF3] mb-3 group-hover:text-[#2DD4BF] transition-colors">
              {interest.title}
            </h3>
            <p className="text-slate-400 font-inter leading-relaxed text-sm">
              {interest.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
