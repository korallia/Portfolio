import { memo } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { sideQuestContent } from "../../content/whoami/sideQuestContent";

function SideQuest() {
  const { lang } = useLanguage();
  const text = sideQuestContent[lang] ?? sideQuestContent.fr;

  return (
    <div className="group w-full overflow-hidden border border-[#26221F] bg-[#020304]/85 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.55)] transition-all duration-200 hover:border-[#3A302B]">
      <div className="flex min-h-[36px] select-none items-center justify-between border-b border-[#26221F] bg-[#0B0D0F]/90 px-4 py-2">
        <span className="text-[11px] font-bold text-slate-400 transition-colors group-hover:text-slate-300">
          {text.title}
        </span>

        <span className="cursor-default select-none text-[9px] font-bold tracking-wide text-slate-600 transition-colors group-hover:text-slate-500">
          {text.label}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 font-mono text-[10px] md:grid-cols-2 md:text-[11px]">
        {text.items.map((quest) => (
          <div
            key={quest.title}
            className="relative border border-fuchsia-950/35 bg-fuchsia-950/[0.015] p-3 pl-4 transition-all duration-200 group-hover:border-fuchsia-900/60 group-hover:bg-fuchsia-950/[0.035]"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-fuchsia-400/20 transition-all duration-200 group-hover:bg-fuchsia-400/40" />

            <p className="mb-1.5 font-bold tracking-wide text-fuchsia-300/65 transition-colors duration-200 group-hover:text-fuchsia-400">
              ○ {quest.title}
            </p>

            <p className="leading-relaxed text-slate-600 transition-colors duration-200 group-hover:text-slate-400">
              {quest.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SideQuest);