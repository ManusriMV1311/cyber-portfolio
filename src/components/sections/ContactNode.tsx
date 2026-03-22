"use client";

import { useState } from "react";
import { Mail, Linkedin, Send, MessageSquare, FileDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactNode() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 text-[#2DD4BF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
        >
          Communication Channel
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#E6EDF3] mb-6">
          Get In <span className="text-[#2DD4BF]">Touch</span>
        </h2>
        <p className="text-lg text-slate-400 font-inter max-w-2xl mx-auto">
          Interested in collaborating or just want to discuss cybersecurity and AI? Drop a message or find me on professional networks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        
        {/* Contact info cards */}
        <div className="space-y-6">
          <a href="mailto:manusrimv@example.com" className="group block p-8 bg-[#0B0F1A] border border-slate-800 rounded-3xl hover:border-[#2DD4BF]/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-[#2DD4BF] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <ExternalLink size={16} className="text-slate-600 group-hover:text-[#2DD4BF] transition-colors" />
            </div>
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">Email</h3>
            <p className="text-[#E6EDF3] font-poppins font-bold text-lg">manusrimv@example.com</p>
          </a>

          <a href="https://linkedin.com/in/manusrimv" target="_blank" rel="noreferrer" className="group block p-8 bg-[#0B0F1A] border border-slate-800 rounded-3xl hover:border-[#8B5CF6]/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-[#8B5CF6] group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <ExternalLink size={16} className="text-slate-600 group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">LinkedIn</h3>
            <p className="text-[#E6EDF3] font-poppins font-bold text-lg">manusrimv</p>
          </a>

          <div className="p-8 bg-gradient-to-br from-[#2DD4BF]/10 to-[#8B5CF6]/10 border border-[#2DD4BF]/20 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2DD4BF]/10 blur-3xl pointer-events-none" />
            <h3 className="text-[#E6EDF3] font-poppins font-bold text-xl mb-4 relative z-10">Professional Resume</h3>
            <p className="text-slate-400 text-sm mb-8 relative z-10 leading-relaxed">
              Detailed breakdown of my academic experience, certifications, and technical projects.
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#2DD4BF] text-[#0B0F1A] font-bold font-poppins hover:scale-105 transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              <FileDown size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-2 bg-[#0B0F1A] border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-slate-800 rounded-2xl text-slate-400">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-2xl font-bold font-poppins text-[#E6EDF3]">Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-1">Your Name</label>
                <input required type="text" className="w-full bg-[#0F172A] border border-slate-800 rounded-xl p-4 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                <input required type="email" className="w-full bg-[#0F172A] border border-slate-800 rounded-xl p-4 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-1">Message Payload</label>
              <textarea required rows={5} className="w-full bg-[#0F172A] border border-slate-800 rounded-xl p-4 text-[#E6EDF3] font-inter text-sm focus:outline-none focus:border-[#2DD4BF] transition-all resize-none" placeholder="Hello Manusri, I'm interested in..." />
            </div>

            <button type="submit" disabled={sent} className={`w-full py-5 rounded-2xl font-bold font-poppins text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
              sent 
                ? "bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF]" 
                : "bg-slate-800 text-[#E6EDF3] border border-slate-700 hover:bg-[#E6EDF3] hover:text-[#0B0F1A] hover:shadow-[0_0_30px_rgba(230,237,243,0.1)]"
            }`}>
              {sent ? "Message Received" : <><Send size={18} /> Send Transmission</>}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
