import { useNavigate } from "react-router-dom";

function ArchivesJournal({ entries = [], loading, error }) {
  const navigate = useNavigate();

  const getCategoryClass = (category) => {
    switch (category) {
      case "RECOIL_LOGS":
        return "text-orange-400";

      case "CREATIVE_CORE":
        return "text-amber-500";

      case "MAKER_NOTES":
        return "text-red-400";

      default:
        return "text-[#F59E0B]";
    }
  };

  if (loading) {
    return (
      <section className="relative left-1/2 mt-10 mb-32 w-[calc(100vw-2rem)] sm:w-[min(78rem,calc(100vw-4rem))] -translate-x-1/2">
        <div className="border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] p-12 font-[JetBrains_Mono] text-[#F59E0B] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
          [ LOADING_ARCHIVES... ]
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative left-1/2 mt-10 mb-32 w-[calc(100vw-2rem)] sm:w-[min(78rem,calc(100vw-4rem))] -translate-x-1/2">
        <div className="border-2 border-[#2A211C] border-t-[#EF4444] bg-[#0B0D0F] p-12 font-[JetBrains_Mono] text-[#EF4444] shadow-[8px_8px_0px_0px_rgba(239,68,68,0.12)]">
          [ ERROR ] {error}
        </div>
      </section>
    );
  }

  return (
    <section id="archives" className="relative left-1/2 mt-10 mb-32 w-[calc(100vw-2rem)] sm:w-[min(78rem,calc(100vw-4rem))] -translate-x-1/2">
      <div className="relative border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
        <div className="absolute -right-2 top-2 h-full w-2 bg-[#3A1F0B]/70" />
        <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#3A1F0B]/70" />

        {/* HEADER */}
        <div className="relative z-10 flex min-w-0 items-start justify-between gap-8 overflow-hidden border-b border-[#26221F] bg-[#0B0D0F] px-5 pb-9 pt-10 md:px-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-[JetBrains_Mono] text-[#F59E0B] tracking-widest uppercase mb-5">
              <span>[ Archives_Index ]</span>
            </div>

            <h1 className="font-[Plus_Jakarta_Sans] text-[clamp(2.25rem,13vw,4.5rem)] font-black uppercase tracking-[clamp(0.04em,1.4vw,0.22em)] leading-none">
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
              key={entry.slug}
              onClick={() => navigate(`/journal/${entry.slug}`)}
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
                  {entry.excerpt}
                </p>
              </div>

              <div
                className={`md:col-span-2 font-[JetBrains_Mono] text-xs font-bold transition-all duration-200 ${getCategoryClass(
                  entry.category
                )} group-hover:brightness-125`}
              >
                {entry.category}
              </div>

              <div className="md:col-span-2 font-[JetBrains_Mono] text-xs md:text-right text-[#8F7A68] transition-colors duration-200 group-hover:text-[#CDB9A5]">
                {entry.read_time}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArchivesJournal;