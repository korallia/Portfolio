import { memo } from "react";

import {
  skillStyles,
  categoryStyles,
  statusStyles,
} from "../../data/techStyles";

function ProjectMetaBadges({ category, status }) {
  return (
    <div className="flex flex-row gap-2 md:col-span-4 md:flex-col md:items-end md:justify-center">
      <span
        className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.12em] ${
          categoryStyles[category] || skillStyles[2].node
        }`}
      >
        {category}
      </span>

      <span
        className={`w-fit border px-2 py-1 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.12em] ${
          statusStyles[status] ||
          "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default memo(ProjectMetaBadges);