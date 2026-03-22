"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Arcade", id: "arcade" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-5 ${
        scrolled ? "bg-[#0A0F1F]/90 backdrop-blur-2xl border-b border-slate-800/50 py-4 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
          <HeaderLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[10px] font-mono font-black text-slate-400 hover:text-[#00D4FF] transition-all tracking-[0.2em] uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4FF] transition-all group-hover:w-full" />
            </button>
          ))}
          
          <div className="w-[1px] h-4 bg-slate-800 mx-2" />
          
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00D4FF] text-[#0A0F1F] text-[10px] font-black font-mono uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          >
            Hire Me <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 rounded-xl bg-[#111827] border border-slate-800 text-slate-400 hover:text-[#00D4FF] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0A0F1F] border-b border-slate-800 shadow-2xl overflow-hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col p-8 gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-poppins font-black text-slate-400 hover:text-[#00D4FF] transition-colors tracking-tight uppercase text-left flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00D4FF]" />
                </button>
              ))}
              <div className="h-[1px] bg-slate-800 w-full" />
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-5 rounded-2xl bg-[#00D4FF] text-[#0A0F1F] font-black font-mono uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Assemble_Contact <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
