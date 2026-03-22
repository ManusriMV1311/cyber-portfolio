"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Beaker, ShieldAlert, KeyRound, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechExperiments() {
  const { markVisited } = useStore();
  const [activeExp, setActiveExp] = useState(0);
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
  let color = "text-red-400";
  let barColor = "bg-red-500";
  if (score >= 3) { status = "NOMINAL"; color = "text-yellow-400"; barColor = "bg-yellow-500"; }
  if (score >= 4) { status = "SECURE"; color = "text-blue-400"; barColor = "bg-blue-500"; }
  if (pwd.length === 0) { status = "AWAITING INPUT"; color = "text-gray-500"; barColor = "bg-gray-800"; }

  const lenClass = pwd.length > 8 ? "bg-blue-500/20 text-blue-400" : "bg-gray-800 text-gray-500";
  const upClass = /[A-Z]/.test(pwd) ? "bg-blue-500/20 text-blue-400" : "bg-gray-800 text-gray-500";
  const numClass = /[0-9]/.test(pwd) ? "bg-purple-500/20 text-purple-400" : "bg-gray-800 text-gray-500";
  const symClass = /[^A-Za-z0-9]/.test(pwd) ? "bg-purple-500/20 text-purple-400" : "bg-gray-800 text-gray-500";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden max-w-5xl mx-auto py-10">
      <div className="flex items-center gap-3 mb-10 w-full">
        <Beaker className="text-purple-400 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-2xl font-orbitron font-bold tracking-widest uppercase text-white">
            Tech Experiments
          </h2>
          <p className="text-xs text-purple-300 font-mono tracking-widest mt-1">LAB.TEST.MODULES</p>
        </div>
      </div>

      <div className="w-full flex gap-4 mb-6">
         <button onClick={() => setActiveExp(0)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all ${activeExp === 0 ? "bg-blue-600 border border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-black/50 border border-gray-800 text-gray-400"}`}>
            <KeyRound size={14}/> EXPERIMENT 01: ENTROPY
         </button>
         <button onClick={() => setActiveExp(1)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all ${activeExp === 1 ? "bg-purple-600 border border-purple-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]" : "bg-black/50 border border-gray-800 text-gray-400"}`}>
            <Activity size={14}/> EXPERIMENT 02: DETECTION (WIP)
         </button>
      </div>

      <div className="w-full lab-panel p-8 min-h-[50vh] flex flex-col items-center justify-center relative">
        <AnimatePresence mode="wait">
          {activeExp === 0 ? (
            <motion.div 
              key="exp1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-2xl"
            >
               <div className="mb-8 text-center">
                 <h3 className="text-xl font-orbitron font-bold text-white">Password Entropy Evaluator</h3>
                 <p className="text-sm text-gray-400 mt-2">Test string permutations against dictionary constraints to evaluate brute-force resilience.</p>
               </div>

               <div className="bg-[#05050f] border border-gray-800 p-6 rounded-xl">
                 <input 
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Insert auth string..."
                  className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-4 text-center text-white font-mono text-lg focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all mb-6"
                 />

                 <div className="flex justify-between text-xs font-mono mb-2 tracking-widest">
                  <span className="text-gray-500">EVALUATION</span>
                  <span className={color}>{status}</span>
                 </div>
                 <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden mb-6">
                  <div 
                    className={`h-full transition-all duration-300 ${barColor}`} 
                    style={{ width: pwd.length === 0 ? "0%" : `${(score / 5) * 100}%` }}
                  />
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono text-center">
                   <div className={`py-2 rounded border border-gray-800 ${lenClass}`}>Length &gt; 8</div>
                   <div className={`py-2 rounded border border-gray-800 ${upClass}`}>Uppercase</div>
                   <div className={`py-2 rounded border border-gray-800 ${numClass}`}>Numeric</div>
                   <div className={`py-2 rounded border border-gray-800 ${symClass}`}>Symbol</div>
                 </div>
               </div>
            </motion.div>
          ) : (
            <motion.div 
              key="exp2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
               <ShieldAlert size={48} className="mx-auto text-yellow-500/50 mb-4 animate-pulse" />
               <h3 className="text-xl font-orbitron font-bold text-white border-b border-gray-800 pb-2 mb-4 inline-block">Anomaly Detection</h3>
               <p className="text-gray-400 text-sm font-mono">// MODULE CURRENTLY IN RESEARCH PHASE</p>
               <p className="text-gray-500 text-xs mt-2 max-w-sm mx-auto">This simulation will visualize basic network packet drop rates under simulated DDoS constraints.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
