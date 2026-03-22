"use client";

import { useState } from "react";
import { KeyRound, Lock } from "lucide-react";

export default function TechExperiments() {
  // Exp 1: Password
  const [pwd, setPwd] = useState("");
  // Exp 2: Cipher
  const [cipherText, setCipherText] = useState("CYBER");
  const [shift, setShift] = useState(3);

  // Exp 1 Logic
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
    if (pwd.length === 0) return { label: "AWAITING INPUT", color: "text-slate-500", bar: "bg-slate-200" };
    if (score < 3) return { label: "WEAK", color: "text-red-500", bar: "bg-red-500" };
    if (score < 4) return { label: "MODERATE", color: "text-amber-500", bar: "bg-amber-500" };
    return { label: "STRONG", color: "text-green-500", bar: "bg-emerald-500" };
  };
  const pwdState = getPwdState();

  // Exp 2 Logic
  const applyCipher = (text: string, s: number) => {
    return text.toUpperCase().replace(/[A-Z]/g, c => 
      String.fromCharCode(((c.charCodeAt(0) - 65 + s) % 26 + 26) % 26 + 65)
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 tracking-wider uppercase">
          Level 4
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A] mb-4">
          Tech Experiments
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Interact with small conceptual demonstrations exploring cryptography and security principles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Experiment 01 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <KeyRound size={22} />
            </div>
            <div>
              <span className="font-mono text-xs text-blue-600 tracking-wider font-semibold uppercase">Experiment 01</span>
              <h3 className="font-poppins font-bold text-lg text-[#0F172A]">Password Entropy</h3>
            </div>
          </div>
          
          <p className="text-slate-600 text-sm mb-8 flex-1 leading-relaxed">
            Test string permutations against dictionary constraints to evaluate brute-force resilience.
          </p>

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col gap-6">
            <input 
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Enter authentication string..."
              className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-center font-mono text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-[#0F172A] shadow-sm"
            />
            
            <div>
              <div className="flex justify-between font-mono text-xs font-bold mb-2">
                <span className="text-slate-500 tracking-wider">STATUS</span>
                <span className={pwdState.color}>{pwdState.label}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className={`h-full transition-all duration-300 ${pwdState.bar}`} 
                  style={{ width: pwd.length === 0 ? "0%" : `${(score / 5) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-center font-semibold tracking-wide">
              <div className={`py-2 rounded-lg border transition-colors ${pwd.length > 8 ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white text-slate-400 border-slate-200"}`}>LEN &gt; 8</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[A-Z]/.test(pwd) ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white text-slate-400 border-slate-200"}`}>UPPERCASE</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[0-9]/.test(pwd) ? "bg-cyan-50 text-cyan-700 border-cyan-200" : "bg-white text-slate-400 border-slate-200"}`}>NUMERIC</div>
              <div className={`py-2 rounded-lg border transition-colors ${/[^A-Za-z0-9]/.test(pwd) ? "bg-cyan-50 text-cyan-700 border-cyan-200" : "bg-white text-slate-400 border-slate-200"}`}>SYMBOL</div>
            </div>
          </div>
        </div>

        {/* Experiment 02 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <Lock size={22} />
            </div>
            <div>
              <span className="font-mono text-xs text-indigo-600 tracking-wider font-semibold uppercase">Experiment 02</span>
              <h3 className="font-poppins font-bold text-lg text-[#0F172A]">Shift Cipher Logic</h3>
            </div>
          </div>
          
          <p className="text-slate-600 text-sm mb-8 flex-1 leading-relaxed">
            Understand basic cryptographic encoding by shifting letters across the alphabet (Caesar Cipher).
          </p>

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col gap-6">
            <div>
              <label className="text-[11px] font-bold font-mono text-slate-500 mb-2 block tracking-wider">INPUT STRING</label>
              <input 
                type="text"
                maxLength={15}
                value={cipherText}
                onChange={(e) => setCipherText(e.target.value.replace(/[^A-Za-z]/g, ''))}
                placeholder="TEXT (A-Z)"
                className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-center font-mono text-sm focus:outline-none focus:border-indigo-500 uppercase focus:ring-4 focus:ring-indigo-500/10 transition-all text-[#0F172A] shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold font-mono text-slate-500 tracking-wider">SHIFT FACTOR: <span className="text-indigo-600">{shift}</span></label>
              <input 
                type="range"
                min="1" max="25"
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500 outline-none hover:bg-slate-300 transition-colors"
              />
            </div>

            <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-xl text-center relative overflow-hidden shadow-inner">
              <span className="text-[10px] absolute top-2 left-3 text-indigo-400 font-bold tracking-widest">OUTPUT</span>
              <div className="font-mono text-2xl font-bold text-indigo-700 tracking-[0.25em] mt-3 break-all">
                {applyCipher(cipherText, shift) || "..."}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
