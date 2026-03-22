"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/gamificationStore";
import { ShieldAlert, Bot, Cpu } from "lucide-react";

export default function IdentityCore() {
  const { markVisited } = useStore();

  useEffect(() => {
    markVisited(1);
  }, [markVisited]);

  const interests = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-blue-500" />,
      title: "Cybersecurity",
      desc: "Deep dive into network defense, threat intelligence, and securing modern digital infrastructure.",
      delay: 0.2
    },
    {
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      title: "Robotics",
      desc: "Building autonomous systems and exploring the physical application of intelligent logic.",
      delay: 0.3
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: "Artificial Intelligence",
      desc: "Leveraging machine learning for automation, predictive security, and scalable problem-solving.",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
      <div className="mb-16 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 1
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          About Me
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          I am a cybersecurity undergraduate driven by curiosity. My focus lies at the intersection of security, robotics, and artificial intelligence, designing technology solutions for complex real-world challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: interest.delay }}
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6 group-hover:bg-blue-50 transition-colors">
              {interest.icon}
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#0F172A] mb-3">
              {interest.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {interest.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
