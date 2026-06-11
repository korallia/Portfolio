import { memo } from "react";

import { skillStyles, techStyles } from "../../../data/techStyles";

function TechBadgeList({ stack = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className={`border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
            techStyles[tech] || skillStyles[2].node
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default memo(TechBadgeList);