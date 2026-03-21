"use client";

import { useSlide } from "@/components/providers/SlideProvider";
import { AnimatePresence, motion } from "framer-motion";

// Slides
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import InnovationLabSection from "@/components/sections/InnovationLabSection";
import PlaygroundSection from "@/components/sections/PlaygroundSection";
import AIConceptsSection from "@/components/sections/AIConceptsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TerminalSection from "@/components/sections/TerminalSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const { currentSlide } = useSlide();

  const slides = [
    <HeroSection key="0" />,
    <AboutSection key="1" />,
    <SkillsSection key="2" />,
    <InnovationLabSection key="3" />,
    <PlaygroundSection key="4" />,
    <AIConceptsSection key="5" />,
    <TimelineSection key="6" />,
    <TerminalSection key="7" />,
    <ContactSection key="8" />,
  ];

  return (
    <div className="w-full h-full relative p-6 md:p-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -50, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
