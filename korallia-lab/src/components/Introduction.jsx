
function Introduction() {
  return (
          <section className="min-h-[calc(100vh-5rem)] w-full bg-[#0E0D0C] flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35] pointer-events-none"></div>

          <div className="max-w-5xl w-full border-4 border-[#F97316] bg-[#0B0D0F] p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(249,115,22,0.15)] relative z-10">
            
            <div className="flex items-center gap-2 text-xs font-[JetBrains_Mono] text-[#F59E0B] tracking-widest uppercase mb-4">
              <span>[ ID: KORALLIA_INIT ]</span>
            </div>

            <h1 className="font-[Plus_Jakarta_Sans] text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6 uppercase">
              Korallia<span className="text-[#F97316]">_</span>
            </h1>
            
            <p className="font-[Plus_Jakarta_Sans] text-3xl md:text-5xl text-white font-black leading-none tracking-tight mb-8 uppercase">
              Je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">digitalise</span> vos idées <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">créatives</span>.
            </p>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed font-[Inter] border-l-4 border-amber-950/80 pl-6 my-8">
              Entrepreneure, développeuse et <span className="text-white font-bold underline decoration-[#F97316]">maker</span> dans l'âme. Je prends l'impalpable — vos concepts de business, votre imaginaire, vos systèmes complexes — et je le matérialise avec du code de pointe. Du pixel jusqu'au hardware.
            </p>
            
            <div className="mt-12 flex items-center gap-3 text-sm font-[JetBrains_Mono] text-[#F59E0B] font-bold tracking-wider">
              <span className="bg-[#F59E0B]/10 px-3 py-1 border border-[#F59E0B]/30 animate-pulse">SYSTEM_READY</span>
              <span>[ SCROLL POUR ALLUMER LA MACHINE ] ↓</span>
            </div>
            
          </div>
        </section>
  )
}

export default Introduction