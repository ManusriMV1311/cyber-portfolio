"use client";

import { useState } from "react";
import { TerminalSquare, ShieldAlert, Lock, Unlock, CheckCircle2 } from "lucide-react";

interface LogicExperimentProps {
  onComplete: () => void;
}

export default function LogicExperimentGame({ onComplete }: LogicExperimentProps) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  // Criteria validation
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const criteriaMetCount = [hasLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
  
  const handleCrack = () => {
    if (criteriaMetCount === 4) {
      setUnlocked(true);
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="w-full relative bg-[#0B0F1A] border border-[#2DD4BF]/20 py-8 px-6 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(45,212,191,0.05)] font-inter">
      <div className="text-center mb-8">
        <h3 className="text-[#E6EDF3] font-bold font-poppins flex items-center justify-center gap-2 mb-2">
          <TerminalSquare size={18} className="text-[#2DD4BF]" /> Logic Override
        </h3>
        <p className="text-xs text-slate-400 font-mono">Input a valid secure signature to bypass the firewall.</p>
      </div>

      <div className="bg-[#0F172A] w-full max-w-md p-6 rounded-xl border border-slate-800">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-xl border ${unlocked ? 'bg-[#2DD4BF]/20 border-[#2DD4BF]' : 'bg-slate-800 border-slate-700'}`}>
            {unlocked ? <Unlock size={24} className="text-[#2DD4BF]" /> : <Lock size={24} className="text-slate-500" />}
          </div>
          <div className="flex-1">
            <input 
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={unlocked}
              placeholder="Enter signature..."
              className="w-full bg-[#0B0F1A] border border-slate-700 rounded-lg p-3 text-[#E6EDF3] font-mono text-sm focus:outline-none focus:border-[#2DD4BF] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <Criterion label="8+ Characters" met={hasLength} />
          <Criterion label="Uppercase Letter" met={hasUpper} />
          <Criterion label="Numeric Digit" met={hasNumber} />
          <Criterion label="Special Symbol" met={hasSpecial} />
        </div>

        <button 
          onClick={handleCrack}
          disabled={criteriaMetCount < 4 || unlocked}
          className={`w-full py-3 rounded-lg font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2
            ${unlocked ? 'bg-[#2DD4BF] text-[#0B0F1A]' : 
              criteriaMetCount === 4 ? 'bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0B0F1A]' : 
              'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
        >
          {unlocked ? 'System Bypassed' : 'Execute Override'}
        </button>
      </div>
    </div>
  );
}

function Criterion({ label, met }: { label: string; met: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm font-mono">
      {met ? (
        <CheckCircle2 size={16} className="text-[#2DD4BF]" />
      ) : (
        <ShieldAlert size={16} className="text-slate-600" />
      )}
      <span className={met ? "text-[#E6EDF3]" : "text-slate-600"}>{label}</span>
    </div>
  );
}
