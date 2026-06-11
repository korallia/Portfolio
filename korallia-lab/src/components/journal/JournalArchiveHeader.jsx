import { memo } from "react";

function JournalArchiveHeader({ text }) {
  return (
    <div className="relative z-10 flex min-w-0 items-start justify-between gap-8 overflow-hidden border-b border-[#26221F] bg-[#0B0D0F] px-5 pb-9 pt-10 md:px-12">
      <div>
        <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#F59E0B]">
          <span>{text.eyebrow}</span>
        </div>

        <h1 className="font-[Plus_Jakarta_Sans] text-[clamp(2.25rem,13vw,4.5rem)] font-black uppercase leading-none tracking-[clamp(0.04em,1.4vw,0.22em)]">
          <span className="bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444] bg-clip-text text-transparent">
            {text.title}
          </span>
          <span className="text-[#F59E0B]">_</span>
        </h1>
      </div>

      <p className="hidden pt-12 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7A68] md:block">
        {text.viewLabel}
      </p>
    </div>
  );
}

export default memo(JournalArchiveHeader);