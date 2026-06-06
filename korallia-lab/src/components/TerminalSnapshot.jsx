import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const staticCommits = [
  {
    id: 1,
    label: "db_sync",
    text: "connect project archive to database",
    detail: "Loaded projects from PostgreSQL and replaced static repository data.",
  },
  {
    id: 2,
    label: "branch_view",
    text: "add branch-aware project details",
    detail: "Project pages now render branch modules, objectives, obstacles and results.",
  },
  {
    id: 3,
    label: "journal_api",
    text: "load latest journal article",
    detail: "Home snapshot now pulls the newest published article from the journal API.",
  },
  {
    id: 4,
    label: "trocqc_import",
    text: "archive completed academic project",
    detail: "Added TrocQC with architecture branches, modules and completed status.",
  },
  {
    id: 5,
    label: "gopigo_import",
    text: "document IoT robot abstraction project",
    detail: "Added GoPiGo project summary with FSM, robot abstraction and hardware modules.",
  },
];

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
          const detailResponse = await fetch(`/api/projects/${featuredProject.slug}`);

          if (detailResponse.ok) {
            const detailData = await detailResponse.json();

            const defaultBranch =
              (detailData.branches || []).find(
                (branch) => branch.id === detailData.project.default_branch_id
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

  return (
    <section    onClick={() => navigate(`/repertoire/`)} className="min-h-screen w-full bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] flex flex-col justify-center p-4 md:p-16 border-t-4 border-b-4 border-[#24201E]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between border-4 border-[#00E676] bg-[#0B0D0F] p-4 mb-8 font-[JetBrains_Mono] shadow-[4px_4px_0px_0px_rgba(0,230,118,0.2)]">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-none bg-[#00E676] shadow-[0_0_15px_#00E676] inline-block animate-pulse"></span>
            <span className="text-[#00E676] text-base font-black tracking-widest">
              ⚡ ENGINE::RUNNING_PROJECTS
            </span>
          </div>

          <button
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
                    onClick={() => navigate(`/repertoire/${featuredProject.slug}`)}
                    className="w-full text-left text-[#00E676] text-sm bg-[#00E676]/5 border-2 border-[#00E676] p-3 font-bold transition hover:bg-[#00E676]/10"
                  >
                                    ↳{" "}
                  {featuredBranch?.obstacle
                    ? `${featuredBranch.obstacle.slice(0, 145)}...`
                    : "Chargement de la lecture technique du projet."}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-7 bg-[#020304] border-4 border-[#26221F] p-6 text-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E676]/10 animate-pulse"></div>

            <div className="flex justify-between items-center border-b-2 border-[#26221F] pb-3 mb-4 text-slate-500 text-xs font-bold">
              <span>STREAMING_COMMITS // STATIC_LOG</span>
              <span className="text-[#00E676]">ONLINE</span>
            </div>

            <div className="space-y-4">
              {staticCommits.map((commit, index) => {
                const isFirst = index === 0;

                return (
                  <div
                    key={commit.id}
                    className={
                      isFirst
                        ? "flex gap-4 items-start bg-[#00E676]/5 p-2 border-l-4 border-[#00E676]"
                        : index === 1
                        ? "flex gap-4 items-start opacity-70 pl-3"
                        : "flex gap-4 items-start opacity-40 pl-3"
                    }
                  >
                    <span
                      className={isFirst ? "text-[#00E676] font-bold" : "text-slate-600"}
                    >
                      {isFirst ? "▶" : "○"}
                    </span>

                    <div>
                      <div
                        className={
                          isFirst
                            ? "text-white font-bold"
                            : index === 1
                            ? "text-[#A7F3D0]/80"
                            : "text-[#A7F3D0]/60"
                        }
                      >
                        commit_{commit.label}: "{commit.text}"
                      </div>

                      <div
                        className={
                          isFirst
                            ? "text-[#A7F3D0] text-xs mt-1 font-bold"
                            : index === 1
                            ? "text-slate-500 text-xs mt-1"
                            : "text-slate-600 text-xs mt-1"
                        }
                      >
                        source: portfolio_system
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="pt-4 flex items-center gap-2 text-xs text-[#00E676]">
                <span className="font-bold">korallia-lab@system:~$ </span>
                <span className="w-3 h-5 bg-[#00E676] inline-block animate-ping shadow-[0_0_10px_#00E676]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerminalSnapshot;