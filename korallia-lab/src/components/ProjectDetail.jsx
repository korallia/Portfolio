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
  "Git CLI": skillStyles[1].node,
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
  ACTIVE: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
  STABLE: "border-[#00E676]/60 bg-[#00E676]/5 text-[#A7F3D0]",
  LIVE: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
  WIP: "border-[#00E676]/45 bg-[#00E676]/5 text-[#A7F3D0]",
};

const projects = [
  {
    id: "custom-git-manager",
    name: "custom_git_manager",
    category: "Fullstack",
    status: "ACTIVE",
    path: "~/repos/custom_git_manager",
    branch: "main_branch",
    description:
      "Interface maison pour transformer l’activité Git brute en résumé technique lisible : branches, commits, décisions et impact système.",
    summary:
      "Ce projet explore comment transformer des informations techniques très détaillées en une vue claire, lisible et utile autant pour des développeurs que pour des recruteurs.",
    objective:
      "Créer une vue exécutive de l’activité Git sans répliquer toute la granularité brute de GitHub.",
    obstacle:
      "Git contient beaucoup d’information utile, mais cette richesse devient difficile à lire rapidement pour des profils non techniques.",
    decision:
      "Extraire les signaux importants : branche active, commits récents, intention du changement, fichiers touchés et impact technique.",
    result:
      "Une interface qui raconte l’évolution d’un projet sans remplacer GitHub ni exposer tout le diff brut.",
    stack: ["React", "TypeScript", "Node.js", "Git CLI", "TailwindCSS"],
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
    id: "journal-system",
    name: "journal_system",
    category: "Architecture",
    status: "STABLE",
    path: "~/repos/journal_system",
    branch: "creative_core_active",
    description:
      "Système de journal technique avec archives, articles complets, rendu SQL et navigation ancrée.",
    summary:
      "Une section éditoriale technique pensée pour accueillir des textes longs, des images, des réflexions de structure et des décisions d’architecture.",
    objective:
      "Créer un espace journal lisible, connecté à une base de données, sans tomber dans un CMS trop lourd.",
    obstacle:
      "Préserver une esthétique forte sans nuire à la lisibilité des articles.",
    decision:
      "Séparer l’archive, la page article, l’API et le contenu HTML pour garder une architecture simple et maintenable.",
    result:
      "Un journal stylisé, connecté à une base de données et prêt à recevoir du contenu long.",
    stack: ["React", "PostgreSQL", "Prisma", "TailwindCSS"],
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
    id: "cv-console-render",
    name: "cv_console_render",
    category: "Infrastructure",
    status: "LIVE",
    path: "~/repos/cv_console_render",
    branch: "profile_output",
    description:
      "CV rendu dans une interface terminal : séquence de boot, profil professionnel et logique de compétences.",
    summary:
      "Un composant qui utilise l’esthétique terminal comme cadre narratif, mais présente ensuite le CV comme un document structuré et lisible.",
    objective:
      "Créer une présentation mémorable sans sacrifier la lecture pour les recruteurs.",
    obstacle:
      "L’esthétique terminal peut rapidement devenir massive, dense et difficile à lire.",
    decision:
      "Garder le terminal comme effet d’entrée, puis structurer le contenu avec des sections claires et des lignes de séparation.",
    result:
      "Un CV interactif avec identité technique forte, mais assez clair pour être lu par des profils RH.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
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
        impact: "Clarifie la hiérarchie entre profil, expérience et compétences.",
      },
    ],
  },
];

