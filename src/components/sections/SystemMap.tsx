"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cpu, Waves, Plane, ArrowRight, Layout, Info, Layers, Wrench, Rocket, Target, Lightbulb, Workflow } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "EduTrack System",
    type: "Educational Automation",
    icon: <Layout className="text-[#00D4FF]" />,
    color: "#00D4FF",
    problem: "Inefficient manual tracking in government schools leading to resource misallocation and poor attendance monitoring.",
    concept: "A unified localized teacher assistant automation system concept leveraging edge networks for low-latency synchronization.",
    workflow: "Data Ingestion → Validation → Visual Analytics → Secure Export.",
    tech: "Next.js, MongoDB, Auth0, Framer Motion.",
    future: "Integration with blockchain for immutable certificate verification and RFID checkpoint hardware prototypes."
  },
  {
    id: "02",
    title: "Bodyguard Robot",
    type: "Autonomous Robotics",
    icon: <Cpu className="text-[#8B5CF6]" />,
    color: "#8B5CF6",
    problem: "Ensuring personal safety in high-risk environments where manual surveillance is either dangerous or impossible.",
    concept: "An autonomous hardware platform equipped with obstacle avoidance and real-time threat detection logic.",
    workflow: "Environment Mapping → Threat Analysis → Autonomous Navigation → Alert Trigger.",
    tech: "Arduino, GPS/GSM Modules, C++, Proximity Sensors.",
    future: "Deep learning integration for advanced behavior recognition and long-range Mesh network support."
  },
  {
    id: "03",
    title: "Water Pipeline Protection",
    type: "Critical Infrastructure",
    icon: <Waves className="text-[#F97316]" />,
    color: "#F97316",
    problem: "Massive water loss and resource damage from undetected subsurface pipeline leaks and unauthorized tampering.",
    concept: "An automated sensor-grid system that monitors pressure differentials and detects vibrations to pinpoint vulnerabilities.",
    workflow: "Sensor Data Collection → Threshold Comparison → Anomaly Localization → Auto-Shutdown.",
    tech: "IoT Sensors, MQTT Protocol, LoRaWAN, Node-RED.",
    future: "Testing autonomous computer vision for localized visual leak detection via inspection drones."
  },
  {
    id: "04",
    title: "Aerolime System",
    type: "Environmental Solution",
    icon: <Plane className="text-[#E5E7EB]" />,
    color: "#E5E7EB",
    problem: "Severe ecological and structural damage from acid rain in heavy industrial zones affecting heritage and health.",
    concept: "An AI-driven neutralization system concept using precisely timed lime dispersion based on real-time weather data.",
    workflow: "Weather API → AI Predictor Model → Dispatch Logic → Operational Report.",
    tech: "Python, TensorFlow, Drone SDK, Meteorological Datasets.",
    future: "Simulating dispersion patterns in virtual aerodynamic environments to optimize chemical usage."
  }
];

export default function SystemMap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const p = PROJECTS[activeIdx];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Mission_Portfolio
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-6 uppercase tracking-tighter">
          Strategic <span className="text-[#00D4FF]">Deployments</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl">
          Detailed breakdown of core technical projects, from concept to potential future prototyping.
        </p>
      </div>

      <div className="w-full bg-[#111827] rounded-[2.5rem] border border-slate-800 overflow-hidden flex flex-col lg:flex-row min-h-[650px] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        
        {/* Sidebar Selector */}
        <div className="w-full lg:w-1/3 bg-[#0A0F1F]/50 border-b lg:border-b-0 lg:border-r border-slate-800 p-8 space-y-4">
          <div className="flex items-center gap-2 mb-6 px-2">
            <Target size={14} className="text-[#00D4FF]" />
            <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Active_Missions</span>
          </div>
          {PROJECTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-full flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeIdx === idx 
                  ? "bg-[#111827] border-[#00D4FF]/50 shadow-[0_0_30px_rgba(0,212,255,0.05)]" 
                  : "bg-transparent border-transparent hover:bg-slate-800/30 hover:border-slate-800"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-1.5 h-1.5 rounded-full ${activeIdx === idx ? "bg-[#00D4FF] animate-pulse" : "bg-slate-700"}`} />
                <span className={`font-mono text-[10px] tracking-[0.2em] font-bold uppercase ${activeIdx === idx ? "text-[#00D4FF]" : "text-slate-500"}`}>
                  Deployment_{m.id}
                </span>
              </div>
              <span className={`font-poppins font-black text-lg ${activeIdx === idx ? "text-[#E5E7EB]" : "text-slate-600"} transition-colors`}>
                {m.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-96 h-96 blur-[120px] opacity-10 pointer-events-none"
            style={{ backgroundColor: p.color }}
          />
          
          <div className="p-8 lg:p-12 relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#0A0F1F] rounded-2xl border border-slate-800 shadow-inner">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-black text-3xl text-[#E5E7EB] tracking-tight">{p.title}</h3>
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1 italic">{p.type}</p>
                </div>
              </div>
              <div className="hidden md:block px-4 py-1.5 rounded-full border border-slate-800 bg-[#0A0F1F] text-slate-500 text-[9px] font-black font-mono tracking-widest uppercase">
                Mission_Status: Analytical_Phase
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1"
              >
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00D4FF]">
                      <Info size={14} />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest">The Problem</span>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed font-inter italic border-l-2 border-[#00D4FF]/20 pl-6">
                      &quot;{p.problem}&quot;
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#8B5CF6]">
                      <Lightbulb size={14} />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest">Concept Idea</span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed">
                      {p.concept}
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#F97316]">
                      <Workflow size={14} />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest">System Workflow</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0A0F1F] border border-slate-800 text-xs font-mono text-[#F97316]/80 leading-loose flex items-center justify-center text-center shadow-inner">
                      {p.workflow}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Wrench size={14} />
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Tech Stack</span>
                      </div>
                      <p className="text-slate-500 text-xs font-mono font-bold letter tracking-tight">
                        {p.tech}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#00D4FF]">
                        <Rocket size={14} />
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Future Plan</span>
                      </div>
                      <p className="text-slate-400 text-xs font-inter leading-relaxed">
                        {p.future}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[9px] font-mono font-black text-slate-600 uppercase tracking-[0.2em]">Deployment_Protocol: V1.0_PROPOSAL</span>
              <button className="flex items-center gap-2 text-xs font-black font-poppins text-[#00D4FF] hover:translate-x-1 transition-transform uppercase tracking-widest group">
                Access Documentation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
