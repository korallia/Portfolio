import { memo } from "react";

const categoryTextColors = {
  RECOIL_LOGS: "text-orange-400",
  CREATIVE_CORE: "text-amber-500",
  MAKER_NOTES: "text-red-400",
};

function getCategoryTextColor(category) {
  return categoryTextColors[category] || "text-[#F59E0B]";
}

function JournalArticleTopBar({ article, text, onBack }) {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#26221F]/60 px-6 pt-8 pb-6 md:px-12">
      <div className="flex flex-wrap items-center gap-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em]">
        <span className="text-[#8F7A68]">
          [ {text.idPrefix} {article.number} ]
        </span>

        <span className={getCategoryTextColor(article.category)}>
          {article.category}
        </span>

        <span className="text-[#8F7A68]/60 font-normal normal-case italic">
          {article.read_time}
        </span>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="border border-[#F59E0B]/35 bg-[#F59E0B]/5 px-4 py-1.5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B] transition hover:border-[#F97316] hover:bg-[#F97316]/15 hover:text-[#F97316]"
      >
        {text.backToArchives}
      </button>
    </div>
  );
}

export default memo(JournalArticleTopBar);