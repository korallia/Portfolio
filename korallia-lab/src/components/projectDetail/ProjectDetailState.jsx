import { memo } from "react";

function ProjectDetailState({ type, error, onBack }) {
  const isLoading = type === "loading";

  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 md:px-12">
      <section className="relative left-1/2 w-full max-w-4xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          <div className="relative z-10">
            <p className="font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.18em] text-[#00E676]">
              {isLoading ? "loading_project_detail..." : "[ error_404 ]"}
            </p>

            {isLoading ? (
              <p className="mt-4 font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                Chargement des informations du projet.
              </p>
            ) : (
              <>
                <h1 className="mt-4 font-[Plus_Jakarta_Sans] text-5xl font-black uppercase text-white">
                  {error || "Project not found."}
                </h1>

                <button
                  type="button"
                  onClick={onBack}
                  className="mt-8 border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
                >
                  back_to_index
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(ProjectDetailState);