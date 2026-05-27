function ArchivesJournal() {

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
  )
};

export default ArchivesJournal;