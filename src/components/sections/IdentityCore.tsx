"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Bot, Cpu, Zap } from "lucide-react";

export default function IdentityCore() {
  const interests = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#FF6B6B]" />,
      title: "Cybersecurity",
      desc: "Deeply interested in securing digital landscapes through threat intelligence and network defense systems.",
      delay: 0.2
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#2DD4BF]" />,
      title: "Artificial Intelligence",
      desc: "Exploring how machine learning and neural networks can optimize complex decision-making processes.",
      delay: 0.3
    },
    {
      icon: <Bot className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Robotics",
      desc: "Building and conceptualizing autonomous hardware that bridges the gap between software and the physical world.",
      delay: 0.4
    },
    {
      icon: <Zap className="w-8 h-8 text-[#E6EDF3]" />,
      title: "Automation",
      desc: "Passionate about streamlining repetitive tasks through intelligent scripts and integrated IoT systems.",
      delay: 0.5
    }
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center">
      <div className="mb-16 text-center max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Developer Story
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-8">
          The <span className="text-[#2DD4BF]">Human</span> Behind the Logic
        </h2>
        
        <div className="text-lg md:text-xl text-slate-400 font-inter leading-relaxed space-y-6 text-left md:text-center">
          <p>
            I am a Computer Science Engineering student with a passion for building systems that are not only intelligent but also secure and autonomous. My journey began with a curiosity about how devices communicate, which quickly evolved into a dedicated pursuit of **Cybersecurity**, **AI**, and **Robotics**.
          </p>
          <p>
            Whether it&apos;s coding autonomous safety robots or designing automated systems for critical infrastructure, my goal is to create technology that makes the world more efficient and safer. I believe the intersection of these fields is where the most impactful innovation happens.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: interest.delay }}
            className="bg-[#0B0F1A] rounded-2xl p-8 border border-slate-800 shadow-sm hover:border-[#2DD4BF]/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300 flex flex-col items-start group relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
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
    </section>
  );
}
