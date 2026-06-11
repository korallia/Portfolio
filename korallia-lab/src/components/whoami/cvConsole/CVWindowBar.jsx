import { memo } from "react";

function CVWindowBar({ title, closeLabel, onClose }) {
  return (
    <div className="flex items-center justify-between border-b border-[#F97316]/45 bg-[#14100D] px-4 py-2">
      <span className="font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.14em] text-[#F59E0B]">
        {title}
      </span>

      <button
        type="button"
        onClick={onClose}
        className="cursor-pointer select-none border border-[#DC2626]/80 bg-[#7F1D1D]/35 px-3 py-1 font-[JetBrains_Mono] text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B6B] shadow-[2px_2px_0px_0px_rgba(127,29,29,0.35)] transition-all hover:border-[#EF4444] hover:bg-[#991B1B]/55 hover:text-[#FECACA]"
      >
        {closeLabel}
      </button>
    </div>
  );
}

export default memo(CVWindowBar);