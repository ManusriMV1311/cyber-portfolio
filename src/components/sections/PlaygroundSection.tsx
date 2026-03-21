"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Shield, Unlock, Lock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function PlaygroundSection() {
  const { markVisited } = useStore();
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    markVisited(4);
  }, [markVisited]);

  const analyzePassword = (password: string) => {
    let score = 0;
    if (password.length > 8) score++;
    if (password.length > 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const score = analyzePassword(pwd);
  let status = "WEAK";
  let color = "text-red-500";
  let barColor = "bg-red-500";
  if (score >= 3) { status = "MEDIUM"; color = "text-yellow-500"; barColor = "bg-yellow-500"; }
  if (score >= 4) { status = "STRONG"; color = "text-green-500"; barColor = "bg-green-500"; }
  if (pwd.length === 0) { status = "AWAITING INPUT"; color = "text-gray-500"; barColor = "bg-gray-800"; }

  const lenClass = pwd.length > 8 ? "bg-[#00f0ff]/20 text-[#00f0ff]" : "bg-gray-800 text-gray-500";
  const upClass = /[A-Z]/.test(pwd) ? "bg-[#00f0ff]/20 text-[#00f0ff]" : "bg-gray-800 text-gray-500";
  const numClass = /[0-9]/.test(pwd) ? "bg-[#bc13fe]/20 text-[#bc13fe]" : "bg-gray-800 text-gray-500";
  const symClass = /[^A-Za-z0-9]/.test(pwd) ? "bg-[#bc13fe]/20 text-[#bc13fe]" : "bg-gray-800 text-gray-500";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-10 w-full">
        <Shield className="text-[#bc13fe] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Cyber Playground
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Interactive Module 1: Password Analyzer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 rounded-xl border border-[#00f0ff]/20"
        >
          <div className="flex items-center gap-2 mb-6">
            <Unlock size={20} className="text-[#00f0ff]" />
            <h3 className="text-xl font-orbitron font-bold">Password Threat Analyzer</h3>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Simulate an offline entropy evaluator. Test the resilience of string permutations against brute force dictionaries.
          </p>

          <input 
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Enter test string..."
            className="w-full bg-[#0a0a1a] border border-[#00f0ff]/30 rounded p-3 text-white font-mono focus:outline-none focus:border-[#bc13fe] transition-colors mb-4"
          />

          <div className="flex justify-between text-xs font-orbitron font-bold mb-2">
            <span className="text-gray-500">STRENGTH</span>
            <span className={color}>{status}</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${barColor}`} 
              style={{ width: pwd.length === 0 ? "0%" : `${(score / 5) * 100}%` }}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
             <span className={`px-2 py-1 rounded ${lenClass}`}>Length &gt; 8</span>
             <span className={`px-2 py-1 rounded ${upClass}`}>Uppercase</span>
             <span className={`px-2 py-1 rounded ${numClass}`}>Number</span>
             <span className={`px-2 py-1 rounded ${symClass}`}>Symbol</span>
          </div>
        </motion.div>

        {/* Info Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-xl border border-[#bc13fe]/20 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Lock size={120} className="text-[#bc13fe]" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle size={20} className="text-[#bc13fe]" />
            <h3 className="text-xl font-orbitron font-bold">Threat Intelligence</h3>
          </div>
          
          <ul className="space-y-4 text-sm text-gray-300 tracking-wide">
            <li className="flex items-start gap-2">
              <span className="text-[#bc13fe] mt-1">»</span>
              <span><strong>Social Engineering:</strong> The weakest link is rarely encryption; it is usually human psychology.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#bc13fe] mt-1">»</span>
              <span><strong>Zero Trust:</strong> Never trust, always verify. Internal networks are as vulnerable as external ones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#bc13fe] mt-1">»</span>
              <span><strong>IoT Vulnerability:</strong> Connected devices often lack basic firmware security, turning them into botnet assets.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
