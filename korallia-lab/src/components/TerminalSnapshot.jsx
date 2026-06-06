import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const skillStyles = [
  {
    label: "FRONT",
    cat: "front",
    node: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10",
  },
  {
    label: "BACK",
    cat: "back",
    node: "text-sky-400 border-sky-950/60 bg-sky-950/10",
  },
  {
    label: "SYSTEM",
    cat: "software",
    node: "text-violet-300 border-violet-900/70 bg-violet-950/20",
  },
  {
    label: "DATA",
    cat: "bd",
    node: "text-amber-500 border-amber-950/60 bg-amber-950/10",
  },
];

const techStyles = {
  React: skillStyles[0].node,
  "React.js": skillStyles[0].node,
  "Next.js": skillStyles[0].node,
  TailwindCSS: skillStyles[0].node,
  "Framer Motion": skillStyles[0].node,

  "Node.js": skillStyles[1].node,
  TypeScript: skillStyles[1].node,
  "Python/Flask": skillStyles[1].node,
  "PHP/Laravel": skillStyles[1].node,
  "Java/Spring Boot": skillStyles[1].node,

  "Git CLI": skillStyles[2].node,
  "Java/JVM": skillStyles[2].node,
  "Java / JVM": skillStyles[2].node,
  Python: skillStyles[2].node,
  "C/C++": skillStyles[2].node,
  "C / C++": skillStyles[2].node,
  GoPiGo3: skillStyles[2].node,
  "Finite State Machine": skillStyles[2].node,
  IoT: skillStyles[2].node,

  PostgreSQL: skillStyles[3].node,
  Prisma: skillStyles[3].node,
  MongoDB: skillStyles[3].node,
  SQL: skillStyles[3].node,
};

