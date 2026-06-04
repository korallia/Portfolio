import { Link, useParams } from "react-router-dom";

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
  Tailwind: skillStyles[0].node,
  TailwindCSS: skillStyles[0].node,
  "Framer Motion": skillStyles[0].node,

  "Node.js": skillStyles[1].node,
  TypeScript: skillStyles[1].node,
  "Python/Flask": skillStyles[1].node,
  "PHP/Laravel": skillStyles[1].node,
  "Java/Spring Boot": skillStyles[1].node,
  "Git CLI": skillStyles[1].node,

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
};

const projects = [
  {
    id: "custom-git-manager",
    name: "custom_git_manager",
    title: "Custom Git Manager",
    category: "Fullstack",
    status: "ACTIVE",
    path: "~/repos/custom_git_manager",
    branch: "main_branch",
    command: "open custom_git_manager --summary",
    description:
      "Interface maison pour transformer l’activité Git brute en résumé technique lisible : branches, commits, décisions et impact système.",
    objective:
      "Créer une vue exécutive de l’activité Git sans répliquer toute la granularité brute de GitHub.",
    obstacle:
      "Git contient énormément d’information utile, mais cette richesse devient difficile à lire rapidement pour des recruteurs, RH ou profils non techniques.",
    decision:
      "Extraire les signaux importants : branche active, commits récents, intention du changement, fichiers touchés et impact technique.",
    output:
      "Une interface qui raconte l’évolution d’un projet sans remplacer GitHub ni exposer tout le diff brut.",
    impact:
      "Le projet permet de présenter une logique de développement claire, orientée produit, architecture et communication technique.",
    stack: ["React", "TypeScript", "Node.js", "Git CLI", "TailwindCSS"],
    modules: ["repo_index", "commit_stream", "diff_parser", "summary_renderer"],
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
    nextSteps: [
      "Ajouter une vue par branche.",
      "Créer un résumé non technique pour recruteurs.",
      "Afficher les commits par intention technique.",
    ],
  },
  {
    id: "journal-system",
    name: "journal_system",
    title: "Journal System",
    category: "Architecture",
    status: "STABLE",
    path: "~/repos/journal_system",
    branch: "creative_core_active",
    command: "open journal_system --archive",
    description:
      "Système de journal technique avec archives, articles complets, rendu SQL et navigation ancrée.",
    objective:
      "Créer un espace éditorial technique capable d’accueillir des textes longs, des images et des réflexions d’architecture.",
    obstacle:
      "Préserver une esthétique forte sans nuire à la lisibilité des articles.",
    decision:
      "Séparer archive, article, API et contenu HTML pour garder une architecture simple, lisible et maintenable.",
    output:
      "Un journal stylisé, connecté à une base de données et prêt à recevoir du contenu long.",
    impact:
      "Le système transforme le portfolio en espace narratif vivant plutôt qu’en simple liste de projets.",
    stack: ["React", "PostgreSQL", "Prisma", "TailwindCSS"],
    modules: ["archive_index", "article_renderer", "journal_api", "content_model"],
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
    nextSteps: [
      "Ajouter un système de tags plus riche.",
      "Créer une interface admin pour publier les articles.",
      "Ajouter une prévisualisation markdown/html.",
    ],
  },
  {
    id: "cv-console-render",
    name: "cv_console_render",
    title: "CV Console Render",
    category: "Infrastructure",
    status: "LIVE",
    path: "~/repos/cv_console_render",
    branch: "profile_output",
    command: "open cv_console_render --profile",
    description:
      "CV rendu dans une interface terminal : séquence de boot, profil professionnel et logique de compétences.",
    objective:
      "Créer une présentation mémorable sans sacrifier la lecture pour les recruteurs.",
    obstacle:
      "L’esthétique terminal peut rapidement devenir massive, dense et difficile à lire.",
    decision:
      "Garder le terminal comme cadre narratif, puis présenter le contenu comme un vrai document structuré.",
    output:
      "Un CV interactif avec identité technique forte, mais assez clair pour être lu par des profils RH.",
    impact:
      "Le composant sert de pont entre identité visuelle, storytelling technique et présentation professionnelle.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    modules: ["boot_sequence", "profile_panel", "work_history", "skill_matrix"],
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
    nextSteps: [
      "Créer une version PDF harmonisée.",
      "Ajouter une animation de boot plus subtile.",
      "Connecter les projets du CV au répertoire.",
    ],
  },
];

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] px-4 py-20 text-slate-300 md:px-16">
        <section className="mx-auto max-w-3xl border border-[#26221F] border-t-2 border-t-[#00E676] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(0,230,118,0.10)]">
          <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#00E676]">
            [ error_404 ]
          </p>

          <h1 className="mt-4 font-[Plus_Jakarta_Sans] text-4xl font-black uppercase text-white">
            Project not found.
          </h1>

          <Link
            to="/repertoire"
            className="mt-8 inline-block border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
          >
            ← back_to_index
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* TOP STATUS BAR */}
        <section className="mb-8 border-2 border-[#00E676] bg-[#0B0D0F] px-5 py-4 shadow-[8px_8px_0px_0px_rgba(0,230,118,0.12)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 font-[JetBrains_Mono]">
              <span className="h-4 w-4 bg-[#00E676] shadow-[0_0_16px_#00E676]" />
              <span className="text-sm font-black uppercase tracking-[0.18em] text-[#00E676]">
                ⚡ PROJECT_DETAIL::ACTIVE
              </span>
            </div>

            <p className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#00E676]/70">
              CORE_LOAD: {project.status}
            </p>
          </div>
        </section>

        {/* MAIN WINDOW */}
        <section className="border border-[#26221F] border-t-2 border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,230,118,0.10)]">
          {/* HEADER */}
          <div className="border-b border-[#26221F] px-6 py-7 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-4 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.2em] text-[#00E676]">
                  [ repository_detail ]
                </p>

                <h1 className="font-[Plus_Jakarta_Sans] text-4xl font-black uppercase leading-none tracking-[-0.055em] text-white md:text-6xl">
                  {project.name}
                  <span className="text-[#00E676]">_</span>
                </h1>

                <p className="mt-4 font-[JetBrains_Mono] text-[11px] uppercase tracking-[0.16em] text-[#8F7A68]">
                  {project.path} // {project.branch}
                </p>
              </div>

              <Link
                to="/repertoire"
                className="w-fit border border-[#00E676]/45 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10"
              >
                ← back_to_index
              </Link>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="grid border-b border-[#26221F] md:grid-cols-[0.9fr_1.1fr]">
            <section className="border-b border-[#26221F] px-6 py-7 md:border-b-0 md:border-r md:px-8">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                project_summary
              </p>

              <p className="font-[Inter] text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className={`border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                    categoryStyles[project.category] || skillStyles[2].node
                  }`}
                >
                  {project.category}
                </span>

                <span
                  className={`border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status}
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

            <section className="px-6 py-7 md:px-8">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                command_output
              </p>

              <div className="border border-[#26221F] bg-[#050607]/65 p-4 font-[JetBrains_Mono] text-xs leading-relaxed">
                <p className="text-[#00E676]">korallia-lab@system:~$</p>
                <p className="mt-1 text-slate-400">{project.command}</p>
                <p className="mt-4 text-[#00E676]">output_status: ready</p>
                <p className="text-slate-600">render_mode: executive_summary</p>
              </div>
            </section>
          </div>

          {/* CORE ANALYSIS */}
          <div className="grid border-b border-[#26221F] md:grid-cols-3">
            <InfoBlock title="objective" text={project.objective} />

            <InfoBlock
              title="technical_obstacle"
              text={project.obstacle}
              highlight
            />

            <InfoBlock title="architecture_decision" text={project.decision} />
          </div>

          {/* MODULES + OUTPUT */}
          <div className="grid border-b border-[#26221F] md:grid-cols-[0.9fr_1.1fr]">
            <section className="border-b border-[#26221F] px-6 py-7 md:border-b-0 md:border-r md:px-8">
              <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                modules_touched
              </p>

              <div className="grid gap-2">
                {project.modules.map((module) => (
                  <div
                    key={module}
                    className="border border-[#26221F] bg-[#050607]/65 px-3 py-2 font-[JetBrains_Mono] text-xs text-slate-500"
                  >
                    /src/{module}
                  </div>
                ))}
              </div>
            </section>

            <section className="px-6 py-7 md:px-8">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                system_output
              </p>

              <p className="font-[Inter] text-sm leading-relaxed text-slate-400">
                {project.output}
              </p>
            </section>
          </div>

          {/* COMMITS */}
          <section className="border-b border-[#26221F] px-6 py-7 md:px-8">
            <div className="mb-5 flex items-center justify-between border-b border-[#26221F] pb-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em]">
              <span className="text-slate-500">streaming_commits</span>
              <span className="text-[#00E676]">{project.branch}</span>
            </div>

            <div className="divide-y divide-[#26221F]">
              {project.commits.map((commit) => (
                <article
                  key={commit.hash}
                  className="grid gap-4 py-5 md:grid-cols-[0.45fr_1.55fr]"
                >
                  <div className="font-[JetBrains_Mono] text-xs">
                    <p className="text-[#00E676]">commit_{commit.hash}</p>
                    <p className="mt-1 text-slate-600">{commit.date}</p>
                    <p className="mt-3 text-[#A7F3D0]">{commit.stat}</p>
                  </div>

                  <div>
                    <h3 className="font-[Plus_Jakarta_Sans] text-xl font-black uppercase leading-tight tracking-[-0.035em] text-white">
                      {commit.message}
                    </h3>

                    <p className="mt-2 font-[JetBrains_Mono] text-xs text-[#8F7A68]">
                      modified: {commit.files}
                    </p>

                    <p className="mt-3 font-[Inter] text-sm leading-relaxed text-slate-400">
                      {commit.impact}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IMPACT + NEXT STEPS */}
          <div className="grid md:grid-cols-[1fr_1fr]">
            <section className="border-b border-[#26221F] px-6 py-7 md:border-b-0 md:border-r md:px-8">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                result_impact
              </p>

              <p className="font-[Inter] text-sm leading-relaxed text-slate-400">
                {project.impact}
              </p>
            </section>

            <section className="px-6 py-7 md:px-8">
              <p className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
                next_steps
              </p>

              <div className="space-y-3">
                {project.nextSteps.map((step) => (
                  <p
                    key={step}
                    className="font-[Inter] text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mr-2 text-[#00E676]">›</span>
                    {step}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* PROMPT */}
          <div className="border-t border-[#26221F] bg-[#0B0D0F] px-6 py-5 font-[JetBrains_Mono] text-xs md:px-8">
            <span className="font-bold text-[#00E676]">
              korallia-lab@system:~$
            </span>
            <span className="ml-2 inline-block h-5 w-3 animate-pulse bg-[#00E676] align-middle shadow-[0_0_10px_#00E676]" />
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoBlock({ title, text, highlight = false }) {
  return (
    <section className="border-b border-[#26221F] px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8">
      <p className="mb-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676]">
        {title}
      </p>

      <div
        className={
          highlight
            ? "border-l-2 border-[#00E676] bg-[#00E676]/5 px-4 py-3"
            : ""
        }
      >
        <p className="font-[Inter] text-sm leading-relaxed text-slate-400">
          {text}
        </p>
      </div>
    </section>
  );
}

export default ProjectDetail;