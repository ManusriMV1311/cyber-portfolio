"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";

export default function ContactNode() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-4 tracking-widest uppercase shadow-[0_0_15px_rgba(45,212,191,0.1)]">
          Comm Link Established
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#E6EDF3] mb-4">
          Contact Node
        </h2>
        <p className="text-lg text-slate-400 font-inter leading-relaxed">
          Open communication channels for collaboration, inquiries, or tech discussions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        
        {/* Connection Interfaces */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
           <a href="mailto:manusrimv@example.com" className="bg-[#0B0F1A] p-6 flex flex-col items-center justify-center gap-4 border border-slate-800 hover:border-[#2DD4BF]/50 rounded-2xl group transition-all shadow-sm hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]">
              <div className="p-3 bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full group-hover:scale-110 transition-transform border border-[#2DD4BF]/20">
                <Mail size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#E6EDF3] tracking-widest uppercase">email_uplink</span>
           </a>
           
           <a href="https://github.com/ManusriMV1311" target="_blank" rel="noreferrer" className="bg-[#0B0F1A] p-6 flex flex-col items-center justify-center gap-4 border border-slate-800 hover:border-[#8B5CF6]/50 rounded-2xl group transition-all shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              <div className="p-3 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full group-hover:scale-110 transition-transform border border-[#8B5CF6]/20">
                <Github size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#E6EDF3] tracking-widest uppercase">github_repo</span>
           </a>

           <a href="https://linkedin.com/in/manusrimv" target="_blank" rel="noreferrer" className="bg-[#0B0F1A] p-6 flex flex-col items-center justify-center gap-4 border border-slate-800 hover:border-[#FF6B6B]/50 rounded-2xl group transition-all shadow-sm hover:shadow-[0_0_20px_rgba(255,107,107,0.1)]">
              <div className="p-3 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full group-hover:scale-110 transition-transform border border-[#FF6B6B]/20">
                <Linkedin size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#E6EDF3] tracking-widest uppercase">linkedin_net</span>
           </a>
        </div>

        {/* Direct Transmission Form */}
        <div className="w-full md:w-2/3 bg-[#0B0F1A] p-8 rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden flex flex-col hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#2DD4BF]/5 rounded-bl-full border-b border-l border-[#2DD4BF]/10 pointer-events-none blur-xl" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="p-2 bg-[#0F172A] text-slate-400 rounded-lg border border-slate-700 shadow-inner">
              <MessageSquare size={20} />
            </div>
            <h3 className="text-xl font-poppins font-bold text-[#E6EDF3]">Direct Transmission</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 flex-1">
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Target Identifier (Name)</label>
                <input required type="text" className="w-full bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] focus:bg-[#0B0F1A] focus:ring-4 focus:ring-[#2DD4BF]/10 transition-all placeholder:text-slate-600" placeholder="Enter your designation..." />
             </div>
             
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Return Vector (Email)</label>
                <input required type="email" className="w-full bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] focus:bg-[#0B0F1A] focus:ring-4 focus:ring-[#2DD4BF]/10 transition-all placeholder:text-slate-600" placeholder="Enter return address..." />
             </div>

             <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Payload (Message)</label>
                <textarea required rows={5} className="w-full h-full bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] focus:bg-[#0B0F1A] focus:ring-4 focus:ring-[#2DD4BF]/10 transition-all resize-none placeholder:text-slate-600" placeholder="Compose transmission payload..." />
             </div>

             <button type="submit" disabled={sent} className={`mt-2 w-full py-4 rounded-xl font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
               sent 
                ? "bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.2)]" 
                : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-[#2DD4BF] hover:text-[#0B0F1A] hover:border-[#2DD4BF] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
             } disabled:opacity-100 disabled:cursor-not-allowed`}>
               {sent ? "TRANSMISSION SENT" : <><Send size={18} /> INITIALIZE HANDSHAKE</>}
             </button>
          </form>
        </div>

      </div>
    </div>
  );
}
