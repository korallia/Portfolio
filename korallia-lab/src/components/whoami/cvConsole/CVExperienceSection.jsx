import { memo } from "react";

import { statusBadgeStyles } from "../../../data/techStyles";

function CVExperienceSection({ title, experiences }) {
  return (
    <section className="border-b border-[#26221F] px-6 py-7 md:px-8">
      <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
        {title}
      </p>

      <div className="divide-y divide-[#1F1A17]">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.meta}`}
            className="grid gap-5 py-6 first:pt-0 last:pb-0 md:grid-cols-[0.9fr_1.6fr]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-[Plus_Jakarta_Sans] text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                  {experience.company}
                </h3>

                <span
                  className={`border px-2 py-0.5 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
                    statusBadgeStyles[experience.statusTone] ||
                    "text-slate-400 border-zinc-800 bg-zinc-800/10"
                  }`}
                >
                  {experience.status}
                </span>
              </div>

              <p className="mt-1 font-[Inter] text-sm font-semibold text-[#D8C7B8]">
                {experience.role}
              </p>

              <p className="mt-1 font-[JetBrains_Mono] text-[11px] italic uppercase tracking-[0.08em] text-[#8F7A68]">
                {experience.meta}
              </p>
            </div>

            <ul className="space-y-2.5 font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-5">
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
  );
}

export default memo(CVExperienceSection);