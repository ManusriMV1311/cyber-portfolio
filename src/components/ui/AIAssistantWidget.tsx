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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#bc13fe] border-2 border-[#00f0ff] flex items-center justify-center text-white box-glow"
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
            className="fixed bottom-24 right-6 z-50 w-80 h-96 glass-panel border border-[#bc13fe]/50 rounded-xl flex flex-col shadow-[0_0_30px_rgba(188,19,254,0.3)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#bc13fe]/20 border-b border-[#bc13fe]/30 p-3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Cpu size={18} className="text-[#00f0ff]" />
                <span className="font-orbitron font-bold text-sm tracking-wide">AI.GUIDE.V1</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.sender === "user" 
                      ? "bg-[#bc13fe]/20 border border-[#bc13fe]/50 text-white rounded-br-none" 
                      : "bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-gray-200 rounded-bl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-[#0a0a1a] border-t border-[#bc13fe]/30 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-white focus:ring-0 placeholder-gray-500"
              />
              <button type="submit" className="text-[#00f0ff] hover:text-[#bc13fe] transition-colors p-1">
                <MessageSquare size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
