import { memo } from "react";

function ProjectListState({ isLoading, error, text }) {
  if (isLoading) {
    return (
      <div className="px-8 py-11 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.16em] text-[#00E676] md:px-12">
        {text.loading}
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-8 py-11 font-[Inter] text-[15px] leading-7 text-[#BBAA9A] md:px-12">
        {error || text.errorFallback}
      </div>
    );
  }

  return null;
}

export default memo(ProjectListState);