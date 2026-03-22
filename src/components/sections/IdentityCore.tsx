"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Bot, Zap, User } from "lucide-react";

export default function IdentityCore() {
  const interests = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00D4FF]" />,
      title: "Cybersecurity",
      desc: "Specializing in securing digital landscapes and threat intelligence workflows.",
      delay: 0.1
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#8B5CF6]" />,
      title: "AI & Learning",
      desc: "Exploring machine learning to optimize decision-making and pattern recognition.",
      delay: 0.2
    },
    {
      icon: <Bot className="w-8 h-8 text-[#F97316]" />,
      title: "Robotics",
      desc: "Conceptualizing and building autonomous hardware for physical-world challenges.",
      delay: 0.3
    },
    {
      icon: <Zap className="w-8 h-8 text-[#E5E7EB]" />,
      title: "Automation",
      desc: "Streamlining complex processes through resilient scripts and IoT concepts.",
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center">
      <div className="mb-20 text-center max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Identity_Module
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-8 uppercase tracking-tighter">
          The <span className="text-[#00D4FF]">Developer</span> Story
        </h2>
        
        <div className="text-lg md:text-xl text-slate-400 font-inter leading-relaxed space-y-6 text-left md:text-center">
          <p>
            I am a <span className="text-[#E5E7EB] font-bold">Computer Science Engineering</span> student specializing in <span className="text-[#00D4FF]">Cybersecurity</span> at my core. My work is driven by curiosity and a focus on solving real-world problems using the latest technology architectures.
          </p>
          <p>
            I specialize in the intersection of <span className="text-slate-200">secure systems</span>, <span className="text-slate-200">artificial intelligence</span>, and <span className="text-slate-200">robotics</span>. My goal is to build automated environments that are not only efficient but fundamentally resilient against modern threats.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: interest.delay }}
            className="bg-[#111827] rounded-3xl p-8 border border-slate-800 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-5 bg-[#0A0F1F] rounded-2xl border border-slate-800 mb-8 group-hover:scale-110 transition-transform">
              {interest.icon}
            </div>
            
            <h3 className="text-xl font-bold font-poppins text-[#E5E7EB] mb-4 uppercase tracking-tight">
              {interest.title}
            </h3>
            
            <p className="text-slate-500 font-inter leading-relaxed text-sm group-hover:text-slate-400 transition-colors">
              {interest.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
