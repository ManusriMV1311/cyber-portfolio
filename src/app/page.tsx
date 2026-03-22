"use client";

import React from "react";

// Modules
import WelcomeSection from "@/components/sections/WelcomeSection";
import IdentityCore from "@/components/sections/IdentityCore";
import SkillsNetwork from "@/components/sections/SkillsNetwork";
import SystemMap from "@/components/sections/SystemMap";
import TechExperiments from "@/components/sections/TechExperiments";
import ResearchArchive from "@/components/sections/ResearchArchive";
import ContactNode from "@/components/sections/ContactNode";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-32 py-12 relative z-10">
      <section id="level-0" className="w-full min-h-[90vh] flex items-center justify-center scroll-mt-24">
        <WelcomeSection />
      </section>

      <section id="level-1" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        {/* Timeline Line connecting sections */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <IdentityCore />
      </section>

      <section id="level-2" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <SkillsNetwork />
      </section>

      <section id="level-3" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <SystemMap />
      </section>

      <section id="level-4" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <TechExperiments />
      </section>

      <section id="level-5" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <ResearchArchive />
      </section>

      <section id="level-6" className="w-full min-h-screen flex items-center justify-center scroll-mt-24 relative">
        <div className="absolute top-0 bottom-1/2 left-8 md:left-1/2 md:-ml-px w-0.5 bg-blue-100 hidden md:block"></div>
        <ContactNode />
      </section>
    </div>
  );
}
