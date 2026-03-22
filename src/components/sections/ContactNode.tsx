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
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 6
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          Contact Node
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Open communication channels for collaboration, inquiries, or tech discussions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        
        {/* Connection Interfaces */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
           <a href="mailto:manusrimv@example.com" className="bg-white p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 transition-all border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl group">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-full group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#0F172A]">email_uplink</span>
           </a>
           
           <a href="https://github.com/ManusriMV1311" target="_blank" rel="noreferrer" className="bg-white p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 transition-all border border-slate-200 hover:border-indigo-300 hover:shadow-md rounded-2xl group">
              <div className="p-3 bg-indigo-50 text-indigo-500 rounded-full group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#0F172A]">github_repository</span>
           </a>

           <a href="https://linkedin.com/in/manusrimv" target="_blank" rel="noreferrer" className="bg-white p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 transition-all border border-slate-200 hover:border-cyan-300 hover:shadow-md rounded-2xl group">
              <div className="p-3 bg-cyan-50 text-cyan-500 rounded-full group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <span className="font-poppins font-semibold text-sm text-[#0F172A]">linkedin_network</span>
           </a>
        </div>

        {/* Direct Transmission Form */}
        <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] border-b border-l border-blue-100/50 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="p-2 bg-slate-50 text-slate-500 rounded-lg border border-slate-200">
              <MessageSquare size={20} />
            </div>
            <h3 className="text-xl font-poppins font-bold text-[#0F172A]">Direct Transmission</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10 flex-1">
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Target Identifier (Name)</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-[#0F172A] font-poppins text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Enter your name..." />
             </div>
             
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Return Vector (Email)</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-[#0F172A] font-poppins text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Enter your email address..." />
             </div>

             <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Payload (Message)</label>
                <textarea required rows={5} className="w-full h-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-[#0F172A] font-poppins text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none" placeholder="Write your message here..." />
             </div>

             <button type="submit" disabled={sent} className={`mt-2 w-full py-4 rounded-xl font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
               sent 
                ? "bg-green-500 text-white border border-green-600 shadow-md shadow-green-500/20" 
                : "bg-[#0F172A] text-white border border-slate-800 hover:bg-blue-600 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
             } disabled:opacity-90 disabled:cursor-not-allowed`}>
               {sent ? "TRANSMISSION SENT" : <><Send size={18} /> INITIALIZE HANDSHAKE</>}
             </button>
          </form>
        </div>

      </div>
    </div>
  );
}
