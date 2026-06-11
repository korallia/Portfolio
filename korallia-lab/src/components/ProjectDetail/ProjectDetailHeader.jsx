import { memo } from "react";

function ProjectDetailHeader({ project, selectedBranch, onBack }) {
  return (
    <header className="relative z-10 border-b border-[#26221F]/60 bg-[#0B0D0F] px-8 pb-9 pt-10 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-sm uppercase tracking-widest text-[#00E676]">
            <span>[ repository_detail ]</span>
          </div>

          <h1 className="font-[Plus_Jakarta_Sans] text-5xl font-black uppercase leading-none tracking-[0.12em] text-[#E8EFEA] md:text-6xl">
            {project.name.replaceAll("_", " ")}
            <span className="text-[#00E676]">_</span>
          </h1>

          <p className="mt-4 font-[JetBrains_Mono] text-[12px] uppercase tracking-[0.16em] text-[#8F7A68]">
            {project.path} // {selectedBranch?.name || "no_branch"}
          </p>

          <p className="mt-6 max-w-3xl font-[Inter] text-[17px] leading-8 text-[#BBAA9A]">
            {project.description}
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="w-fit border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
        >
          back_to_index
        </button>
      </div>
    </header>
  );
}

export default memo(ProjectDetailHeader);