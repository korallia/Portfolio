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
      <main className="max-w-7xl mx-auto px-8 py-24">
        {/* PAGE IDENTITY */}
        <section className="mb-24 flex justify-center mt-5">
          <div className="relative mx-auto w-full max-w-6xl border border-[#F97316] bg-[#05080C] px-10 py-14 md:px-16 md:py-16 shadow-[10px_10px_0px_rgba(124,58,18,0.45)]">
            <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.35em] text-[#C45A24]">
              [ journal_logs ]
            </p>

            <div className="relative">
              <div className="mb-7">
  <span className="inline-block font-['Oxanium',sans-serif] uppercase font-bold tracking-[0.24em] text-[1.3rem] md:text-[1.6rem] xl:text-[1.8rem] leading-none">
        <span style={{ color: "#F08A24" }}>// MATIERE</span>
    <span style={{ color: "#F97316" }}>_CREATIVE</span>
  </span>
</div>

              <h1 className="font-serif font-black tracking-tight text-white">
                <span className="block text-5xl md:text-6xl xl:text-7xl leading-[0.92]">
                  NOTES SUR LE{" "}
                  <span style={{ color: "#F08A24" }}>CODE</span>
                </span>

                <span className="block text-5xl md:text-6xl xl:text-7xl leading-[0.92]">
                  ET LES{" "}
                  <span style={{ color: "#F3C766" }}>SYSTÈMES</span>.
                </span>
              </h1>
            </div>

            <div className="mt-14 flex items-start gap-5">
              <div className="mt-1 h-16 w-px bg-[#F97316]" />

              <p className="max-w-4xl font-serif text-lg italic leading-relaxed text-[#F3F0EA] md:text-[1.45rem]">
                Une archive de réflexions techniques, de décisions de structure,
                d’idées en construction et de systèmes qui prennent forme.
              </p>
            </div>
          </div>
        </section>

{/* ARCHIVE */}
<section className="relative left-1/2 mt-35 w-[min(82rem,calc(100vw-12rem))] -translate-x-1/2">
  <div className="relative bg-[#050607]/82 border-t border-[#F97316]/70 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
    <div className="px-6 md:px-8 pt-8 pb-7 border-b border-[#1F1A17]/90 bg-[#050607]/55 flex items-start justify-between gap-8">
      <div>
        <p
          className="text-[10px] font-bold tracking-[0.28em] mb-3"
          style={{ color: "#C45A24" }}
        >
          [ ARCHIVES ]
        </p>

       <span className= "font-['Oxanium',sans-serif] text-base md:text-lg font-bold uppercase tracking-[0.24em]">
        <span style={{ color: "#F08A24" }}>// Entree</span>
    <span style={{ color: "#F97316" }}>_RECENTES</span>
  </span>
      </div>

      <p
        className="hidden md:block pt-8 text-[11px] font-bold tracking-[0.2em]"
        style={{ color: "#8F7A68" }}
      >
        SORT_BY: LATEST
      </p>
    </div>

    <div>
      {entries.map((entry) => (
        <article
          key={entry.number}
          className="group grid grid-cols-1 md:grid-cols-12 gap-5 px-6 md:px-8 py-8 border-b border-[#1F1A17]/90 bg-[#050607]/55 transition-all duration-200 cursor-pointer hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#F97316]"
        >
          <div className="md:col-span-1 text-xs font-bold text-[#8F7A68] transition-colors duration-200 group-hover:text-[#F97316]">
            {entry.number}
          </div>

          <div className="md:col-span-7">
            <h3 className="font-serif text-2xl font-black text-white transition-colors group-hover:text-[#FFF3E0]">
              {entry.title}
            </h3>

            <p
              className="mt-2 text-sm leading-relaxed max-w-2xl"
              style={{ color: "#BBAA9A" }}
            >
              {entry.description}
            </p>
          </div>

          <div
            className={`md:col-span-2 text-xs font-bold transition-all duration-200 ${entry.categoryClass} group-hover:brightness-125`}
          >
            {entry.category}
          </div>

          <div className="md:col-span-2 text-xs md:text-right transition-colors duration-200 text-[#8F7A68] group-hover:text-[#CDB9A5]">
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