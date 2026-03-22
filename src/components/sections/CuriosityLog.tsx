"use client";

import { useEffect } from "react";
import { useStore } from "@/store/gamificationStore";
import { Compass, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const logs = [
  {
    logId: "LOG 001",
    date: "Current Focus",
    title: "Exploring SOC Alert Pipelines",
    content: "Diving into SIEM configuration and alert fatigue. How can we filter out false positives using basic machine learning classifiers before human intervention is required?",
    tags: ["SIEM", "SOC", "Data Analysis"]
  },
  {
    logId: "LOG 002",
    date: "Recent Discovery",
    title: "Understanding IoT Anomaly Detection",
    content: "Analyzed MQTT traffic patterns from edge devices. It's fascinating how predictable normal device communication is compared to compromised botnet behaviors.",
    tags: ["IoT", "Networking", "Packet Analysis"]
  },
  {
    logId: "LOG 003",
    date: "Ideation Phase",
    title: "AI Environmental Protection Systems",
    content: "Sketching out architecture for drone-based chemical dispersion to combat acid rain. Main hurdle: reliable weather APIs and low-latency decision making.",
    tags: ["Architecture", "AI", "Drones"]
  }
];

export default function CuriosityLog() {
  const { markVisited } = useStore();

  useEffect(() => {
    markVisited(6);
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto py-10 relative">
      <div className="flex items-center gap-3 mb-12">
        <Compass className="text-purple-400 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-white">
            Curiosity Log
          </h2>
          <p className="text-xs text-purple-300 font-mono tracking-widest mt-1">RESEARCH.NOTES.TIMELINE</p>
        </div>
      </div>

      <div className="relative w-full pl-6 md:pl-0">
        {/* Timeline Track */}
        <div className="absolute left-[39px] md:left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

        <div className="space-y-10">
          {logs.map((log, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start gap-8"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[5px] md:-left-[30px] w-8 h-8 rounded-full bg-[#05050f] border-2 border-purple-500 flex items-center justify-center z-10 box-accent-glow mt-1">
                <TerminalSquare size={12} className="text-blue-400" />
              </div>

              {/* Log Entry Content */}
              <div className="ml-12 md:ml-10 w-full lab-panel p-6 border-l-2 border-l-blue-500 hover:border-l-purple-500 transition-colors">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 border-b border-gray-800 pb-4">
                    <span className="font-mono text-xs tracking-widest text-blue-400 font-bold">{log.logId}</span>
                    <span className="font-mono text-[10px] text-gray-500 bg-black/40 px-2 py-1 rounded">{log.date}</span>
                 </div>
                 
                 <h3 className="text-xl font-orbitron font-bold text-white mb-3">{log.title}</h3>
                 <p className="text-gray-300 text-sm leading-relaxed mb-4">{log.content}</p>

                 <div className="flex gap-2">
                   {log.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded border border-gray-700 text-gray-400">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
