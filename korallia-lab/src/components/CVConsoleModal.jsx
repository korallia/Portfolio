import { useEffect } from "react";

function CVConsoleModal({
  setCvConsoleLines,
  isCvConsoleOpen,
  cvConsoleLines,
  setIsCvConsoleOpen,
}) {
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
      role: "Co-Founder, Secretary & CTO",
      meta: "Remote • Sep 2024 - Present",
      status: "ACTIVE",
      bullets: [
        "Co-founded and developed a product-driven company creating immersive LARP kits, bringing concepts from market positioning to physical production and online sales.",
        "Led the company’s technical direction, including e-commerce infrastructure, internal tools, digital workflows and systems supporting operations.",
        "Managed cross-functional operations across product development, supplier coordination, production planning, branding, inventory needs and go-to-market execution.",
      ],
    },
    {
      company: "Phoenix GN",
      role: "Frontend Developer",
      meta: "Remote • Jan 2025 - Apr 2025",
      status: "FREELANCE",
      bullets: [
        "Redesigned and modernized an outdated user portal into a clearer, more intuitive and user-friendly frontend experience adapted to the client’s operational needs.",
        "Improved visual hierarchy, navigation flow and frontend structure to reduce friction in key interactions and support smoother user workflows.",
        "Delivered a custom-fit frontend solution while working within existing constraints, balancing usability, maintainability and client expectations.",
      ],
    },
    {
      company: "Blax Web & Design",
      role: "Full-Stack Developer",
      meta: "Remote • Apr 2023 - Nov 2024",
      status: "WEB_SYSTEMS",
      bullets: [
        "Debugged and resolved complex software issues across production-facing systems, contributing to more stable releases and improved reliability.",
        "Maintained and improved full-stack features in evolving web applications, adapting quickly to shifting priorities, client needs and technical constraints.",
        "Supported development efficiency by improving reusable code patterns, strengthening problem-solving processes and contributing to cleaner project execution.",
      ],
    },
    {
      company: "Micro Focus Software Development",
      role: "Java Developer",
      meta: "Remote • Mar 2022 - May 2023",
      status: "ENTERPRISE",
      bullets: [
        "Collaborated on enterprise Java systems, contributing to software maintenance, application logic and technical problem-solving in a structured development environment.",
        "Translated customer and business requirements into actionable technical use cases, improving alignment between technical teams and stakeholder expectations.",
        "Identified, analyzed and resolved coding challenges to improve application functionality, reliability and overall user satisfaction.",
      ],
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-emerald-400 border-emerald-950/60 bg-emerald-950/10";
      case "FREELANCE":
        return "text-sky-400 border-sky-950/60 bg-sky-950/10";
      case "WEB_SYSTEMS":
        return "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10";
      case "ENTERPRISE":
        return "text-violet-300 border-violet-900/70 bg-violet-950/20";
      default:
        return "text-slate-400 border-zinc-800 bg-zinc-800/10";
    }
  };

  const cvSkillMatrix = [
    {
      label: "FRONT",
      color: "text-fuchsia-400 border-fuchsia-950/60",
      value: "React.js · Next.js · TailwindCSS ·",
    },
    {
      label: "BACK",
      color: "text-sky-400 border-sky-950/60 bg-sky-950/10",
      value: "Node.js · TypeScript · Python/Flask · PHP/Laravel · Java/Spring Boot",
    },
    {
      label: "SYSTEM",
      color: "text-slate-300 border-zinc-800",
      value: "Java/JVM · Python · C/C++ ·",
    },
    {
      label: "DATA",
      color: "text-amber-500 border-amber-950/60",
      value: "PostgreSQL · Prisma · MongoDB ·",
    },
  ];

  const cvEducation = [
    {
      school: "Cégep / College",
      program: "DEC in Computer Science",
      meta: "Software development · programming foundations · systems logic",
    },
  ];

  const isCvBootDone = cvConsoleLines.some((line) => line.text === "> ready.");

  return (
    isCvConsoleOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#020304]/95 p-4 text-slate-300 backdrop-blur-sm md:p-10">
        <div className="mx-auto w-full max-w-5xl border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
          {/* WINDOW BAR */}
          <div className="flex items-center justify-between border-b border-[#F97316]/45 bg-[#14100D] px-4 py-2">
            <span className="font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.14em] text-[#F59E0B]">
              ~/korallia-lab $ ./RUN_CV.sh
            </span>

            <button
              onClick={() => setIsCvConsoleOpen(false)}
              className="cursor-pointer select-none border border-[#DC2626]/80 bg-[#7F1D1D]/35 px-3 py-1 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B6B] shadow-[2px_2px_0px_0px_rgba(127,29,29,0.35)] transition-all hover:border-[#EF4444] hover:bg-[#991B1B]/55 hover:text-[#FECACA]"
            >
              Close
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
                      &gt; resume_render_complete
                    </p>

                    <p className="mt-1 uppercase tracking-[0.14em] text-[#8F7A68]">
                      OUTPUT_STATUS: READY // PROFILE_COMPILED
                    </p>

                    <p className="mt-3 text-[#8F7A68]">
                      korallia-lab:~${" "}

                      <span className="w-3 h-5 bg-[#00E676] inline-block animate-ping shadow-[0_0_10px_#00E676]"></span>
                    </p>
                  </div>

                  <button className="w-fit cursor-pointer border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-2 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B] transition hover:border-[#F97316] hover:bg-[#F97316]/15 hover:text-[#F97316]">
                    DOWNLOAD_CV.pdf
                  </button>
                </div>
              </section>

                {/* CV OUTPUT */}
                <div className="border border-[#26221F] bg-[#080A0C]">
                  {/* OPERATOR PROFILE */}
                 <section className="border-t-2 border-t-[#F97316] border-b-2 border-b-[#F97316]/45 px-6 py-7 md:px-8">
                    <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                      [ OPERATOR_PROFILE ]
                    </p>

                    <div className="grid gap-6 md:grid-cols-[0.85fr_1.35fr]">
                      <div>
                        <h2 className="font-[Plus_Jakarta_Sans] text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white">
                          Korallia Frenette
                        </h2>

                        <p className="mt-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B]">
                          Full-Stack Dev // Entrepreneur // Maker
                        </p>
                      </div>

                      <div>
                        <p className="font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
                          Développeuse full-stack avec une approche entrepreneuriale
                          et orientée systèmes. Je conçois des solutions sur mesure qui
                          relient besoin réel, expérience utilisateur, logique technique
                          et contraintes opérationnelles.
                        </p>

                        <div className="mt-5 grid gap-4 font-[JetBrains_Mono] text-[11px] uppercase tracking-[0.12em] md:grid-cols-3">
                          <div>
                            <p className="text-[#8F7A68]">Location</p>
                            <p className="text-[#D8C7B8]">
                              Rougemont, Québec // Remote-ready
                            </p>
                          </div>

                          <div>
                            <p className="text-[#8F7A68]">Languages</p>
                            <p className="text-[#D8C7B8]">French // English</p>
                          </div>

                          <div>
                            <p className="text-[#8F7A68]">Target</p>
                            <p className="text-[#D8C7B8]">
                              Systems that hold
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
                        [ SKILL_MATRIX ]
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
                        [ EDUCATION ]
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