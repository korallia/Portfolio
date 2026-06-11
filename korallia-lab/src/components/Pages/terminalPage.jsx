import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useProjects } from "../../context/projects/useProjects";

import ProjectArchiveEntry from "../repertoire/ProjectArchiveEntry";
import ProjectListState from "../Repertoire/ProjectListState";
import RepertoireHeader from "../Repertoire/RepertoireHeader";

function TerminalPage() {
  const navigate = useNavigate();

  const { projects, isLoadingProjects, projectsError } = useProjects();

  const openProject = useCallback(
    (slug) => {
      navigate(`/repertoire/${slug}`);
    },
    [navigate]
  );

  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 pb-16 pt-28 text-slate-300 selection:bg-[#00E676]/30 md:px-12 md:pt-32">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          <RepertoireHeader />

          <div className="relative z-10 bg-[#050607]/70 pb-2">
            <ProjectListState
              isLoading={isLoadingProjects}
              error={projectsError}
            />

            {!isLoadingProjects &&
              !projectsError &&
              projects.map((project, index) => (
                <ProjectArchiveEntry
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenProject={openProject}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(TerminalPage);