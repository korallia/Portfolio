import { memo } from "react";

function RepertoireHeader({ text }) {
  return (
    <header className="relative z-10 flex min-w-0 items-start justify-between gap-8 overflow-hidden border-b border-[#26221F]/60 bg-[#0B0D0F] px-5 pb-9 pt-10 md:px-12">
      <div className="min-w-0">
        <div className="mb-5 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#00E676]">
          <span>{text.eyebrow}</span>
        </div>

        <h1 className="max-w-full font-[Plus_Jakarta_Sans] text-[clamp(2.2rem,10vw,4.5rem)] font-black uppercase leading-none tracking-[clamp(0.04em,1.1vw,0.22em)] text-[#E8EFEA]">
          <span>{text.title}</span>
          <span className="text-[#00E676]">_</span>
        </h1>

        <p className="mt-6 max-w-2xl font-[Inter] text-[16px] leading-7 text-[#BBAA9A] md:text-[20px]">
          {text.description}
        </p>
      </div>

      <p className="hidden shrink-0 pt-12 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7A68] md:block">
        {text.viewLabel}
      </p>
    </header>
  );
}

export default memo(RepertoireHeader);