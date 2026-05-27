function JournalHero() {


  return (
<section className="min-h-[calc(100vh-5rem)] w-full bg-[#0E0D0C] flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35] pointer-events-none"></div>

          <div className="max-w-5xl w-full border-4 border-[#F97316] bg-[#0B0D0F] p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(249,115,22,0.15)] relative z-10">
            
            <div className="flex items-center gap-2 text-xs font-[JetBrains_Mono] text-[#F59E0B] tracking-widest uppercase mb-4">
              <span>[ ID: Matiere_creative ]</span>
            </div>

            <h1 className="font-[Plus_Jakarta_Sans] text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6 uppercase">
              Journal<span className="text-[#F97316]">_</span>
            </h1>
            
            <p className="font-[Plus_Jakarta_Sans] text-3xl md:text-5xl text-white font-black leading-[0.95] tracking-tight mb-8 uppercase max-w-4xl">
  NOTES SUR LE{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
    CODE
  </span>{" "}
  ET LES{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
    SYSTÈMES
  </span>.
</p>
            
           <p className="font-[Inter] text-slate-300 text-lg md:text-xl max-w-4xl leading-relaxed border-l-4 border-[#F97316]/45 pl-6 mt-8 mb-10 ml-0 md:ml-1">
                Une archive de réflexions techniques, de décisions de structure et
                d’idées en construction. J’y documente le code, les systèmes, les
                choix d’architecture et les processus qui transforment une intuition
                créative en quelque chose de lisible, solide et vivant.
            </p>
            
            <div className="mt-12 flex items-center gap-3 text-sm font-[JetBrains_Mono] text-[#F59E0B] font-bold tracking-wider">
              <span className="bg-[#F59E0B]/10 px-3 py-1 border border-[#F59E0B]/30 animate-pulse">SYSTEM_READY</span>
              <span>[ SCROLL POUR VOIR LES ARCHIVES ] ↓</span>
            </div>
            
          </div>
        </section>
  )
};

export default JournalHero;