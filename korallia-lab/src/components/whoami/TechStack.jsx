

    function TechStack() {

       const techStack = [
  // FRONT (Violet / Fuchsia Électrique)
  { name: "React.js", cat: "front", color: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10" },
  { name: "Next.js", cat: "front", color: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10" },
  { name: "TailwindCSS", cat: "front", color: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10" },
  
  // BACK (Bleu Cyan Électrique)
  { name: "Node.js", cat: "back", color: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
  { name: "TypeScript", cat: "back", color: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
  { name: "Python/Flask", cat: "back", color: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
  { name: "PHP/Laravel", cat: "back", color: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
  { name: "Java/Spring Boot", cat: "back", color: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
  
  // SYSTEM (Blanc Terminal Pur)
  { name: "Java / JVM", cat: "software", color: "text-violet-300 border-violet-900/70 bg-violet-950/20" },
  { name: "Python", cat: "software", color: "text-violet-300 border-violet-900/70 bg-violet-950/20" },
  { name: "C / C++", cat: "software", color: "text-violet-300 border-violet-900/70 bg-violet-950/20" },
  
  // DATA (Ambre Doré - Chaud et ultra lisible)
  { name: "PostgreSQL", cat: "bd", color: "text-amber-500 border-amber-950/60 bg-amber-950/10" },
  { name: "Prisma", cat: "bd", color: "text-amber-500 border-amber-950/60 bg-amber-950/10" },
  { name: "MongoDB", cat: "bd", color: "text-amber-500 border-amber-950/60 bg-amber-950/10" }
];

        const techGroups = [
            { label: "FRONT", cat: "front", node: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10" },
            { label: "BACK", cat: "back", node: "text-sky-400 border-sky-950/60 bg-sky-950/10" },
            { label: "SYSTEM", cat: "software", node: "text-violet-300 border-violet-900/70 bg-violet-950/20" },
            { label: "DATA", cat: "bd", node: "text-amber-500 border-amber-950/60 bg-amber-950/10" },
        ];
    return (
            <div className="bg-[#020304] border-2 border-[#26221F] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]">
                <div className="border-b-2 border-[#26221F] px-4 py-2 bg-[#0B0D0F] flex justify-between items-center select-none min-h-[38px]">
                     <span className="text-xs font-bold text">[ /sys/tech_stack ]</span>
                        <span className="text-[10px] text-slate-400 font-bold tracking-wide select-none cursor-default">
  [ PCB_MODE ]
</span>
                </div>

                <div className="relative p-6 text-[10px] md:text-xs font-mono overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                        <div className="absolute left-8 top-0 h-full w-px bg-green-400" />
                        <div className="absolute left-24 top-0 h-full w-px bg-cyan-400" />
                        <div className="absolute right-10 top-0 h-full w-px bg-purple-400" />
                        <div className="absolute top-12 left-0 w-full h-px bg-green-400" />
                        <div className="absolute top-32 left-0 w-full h-px bg-cyan-400" />
                        <div className="absolute bottom-16 left-0 w-full h-px bg-purple-400" />
                    </div>

                    <div className="relative space-y-5">
                        {techGroups.map((group) => (
                        <div
                        key={group.label}
                        className="grid grid-cols-[82px_1fr] items-start gap-3"
                        >
                            <div className={`relative border px-2 py-1 font-bold tracking-widest ${group.node}`}>
                                <span>{group.label}</span>
                                <span className="absolute -right-[5px] top-1.5 h-1.5 w-1.5 bg-current rounded-full" />
                                <span className="absolute -right-[5px] bottom-1.5 h-1.5 w-1.5 bg-current rounded-full" />
                            </div>

                            <div className="relative pl-6">
                            <div className="absolute left-0 top-3 w-5 h-px bg-current opacity-50" />
                            <div className="absolute left-5 top-3 bottom-3 w-px bg-current opacity-20" />
                                <div className="flex flex-wrap gap-2">
                                    {techStack
                                    .filter((tech) => tech.cat === group.cat)
                                    .map((tech) => (
                                        <span
                                        key={tech.name}
                                        className={`
                                            relative border px-2 py-0.5 font-bold tracking-wide
                                            transition-all duration-200 hover:brightness-125 hover:-translate-y-px
                                            ${tech.color}
                                        `}
                                        >
                                        <span className="absolute -left-4 top-1/2 h-px w-4 bg-current opacity-40" />
                                        <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                                        {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    )
    }

export default TechStack

