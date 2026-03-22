"use client";

import { useSlide } from "@/components/providers/SlideProvider";
import { AnimatePresence, motion } from "framer-motion";

// Modules
import SystemMap from "@/components/sections/SystemMap";
import IdentityCore from "@/components/sections/IdentityCore";
import SkillsNetwork from "@/components/sections/SkillsNetwork";
import InnovationLabCaseFiles from "@/components/sections/InnovationLabCaseFiles";
import TechExperiments from "@/components/sections/TechExperiments";
import ResearchArchive from "@/components/sections/ResearchArchive";
import CuriosityLog from "@/components/sections/CuriosityLog";
import ContactNode from "@/components/sections/ContactNode";

export default function Home() {
  const { currentSlide } = useSlide();

  // 0: SystemMap
  // 1: IdentityCore
  // 2: SkillsNetwork
  // 3: InnovationLabCaseFiles
  // 4: TechExperiments
  // 5: ResearchArchive
  // 6: CuriosityLog
  // 7: ContactNode
  const slides = [
    <SystemMap key="0" />,
    <IdentityCore key="1" />,
    <SkillsNetwork key="2" />,
    <InnovationLabCaseFiles key="3" />,
    <TechExperiments key="4" />,
    <ResearchArchive key="5" />,
    <CuriosityLog key="6" />,
    <ContactNode key="7" />,
  ];

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full max-w-7xl relative"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
