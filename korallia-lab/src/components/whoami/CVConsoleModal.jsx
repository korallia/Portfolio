import { useEffect } from "react";

function CVConsoleModal({
  setCvConsoleLines,
  isCvConsoleOpen,
  cvConsoleLines,
  setIsCvConsoleOpen,
}) {
  const cvFilePath = "/Korallia_Frenette_Resume.pdf";

  const handleOpenAndDownloadCv = () => {
    window.open(cvFilePath, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Korallia_Frenette_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    if (!isCvConsoleOpen) {
      setCvConsoleLines([]);
      return;
    }

   const lines = [
  { text: "korallia-lab:~$ run cv.sh", color: "text-slate-300", delay: 200 },
  { text: "> loading experience logs...", color: "text-green-400/80", delay: 550 },
  { text: "> mounting professional profile...", color: "text-green-400/80", delay: 900 },
  { text: "> rendering console resume...", color: "text-green-400/80", delay: 1250 },
  { text: "> ready.", color: "text-green-400", delay: 1650 },
  { text: "[ OUTPUT_READY ]", color: "text-green-400 font-bold", delay: 2100 },
];

    const timers = lines.map((line) =>
      setTimeout(() => {
        setCvConsoleLines((currentLines) => [...currentLines, line]);
      }, line.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isCvConsoleOpen, setCvConsoleLines]);

  const cvExperiences = [
    {
      company: "Panassor",
      role: "Cofondatrice, secrétaire & CTO",
      meta: "Télétravail • sept. 2024 - aujourd’hui",
      status: "ACTIF",
      bullets: [
       "Conception et maintenance de systèmes internes liés aux ventes, à l’inventaire, aux rencontres et aux ressources opérationnelles.",
      "Gestion administrative et opérationnelle : coordination des rencontres, ressources internes, soutien organisationnel, R&D et planification des cycles de production.",
        "Développement de prototypes électroniques liés aux produits : circuits, microcontrôleurs, LEDs, tests et intégration hardware.",
      ],
    },
    {
      company: "Phoenix GN",
      role: "Développeuse frontend",
      meta: "Télétravail • janv. 2025 - avr. 2025",
      status: "MANDAT",
      bullets: [
"Refonte frontend d’un portail utilisateur existant pour améliorer la navigation, la lisibilité et l’accès aux fonctionnalités principales.",
"Identification des besoins du client et adaptation de l’interface aux usages concrets du portail.",
"Collaboration avec les parties prenantes pour intégrer les changements dans un système déjà en place.",
],
    },
    {
      company: "Blax Web & Design",
      role: "Développeuse full-stack",
      meta: "Télétravail • avr. 2023 - nov. 2024",
      status: "SYSTEMES_WEB",
      bullets: [
  "Débogage et stabilisation post-release de produits web, avec prise en charge d’environ 80 % des correctifs sur un produit client majeur.",
  "Amélioration et maintien de composants centraux de l’écosystème web, incluant une librairie commune, un CMS custom, du soutien au développement frontend et du partage de connaissances au sein de l’équipe.",
  "Développement de solutions custom pour différents clients, du JavaScript frontend aux structures orientées objet complexes, avec support technique adapté aux besoins du projet.",
],
    },
    {
      company: "Micro Focus Software Development",
      role: "Développeuse Java",
      meta: "Télétravail • mars 2022 - mai 2023",
      status: "ENTREPRISE",
      bullets: [
"Développement d’outils internes de soutien dans un environnement logiciel d’entreprise, avec Java et React.",
"Collaboration à l’analyse et à l’évolution de cas d’usage, en lien avec les besoins de différentes équipes.",
"Participation à un cadre Scrum/Agile avec mentorat, revue de code et apprentissage des pratiques de développement en équipe structurée.",
],
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "ACTIF":
        return "text-emerald-400 border-emerald-950/60 bg-emerald-950/10";
      case "MANDAT":
        return "text-sky-400 border-sky-950/60 bg-sky-950/10";
      case "SYSTEMES_WEB":
        return "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10";
      case "ENTREPRISE":
        return "text-violet-300 border-violet-900/70 bg-violet-950/20";
      default:
        return "text-slate-400 border-zinc-800 bg-zinc-800/10";
    }
  };

  const cvSkillMatrix = [
  {
    label: "FRONT",
    color: "text-fuchsia-400 border-fuchsia-950/60",
    value: "React.js · Next.js · TailwindCSS · JavaScript/TypeScript",
  },
  {
    label: "BACK",
    color: "text-sky-400 border-sky-950/60 bg-sky-950/10",
    value: "Node.js  · Python/Flask · PHP/Laravel · Java/Spring Boot",
  },
  {
    label: "SYSTÈME",
    color: "text-slate-300 border-zinc-800",
    value: "Java/JVM · Python · C/C++ · Bash · CMD · PowerShell",
  },
  {
    label: "DONNÉES",
    color: "text-amber-500 border-amber-950/60",
    value: "PostgreSQL · MariaDB · MongoDB · Neo4j",
  },
];

  const cvEducation = [
    {
school: "Cégep / Collège",
program: "DEC en informatique",
meta: "Développement logiciel · OOP · applications web et mobiles · SQL/NoSQL · environnements Linux/Windows · ligne de commande",
}

  ];

  const isCvBootDone = cvConsoleLines.some((line) => line.text === "> ready.");

  return (
    isCvConsoleOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#020304]/95 p-4 text-slate-300 backdrop-blur-sm md:p-10">
        <div className="mx-auto w-full max-w-5xl border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
          {/* WINDOW BAR */}
          <div className="flex items-center justify-between border-b border-[#F97316]/45 bg-[#14100D] px-4 py-2">
            <span className="font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.14em] text-[#F59E0B]">
              ~/korallia-lab $ ./EXECUTER_CV.sh
            </span>

            <button
              onClick={() => setIsCvConsoleOpen(false)}
              className="cursor-pointer select-none border border-[#DC2626]/80 bg-[#7F1D1D]/35 px-3 py-1 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B6B] shadow-[2px_2px_0px_0px_rgba(127,29,29,0.35)] transition-all hover:border-[#EF4444] hover:bg-[#991B1B]/55 hover:text-[#FECACA]"
            >
              FERMER
            </button>
          </div>

          <div className="p-5 md:p-8">
            {/* BOOT SEQUENCE */}
            <section className="border border-[#1F1A17] bg-[#050607] p-5 font-[JetBrains_Mono] text-xs">
              <div className="space-y-2">
                {cvConsoleLines.map((line, index) => {
                  if (line.text === "") {
                    return <div key={index} className="h-3" />;
                  }

                  const isCommand = line.text.includes("korallia-lab:~$");

                  return (
                    <p
                      key={index}
                      className={`${line.color} animate-in fade-in slide-in-from-left-1 duration-200`}
                    >
                      {isCommand ? (
                        <>
                          <span className="text-[#F97316]">korallia-lab:~$</span>{" "}
                          <span>{line.text.replace("korallia-lab:~$ ", "")}</span>
                        </>
                      ) : (
                        line.text
                      )}
                    </p>
                  );
                })}

                {!isCvBootDone && cvConsoleLines.length > 0 && (
                  <span className="ml-1 inline-block h-4 w-2 animate-ping bg-green-400 shadow-[0_0_10px_#00E676]" />
                )}
              </div>
            </section>

            {isCvBootDone && (
              <div className="mt-8 animate-in fade-in duration-300">
                {/* OUTPUT STATUS */}
                <section className="mb-6 border border-[#1F1A17] bg-[#050607] px-5 py-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="font-[JetBrains_Mono] text-xs">
                      <p className="font-bold uppercase tracking-[0.16em] text-green-400">
                        &gt; rendu_cv_termine
                      </p>

                      <p className="mt-1 uppercase tracking-[0.14em] text-[#8F7A68]">
                        STATUT_SORTIE: PRET // PROFIL_COMPILE
                      </p>

                      <p className="mt-3 text-[#8F7A68]">
                        korallia-lab:~${" "}
                        <span className="inline-block h-5 w-3 animate-ping bg-[#00E676] shadow-[0_0_10px_#00E676]"></span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleOpenAndDownloadCv}
                        className="border border-[#B45309]/70 bg-[#B45309]/10 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em] text-[#F59E0B] transition hover:bg-[#B45309]/20"
                      >
                        OUVRIR_CV
                      </button>
                    </div>
                  </div>
                </section>

                {/* CV OUTPUT */}
                <div className="border border-[#26221F] bg-[#080A0C]">
                  {/* OPERATOR PROFILE */}
                  <section className="border-t-2 border-t-[#F97316] border-b-2 border-b-[#F97316]/45 px-6 py-7 md:px-8">
                    <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                      [ PROFIL_OPERATEUR ]
                    </p>

                    <div className="grid gap-6 md:grid-cols-[0.85fr_1.35fr]">
                      <div>
                        <h2 className="font-[Plus_Jakarta_Sans] text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white">
                          Korallia Frenette
                        </h2>

                        <p className="mt-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B]">
                          Développeuse full-stack // Entrepreneure // Maker
                        </p>
                      </div>

                      <div>
                        <p className="font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
                         Développeuse full-stack avec une vision système et produit. Je construis des interfaces et des fonctionnalités en tenant compte de l’usage, de la structure du projet, de la maintenabilité et de l’évolution du code, tout en respectant les priorités, le rythme et les contraintes du projet.
                        </p>

                        <div className="mt-5 grid gap-4 font-[JetBrains_Mono] text-[11px] uppercase tracking-[0.12em] md:grid-cols-3">
                          <div>
                            <p className="text-[#8F7A68]">Lieu</p>
                            <p className="text-[#D8C7B8]">
                              Rougemont, Québec // Télétravail
                            </p>
                          </div>

                          <div>
                            <p className="text-[#8F7A68]">Langues</p>
                            <p className="text-[#D8C7B8]">Français // Anglais</p>
                          </div>

                          <div>
                            <p className="text-[#8F7A68]">Cible</p>
                            <p className="text-[#D8C7B8]">
                              Des systèmes qui tiennent
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* WORK HISTORY */}
                  <section className="border-b border-[#26221F] px-6 py-7 md:px-8">
                    <div className="divide-y divide-[#1F1A17]">
                      {cvExperiences.map((exp) => (
                        <article
                          key={`${exp.company}-${exp.meta}`}
                          className="grid gap-5 py-6 first:pt-0 last:pb-0 md:grid-cols-[0.9fr_1.6fr]"
                        >
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-[Plus_Jakarta_Sans] text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                                {exp.company}
                              </h3>

                              <span
                                className={`border px-2 py-0.5 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${getStatusBadgeClass(
                                  exp.status
                                )}`}
                              >
                                {exp.status}
                              </span>
                            </div>

                            <p className="mt-1 font-[Inter] text-sm font-semibold text-[#D8C7B8]">
                              {exp.role}
                            </p>

                            <p className="mt-1 font-[JetBrains_Mono] text-[11px] italic uppercase tracking-[0.08em] text-[#8F7A68]">
                              {exp.meta}
                            </p>
                          </div>

                          <ul className="space-y-2.5 font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
                            {exp.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="relative pl-5">
                                <span className="absolute left-0 top-0 text-[#F97316]">
                                  ›
                                </span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </section>

                  {/* SKILLS + EDUCATION */}
                  <section className="grid gap-0 border-t-2 border-t-[#F97316]/35 border-b-2 border-b-[#F97316] md:grid-cols-[1.25fr_0.75fr]">
                    {/* SKILL MATRIX */}
                    <div className="border-b border-[#26221F] px-6 py-7 md:border-b-0 md:border-r md:px-8">
                      <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                        [ MATRICE_COMPETENCES ]
                      </p>

                      <div className="space-y-3">
                        {cvSkillMatrix.map((skill) => (
                          <div
                            key={skill.label}
                            className={`border-l px-3 py-2 ${skill.color}`}
                          >
                            <div className="grid gap-1 md:grid-cols-[78px_1fr] md:items-start">
                              <span className="font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em]">
                                {skill.label}
                              </span>

                              <span className="font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
                                {skill.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="px-6 py-7 md:px-8">
                      <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                        [ FORMATION ]
                      </p>

                      {cvEducation.map((edu) => (
                        <div
                          key={edu.program}
                          className="border-l border-sky-500/30 pl-4"
                        >
                          <p className="font-[Plus_Jakarta_Sans] text-lg font-black uppercase text-white">
                            {edu.program}
                          </p>

                          <p className="mt-1 font-[JetBrains_Mono] text-xs italic text-[#8F7A68]">
                            {edu.school}
                          </p>

                          <p className="mt-2 font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
                            {edu.meta}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default CVConsoleModal;