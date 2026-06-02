

// Données placeholders — à remplacer plus tard par ton backend/API
const repositories = [
  {
    id: "custom-git-manager",
    name: "custom_git_manager",
    category: "Fullstack",
    status: "ACTIVE",
    path: "~/repos/custom_git_manager",
    description:
      "Interface maison pour transformer l’activité Git brute en résumé technique lisible : branches, commits, décisions et impact système.",
    objective:
      "Créer une vue exécutive de l’activité Git sans répliquer toute la granularité de GitHub.",
    obstacle:
      "Les diffs sont utiles pour les développeurs, mais trop détaillés pour communiquer rapidement l’état d’un projet à des recruteurs ou RH.",
    decision:
      "Extraire les signaux importants : branche active, commits récents, intention du changement, fichiers touchés et impact.",
    output:
      "Une interface qui raconte l’évolution du projet sans remplacer GitHub ni exposer tout le diff brut.",
    languages: ["React", "TypeScript", "Node.js"],
    commits: [
      {
        hash: "fa89c",
        message: "Optimisé le parser de différentiels",
        date: "2026-05-27",
        files: "src/diff-viewer.ts",
        stat: "+42 -12",
      },
      {
        hash: "bd412",
        message: "Fix du memory leak au rafraîchissement",
        date: "2026-05-26",
        files: "src/hooks/useData.ts",
        stat: "+8 -2",
      },
      {
        hash: "90e1a",
        message: "Initialisation de la structure du projet",
        date: "2026-05-24",
        files: "architecture_global.md",
        stat: "+96 -0",
      },
    ],
  },
  {
    id: "journal-system",
    name: "journal_system",
    category: "Architecture",
    status: "STABLE",
    path: "~/repos/journal_system",
    description:
      "Système de journal technique avec archives, articles complets, rendu SQL et navigation ancrée.",
    objective:
      "Créer un espace éditorial technique capable d’accueillir des textes longs, des images et des réflexions d’architecture.",
    obstacle:
      "Garder une esthétique forte sans nuire à la lisibilité des articles.",
    decision:
      "Séparer archive, article, API et contenu HTML pour garder une architecture simple et maintenable.",
    output:
      "Un journal lisible, stylisé, connecté à une base de données et prêt à recevoir du contenu long.",
    languages: ["PostgreSQL", "React", "Prisma"],
    commits: [
      {
        hash: "ac18d",
        message: "Ajout du retour vers les archives",
        date: "2026-05-27",
        files: "JournalArticle.jsx",
        stat: "+18 -3",
      },
      {
        hash: "bb71f",
        message: "Connexion de l’archive à PostgreSQL",
        date: "2026-05-27",
        files: "Journal.jsx",
        stat: "+31 -12",
      },
      {
        hash: "c02aa",
        message: "Création du layout article complet",
        date: "2026-05-26",
        files: "JournalArticle.jsx",
        stat: "+144 -20",
      },
    ],
  },
  {
    id: "cv-console-render",
    name: "cv_console_render",
    category: "Infrastructure",
    status: "LIVE",
    path: "~/repos/cv_console_render",
    description:
      "CV rendu dans une interface terminal : séquence de boot, profil professionnel et logique de compétences.",
    objective:
      "Créer une présentation mémorable sans sacrifier la lecture pour les recruteurs.",
    obstacle:
      "L’esthétique terminal devient vite massive, dense et difficile à lire.",
    decision:
      "Garder le terminal comme cadre narratif, puis présenter le contenu comme un vrai document structuré.",
    output:
      "Un CV interactif avec identité technique forte, mais assez clair pour être lu par des profils RH.",
    languages: ["TailwindCSS", "React", "Framer Motion"],
    commits: [
      {
        hash: "e31cd",
        message: "Réduction de l’effet terminal massif",
        date: "2026-05-28",
        files: "CVConsoleModal.jsx",
        stat: "+88 -64",
      },
      {
        hash: "d20be",
        message: "Réorganisation des sections CV",
        date: "2026-05-28",
        files: "CVConsoleModal.jsx",
        stat: "+52 -33",
      },
      {
        hash: "a18f0",
        message: "Ajout du status render complete",
        date: "2026-05-28",
        files: "CVConsoleModal.jsx",
        stat: "+19 -7",
      },
    ],
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
  // FRONT
  React: skillStyles[0].node,
  "Next.js": skillStyles[0].node,
  TailwindCSS: skillStyles[0].node,
  "Framer Motion": skillStyles[0].node,

  // BACK
  "Node.js": skillStyles[1].node,
  TypeScript: skillStyles[1].node,
  "Python/Flask": skillStyles[1].node,
  "PHP/Laravel": skillStyles[1].node,
  "Java/Spring Boot": skillStyles[1].node,

  // SYSTEM
  "Java/JVM": skillStyles[2].node,
  Python: skillStyles[2].node,
  "C/C++": skillStyles[2].node,

  // DATA
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

export default function TerminalPage() {



  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-12">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

         <header className="relative z-10 border-b border-[#26221F]/60 bg-[#0B0D0F] px-8 pb-9 pt-10 flex items-start justify-between gap-8 md:px-12">
  <div>
    <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#00E676]">
      <span>[ current_directories ]</span>
    </div>

    <h1 className="font-[Plus_Jakarta_Sans] text-5xl font-black uppercase leading-none tracking-[0.22em] md:text-6xl">
      <span className="text-[#E8EFEA]">Repertoire</span>
      <span className="text-[#00E676]">_</span>
    </h1>

    <p className="mt-6 max-w-2xl font-[Inter] text-[20px] leading-7 text-[#BBAA9A]">
      Une archive technique courte pour présenter les projets actifs, leur rôle,
      leur état et les technologies utilisées.
    </p>

  </div>

  <p className="hidden md:block pt-12 font-[JetBrains_Mono] text-[10px] font-bold tracking-[0.2em] uppercase text-[#8F7A68]">
    VIEW: CURRENT_DIRECTORIES
  </p>
</header>

          {/* ENTRIES */}
          <div className="relative z-10 bg-[#050607]/70 pb-2">
            {repositories.map((repo, index) => (
              <article
                key={repo.id}
                className="group grid grid-cols-1 gap-5 border-b border-[#1F1A17]/90 px-8 py-11 transition-all duration-200 hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#00E676] md:grid-cols-12 md:px-12"
              >
                <div className="font-[JetBrains_Mono] text-xs font-bold text-[#00E676]/75 transition-colors duration-200 group-hover:text-[#00E676] md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-[Plus_Jakarta_Sans] text-2xl font-black uppercase leading-none tracking-[-0.035em] text-[#F4F4F0] transition-colors duration-200 group-hover:text-white md:text-3xl">
                      {repo.name.replaceAll("_", " ")}
                    </h2>

                    <span className="font-[JetBrains_Mono] text-[#00E676] transition-transform duration-200 group-hover:translate-x-1">
                      ▶
                    </span>
                  </div>

                  <p className="mt-3 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.18em] text-[#00E676]/70 transition-colors duration-200 group-hover:text-[#00E676]">
                    <span className="text-[#5E7B6B]">~/</span>
                    <span>{repo.path.replace("~/repos/", "repos/")}</span>
                  </p>

                  <p className="mt-5 max-w-2xl font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                    {repo.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {repo.languages.map((lang) => (
                      <span
                        key={lang}
                        className={`border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                          techStyles[lang] || skillStyles[2].node
                        }`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row gap-2 md:col-span-4 md:flex-col md:items-end md:justify-center">
                  <span
                    className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.12em] ${
                      categoryStyles[repo.category] || skillStyles[2].node
                    }`}
                  >
                    {repo.category}
                  </span>

                  <span
                    className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                      statusStyles[repo.status]
                    }`}
                  >
                    {repo.status}
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