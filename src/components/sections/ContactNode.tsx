"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, Send, ShieldCheck, MapPin, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactNode() {
  const [sent, setSent] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/manusri-m-v",
      handle: "manusrimv",
      color: "#00D4FF"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:manusrimv@example.com",
      handle: "manusrimv@example.com",
      color: "#8B5CF6"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono font-bold mb-6 tracking-widest uppercase"
            >
              Communication_Portal
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-poppins font-black text-[#E5E7EB] mb-6 uppercase tracking-tighter">
              Let&apos;s <span className="text-[#00D4FF]">Connect</span>
            </h2>
            <p className="text-lg text-slate-400 font-inter leading-relaxed">
              Open for collaborations, cybersecurity research inquiries, or professional opportunities. Let&apos;s build something <span className="text-[#00D4FF] font-bold">secure</span>.
            </p>
          </div>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-3xl bg-[#111827] border border-slate-800 group hover:border-slate-700 transition-all overflow-hidden relative"
              >
                <div 
                  className="absolute -right-4 -top-4 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ backgroundColor: link.color }}
                />
                <div className="p-4 bg-[#0A0F1F] rounded-2xl text-slate-400 border border-slate-800 shadow-inner group-hover:scale-110 group-hover:text-[#E5E7EB] transition-all">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest mb-1">{link.name}</h4>
                  <p className="text-[#E5E7EB] font-bold font-poppins group-hover:text-[#00D4FF] transition-colors">{link.handle}</p>
                </div>
                <ExternalLink size={16} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
              </a>
            ))}
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#111827] to-[#0A0F1F] border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/5 blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#F97316]" size={20} />
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Career_Log</span>
              </div>
              <h3 className="text-[#E5E7EB] font-poppins font-black text-xl mb-4 uppercase tracking-tight">Professional Resume</h3>
              <p className="text-slate-500 text-sm font-inter mb-8 leading-relaxed">
                Detailed breakdown of my academic experience, certifications, and technical projects.
              </p>
              <a 
                href="/resume.pdf" 
                download
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#F97316] text-[#0A0F1F] font-black font-poppins text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Dashboard */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-10">
                <ShieldCheck className="text-[#00D4FF]" size={20} />
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.2em]">Secure_Inquiry_Form</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest ml-4">Access_Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-[#0A0F1F] border border-slate-800 rounded-2xl px-6 py-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 transition-all shadow-inner font-inter text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest ml-4">Signal_Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-[#0A0F1F] border border-slate-800 rounded-2xl px-6 py-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 transition-all shadow-inner font-inter text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest ml-4">Transmission_Content</label>
                  <textarea 
                    required
                    placeholder="Your message details..."
                    className="w-full bg-[#0A0F1F] border border-slate-800 rounded-3xl px-6 py-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 transition-all shadow-inner resize-none font-inter text-sm flex-1 min-h-[200px]"
                  ></textarea>
                </div>

                <button 
                  disabled={sent}
                  className={`w-full py-5 rounded-2xl font-black font-poppins text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,212,255,0.1)] ${
                    sent 
                      ? "bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/50" 
                      : "bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1F] hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {sent ? "Transmission_Received" : <><Send size={18} /> Dispatch Message</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
