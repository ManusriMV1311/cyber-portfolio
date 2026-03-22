"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import IdentityCore from "@/components/sections/IdentityCore";
import SkillsNetwork from "@/components/sections/SkillsNetwork";
import SystemMap from "@/components/sections/SystemMap";
import TechExperiments from "@/components/sections/TechExperiments";
import ArcadeSection from "@/components/arcade/ArcadeSection";
import ContactNode from "@/components/sections/ContactNode";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-[#E6EDF3] selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div className="py-20 border-t border-slate-900/50 bg-gradient-to-b from-transparent to-[#0F172A]/30">
        <IdentityCore />
      </div>

      {/* Skills Section */}
      <div className="py-20 border-t border-slate-900/50">
        <SkillsNetwork />
      </div>

      {/* Projects Section */}
      <div className="py-20 border-t border-slate-900/50 bg-gradient-to-b from-transparent to-[#0F172A]/30">
        <SystemMap />
      </div>

      {/* Experiments Section */}
      <div className="py-20 border-t border-slate-900/50">
        <TechExperiments />
      </div>

      {/* Arcade Section - Optional Gameplay */}
      <div className="py-20 border-t border-slate-900/50 bg-gradient-to-b from-transparent to-[#0F172A]/30">
        <ArcadeSection />
      </div>

      {/* Contact Section */}
      <div className="py-20 border-t border-slate-900/50">
        <ContactNode />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="font-poppins font-bold text-lg tracking-tighter text-slate-500">
            M<span className="text-slate-700">V</span>
          </div>
          <p className="text-sm text-slate-600 font-mono tracking-widest uppercase">
            Built with Next.js & Framer Motion
          </p>
          <p className="text-[10px] text-slate-700 font-mono mt-4">
            © 2026 MANUSRI M V. DATA_SECURED: YES
          </p>
        </div>
      </footer>
    </main>
  );
}
