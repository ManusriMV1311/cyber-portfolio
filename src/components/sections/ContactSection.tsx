"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { markVisited } = useStore();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    markVisited(8);
  }, [markVisited]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto py-10">
      <div className="flex items-center gap-3 mb-10">
        <Mail className="text-[#bc13fe] w-8 h-8" />
        <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-glow">
          Comm-Link Established
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Left side Form */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="glass-panel p-8 rounded-xl border border-[#bc13fe]/30"
        >
          <h3 className="text-xl font-orbitron font-bold text-[#00f0ff] mb-6">Send Transmission</h3>
          
          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-gray-400 block mb-1">IDENTIFIER (NAME)</label>
              <input required type="text" className="w-full bg-[#0a0a1a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#bc13fe] transition-colors" />
            </div>
            
            <div>
              <label className="text-xs font-mono text-gray-400 block mb-1">RETURN ADDRESS (EMAIL)</label>
              <input required type="email" className="w-full bg-[#0a0a1a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#bc13fe] transition-colors" />
            </div>

            <div>
              <label className="text-xs font-mono text-gray-400 block mb-1">PAYLOAD (MESSAGE)</label>
              <textarea required rows={4} className="w-full bg-[#0a0a1a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#bc13fe] transition-colors resize-none" />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#bc13fe] hover:bg-[#bc13fe]/80 text-white font-bold py-3 rounded uppercase tracking-wider font-orbitron transition-colors">
              {sent ? "Transmission Sent" : <><Send size={18} /> Transmit</>}
            </button>
          </form>
        </motion.div>

        {/* Right side contact info & Badges */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col justify-between"
        >
          <div className="glass-panel p-8 rounded-xl border border-[#00f0ff]/30 h-full">
            <h3 className="text-xl font-orbitron font-bold text-[#bc13fe] mb-6">Network Nodes</h3>
            
            <div className="space-y-6">
              <a href="mailto:manusrimv@example.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#00f0ff]/20">
                <div className="bg-[#0a0a1a] p-3 rounded-md border border-gray-800">
                  <Mail size={24} className="text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron">Direct Email channel</h4>
                  <p className="text-sm font-mono mt-1">manusri.m.v@example.com</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-[#bc13fe] transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#bc13fe]/20">
                <div className="bg-[#0a0a1a] p-3 rounded-md border border-gray-800">
                  <Linkedin size={24} className="text-[#bc13fe]" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron">Professional Profile</h4>
                  <p className="text-sm font-mono mt-1">linkedin.com/in/manusri-m-v</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-gray-500/50">
                <div className="bg-[#0a0a1a] p-3 rounded-md border border-gray-800">
                  <Github size={24} className="text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron">Source Code</h4>
                  <p className="text-sm font-mono mt-1">github.com/manusrimv</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-mono">
              <p>ENCRYPTED CONNECTION ESTABLISHED</p>
              <p>STATUS: AWAITING HANDSHAKE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
