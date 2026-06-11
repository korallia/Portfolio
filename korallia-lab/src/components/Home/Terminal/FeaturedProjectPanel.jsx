import { memo } from "react";

import TerminalButton from "./TerminalButton";
import TechBadgeList from "./TechBadgeList";

function FeaturedProjectPanel({
  text,
  isLoading,
  error,
  project,
  onOpenProject,
}) {
  if (isLoading) {
    return (
      <div className="min-h-0 border-2 border-[#26221F] border-t-[#00E676] bg-[#0B0D0F] p-6 shadow-[4px_4px_0px_0px_rgba(0,80,45,0.22)] md:min-h-[460px] lg:col-span-5">
        <span className="mb-3 block text-xs uppercase tracking-[0.14em] text-slate-500">
          {text.loadingProjectLabel}
        </span>

        <h2 className="mb-6 text-5xl font-black uppercase tracking-[0.06em] text-white">
          {text.loadingProjectTitle}
        </h2>

        <p className="font-[Inter] text-[18px] leading-8 text-[#D5C4B4]">
          {text.loadingProjectText}
        </p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-0 border-2 border-[#26221F] border-t-[#00E676] bg-[#0B0D0F] p-6 shadow-[4px_4px_0px_0px_rgba(0,80,45,0.22)] md:min-h-[460px] lg:col-span-5">
        <span className="mb-3 block text-xs uppercase tracking-[0.14em] text-slate-500">
          {text.errorProjectLabel}
        </span>

        <h2 className="mb-6 text-5xl font-black uppercase tracking-[0.06em] text-white">
          {text.errorProjectTitle}
        </h2>

        <p className="font-[Inter] text-[18px] leading-8 text-[#D5C4B4]">
          {error || text.errorProjectFallback}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-0 border-2 border-[#26221F] border-t-[#00E676] bg-[#0B0D0F] p-6 shadow-[4px_4px_0px_0px_rgba(0,80,45,0.22)] md:min-h-[460px] lg:col-span-5">
      <div className="flex h-full flex-col">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.14em] text-slate-500">
            {text.featuredProject}
          </span>

          <h2 className="mb-7 font-[Plus_Jakarta_Sans] text-5xl font-black uppercase leading-none tracking-[0.1em] text-white md:text-6xl">
            {project.name.replaceAll("_", " ")}
          </h2>

          <p className="font-[Inter] text-[19px] leading-10 text-[#D5C4B4]">
            {project.description}
          </p>
        </div>

        <div className="mt-12 border-t-2 border-dashed border-[#26221F] pt-6">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#00E676]">
            {text.techStack}
          </p>

          <TechBadgeList stack={project.stack} />
        </div>

        <div className="mt-8 md:mt-auto md:pt-8">
          <TerminalButton full onClick={onOpenProject}>
            {text.openProjectDetail}
          </TerminalButton>
        </div>
      </div>
    </div>
  );
}

export default memo(FeaturedProjectPanel);