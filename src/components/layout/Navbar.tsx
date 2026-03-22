"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import { Menu, X } from "lucide-react";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-slate-800/50 py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <HeaderLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-mono font-medium text-slate-400 hover:text-[#2DD4BF] transition-colors tracking-widest uppercase"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-bold font-mono uppercase tracking-widest hover:bg-[#2DD4BF]/20 transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-400 hover:text-[#2DD4BF] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0B0F1A] border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-mono font-medium text-slate-400 hover:text-[#2DD4BF] transition-colors tracking-[0.2em] uppercase text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-4 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF] font-bold font-mono uppercase tracking-[0.2em] hover:bg-[#2DD4BF]/20 transition-all"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
