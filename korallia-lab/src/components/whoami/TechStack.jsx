import { memo, useMemo } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { techStackContent } from "../../content/whoami/techStackContent";

import { groupStyles } from "../../data/techStyles";

function groupTechsByCategory(items) {
  return items.reduce((groups, tech) => {
    return {
      ...groups,
      [tech.cat]: [...(groups[tech.cat] || []), tech],
    };
  }, {});
}

function CircuitOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
      <div className="absolute left-8 top-0 h-full w-px bg-green-400" />
      <div className="absolute left-24 top-0 h-full w-px bg-cyan-400" />
      <div className="absolute right-10 top-0 h-full w-px bg-purple-400" />
      <div className="absolute left-0 top-12 h-px w-full bg-green-400" />
      <div className="absolute left-0 top-32 h-px w-full bg-cyan-400" />
      <div className="absolute bottom-16 left-0 h-px w-full bg-purple-400" />
    </div>
  );
}

function TechBadge({ tech }) {
  return (
    <span
      className={`relative border px-2 py-0.5 font-bold tracking-wide transition-all duration-200 hover:-translate-y-px hover:brightness-125 ${
        groupStyles[tech.cat]
      }`}
    >
      <span className="absolute -left-4 top-1/2 h-px w-4 bg-current opacity-40" />
      <span className="absolute -left-[5px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-current opacity-80" />
      {tech.name}
    </span>
  );
}

function TechGroup({ group, items }) {
  return (
    <div className="grid grid-cols-[82px_1fr] items-start gap-3">
      <div
        className={`relative border px-2 py-1 font-bold tracking-widest ${
          groupStyles[group.cat]
        }`}
      >
        <span>{group.label}</span>
        <span className="absolute -right-[5px] top-1.5 h-1.5 w-1.5 rounded-full bg-current" />
        <span className="absolute -right-[5px] bottom-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 top-3 h-px w-5 bg-current opacity-50" />
        <div className="absolute bottom-3 left-5 top-3 w-px bg-current opacity-20" />

        <div className="flex flex-wrap gap-2">
          {items.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  const { lang } = useLanguage();
  const text = techStackContent[lang] ?? techStackContent.fr;

  const techsByCategory = useMemo(
    () => groupTechsByCategory(text.items),
    [text.items]
  );

  return (
    <div className="border-2 border-[#26221F] bg-[#020304] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]">
      <div className="flex min-h-[38px] select-none items-center justify-between border-b-2 border-[#26221F] bg-[#0B0D0F] px-4 py-2">
        <span className="text-xs font-bold">{text.title}</span>

        <span className="cursor-default select-none text-[10px] font-bold tracking-wide text-slate-400">
          {text.mode}
        </span>
      </div>

      <div className="relative overflow-hidden p-6 font-mono text-[10px] md:text-xs">
        <CircuitOverlay />

        <div className="relative space-y-5">
          {text.groups.map((group) => (
            <TechGroup
              key={group.cat}
              group={group}
              items={techsByCategory[group.cat] || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TechStack);