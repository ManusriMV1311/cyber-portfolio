"use client";

import { useState, useEffect, useRef } from "react";
import { useStore } from "@/store/gamificationStore";
import { Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function TerminalSection() {
  const { markVisited } = useStore();
  const [history, setHistory] = useState<{ id: number; text: React.ReactNode; user: boolean }[]>([
    { id: 1, text: "Welcome to Manusri's Resume Terminal v1.0.4", user: false },
    { id: 2, text: "Type 'help' to see available commands.", user: false }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    markVisited(7);
  }, [markVisited]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { id: Date.now(), text: `> ${input}`, user: true }];

    let response: React.ReactNode = "";
    switch (cmd) {
      case "help":
        response = "Commands: about, skills, projects, download, clear";
        break;
      case "about":
        response = "Manusri M V - Cyber Security undergrad passionate about AI, Robotics, and automation.";
        break;
      case "skills":
        response = "[C, C++, Java, Python, HTML/CSS/React, Networking, Threat Intel, IoT, Robotics]";
        break;
      case "projects":
        response = "EduTrack, Bodyguard Robot, Pipeline Protector, Aerolime.";
        break;
      case "download":
        response = <a href="#" className="underline text-[#00f0ff] hover:text-[#bc13fe]">Initiating resume download... (Simulated)</a>;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
    }

    setHistory([...newHistory, { id: Date.now() + 1, text: response, user: false }]);
    setInput("");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 w-full">
        <TerminalIcon className="text-[#00f0ff] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Resume Terminal
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-[60vh] glass-panel rounded-xl overflow-hidden border border-[#00f0ff]/30 box-glow flex flex-col"
      >
        <div className="w-full bg-[#0a0a1a] p-3 flex items-center gap-2 border-b border-[#00f0ff]/20">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="ml-4 text-xs font-mono text-gray-400">root@manusri-mv:~</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm tracking-wide text-green-400 space-y-2">
          {history.map((line) => (
            <div key={line.id} className={line.user ? "text-[#00f0ff]" : "text-green-400"}>
              {line.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form onSubmit={handleCommand} className="w-full p-4 bg-[#0a0a1a] flex items-center gap-2 border-t border-[#00f0ff]/20">
          <span className="text-[#00f0ff] font-bold font-mono">~$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#00f0ff] font-mono caret-[#bc13fe]"
            autoFocus
          />
        </form>
      </motion.div>
    </div>
  );
}
