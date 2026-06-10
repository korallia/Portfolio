import { memo } from "react";

import PreviewCard from "./PreviewCard";

function ProjectPreviewPanel({
  text,
  isLoading,
  error,
  project,
  branch,
  previewModel,
}) {


  return (
    <div className="relative min-h-0 overflow-hidden border-4 border-[#26221F] border-t-[#00E676] bg-[#020304] p-6 shadow-[12px_12px_0px_0px_rgba(0,80,45,0.22)] md:min-h-[460px] lg:col-span-7">
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#00E676]/10" />

      <div className="mb-5 flex flex-col gap-3 border-b-2 border-[#26221F] pb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex flex-wrap items-center gap-2">
          <span>{text.detailPreview}</span>

          <span className="border border-[#F97316]/40 bg-[#F97316]/10 px-2 py-1 text-[#F59E0B]">
            {branch?.name || text.mainBranch}
          </span>
        </span>

        <span className="text-[#00E676]">{text.online}</span>
      </div>

      {isLoading ? (
        <PreviewCard
          label={text.loadingPreview}
          value={text.loadingPreviewText}
        />
      ) : error || !project ? (
        <PreviewCard
          label={text.previewUnavailable}
          value={text.previewUnavailableText}
        />
      ) : (
        <div className="grid gap-4">
          <PreviewCard label={text.projectSummary} value={previewModel.summary} />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {previewModel.items.slice(0, 2).map((item) => (
              <PreviewCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {previewModel.items.slice(0, 2).map((item) => (
              <PreviewCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ProjectPreviewPanel);