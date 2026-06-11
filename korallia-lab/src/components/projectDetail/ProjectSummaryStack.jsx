import { memo } from "react";

import {
  skillStyles,
  techStyles,
  categoryStyles,
} from "../../data/techStyles";

import DetailBlockTitle from "./DetailBlockTitle";
import DetailInfoCard from "./DetailInfoCard";

function ProjectSummaryStack({ project, fixedTheme }) {
  return (
    <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1.2fr_0.8fr]">
      <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
        <DetailBlockTitle title="project_summary" theme={fixedTheme} />

        <DetailInfoCard important theme={fixedTheme}>
          {project.summary}
        </DetailInfoCard>
      </section>

      <section className="flex items-center px-8 py-8 md:px-12">
        <div className="flex flex-wrap gap-3">
          <span
            className={`border px-3 py-1.5 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] ${
              categoryStyles[project.category] || skillStyles[2].node
            }`}
          >
            {project.category}
          </span>

          {(project.stack || []).map((tech) => (
            <span
              key={tech}
              className={`border px-3 py-1.5 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] ${
                techStyles[tech] || skillStyles[2].node
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default memo(ProjectSummaryStack);