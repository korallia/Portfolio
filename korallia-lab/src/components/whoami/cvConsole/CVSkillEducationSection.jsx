import { memo } from "react";

import { skillToneStyles } from "../../../data/techStyles";

function CVSkillEducationSection({
  skillTitle,
  educationTitle,
  skills,
  education,
}) {
  return (
    <section className="grid gap-0 border-b-2 border-b-[#F97316] border-t-2 border-t-[#F97316]/35 md:grid-cols-[1.25fr_0.75fr]">
      <div className="border-b border-[#26221F] px-6 py-7 md:border-b-0 md:border-r md:px-8">
        <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
          {skillTitle}
        </p>

        <div className="space-y-3">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className={`border-l px-3 py-2 ${
                skillToneStyles[skill.tone] || skillToneStyles.system
              }`}
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

      <div className="px-6 py-7 md:px-8">
        <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
          {educationTitle}
        </p>

        {education.map((edu) => (
          <div key={edu.program} className="border-l border-sky-500/30 pl-4">
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
  );
}

export default memo(CVSkillEducationSection);