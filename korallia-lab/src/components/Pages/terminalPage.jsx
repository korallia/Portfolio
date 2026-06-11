import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { useProjects } from "../../context/projects/useProjects";

import { skillStyles, techStyles, categoryStyles, statusStyles } from "../../data/techStyles";



function TerminalPage() {
  const navigate = useNavigate();

  const { projects, isLoadingProjects, projectsError } = useProjects();

  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 pb-16 pt-28 text-slate-300 selection:bg-[#00E676]/30 md:px-12 md:pt-32">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          <header className="relative z-10 flex min-w-0 items-start justify-between gap-8 overflow-hidden border-b border-[#26221F]/60 bg-[#0B0D0F] px-5 pb-9 pt-10 md:px-12">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#00E676]">
                <span>[ current_directories ]</span>
              </div>

              <h1 className="max-w-full font-[Plus_Jakarta_Sans] text-[clamp(2.2rem,10vw,4.5rem)] font-black uppercase leading-none tracking-[clamp(0.04em,1.1vw,0.22em)] text-[#E8EFEA]">
                <span>Repertoire</span>
                <span className="text-[#00E676]">_</span>
              </h1>

              <p className="mt-6 max-w-2xl font-[Inter] text-[16px] leading-7 text-[#BBAA9A] md:text-[20px]">
                Une archive technique courte pour présenter les projets actifs,
                leur rôle, leur état et les technologies utilisées.
              </p>
            </div>

            <p className="hidden shrink-0 pt-12 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7A68] md:block">
              VIEW: CURRENT_DIRECTORIES
            </p>
          </header>

          <div className="relative z-10 bg-[#050607]/70 pb-2">
            {isLoadingProjects && (
              <div className="px-8 py-11 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676] md:px-12">
                loading_projects...
              </div>
            )}

            {projectsError && !isLoadingProjects && (
              <div className="px-8 py-11 font-[Inter] text-[15px] leading-7 text-[#BBAA9A] md:px-12">
                {projectsError}
              </div>
            )}

            {!isLoadingProjects &&
              !projectsError &&
              projects.map((project, index) => (
                <article
                  key={project.id}
                  onClick={() => navigate(`/repertoire/${project.slug}`)}
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

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.stack || []).map((tech) => (
                        <span
                          key={tech}
                          className={`border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                            techStyles[tech] || skillStyles[2].node
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 md:col-span-4 md:flex-col md:items-end md:justify-center">
                    <span
                      className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.12em] ${
                        categoryStyles[project.category] || skillStyles[2].node
                      }`}
                    >
                      {project.category}
                    </span>

                    <span
                      className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                        statusStyles[project.status] ||
                        "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(TerminalPage);