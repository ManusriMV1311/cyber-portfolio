"use client";

import { useState } from "react";
import { MessageSquare, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "ai" | "user", text: string }[]>([
    { sender: "ai", text: "Hello! I am Manusri's AI Assistant guide. How can I help you explore the portfolio?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { sender: "user", text: userText }]);
    setInput("");

    // Simulate basic AI scripted responses
    let aiResponse = "I'm a simple AI widget. To learn more, try asking about 'skills', 'projects', or 'contact'.";
    
    const lower = userText.toLowerCase();
    if (lower.includes("skill")) aiResponse = "Manusri specializes in Python, C++, React, Next.js, and foundational Cybersecurity (Networking, SOC basics, CTF solving). Check out the Skills Matrix for details.";
    else if (lower.includes("project") || lower.includes("innovation") || lower.includes("lab")) aiResponse = "Manusri's projects include EduTrack, Bodyguard Robot, Pipeline Protector, and Aerolime. These are conceptual designs focused on solving real-world challenges.";
    else if (lower.includes("about") || lower.includes("who")) aiResponse = "Manusri M V is an undergraduate student in Computer Science Engineering (Cyber Security), interested in AI systems, robotics, and automation.";
    else if (lower.includes("contact")) aiResponse = "You can contact Manusri via the 'Contact' section, LinkedIn, or Email.";
    else if (lower.includes("hello") || lower.includes("hi")) aiResponse = "Greetings! I'm here to assist you with exploring Manusri's Cyber Command Portfolio.";

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "ai", text: aiResponse }]);
    }, 800);
  };

  return (
    <>
      {/* Floating AI Bubble */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#8B5CF6] border-2 border-[#00D4FF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
      >
        <Cpu size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-[#0A0F1F] border border-[#8B5CF6]/50 rounded-2xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#111827] border-b border-white/5 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5 text-[#E5E7EB]">
                <Cpu size={18} className="text-[#00D4FF]" />
                <span className="font-poppins font-black text-[10px] tracking-[0.2em] uppercase">AI.GUIDE.V1</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed font-inter ${
                    msg.sender === "user" 
                      ? "bg-[#8B5CF6] text-white rounded-br-none" 
                      : "bg-[#111827] border border-white/5 text-[#E5E7EB] rounded-bl-none shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 bg-[#111827] border-t border-white/5 flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Initialize inquiry..."
                className="flex-1 bg-transparent border-none outline-none text-xs text-[#E5E7EB] focus:ring-0 placeholder-slate-600 font-mono"
              />
              <button type="submit" className="text-[#00D4FF] hover:scale-110 active:scale-95 transition-all p-1">
                <MessageSquare size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
