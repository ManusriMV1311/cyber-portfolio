"use client";

import { useState } from "react";
import { KeyRound, Lock } from "lucide-react";

export default function TechExperiments() {
  const [pwd, setPwd] = useState("");
  const [cipherText, setCipherText] = useState("CYBER");
  const [shift, setShift] = useState(3);

  const score = (() => {
    let s = 0;
    if (pwd.length > 8) s++;
    if (pwd.length > 12) s++;
    if (/[A-Z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;
    return s;
  })();
  
  const getPwdState = () => {
    if (pwd.length === 0) return { label: "AWAITING INPUT", color: "text-slate-500", bar: "bg-slate-800" };
    if (score < 3) return { label: "WEAK", color: "text-[#FF6B6B]", bar: "bg-[#FF6B6B]" };
    if (score < 4) return { label: "MODERATE", color: "text-amber-500", bar: "bg-amber-500" };
    return { label: "STRONG", color: "text-[#2DD4BF]", bar: "bg-[#2DD4BF]" };
  };
  const pwdState = getPwdState();

  const applyCipher = (text: string, s: number) => {
    return text.toUpperCase().replace(/[A-Z]/g, c => 
      String.fromCharCode(((c.charCodeAt(0) - 65 + s) % 26 + 26) % 26 + 65)
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-xs font-mono font-bold mb-4 tracking-widest uppercase">
          Logic Overridden
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#E6EDF3] mb-4">
          Tech Experiments
        </h2>
        <p className="text-lg text-slate-400 font-inter leading-relaxed">
          Interact with small conceptual demonstrations exploring cryptography and security principles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Experiment 01 */}
        <div className="bg-[#0B0F1A] rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col hover:border-[#2DD4BF]/30 transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-xl border border-[#2DD4BF]/20">
              <KeyRound size={22} />
            </div>
            <div>
              <span className="font-mono text-xs text-[#2DD4BF] tracking-wider font-semibold uppercase">Experiment 01</span>
              <h3 className="font-poppins font-bold text-lg text-[#E6EDF3]">Password Entropy</h3>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
            Test string permutations against dictionary constraints to evaluate brute-force resilience.
          </p>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl flex flex-col gap-6">
            <input 
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Enter authentication string..."
              className="w-full bg-[#0B0F1A] border border-slate-700 rounded-xl p-3.5 text-center font-mono text-sm focus:outline-none focus:border-[#2DD4BF] focus:ring-4 focus:ring-[#2DD4BF]/10 transition-all text-[#E6EDF3] shadow-sm"
            />
            
            <div>
              <div className="flex justify-between font-mono text-xs font-bold mb-2">
                <span className="text-slate-500 tracking-wider">STATUS</span>
                <span className={pwdState.color}>{pwdState.label}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner flex">
                <div 
                  className={`h-full transition-all duration-300 ${pwdState.bar}`} 
                  style={{ width: pwd.length === 0 ? "0%" : `${(score / 5) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-center font-semibold tracking-wide">
              <div className={`py-2 rounded-lg border transition-colors ${pwd.length > 8 ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30" : "bg-[#0B0F1A] text-slate-600 border-slate-800"}`}>LEN &gt; 8</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[A-Z]/.test(pwd) ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30" : "bg-[#0B0F1A] text-slate-600 border-slate-800"}`}>UPPERCASE</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[0-9]/.test(pwd) ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30" : "bg-[#0B0F1A] text-slate-600 border-slate-800"}`}>NUMERIC</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[^A-Za-z0-9]/.test(pwd) ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30" : "bg-[#0B0F1A] text-slate-600 border-slate-800"}`}>SYMBOL</div>
            </div>
          </div>
        </div>

        {/* Experiment 02 */}
        <div className="bg-[#0B0F1A] rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col hover:border-[#8B5CF6]/30 transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-xl border border-[#8B5CF6]/20">
              <Lock size={22} />
            </div>
            <div>
              <span className="font-mono text-xs text-[#8B5CF6] tracking-wider font-semibold uppercase">Experiment 02</span>
              <h3 className="font-poppins font-bold text-lg text-[#E6EDF3]">Shift Cipher Logic</h3>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
            Understand basic cryptographic encoding by shifting letters across the alphabet (Caesar Cipher).
          </p>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl flex flex-col gap-6">
            <div>
              <label className="text-[11px] font-bold font-mono text-slate-500 mb-2 block tracking-wider">INPUT STRING</label>
              <input 
                type="text"
                maxLength={15}
                value={cipherText}
                onChange={(e) => setCipherText(e.target.value.replace(/[^A-Za-z]/g, ''))}
                placeholder="TEXT (A-Z)"
                className="w-full bg-[#0B0F1A] border border-slate-700 rounded-xl p-3.5 text-center font-mono text-sm focus:outline-none focus:border-[#8B5CF6] uppercase focus:ring-4 focus:ring-[#8B5CF6]/10 transition-all text-[#E6EDF3] shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold font-mono text-slate-500 tracking-wider">SHIFT FACTOR: <span className="text-[#8B5CF6]">{shift}</span></label>
              <input 
                type="range"
                min="1" max="25"
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6] outline-none hover:bg-slate-700 transition-colors"
                style={{ accentColor: '#8B5CF6' }}
              />
            </div>

            <div className="p-5 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-xl text-center relative overflow-hidden shadow-[inset_0_0_15px_rgba(139,92,246,0.05)]">
              <span className="text-[10px] absolute top-2 left-3 text-[#8B5CF6]/60 font-bold tracking-widest">OUTPUT</span>
              <div className="font-mono text-2xl font-bold text-[#8B5CF6] tracking-[0.25em] mt-3 break-all text-soft-glow">
                {applyCipher(cipherText, shift) || "..."}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
