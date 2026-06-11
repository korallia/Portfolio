import { memo } from "react";

function ProjectDetailTopBar({ fixedTheme, statusTag, status }) {
  return (
    <div className="relative z-10 flex items-center justify-between border-b border-[#3A302A] bg-[#0B0D0F] px-8 py-4 font-[JetBrains_Mono] text-[12px] font-bold uppercase tracking-[0.16em] md:px-12">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 ${fixedTheme.dot}`} />
        <span className={fixedTheme.text}>project_detail</span>
      </div>

      <span
        className={`border px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${statusTag}`}
      >
        stage: {status}
      </span>
    </div>
  );
}

export default memo(ProjectDetailTopBar);