function truncateText(text = "", maxLength = 140) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function TerminalSnapshot() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [featuredBranch, setFeaturedBranch] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoadingProjects(true);
        setProjectsError(null);

        const response = await fetch("/api/projects/archive");

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets.");
        }

        const data = await response.json();
        const loadedProjects = data.slice(0, 3);

        setProjects(loadedProjects);

        const featuredProject = loadedProjects[0];

        if (featuredProject?.slug) {
          const detailResponse = await fetch(
            `/api/projects/${featuredProject.slug}`
          );

          if (detailResponse.ok) {
            const detailData = await detailResponse.json();

            const defaultBranch =
              (detailData.branches || []).find(
                (branch) =>
                  String(branch.id) ===
                  String(detailData.project.default_branch_id)
              ) || detailData.branches?.[0];

            setFeaturedBranch(defaultBranch || null);
          }
        }
      } catch (err) {
        console.error(err);
        setProjectsError(err.message);
      } finally {
        setIsLoadingProjects(false);
      }
    };

    loadProjects();
  }, []);

  const featuredProject = projects[0];
  const featuredModules = featuredBranch?.modules || [];

  return (
    <section className="min-h-screen w-full bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] flex flex-col justify-center p-4 md:p-16 border-t-4 border-b-4 border-[#24201E]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between border-4 border-[#00E676] bg-[#0B0D0F] p-4 mb-8 font-[JetBrains_Mono] shadow-[4px_4px_0px_0px_rgba(0,230,118,0.2)]">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-none bg-[#00E676] shadow-[0_0_15px_#00E676] inline-block animate-pulse" />

            <span className="text-[#00E676] text-base font-black tracking-widest">
              ⚡ ENGINE::RUNNING_PROJECTS
            </span>
          </div>

          <button
            onClick={() => navigate("/repertoire")}
            className="text-xs text-[#00E676]/60 font-bold hidden md:block hover:text-[#00E676] transition"
          >
            CORE_LOAD: ACTIVE
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-[JetBrains_Mono]">
          <div className="lg:col-span-5 bg-[#0B0D0F] border-2 border-[#26221F] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            {isLoadingProjects ? (
              <div>
                <span className="text-xs text-slate-500 block mb-2">
                  // INTERFACE_NAME
                </span>

                <h2 className="text-white text-3xl font-black tracking-tighter mb-4 uppercase">
                  loading_projects...
                </h2>

                <p className="text-slate-400 text-sm font-[Inter] leading-relaxed">
                  Chargement du répertoire technique.
                </p>
              </div>
            ) : projectsError || !featuredProject ? (
              <div>
                <span className="text-xs text-slate-500 block mb-2">
                  // INTERFACE_ERROR
                </span>

                <h2 className="text-white text-3xl font-black tracking-tighter mb-4 uppercase">
                  archive_unavailable
                </h2>

                <p className="text-slate-400 text-sm font-[Inter] leading-relaxed">
                  {projectsError || "Aucun projet disponible pour le moment."}
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-xs text-slate-500 block mb-2">
                    // INTERFACE_NAME
                  </span>

                  <h2 className="text-white text-3xl font-black tracking-tighter mb-4 uppercase">
                    {featuredProject.name.replaceAll("_", " ")}
                  </h2>

                  <p className="text-slate-400 text-sm font-[Inter] leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(featuredProject.stack || []).slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                          techStyles[tech] || skillStyles[2].node
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 lg:mt-0 border-t-2 border-dashed border-[#26221F] pt-6">
                  <div className="text-xs text-[#00E676] font-bold mb-2">
                    ⚡ OBSTACLE_TECHNIQUE:
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/repertoire/${featuredProject.slug}`)
                    }
                    className="w-full text-left text-[#00E676] text-xs bg-[#00E676]/5 border-2 border-[#00E676] p-3 font-bold leading-5 transition hover:bg-[#00E676]/10"
                  >
                    ↳{" "}
                    {truncateText(
                      featuredBranch?.obstacle ||
                        "Chargement de la lecture technique du projet.",
                      145
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-7 bg-[#020304] border-4 border-[#26221F] p-6 text-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E676]/10 animate-pulse" />

            <div className="flex justify-between items-center border-b-2 border-[#26221F] pb-3 mb-5 text-slate-500 text-xs font-bold">
              <span>
                PROJECT_DETAIL_PREVIEW //{" "}
                {featuredBranch?.name || "MAIN_BRANCH"}
              </span>

              <span className="text-[#00E676]">ONLINE</span>
            </div>

            {isLoadingProjects ? (
              <div className="border border-[#26221F]/80 bg-[#0B0D0F] p-4">
                <p className="font-[JetBrains_Mono] text-xs uppercase tracking-[0.14em] text-[#8F7A68]">
                  loading_project_preview...
                </p>
              </div>
            ) : projectsError || !featuredProject ? (
              <div className="border border-[#26221F]/80 bg-[#0B0D0F] p-4">
                <p className="font-[JetBrains_Mono] text-xs uppercase tracking-[0.14em] text-[#8F7A68]">
                  preview_unavailable
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="border border-[#26221F]/80 border-l-2 border-l-[#00E676] bg-[#00E676]/5 p-4">
                  <div className="mb-2 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.16em] text-[#00E676]">
                    project_summary
                  </div>

                  <p className="font-[Inter] text-[14px] leading-6 text-[#BBAA9A]">
                    {truncateText(
                      featuredProject.summary ||
                        "Résumé technique du projet chargé depuis la base de données.",
                      240
                    )}
                  </p>
                </div>

                <div>
                  <div className="mb-3 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.16em] text-[#00E676]">
                    modules_touched
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {featuredModules.slice(0, 4).map((module) => (
                      <div
                        key={module.id || module.name}
                        className="border border-[#26221F]/80 bg-[#0B0D0F] p-3"
                      >
                        <p className="font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] text-[#00E676]">
                          /src/{module.name}
                        </p>

                        <p className="mt-2 font-[Inter] text-[12px] leading-5 text-[#8F7A68]">
                          {truncateText(module.description, 95)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#26221F]/60 pt-4 flex items-center justify-between gap-4">
                  <div className="font-[JetBrains_Mono] text-xs text-[#00E676]">
                    korallia-lab@system:~$
                    <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-[#00E676] align-middle shadow-[0_0_10px_#00E676]" />
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/repertoire/${featuredProject.slug}`)
                    }
                    className="border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
                  >
                    open_project_detail
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerminalSnapshot;