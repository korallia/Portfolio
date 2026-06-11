import { useState } from "react";

function WhoamiTerminal() {
  const [isEnvExpanded, setIsEnvExpanded] = useState(false);

  return (
    <div className="bg-[#0B0D0F] border-4 border-[#F97316] shadow-[6px_6px_0px_0px_rgba(249,115,22,0.15)] overflow-hidden">
      
      {/* TOP BAR */}
      <div className="bg-[#24201E] border-b-2 border-[#F97316] px-4 py-2 flex items-center justify-between text-xs text-[#F59E0B] font-bold">
        <span>~/korallia-lab $ whoami</span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/40" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <span className="h-2 w-2 rounded-full bg-green-500/40" />
        </div>
      </div>

      {/* TERMINAL BODY */}
      <div className="p-6 text-sm md:text-base">
        
        {/* BLOC SUPÉRIEUR : OPERATOR & CORE_STACK */}
        <div className="space-y-5">
          {/* OPERATOR */}
          <div className="flex gap-3 items-start">
            <span className="text-[#F97316]">$</span>
            <p>
              <span className="text-[#F3E7D0] font-bold">OPERATOR:</span>{" "}
              Korallia Frenette 
              <span className="inline-block ml-0.5 text-white font-black terminal-wait-cursor">
  _
</span>
            </p>
          </div>

          {/* CORE STACK */}
          <div className="flex gap-3 items-start">
            <span className="text-[#F97316]">$</span>
            <p>
              <span className="text-[#F3E7D0] font-bold">CORE_STACK:</span>{" "}
              Full-Stack Dev // Maker // Entrepreneur
            </p>
          </div>
        </div>

        {/* BORDURE ET SECTION : ENV */}
        <div className="mt-5 pt-5 border-t border-gray-800 space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-[#F97316]">$</span>
            <span className="font-bold text-[#F3E7D0]">ENV:</span>

            <button
              onClick={() => setIsEnvExpanded(!isEnvExpanded)}
              className="text-[12px] text-[#F6C177] border border-[#A85518]/80 bg-[#3A1F0B]/80 px-3 py-1 hover:text-[#FFE1A8] hover:border-[#F97316] hover:bg-[#5A2A0A] transition-all font-bold cursor-pointer select-none shadow-[0_0_8px_rgba(249,115,22,0.16)]"
            >
              {isEnvExpanded ? "[-] HIDE_ENV" : "[+] LOAD_ENV"}
            </button>
          </div>

          {isEnvExpanded && (
            <div className="mt-3 pl-4 space-y-3 border-amber-500/20 animate-in slide-in-from-top-1 duration-200 bg-amber-500/[0.025]">
              {/* FULL STACK ENV */}
              <div className="flex items-start gap-2 py-3">
                <span className="text-[#C97A2B] font-bold">↳</span>
                <p className="leading-relaxed">
                  <span className="text-[#C97A2B] font-bold">FULL_STACK_DEV=</span>
                  <span className="text-slate-300">
                    "idées brutes, trop d’onglets ouverts, pseudo-code et intuition logique"
                  </span>
                </p>
              </div>

              {/* MAKER ENV */}
              <div className="flex items-start gap-2">
                <span className="text-[#C97A2B] font-bold">↳</span>
                <p className="leading-relaxed">
                  <span className="text-[#C97A2B] font-bold">MAKER=</span>
                  <span className="text-slate-300">
                    "esprit ingénieux, microcontrôleurs, schémas, circuits et PCB"
                  </span>
                </p>
              </div>

              {/* ENTREPRENEUR ENV */}
              <div className="flex items-start gap-2 pb-2">
                <span className="text-[#C97A2B] font-bold">↳</span>
                <p className="leading-relaxed">
                  <span className="text-[#C97A2B] font-bold">ENTREPRENEUR=</span>
                  <span className="text-slate-300">"Co-fondatrice @ </span>
                                <a
  href="https://www.panassor.ca/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#FFB86B] font-bold underline underline-offset-4 decoration-[#F97316]/70 hover:text-[#FFD08A] hover:decoration-[#FFD08A] transition-colors"
>
  panassor.ca | Kits Médiévaux Uniques↗
</a>
                  <span className="text-slate-300">"</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* BORDURE ET SECTION : PHILOSOPHY & TARGET */}
        <div className="mt-5 pt-5 border-t border-gray-800 space-y-5">
          {/* PHILOSOPHY */}
          <div className="flex gap-3 items-start">
            <span className="text-[#F97316]">$</span>
            <p>
              <span className="text-[#F3E7D0] font-bold">PHILOSOPHY:</span>{" "}
              Aucune séparation entre l’imaginaire et la structure.
              <br />
              La créativité ouvre la vision, la structure donne le comment,
              <br />
              puis l’ingéniosité fait tenir l’ensemble.
            </p>
          </div>

          {/* TARGET */}
          <div className="flex gap-3 items-start">
            <span className="text-[#F97316]">$</span>
            <p>
              <span className="text-[#F3E7D0] font-bold">TARGET:</span>{" "}
              donner vie aux idées créatives et faire tenir les systèmes qui les rendent possibles
            </p>
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-6 pt-4 border-t border-[#26221F] text-xs text-green-400/70 select-none cursor-default">
          <div className="flex items-center gap-2 sys-status-pulse">
  <span className="h-2 w-2 bg-green-500 rounded-none inline-block" />
  <span>SYS_STATUS: ACTIVE // COMPILE_SUCCESSFUL</span>
</div>
        </div>

      </div>
    </div>
  );
}

export default WhoamiTerminal;