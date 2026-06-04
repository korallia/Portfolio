import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Données placeholders — à remplacer plus tard par ton backend/API


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
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);



   useEffect(() => {
  const loadArchives = async () => {
    try {
      const response = await fetch("/api/projects/archive");

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des archives.");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
      setProjectsError(err.message);
    } finally {
      setIsLoadingProjects(false);
    }
  };

  loadArchives();
}, []);

return (
  <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-12">
    <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
      <div className="relative border-2 border-[#2A211C] border-t-[#00E676] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]">
        <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
        <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

        <header className="relative z-10 flex items-start justify-between gap-8 border-b border-[#26221F]/60 bg-[#0B0D0F] px-8 pb-9 pt-10 md:px-12">
          <div>
            <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#00E676]">
              <span>[ current_directories ]</span>
            </div>

            <h1 className="font-[Plus_Jakarta_Sans] text-5xl font-black uppercase leading-none tracking-[0.22em] md:text-6xl">
              <span className="text-[#E8EFEA]">Repertoire</span>
              <span className="text-[#00E676]">_</span>
            </h1>

            <p className="mt-6 max-w-2xl font-[Inter] text-[20px] leading-7 text-[#BBAA9A]">
              Une archive technique courte pour présenter les projets actifs,
              leur rôle, leur état et les technologies utilisées.
            </p>
          </div>

          <p className="hidden pt-12 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7A68] md:block">
            VIEW: CURRENT_DIRECTORIES
          </p>
        </header>

        {/* ENTRIES */}
        <div className="relative z-10 bg-[#050607]/70 pb-2">
          {isLoadingProjects && (
            <div className="px-8 py-11 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676] md:px-12">
              loading_projects...
            </div>
          )}

          {projectsError && !isLoadingProjects && (
            <div className="px-8 py-11 font-[Inter] text-[15px] leading-7 text-[#BBAA9A] md:px-12">
              {projectsError}
            </div>
          )}

          {!isLoadingProjects &&
            !projectsError &&
            projects.map((project, index) => (
              <article
                onClick={() => navigate(`/repertoire/${project.slug}`)}
                key={project.id}
                className="group grid cursor-pointer grid-cols-1 gap-5 border-b border-[#1F1A17]/90 px-8 py-11 transition-all duration-200 hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#00E676] md:grid-cols-12 md:px-12"
              >
                <div className="font-[JetBrains_Mono] text-xs font-bold text-[#00E676]/75 transition-colors duration-200 group-hover:text-[#00E676] md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-[Plus_Jakarta_Sans] text-2xl font-black uppercase leading-none tracking-[-0.035em] text-[#F4F4F0] transition-colors duration-200 group-hover:text-white md:text-3xl">
                      {project.name.replaceAll("_", " ")}
                    </h2>

                    <span className="font-[JetBrains_Mono] text-[#00E676] transition-transform duration-200 group-hover:translate-x-1">
                      ▶
                    </span>
                  </div>

                  <p className="mt-3 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.18em] text-[#00E676]/70 transition-colors duration-200 group-hover:text-[#00E676]">
                    <span className="text-[#5E7B6B]">~/</span>
                    <span>
                      {project.path?.replace("~/repos/", "repos/")}
                    </span>
                  </p>

                  <p className="mt-5 max-w-2xl font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(project.stack || []).map((tech) => (
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
                </div>

                <div className="flex flex-row gap-2 md:col-span-4 md:flex-col md:items-end md:justify-center">
                  <span
                    className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.12em] ${
                      categoryStyles[project.category] || skillStyles[2].node
                    }`}
                  >
                    {project.category}
                  </span>

                  <span
                    className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                      statusStyles[project.status] ||
                      "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]"
                    }`}
                  >
                    {project.status}
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