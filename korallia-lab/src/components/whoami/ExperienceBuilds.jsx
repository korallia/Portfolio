import { memo } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { experienceBuildsContent } from "../../content/whoami/experienceBuildsContent";
import { experienceStyles } from "../../data/techStyles"

function ExperienceBuilds({ setCvConsoleOpen }) {
  const { lang } = useLanguage();
  const text = experienceBuildsContent[lang] ?? experienceBuildsContent.fr;

  return (
    <div className="border-2 border-[#26221F] bg-[#020304] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b-2 border-[#26221F] bg-[#0B0D0F] px-4 py-2">
        <span className="text-xs font-bold">{text.title}</span>

        <button
          type="button"
          onClick={() => setCvConsoleOpen(true)}
          className="flex h-full cursor-pointer items-center border border-orange-500/50 bg-orange-500/5 px-3 py-1 text-[12px] font-bold text-orange-400 shadow-[2px_2px_0px_0px_rgba(249,115,22,0.08)] transition-all hover:border-orange-400 hover:bg-orange-500/15"
        >
          {text.runCv}
        </button>
      </div>

      <div className="space-y-3 p-5 font-mono text-[10px] md:text-xs">
        {text.items.map((item) => (
          <div
            key={item.key}
            className={`grid grid-cols-[95px_1fr] gap-3 border-l pl-3 ${
              experienceStyles[item.key] || "text-slate-400 border-zinc-800"
            }`}
          >
            <span className="font-bold">{item.key}</span>
            <span className="text-slate-300">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ExperienceBuilds);