function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 md:px-12">
        <section className="relative left-1/2 w-full max-w-4xl -translate-x-1/2">
          <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
            <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
            <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

            <div className="relative z-10">
              <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#00E676]">
                [ error_404 ]
              </p>

              <h1 className="mt-4 font-[Plus_Jakarta_Sans] text-4xl font-black uppercase text-white">
                Project not found.
              </h1>

              <button
                onClick={() => navigate("/repertoire")}
                className="mt-8 border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
              >
                ← back_to_index
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-12">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#26221F]/60 bg-[#0B0D0F] px-8 py-4 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.16em] md:px-12">
            <div className="flex items-center gap-3 text-[#00E676]">
              <span className="h-3 w-3 bg-[#00E676] shadow-[0_0_14px_#00E676]" />
              <span>project_detail</span>
            </div>

            <span
              className={`border px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${
                statusStyles[project.status] || statusStyles.ACTIVE
              }`}
            >
              stage: {project.status}
            </span>
          </div>

          {/* HEADER */}
          <header className="relative z-10 border-b border-[#26221F]/60 bg-[#0B0D0F] px-8 pb-9 pt-10 md:px-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-4xl">
                <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#00E676]">
                  <span>[ repository_detail ]</span>
                </div>

                <h1 className="font-[Plus_Jakarta_Sans] text-4xl font-black uppercase leading-none tracking-[0.12em] text-[#E8EFEA] md:text-5xl">
                  {project.name.replaceAll("_", " ")}
                  <span className="text-[#00E676]">_</span>
                </h1>

                <p className="mt-4 font-[JetBrains_Mono] text-[11px] uppercase tracking-[0.16em] text-[#8F7A68]">
                  {project.path} // {project.branch}
                </p>

              
              </div>

              <button
                onClick={() => navigate("/repertoire")}
                className="w-fit border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
              >
                ← back_to_index
              </button>
            </div>
          </header>

          {/* SUMMARY + STACK */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1.15fr_0.85fr]">
            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                project_summary
              </p>

              <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                {project.summary}
              </p>
            </section>

            <section className="px-8 py-8 md:px-12">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                stack_index
              </p>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                    categoryStyles[project.category] || skillStyles[2].node
                  }`}
                >
                  {project.category}
                </span>

                {project.stack.map((tech) => (
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
            </section>
          </div>

          {/* CORE ANALYSIS */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-3">
            <InfoBlock title="objective" text={project.objective} className= "border border-[#26221F]/80 bg-[#0B0D0F] p-4"/>

            <InfoBlock
              title="technical_obstacle"
              text={project.obstacle}
              highlight
            />

            <InfoBlock
              title="architecture_decision"
              text={project.decision}
            />
          </div>

          {/* MODULES TOUCHED */}
          <section className="relative z-10 border-b border-[#26221F]/60 bg-[#050607]/70 px-8 py-8 md:px-12">
            <div className="mb-6">
              <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                modules_touched
              </p>

              <p className="mt-2 max-w-2xl font-[Inter] text-[14px] leading-6 text-[#8F7A68]">
                Les modules ci-dessous représentent les parties du système qui
                portent la logique principale du projet.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {project.modules.map((module) => (
                <article
                  key={module.name}
                  className="border border-[#26221F]/80 bg-[#0B0D0F] p-4"
                >
                  <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676]">
                    /src/{module.name}
                  </p>

                  <p className="mt-3 font-[Inter] text-sm leading-6 text-[#BBAA9A]">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* RESULT + NEXT STEPS */}
          <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1fr_1fr]">
            <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                result_impact
              </p>

              <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                {project.result}
              </p>
            </section>

            <section className="px-8 py-8 md:px-12">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                next_steps
              </p>

              <div className="space-y-3">
                {project.nextSteps.map((step) => (
                  <p
                    key={step}
                    className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]"
                  >
                    <span className="mr-2 text-[#00E676]">›</span>
                    {step}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* COMMITS */}
          <section className="relative z-10 bg-[#050607]/70 px-8 py-8 md:px-12">
            <div className="mb-5 flex items-center justify-between border-b border-[#26221F]/60 pb-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em]">
              <span className="text-[#8F7A68]">streaming_commits</span>
              <span className="text-[#00E676]">{project.branch}</span>
            </div>

            <div className="divide-y divide-[#26221F]/70">
              {project.commits.map((commit) => (
                <article
                  key={commit.hash}
                  className="grid gap-4 py-5 md:grid-cols-[0.45fr_1.55fr]"
                >
                  <div className="font-[JetBrains_Mono] text-xs">
                    <p className="text-[#00E676]">commit_{commit.hash}</p>
                    <p className="mt-1 text-[#8F7A68]">{commit.date}</p>
                    <p className="mt-3 text-[#A7F3D0]">{commit.stat}</p>
                  </div>

                  <div>
                    <h3 className="font-[Plus_Jakarta_Sans] text-xl font-black uppercase leading-tight tracking-[-0.035em] text-white">
                      {commit.message}
                    </h3>

                    <p className="mt-2 font-[JetBrains_Mono] text-xs text-[#8F7A68]">
                      modified: {commit.files}
                    </p>

                    <p className="mt-3 font-[Inter] text-sm leading-6 text-[#BBAA9A]">
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

function InfoBlock({ title, text, highlight = false }) {
  if (highlight) {
    return (
      <section className="border-b border-[#26221F]/60 px-8 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-12">
        <p className="mb-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
          {title}
        </p>

        <div className="border-l-2 border-[#00E676] bg-[#00E676]/5 px-4 py-3">
          <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
            {text}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-[#26221F]/60 px-8 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-12">
      <article className="h-full border border-[#26221F]/80 bg-[#0B0D0F] p-4">
        <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676]">
          {title}
        </p>

        <p className="mt-3 font-[Inter] text-sm leading-6 text-[#BBAA9A]">
          {text}
        </p>
      </article>
    </section>
  );
}

export default ProjectDetailPage;