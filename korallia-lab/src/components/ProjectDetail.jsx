import { useEffect, useState,useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  "Next.js": skillStyles[0].node,
  TailwindCSS: skillStyles[0].node,
  "Framer Motion": skillStyles[0].node,

  "Node.js": skillStyles[1].node,
  TypeScript: skillStyles[1].node,
  "Git CLI": skillStyles[2].node,
  "Python/Flask": skillStyles[1].node,
  "PHP/Laravel": skillStyles[1].node,
  "Java/Spring Boot": skillStyles[1].node,

  "Java/JVM": skillStyles[2].node,
  Python: skillStyles[2].node,
  "C/C++": skillStyles[2].node,

  PostgreSQL: skillStyles[3].node,
  Prisma: skillStyles[3].node,
  MongoDB: skillStyles[3].node,
};

const categoryStyles = {
  Fullstack: skillStyles[1].node,
  Architecture: skillStyles[3].node,
  Infrastructure: skillStyles[2].node,
};

const statusStyles = {
  IN_DEVELOPMENT:
    "border-orange-900/70 bg-orange-950/20 text-orange-400",
  ACTIVE:
    "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
  STABLE:
    "border-sky-900/70 bg-sky-950/20 text-sky-300",
  LIVE:
    "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
};

const branchThemes = {
  orange: {
    label: "orange",
    top: "border-t-orange-500",
    glow: "shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]",
    dot: "bg-orange-500 shadow-[0_0_14px_#F97316]",
    text: "text-orange-400",
    important: "border-l-orange-500 bg-orange-950/10",
    hover: "hover:border-orange-500/45 hover:text-orange-400",
    active: "border-orange-900/70 bg-orange-950/20 text-orange-400",
  },

  green: {
    label: "green",
    top: "border-t-[#00E676]",
    glow: "shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]",
    dot: "bg-[#00E676] shadow-[0_0_14px_#00E676]",
    text: "text-[#00E676]",
    important: "border-l-[#00E676] bg-[#00E676]/5",
    hover: "hover:border-[#00E676]/45 hover:text-[#00E676]",
    active: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
  },

  blue: {
    label: "blue",
    top: "border-t-sky-400",
    glow: "shadow-[8px_8px_0px_0px_rgba(14,165,233,0.10)]",
    dot: "bg-sky-400 shadow-[0_0_14px_#38BDF8]",
    text: "text-sky-300",
    important: "border-l-sky-400 bg-sky-950/10",
    hover: "hover:border-sky-400/45 hover:text-sky-300",
    active: "border-sky-900/70 bg-sky-950/20 text-sky-300",
  },

  violet: {
    label: "violet",
    top: "border-t-violet-400",
    glow: "shadow-[8px_8px_0px_0px_rgba(139,92,246,0.10)]",
    dot: "bg-violet-400 shadow-[0_0_14px_#A78BFA]",
    text: "text-violet-300",
    important: "border-l-violet-400 bg-violet-950/10",
    hover: "hover:border-violet-400/45 hover:text-violet-300",
    active: "border-violet-900/70 bg-violet-950/20 text-violet-300",
  },
};

const fixedGreenTheme = branchThemes.green;




