import { memo } from "react";

import { skillStyles, techStyles } from "../../data/techStyles";

function ProjectTechStack({ stack = [] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {stack.map((tech) => (
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
  );
}

export default memo(ProjectTechStack);