import { memo } from "react";

const categoryStyles = {
  RECOIL_LOGS: "text-orange-400",
  CREATIVE_CORE: "text-amber-500",
  MAKER_NOTES: "text-red-400",
};

function getCategoryClass(category) {
  return categoryStyles[category] || "text-[#F59E0B]";
}

function JournalArchiveEntry({ entry, onOpenEntry }) {
  return (
    <article
      onClick={() => onOpenEntry(entry.slug)}
      className="group grid cursor-pointer grid-cols-1 gap-5 border-b border-[#1F1A17]/90 px-8 py-8 transition-all duration-200 hover:bg-[#12100E]/95 hover:shadow-[inset_3px_0_0_#F97316] md:grid-cols-12 md:px-12"
    >
      <div className="font-[JetBrains_Mono] text-xs font-bold text-[#8F7A68] transition-colors duration-200 group-hover:text-[#F97316] md:col-span-1">
        {entry.number}
      </div>

      <div className="md:col-span-7">
        <h3 className="font-serif text-2xl font-black text-white transition-colors duration-200 group-hover:text-[#FFF3E0]">
          {entry.title}
        </h3>

        <p className="mt-2 max-w-2xl font-[JetBrains_Mono] text-sm leading-relaxed text-[#BBAA9A]">
          {entry.excerpt}
        </p>
      </div>

      <div
        className={`font-[JetBrains_Mono] text-xs font-bold transition-all duration-200 group-hover:brightness-125 md:col-span-2 ${getCategoryClass(
          entry.category
        )}`}
      >
        {entry.category}
      </div>

      <div className="font-[JetBrains_Mono] text-xs text-[#8F7A68] transition-colors duration-200 group-hover:text-[#CDB9A5] md:col-span-2 md:text-right">
        {entry.read_time}
      </div>
    </article>
  );
}

export default memo(JournalArchiveEntry);