export default function ProjectDetailPage() {
 const { slug } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [isLoadingProject, setIsLoadingProject] = useState(true);
  const [projectError, setProjectError] = useState(null);


 
useEffect(() => {
  const loadProjectDetail = async () => {
    try {
      setIsLoadingProject(true);
      setProjectError(null);

      const response = await fetch(`/api/projects/${slug}`);

      if (!response.ok) {
        throw new Error("Erreur lors du chargement du projet.");
      }

      const data = await response.json();

      setProject(data.project);
      setBranches(data.branches || []);

      const defaultBranch =
        (data.branches || []).find(
          (branch) => branch.id === data.project.default_branch_id
        ) || data.branches?.[0];

      setSelectedBranchId(defaultBranch?.id || null);
    } catch (err) {
      console.error(err);
      setProjectError(err.message);
    } finally {
      setIsLoadingProject(false);
    }
  };

  loadProjectDetail();
}, [slug]);

 const selectedBranch = useMemo(() => {
  if (!branches.length) return null;

  return (
    branches.find((branch) => String(branch.id) === selectedBranchId) ||
    branches.find(
      (branch) => String(branch.id) === String(project?.default_branch_id)
    ) ||
    branches[0]
  );
}, [branches, selectedBranchId, project?.default_branch_id]);


  const branchObjective = selectedBranch?.objective || "";
  const branchObstacle = selectedBranch?.obstacle || "";
  const branchDecision = selectedBranch?.decision || "";
  const branchResult = selectedBranch?.result || "";
  const branchModules = selectedBranch?.modules || [];
  const branchNextSteps = selectedBranch?.next_steps || [];
  const branchCommits = selectedBranch?.commits || [];

if (isLoadingProject) {
  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 md:px-12">
      <section className="relative left-1/2 w-full max-w-4xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          <div className="relative z-10">
            <p className="font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.18em] text-[#00E676]">
              loading_project_detail...
            </p>

            <p className="mt-4 font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
              Chargement des informations du projet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
  if (projectError  || !project) {
    return (
      <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 md:px-12">
        <section className="relative left-1/2 w-full max-w-4xl -translate-x-1/2">
          <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
            <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
            <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

            <div className="relative z-10">
              <p className="font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.18em] text-[#00E676]">
                [ error_404 ]
              </p>

              <h1 className="mt-4 font-[Plus_Jakarta_Sans] text-5xl font-black uppercase text-white">
                Project not found.
              </h1>

              <button
                onClick={() => navigate("/repertoire")}
                className="mt-8 border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
              >
                back_to_index
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const branchTheme =
    branchThemes[selectedBranch?.theme || "green"] || branchThemes.green;

  const statusTag =
   statusStyles[project.status] || statusStyles.ACTIVE;

   return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-12">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div
          className={`relative border-2 border-[#2A211C] ${fixedGreenTheme.top} bg-[#0B0D0F] ${fixedGreenTheme.glow}`}
        >
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#3A302A] bg-[#0B0D0F] px-8 py-4 font-[JetBrains_Mono] text-[12px] font-bold uppercase tracking-[0.16em] md:px-12">
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 ${fixedGreenTheme.dot}`} />
              <span className={fixedGreenTheme.text}>project_detail</span>
            </div>

            <span
              className={`border px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${statusTag}`}
            >
              stage: {project.status}
            </span>
          </div>

          {/* HEADER */}
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
                onClick={() => navigate("/repertoire")}
                className="w-fit border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
              >
                back_to_index
              </button>
            </div>
          </header>
            <section className="relative z-10  border-t-2 border-[#3A302A] bg-[#050607]/70 px-8 py-6 md:px-12 grid border-b border-[#26221F]/60    ">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <BlockTitle title="branch_reload" theme={fixedGreenTheme} />

                <p className="mt-2 font-[Inter] text-[15px] leading-7 text-[#8F7A68]">
                  Changer de branche recharge les informations associées à cette
                  branche.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
               <div className="w-full md:w-[340px]">
                <label className="mb-2 block font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.16em] text-[#8F7A68] ">
                  selected_branch
                </label>

                <select
                  value={selectedBranchId || ""}
                  onChange={(event) => setSelectedBranchId(event.target.value)}
                  className={`w-full border bg-[#0B0D0F] px-4 py-3 font-[JetBrains_Mono] text-xs font-black uppercase tracking-[0.12em] outline-none transition ${branchTheme.active}`}
                >
                  {branches.map((branch) => {
                    const theme = branchThemes[branch.theme || "green"] || branchThemes.green;

                    return (
                      <option
                        key={branch.id}
                        value={String(branch.id)}
                        className="bg-[#0B0D0F] text-[#BBAA9A]"
                      >
                        {branch.label} // {branch.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            </div>
          </section>

          {/* SUMMARY + STACK */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1.2fr_0.8fr]">
            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <BlockTitle title="project_summary" theme={fixedGreenTheme} />

              <InfoCard important theme={fixedGreenTheme}>
                {project.summary}
              </InfoCard>
            </section>

            <section className="flex items-center px-8 py-8 md:px-12">
              <div className="flex flex-wrap gap-3">
                <span
                  className={`border px-3 py-1.5 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] ${
                    categoryStyles[project.category] || skillStyles[2].node
                  }`}
                >
                  {project.category}
                </span>

                {(project.stack || []).map((tech) => (
                  <span
                    key={tech}
                    className={`border px-3 py-1.5 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] ${
                      techStyles[tech] || skillStyles[2].node
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* CORE ANALYSIS */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-3">
            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <BlockTitle title="objective" theme={branchTheme} />
              <InfoCard>{branchObjective}</InfoCard>
            </section>

            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <BlockTitle title="technical_obstacle" theme={branchTheme} />
              <InfoCard important theme={branchTheme}>
                {branchObstacle}
              </InfoCard>
            </section>

            <section className="px-8 py-8 md:px-12">
              <BlockTitle title="architecture_decision" theme={branchTheme} />
              <InfoCard>{branchDecision}</InfoCard>
            </section>
          </div>

          {/* MODULES TOUCHED */}
          <section className="relative z-10 border-b border-[#26221F]/60 bg-[#050607]/70 px-8 py-8 md:px-12">
            <div className="mb-6">
              <BlockTitle title="modules_touched" theme={branchTheme} />

              <p className="mt-2 max-w-2xl font-[Inter] text-[15px] leading-7 text-[#8F7A68]">
                Les modules ci-dessous représentent les parties du système qui
                portent la logique principale du projet.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {branchModules.map((module) => (
                <article
                  key={module.id || module.name}
                  className="border border-[#26221F]/80 bg-[#0B0D0F] p-4"
                >
                  <p
                    className={`font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.14em] ${branchTheme.text}`}
                  >
                    /src/{module.name}
                  </p>

                  <p className="mt-3 font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* RESULT + NEXT STEPS */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1fr_1fr]">
            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <BlockTitle title="result_impact" theme={branchTheme} />
              <InfoCard important theme={branchTheme}>
                {branchResult}
              </InfoCard>
            </section>

            <section className="px-8 py-8 md:px-12">
              <BlockTitle title="next_steps" theme={branchTheme} />

              <div className="space-y-3">
                {branchNextSteps.map((step) => (
                  <div
                    key={step.id || step.text}
                    className="border border-[#26221F]/80 bg-[#0B0D0F] px-4 py-3"
                  >
                    <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                      <span className={`mr-2 ${branchTheme.text}`}>›</span>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* BRANCH SELECTOR */}
        

    
          
        </div>
      </section>
    </main>
  );
}

function BlockTitle({ title, theme = fixedGreenTheme }) {
  return (
    <p
      className={`mb-4 font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.16em] ${
        theme?.text || "text-[#00E676]"
      }`}
    >
      {title}
    </p>
  );
}

function InfoCard({ children, important = false, theme = fixedGreenTheme }) {
  return (
    <div
      className={`border border-[#26221F]/80 bg-[#0B0D0F] px-4 py-4 ${
        important && theme ? `border-l-2 ${theme.important}` : ""
      }`}
    >
      <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
        {children}
      </p>
    </div>
  );
}