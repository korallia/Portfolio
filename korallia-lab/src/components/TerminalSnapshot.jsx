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

function truncateText(text = "", maxLength = 220) {
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

  const textCardBase =
    "border border-[#26221F]/80 bg-[#0B0D0F] p-4";

  const textCardOrange =
    "border border-[#26221F]/80 border-l-2 border-l-[#F97316] bg-[#0B0D0F] p-4";

  return (
    <section className="h-screen w-full overflow-hidden border-y-4 border-[#24201E] bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] p-4 md:p-16">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between border-4 border-[#00E676] bg-[#0B0D0F] p-4 font-[JetBrains_Mono] shadow-[4px_4px_0px_0px_rgba(0,230,118,0.2)]">
          <div className="flex items-center gap-3">
            <span className="inline-block h-4 w-4 bg-[#00E676] shadow-[0_0_15px_#00E676]" />

            <span className="text-base font-black uppercase tracking-[0.18em] text-[#00E676]">
              ⚡ engine::project_preview
            </span>
          </div>

          <button
            onClick={() => navigate("/repertoire")}
            className="border border-[#00E676]/70 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-[11px] font-black uppercase tracking-[0.16em] text-[#00E676] transition hover:bg-[#00E676]/10 hover:shadow-[0_0_12px_rgba(0,230,118,0.18)]"
          >
            [ ouvrir_le_repertoire ]
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 font-[JetBrains_Mono] lg:grid-cols-12">
          {/* LEFT PANEL - NO BORDER */}
          <div className="min-h-[460px] bg-[#0B0D0F] p-6 shadow-[4px_4px_0px_0px_rgba(0,80,45,0.22)] lg:col-span-5">
            {isLoadingProjects ? (
              <div>
                <span className="mb-3 block text-xs uppercase tracking-[0.14em] text-slate-500">
                  // loading_project
                </span>

                <h2 className="mb-6 text-5xl font-black uppercase tracking-[0.06em] text-white">
                  loading...
                </h2>

                <p className="font-[Inter] text-[18px] leading-8 text-[#D5C4B4]">
                  Chargement du répertoire technique.
                </p>
              </div>
            ) : projectsError || !featuredProject ? (
              <div>
                <span className="mb-3 block text-xs uppercase tracking-[0.14em] text-slate-500">
                  // project_error
                </span>

                <h2 className="mb-6 text-5xl font-black uppercase tracking-[0.06em] text-white">
                  unavailable
                </h2>

                <p className="font-[Inter] text-[18px] leading-8 text-[#D5C4B4]">
                  {projectsError || "Aucun projet disponible pour le moment."}
                </p>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <div>
                  <span className="mb-4 block text-xs uppercase tracking-[0.14em] text-slate-500">
                    // featured_project
                  </span>

                  <h2 className="mb-7 font-[Plus_Jakarta_Sans] text-5xl font-black uppercase leading-none tracking-[0.1em] text-white md:text-6xl">
                    {featuredProject.name.replaceAll("_", " ")}
                  </h2>

                  <p className="mb-4 font-[Inter] text-[17px] leading-8 text-[#D5C4B4]">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="mt-12 border-t-2 border-dashed border-[#26221F] pt-6">
                  <p className="mb-6 text-m font-black uppercase tracking-[0.18em] text-[#00E676]">
                    tech_stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(featuredProject.stack || []).map((tech) => (
                      <span
                        key={tech}
                        className={`mb-2 border px-2 py-1 text-[12px] font-bold uppercase tracking-[0.12em] ${
                          techStyles[tech] || skillStyles[2].node
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <button
                    onClick={() =>
                      navigate(`/repertoire/${featuredProject.slug}`)
                    }
                    className="w-full border-2 border-[#00E676] bg-[#00E676]/5 px-4 py-3 text-left font-[JetBrains_Mono] text-xs font-black uppercase tracking-[0.12em] text-[#00E676] transition hover:bg-[#00E676]/10"
                  >
                    ↳ open_project_detail
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT PANEL - TOP ACCENT + RIGHT DEPTH */}
          <div className="relative min-h-[460px] bg-[#020304] p-6 lg:col-span-7">
            <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between border-b border-[#26221F]/60 pb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                <span className="flex items-center gap-2">
                  <span>project_detail_preview //</span>

                  <span className="border border-[#F97316]/40 bg-[#F97316]/10 px-2 py-1 text-[#F59E0B]">
                    {featuredBranch?.name || "main_branch"}
                  </span>
                </span>

                <span className="text-[#00E676]">online</span>
              </div>

              {isLoadingProjects ? (
                <article className={textCardOrange}>
                  <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                    loading_preview
                  </p>

                  <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                    Chargement de la fiche détaillée du projet.
                  </p>
                </article>
              ) : projectsError || !featuredProject ? (
                <article className={textCardOrange}>
                  <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                    preview_unavailable
                  </p>

                  <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                    Impossible de charger la fiche de projet.
                  </p>
                </article>
              ) : (
                <div className="grid gap-4">
                  {/* SUMMARY - DARK BORDER + ORANGE LEFT BORDER */}
                  <article className={textCardOrange}>
                    <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                      project_summary
                    </p>

                    <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                      {truncateText(
                        featuredProject.summary ||
                          "Résumé technique du projet chargé depuis la base de données.",
                        260
                      )}
                    </p>
                  </article>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* OBJECTIVE - DARK BORDER ONLY */}
                    <article className={textCardBase}>
                      <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                        objective
                      </p>

                      <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                        {truncateText(featuredBranch?.objective, 170)}
                      </p>
                    </article>

                    {/* TECHNICAL OBSTACLE - DARK BORDER + ORANGE LEFT BORDER */}
                    <article className={textCardOrange}>
                      <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                        technical_obstacle
                      </p>

                      <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                        {truncateText(featuredBranch?.obstacle, 170)}
                      </p>
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* RESULT - DARK BORDER ONLY */}
                    <article className={textCardBase}>
                      <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                        result_impact
                      </p>

                      <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                        {truncateText(featuredBranch?.result, 170)}
                      </p>
                    </article>

                    {/* ARCHITECTURE - DARK BORDER ONLY */}
                    <article className={textCardBase}>
                      <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                        architecture_decision
                      </p>

                      <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
                        {truncateText(featuredBranch?.decision, 170)}
                      </p>
                    </article>
                  </div>

                
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerminalSnapshot;