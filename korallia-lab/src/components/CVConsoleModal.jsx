import { useEffect } from "react";
function CVConsoleModal( {setCvConsoleLines,isCvConsoleOpen, cvConsoleLines, setIsCvConsoleOpen} ) {

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
  }, [isCvConsoleOpen]);


    const cvExperiences = 
    [{
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
            return "text-green-400 border-green-500/40 bg-green-500/10";

            case "FREELANCE":
            return "text-cyan-400 border-cyan-500/40 bg-cyan-500/10";

            case "WEB_SYSTEMS":
            return "text-orange-400 border-orange-500/40 bg-orange-500/10";

            case "ENTERPRISE":
            return "text-slate-300 border-slate-500/40 bg-slate-500/10";

            default:
            return "text-slate-400 border-slate-600/40 bg-slate-600/10";
        }
    };
    
    const cvSkillMatrix = [
    {
      label: "FRONT",
      color: "text-cyan-400 border-cyan-500/30",
      value: "React.js · Next.js · TailwindCSS · UX structure · responsive UI",
    },
    {
      label: "BACK",
      color: "text-green-400 border-green-500/30",
      value: "Node.js · TypeScript · Python/Flask · PHP/Laravel · Java/Spring Boot",
    },
    {
      label: "SYSTEM",
      color: "text-slate-300 border-slate-500/30",
      value: "Java/JVM · Python · C/C++ · debugging · software maintenance",
    },
    {
      label: "DATA",
      color: "text-fuchsia-400 border-fuchsia-500/30",
      value: "PostgreSQL · Prisma · MongoDB · data modeling",
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
        <div className="fixed inset-0 z-50 bg-[#020304]/95 backdrop-blur-sm p-4 md:p-10 font-mono text-slate-300 overflow-y-auto">
          <div className="max-w-5xl mx-auto border-2 border-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.18)]">
            <div className="bg-[#24201E] border-b-2 border-[#F97316] px-4 py-2 flex items-center justify-between text-xs text-[#F59E0B] font-bold">
              <span>~/korallia-lab $ ./RUN_CV.sh</span>
              <button
                onClick={() => setIsCvConsoleOpen(false)}
                 className="text-[14px] text-red-400 border border-red-500/50 bg-orange-500/5 px-2 py-0.5 hover:bg-orange-500/15 hover:border-red-400 transition-all font-bold cursor-pointer shadow-[2px_2px_0px_0px_rgba(249,115,22,0.08)]">
                    CLOSE
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-2 text-sm min-h-[320px]">
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
                            <span className="text-orange-400">korallia-lab:~$</span>{" "}
                            <span>{line.text.replace("korallia-lab:~$ ", "")}</span>
                        </>
                        ) : (
                        line.text
                        )}
                  </p>
                );
              })}

                {!isCvBootDone && cvConsoleLines.length > 0 && (
                <span className="inline-block h-4 w-2 bg-green-400 animate-ping shadow-[0_0_10px_#00E676] ml-1" />
                    )}
                    {isCvBootDone && (
                    <div className="mt-6 pt-6 border-t border-[#26221F] space-y-8 animate-in fade-in duration-300">

                        {/* OUTPUT STATUS */}
                        <section className="pt-2">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
                                <div className="space-y-1">
                                    <p className="text-green-400 font-bold">
                                    &gt; resume_render_complete
                                    </p>
                                    <p className="text-slate-500">
                                    OUTPUT_STATUS: READY // PROFILE_COMPILED
                                    </p>
                                </div>
                                <button
                                    className="text-[14px] text-orange-400 border border-orange-500/50 bg-orange-500/5 px-2 py-0.5 hover:bg-orange-500/15 hover:border-orange-400 transition-all font-bold cursor-pointer shadow-[2px_2px_0px_0px_rgba(249,115,22,0.08)]"
                                >
                                    DOWNLOAD_CV.pdf
                                </button>
                            </div>
                        </section>

                    {/* OPERATOR PROFILE */}
                    <section className="space-y-4">
                            <h2 className="text-orange-400 font-bold tracking-wide">
                            [ OPERATOR_PROFILE ]
                            </h2>

                            <div className="grid md:grid-cols-[140px_1fr] gap-y-2 gap-x-4 text-xs md:text-sm">
                                <span className="text-slate-500 font-bold">NAME</span>
                                <span className="text-white">Korallia Frenette</span>

                                <span className="text-slate-500 font-bold">CORE_STACK</span>
                                <span className="text-slate-300">Full-Stack Dev // Entrepreneur // Maker</span>

                                <span className="text-slate-500 font-bold">LOCATION</span>
                                <span className="text-slate-300">Rougemont, Québec, Canada // Remote-ready</span>

                                <span className="text-slate-500 font-bold">LANGUAGES</span>
                                <span className="text-slate-300">French // English</span>

                                <span className="text-slate-500 font-bold">TARGET</span>
                                <span className="text-slate-300">
                                    Donner vie aux idées créatives et faire tenir les systèmes qui les rendent possibles.
                                </span>
                            </div>

                            <div className="border-l border-orange-500/40 pl-4 text-slate-400 text-xs md:text-sm leading-relaxed">
                                Développeuse full-stack avec une approche entrepreneuriale et orientée systèmes.
                                Je conçois des solutions sur mesure qui relient besoin réel, expérience utilisateur,
                                logique technique et contraintes opérationnelles.
                            </div>
                        </section>

                    {/* WORK HISTORY */}
                        <section className="space-y-8">
                            <h2 className="text-orange-400 font-bold tracking-wide">
                            [ WORK_HISTORY ]
                            </h2>

                            <div className="space-y-8">
                                {cvExperiences.map((exp, index) => (
                                    <div
                                    key={`${exp.company}-${index}`}
                                    className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                                    style={{ animationDelay: `${index * 120}ms` }}
                                    >
                                        <div className="mb-2">
                                            <p className="text-white font-bold">
                                            {exp.company} - {exp.role}

                                            <span
                                                className={`ml-2 text-[14px] border px-1.5 py-0.5 font-bold tracking-wide ${getStatusBadgeClass(exp.status)}`}
                                            >
                                                {exp.status}
                                            </span>
                                            </p>

                                            <p className="text-slate-500 italic text-xs">
                                            {exp.meta}
                                            </p>
                                        </div>

                                        <ul className="space-y-2 pl-5 text-slate-300 text-xs md:text-sm leading-relaxed">
                                            {exp.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="relative">
                                                <span className="absolute -left-4 text-orange-400">•</span>
                                                {bullet}
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                    {/* SKILL MATRIX */}
                        <section className="pt-6 border-t border-[#26221F] space-y-4">
                            <h2 className="text-orange-400 font-bold tracking-wide">
                            [ SKILL_MATRIX ]
                            </h2>

                            <div className="space-y-3 text-xs md:text-sm">
                            {cvSkillMatrix.map((skill) => (
                                <div
                                key={skill.label}
                                className={`grid md:grid-cols-[110px_1fr] gap-2 border-l pl-3 ${skill.color}`}
                                >
                                <span className="font-bold">{skill.label}</span>
                                <span className="text-slate-400">{skill.value}</span>
                                </div>
                            ))}
                            </div>
                        </section>

                    {/* EDUCATION */}
                        <section className="pt-6 border-t border-[#26221F] space-y-4">
                            <h2 className="text-orange-400 font-bold tracking-wide">
                            [ EDUCATION ]
                            </h2>

                            <div className="space-y-3 text-xs md:text-sm">
                            {cvEducation.map((edu) => (
                                <div key={edu.program} className="border-l border-blue-500/30 pl-3">
                                <p className="text-white font-bold">
                                    {edu.program}
                                </p>
                                <p className="text-slate-500 italic text-xs">
                                    {edu.school}
                                </p>
                                <p className="text-slate-400 mt-1">
                                    {edu.meta}
                                </p>
                                </div>
                            ))}
                            </div>
                        </section>

                        {/* CONSOLE END */}
                        <section className="pt-6 border-t border-[#26221F] text-xs space-y-2">
                            <p className="text-green-400 font-bold">
                            &gt; process_exit_code: 0
                            </p>
                            <p className="text-slate-600 pt-3">
                            korallia-lab:~${" "}
                            <span className="inline-block h-3 w-2 bg-green-400 animate-ping shadow-[0_0_10px_#00E676] align-middle" />
                            </p>
                        </section>
                    </div>
                    )}
                </div>
            </div>
        </div>
    ))}

export default CVConsoleModal