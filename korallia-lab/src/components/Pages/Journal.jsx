const Journal = () => {
  const entries = [
    {
      number: "001",
      title: "DOMPTER L’ALLOCATION DE MÉMOIRE.",
      description:
        "Revenir aux pointeurs, aux listes chaînées et à la matière brute du programme.",
      category: "RECOIL_LOGS",
      meta: "06 MIN READ",
      categoryClass: "text-orange-400",
      numberClass: "text-orange-500",
    },
    {
      number: "002",
      title: "STRUCTURER UNE IDÉE CRÉATIVE.",
      description:
        "Transformer une intuition chaotique en système lisible, maintenable et vivant.",
      category: "CREATIVE_CORE",
      meta: "DRAFT",
      categoryClass: "text-amber-500",
      numberClass: "text-slate-600",
    },
    {
      number: "003",
      title: "LE CODE COMME MATIÈRE.",
      description:
        "Penser le développement comme un atelier : outils, contraintes, texture et finition.",
      category: "MAKER_NOTES",
      meta: "DRAFT",
      categoryClass: "text-red-400",
      numberClass: "text-slate-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0D0C] bg-[linear-gradient(to_right,rgba(36,32,30,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,32,30,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] text-slate-200 font-mono selection:bg-orange-500/30 overflow-x-hidden">
          <main >

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


{/* ARCHIVE */}
{/* ARCHIVE */}
<section className="relative left-1/2 mt-10 mb-50 w-[min(78rem,calc(100vw-12rem))] -translate-x-1/2">
  <div className="relative border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
    {/* petit accent pour rappeler le hero */}
    <div className="absolute -right-2 top-2 h-full w-2 bg-[#3A1F0B]/70" />
    <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#3A1F0B]/70" />

    {/* HEADER */}
    <div className="relative z-10 px-8 md:px-12 pt-10 pb-9 border-b border-[#26221F] bg-[#0B0D0F] flex items-start justify-between gap-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-[JetBrains_Mono] text-[#F59E0B] tracking-widest uppercase mb-5">
          <span>[ Archives_Index ]</span>
        </div>

        <h1 className="font-[Plus_Jakarta_Sans] text-5xl md:text-6xl font-black uppercase tracking-[0.22em] leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
            Archives
          </span>
          <span className="text-[#F59E0B]">_</span>
        </h1>
      </div>

      <p className="hidden md:block pt-12 font-[JetBrains_Mono] text-[10px] font-bold tracking-[0.2em] uppercase text-[#8F7A68]">
        VIEW: ENTREES_RECENTES
      </p>
    </div>

    {/* ENTRIES */}
    <div className="relative z-10 bg-[#050607]/65 pb-2">
      {entries.map((entry) => (
        <article
          key={entry.number}
          className="group grid grid-cols-1 md:grid-cols-12 gap-5 px-8 md:px-12 py-8 border-b border-[#1F1A17]/90 transition-all duration-200 cursor-pointer hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#F97316]"
        >
          <div className="md:col-span-1 font-[JetBrains_Mono] text-xs font-bold text-[#8F7A68] transition-colors duration-200 group-hover:text-[#F97316]">
            {entry.number}
          </div>

          <div className="md:col-span-7">
            <h3 className="font-serif text-2xl font-black text-white transition-colors duration-200 group-hover:text-[#FFF3E0]">
              {entry.title}
            </h3>

            <p
              className="mt-2 font-[JetBrains_Mono] text-sm leading-relaxed max-w-2xl"
              style={{ color: "#BBAA9A" }}
            >
              {entry.description}
            </p>
          </div>

          <div
            className={`md:col-span-2 font-[JetBrains_Mono] text-xs font-bold transition-all duration-200 ${entry.categoryClass} group-hover:brightness-125`}
          >
            {entry.category}
          </div>

          <div className="md:col-span-2 font-[JetBrains_Mono] text-xs md:text-right text-[#8F7A68] transition-colors duration-200 group-hover:text-[#CDB9A5]">
            {entry.meta}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Journal;