"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/gamificationStore";
import { Network, Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactNode() {
  const { markVisited } = useStore();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    markVisited(7);
  }, [markVisited]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto py-10">
      <div className="flex items-center gap-3 mb-12">
        <Network className="text-blue-500 w-8 h-8 opacity-80" />
        <div>
          <h2 className="text-3xl font-orbitron font-bold tracking-widest uppercase text-white">
            Contact Node
          </h2>
          <p className="text-xs text-blue-300 font-mono tracking-widest mt-1">SECURE.COMMUNICATION.LINK</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Connection Interfaces */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
           <a href="mailto:manusrimv@example.com" className="lab-panel p-6 flex flex-col items-center justify-center gap-4 hover:bg-blue-600/10 hover:border-blue-500 transition-all border border-gray-800 rounded-xl group box-soft-glow">
              <Mail className="text-gray-400 group-hover:text-blue-400 transition-colors" size={32} />
              <span className="font-mono text-sm tracking-widest text-gray-300 group-hover:text-white">EMAIL_UPLINK</span>
           </a>
           
           <a href="https://github.com/ManusriMV1311" target="_blank" rel="noreferrer" className="lab-panel p-6 flex flex-col items-center justify-center gap-4 hover:bg-purple-600/10 hover:border-purple-500 transition-all border border-gray-800 rounded-xl group box-accent-glow">
              <Github className="text-gray-400 group-hover:text-purple-400 transition-colors" size={32} />
              <span className="font-mono text-sm tracking-widest text-gray-300 group-hover:text-white">GITHUB_NODE</span>
           </a>

           <a href="https://linkedin.com/in/manusrimv" target="_blank" rel="noreferrer" className="lab-panel p-6 flex flex-col items-center justify-center gap-4 hover:bg-blue-600/10 hover:border-blue-500 transition-all border border-gray-800 rounded-xl group box-soft-glow">
              <Linkedin className="text-gray-400 group-hover:text-blue-400 transition-colors" size={32} />
              <span className="font-mono text-sm tracking-widest text-gray-300 group-hover:text-white">LINKEDIN_RELAY</span>
           </a>
        </div>

        {/* Direct Transmission Form */}
        <div className="w-full md:w-2/3 lab-panel p-8 rounded-xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-xl font-orbitron font-bold text-white mb-6">Direct Transmission</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
             <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">Target Identifier (Name)</label>
                <input required type="text" className="w-full bg-[#05050f] border border-gray-800 rounded-lg p-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter identifier..." />
             </div>
             
             <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">Return Vector (Email)</label>
                <input required type="email" className="w-full bg-[#05050f] border border-gray-800 rounded-lg p-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter return address..." />
             </div>

             <div className="flex flex-col gap-1 mb-2">
                <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">Payload (Message)</label>
                <textarea required rows={4} className="w-full bg-[#05050f] border border-gray-800 rounded-lg p-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Encrypting transmission..." />
             </div>

             <button type="submit" disabled={sent} className="w-full py-4 rounded-lg bg-blue-600/20 text-blue-400 font-bold tracking-widest uppercase border border-blue-500/50 hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
               {sent ? "TRANSMISSION SENT" : <><Send size={18} /> INITIALIZE HANDSHAKE</>}
             </button>
          </form>
        </div>

      </div>
    </div>
  );
}
