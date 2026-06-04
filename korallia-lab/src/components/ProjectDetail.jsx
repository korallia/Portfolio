import { useEffect, useState } from "react";
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

const projects = [
  {
    id: "custom-git-manager",
    name: "custom_git_manager",
    category: "Fullstack",
    status: "IN_DEVELOPMENT",
    path: "~/repos/custom_git_manager",
    defaultBranchId: "custom-git-manager-main",
    description:
      "Interface maison pour transformer l’activité Git brute en résumé technique lisible : branches, commits, décisions et impact système.",
    summary:
      "Ce projet explore comment transformer des informations techniques très détaillées en une vue claire, lisible et utile autant pour des développeurs que pour des recruteurs.",
    stack: ["React", "TypeScript", "Node.js", "Git CLI", "TailwindCSS"],
  },
];

const projectBranches = [
  {
    id: "custom-git-manager-main",
    projectId: "custom-git-manager",
    name: "main_branch",
    label: "Main",
    status: "IN_DEVELOPMENT",
    theme: "orange",

    objective:
      "Créer une vue exécutive de l’activité Git sans répliquer toute la granularité brute de GitHub.",
    obstacle:
      "Git contient beaucoup d’information utile, mais cette richesse devient difficile à lire rapidement pour des profils non techniques.",
    decision:
      "Extraire les signaux importants : branche active, commits récents, intention du changement, fichiers touchés et impact technique.",
    result:
      "Une interface qui raconte l’évolution d’un projet sans remplacer GitHub ni exposer tout le diff brut.",

    modules: [
      {
        name: "repo_index",
        description:
          "Liste les projets actifs et expose leur statut, leur catégorie et leur rôle dans le système.",
      },
      {
        name: "commit_stream",
        description:
          "Transforme les commits récents en événements lisibles avec date, fichiers touchés et impact.",
      },
      {
        name: "summary_renderer",
        description:
          "Présente les décisions techniques sous forme de résumé exécutif plutôt que de diff brut.",
      },
    ],

    nextSteps: [
      "Ajouter une vraie lecture des branches Git.",
      "Créer un résumé non technique pour recruteurs.",
      "Afficher les commits par intention technique.",
    ],

    commits: [
      {
        hash: "fa89c",
        message: "Optimisé le parser de différentiels",
        date: "2026-05-27",
        files: "src/diff-viewer.ts",
        stat: "+42 -12",
        impact: "Améliore la lisibilité des gros changements.",
      },
      {
        hash: "bd412",
        message: "Fix du memory leak au rafraîchissement",
        date: "2026-05-26",
        files: "src/hooks/useData.ts",
        stat: "+8 -2",
        impact: "Stabilise le rafraîchissement des données.",
      },
      {
        hash: "90e1a",
        message: "Initialisation de la structure du projet",
        date: "2026-05-24",
        files: "architecture_global.md",
        stat: "+96 -0",
        impact: "Pose les conventions de base du système.",
      },
    ],
  },
  {
    id: "custom-git-manager-summary-view",
    projectId: "custom-git-manager",
    name: "summary_view",
    label: "Summary view",
    status: "ACTIVE",
    theme: "green",

    objective:
      "Transformer les données techniques en résumé clair pour lecteurs non techniques.",
    obstacle:
      "Trouver le bon niveau de détail entre résumé RH et précision développeur.",
    decision:
      "Créer une couche de rendu qui explique l’intention du changement plutôt que seulement le fichier modifié.",
    result:
      "Une vue plus lisible qui met en avant les décisions, les modules touchés et l’impact du travail.",

    modules: [
      {
        name: "summary_renderer",
        description:
          "Génère une lecture synthétique des changements techniques.",
      },
      {
        name: "modules_panel",
        description:
          "Regroupe les zones du système touchées par les changements récents.",
      },
    ],

    nextSteps: [
      "Améliorer le wording des résumés.",
      "Ajouter des catégories d’intention technique.",
      "Tester la lisibilité avec des profils non développeurs.",
    ],

    commits: [
      {
        hash: "aa321",
        message: "Ajout du résumé exécutif par projet",
        date: "2026-05-28",
        files: "src/summary-renderer.ts",
        stat: "+67 -14",
        impact:
          "Transforme les changements techniques en informations lisibles pour des profils non techniques.",
      },
      {
        hash: "b91fc",
        message: "Nettoyage de la vue des modules",
        date: "2026-05-28",
        files: "src/modules-panel.tsx",
        stat: "+28 -19",
        impact:
          "Rend la structure du projet plus claire sans surcharger la page.",
      },
    ],
  },
  {
    id: "journal-system-creative-core",
    projectId: "journal-system",
    name: "creative_core_active",
    label: "Creative core",
    status: "STABLE",
    theme: "blue",

    objective:
      "Créer un espace journal lisible, connecté à une base de données, sans tomber dans un CMS trop lourd.",
    obstacle:
      "Préserver une esthétique forte sans nuire à la lisibilité des articles.",
    decision:
      "Séparer l’archive, la page article, l’API et le contenu HTML pour garder une architecture simple et maintenable.",
    result:
      "Un journal stylisé, connecté à une base de données et prêt à recevoir du contenu long.",

    modules: [
      {
        name: "archive_index",
        description:
          "Affiche les entrées récentes sous forme de liste lisible et navigable.",
      },
      {
        name: "article_renderer",
        description:
          "Rend les articles complets avec typographie, blockquotes, images et texte long.",
      },
      {
        name: "journal_api",
        description:
          "Expose les routes nécessaires pour charger les archives et les articles individuels.",
      },
    ],

    nextSteps: [
      "Ajouter un système de tags plus riche.",
      "Prévoir une interface admin légère.",
      "Ajouter une meilleure prévisualisation du contenu HTML.",
    ],

    commits: [
      {
        hash: "ac18d",
        message: "Ajout du retour vers les archives",
        date: "2026-05-27",
        files: "JournalArticle.jsx",
        stat: "+18 -3",
        impact: "Permet de revenir directement à l’index des archives.",
      },
      {
        hash: "bb71f",
        message: "Connexion de l’archive à PostgreSQL",
        date: "2026-05-27",
        files: "Journal.jsx",
        stat: "+31 -12",
        impact: "Charge les entrées depuis la base de données.",
      },
    ],
  },
  {
    id: "cv-console-render-profile-output",
    projectId: "cv-console-render",
    name: "profile_output",
    label: "Profile output",
    status: "LIVE",
    theme: "violet",

    objective:
      "Créer une présentation mémorable sans sacrifier la lecture pour les recruteurs.",
    obstacle:
      "L’esthétique terminal peut rapidement devenir massive, dense et difficile à lire.",
    decision:
      "Garder le terminal comme effet d’entrée, puis structurer le contenu avec des sections claires et des lignes de séparation.",
    result:
      "Un CV interactif avec identité technique forte, mais assez clair pour être lu par des profils RH.",

    modules: [
      {
        name: "boot_sequence",
        description:
          "Anime l’ouverture du CV comme une commande exécutée dans un terminal.",
      },
      {
        name: "profile_panel",
        description:
          "Présente le profil, les informations clés et le positionnement professionnel.",
      },
      {
        name: "skill_matrix",
        description:
          "Organise les compétences par familles : front, back, système et data.",
      },
    ],

    nextSteps: [
      "Créer une version PDF harmonisée.",
      "Connecter les projets du CV au répertoire.",
      "Ajouter une animation de boot plus subtile.",
    ],

    commits: [
      {
        hash: "e31cd",
        message: "Réduction de l’effet terminal massif",
        date: "2026-05-28",
        files: "CVConsoleModal.jsx",
        stat: "+88 -64",
        impact: "Améliore la lisibilité pour les profils non techniques.",
      },
      {
        hash: "d20be",
        message: "Réorganisation des sections CV",
        date: "2026-05-28",
        files: "CVConsoleModal.jsx",
        stat: "+52 -33",
        impact:
          "Clarifie la hiérarchie entre profil, expérience et compétences.",
      },
    ],
  },
];

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === projectId);

  const branches = projectBranches.filter(
    (branch) => branch.projectId === project?.id
  );

  const [selectedBranchId, setSelectedBranchId] = useState("");

  useEffect(() => {
    if (!project) return;

    setSelectedBranchId(project.defaultBranchId || branches[0]?.id || "");
  }, [projectId]);

  const selectedBranch =
    branches.find((branch) => branch.id === selectedBranchId) ||
    branches.find((branch) => branch.id === project?.defaultBranchId) ||
    branches[0];

  const branchObjective = selectedBranch?.objective || "";
  const branchObstacle = selectedBranch?.obstacle || "";
  const branchDecision = selectedBranch?.decision || "";
  const branchResult = selectedBranch?.result || "";
  const branchModules = selectedBranch?.modules || [];
  const branchNextSteps = selectedBranch?.nextSteps || [];
  const branchCommits = selectedBranch?.commits || [];

  if (!project) {
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
                  {project.path} // {selectedBranch?.name}
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

                {project.stack.map((tech) => (
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
                  key={module.name}
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
                    key={step}
                    className="border border-[#26221F]/80 bg-[#0B0D0F] px-4 py-3"
                  >
                    <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                      <span className={`mr-2 ${branchTheme.text}`}>›</span>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* BRANCH SELECTOR */}
          <section className="relative z-10 border-t-2 border-[#3A302A] bg-[#050607]/70 px-8 py-6 md:px-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <BlockTitle title="branch_reload" theme={fixedGreenTheme} />

                <p className="mt-2 font-[Inter] text-[15px] leading-7 text-[#8F7A68]">
                  Changer de branche recharge la liste des commits associés.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {branches.map((branch) => {
                  const active = branch.id === selectedBranch?.id;
                  const theme =
                    branchThemes[branch.theme || "green"] ||
                    branchThemes.green;

                  return (
                    <button
                      key={branch.id}
                      onClick={() => setSelectedBranchId(branch.id)}
                      className={`border px-3 py-2 font-[JetBrains_Mono] text-[11px] font-black uppercase tracking-[0.12em] transition ${
                        active
                          ? theme.active
                          : `border-[#26221F] bg-[#0B0D0F] text-[#8F7A68] ${theme.hover}`
                      }`}
                    >
                      {branch.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* COMMITS */}
          <section className="relative z-10 border-t-2 border-[#3A302A] bg-[#050607]/70 px-8 py-8 md:px-12">
            <div className="mb-5 flex items-center justify-between border-b border-[#26221F]/60 pb-3 font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.14em]">
              <span className="text-[#8F7A68]">streaming_commits</span>
              <span className={branchTheme.text}>{selectedBranch?.name}</span>
            </div>

            <div className="divide-y divide-[#26221F]/70">
              {branchCommits.map((commit) => (
                <article
                  key={commit.hash}
                  className="grid gap-4 py-5 md:grid-cols-[0.45fr_1.55fr]"
                >
                  <div className="font-[JetBrains_Mono] text-xs">
                    <p className={branchTheme.text}>commit_{commit.hash}</p>
                    <p className="mt-1 text-[#8F7A68]">{commit.date}</p>
                    <p className="mt-3 text-[#A7F3D0]">{commit.stat}</p>
                  </div>

                  <div>
                    <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-black uppercase leading-tight tracking-[-0.035em] text-white">
                      {commit.message}
                    </h3>

                    <p className="mt-2 font-[JetBrains_Mono] text-xs text-[#8F7A68]">
                      modified: {commit.files}
                    </p>

                    <p className="mt-3 font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                      {commit.impact}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 border-t border-[#26221F]/60 pt-5 font-[JetBrains_Mono] text-xs">
              <span className="font-bold text-[#00E676]">
                korallia-lab@system:~$
              </span>
              <span className="ml-2 inline-block h-5 w-3 animate-pulse bg-[#00E676] align-middle shadow-[0_0_10px_#00E676]" />
            </div>
          </section>
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