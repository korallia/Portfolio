import { memo, useCallback } from "react";

import ProjectMetaBadges from "./ProjectMetaBadges";
import ProjectTechStack from "./ProjectTechStack";

function ProjectArchiveEntry({ project, index, onOpenProject }) {
  const handleOpenProject = useCallback(() => {
    onOpenProject(project.slug);
  }, [onOpenProject, project.slug]);

  return (
    <article
      onClick={handleOpenProject}
      className="group grid cursor-pointer grid-cols-1 gap-5 border-b border-[#1F1A17]/90 px-8 py-11 transition-all duration-200 hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#00E676] md:grid-cols-12 md:px-12"
    >
      <div className="font-[JetBrains_Mono] text-xs font-bold text-[#00E676]/75 transition-colors duration-200 group-hover:text-[#00E676] md:col-span-1">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="md:col-span-7">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-[Plus_Jakarta_Sans] text-2xl font-black uppercase leading-none tracking-[-0.035em] text-[#F4F4F0] transition-colors duration-200 group-hover:text-white md:text-3xl">
            {project.name.replaceAll("_", " ")}
          </h2>

          <span className="font-[JetBrains_Mono] text-[#00E676] transition-transform duration-200 group-hover:translate-x-1">
            ▶
          </span>
        </div>

        <p className="mt-3 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.18em] text-[#00E676]/70 transition-colors duration-200 group-hover:text-[#00E676]">
          <span className="text-[#5E7B6B]">~/</span>
          <span>{project.path?.replace("~/repos/", "repos/")}</span>
        </p>

        <p className="mt-5 max-w-2xl font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
          {project.description}
        </p>

        <ProjectTechStack stack={project.stack} />
      </div>

      <ProjectMetaBadges category={project.category} status={project.status} />
    </article>
  );
}

export default memo(ProjectArchiveEntry);