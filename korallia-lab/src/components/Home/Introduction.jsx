import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { introductionContent } from "../../content/home/introductionContent";
import { useLanguage } from "../../context/language/useLanguage";

function Introduction() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const text = introductionContent[lang] ?? introductionContent.fr;


  return (
    <section
      onClick={() => navigate("/whoami")}
      className="min-h-[calc(100vh-5rem)] w-full bg-[#0E0D0C] flex items-center justify-center px-4 py-8 md:p-12 relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-[0.35] pointer-events-none" />

      <div className="max-w-5xl w-full border-2 md:border-4 border-[#F97316] bg-[#0B0D0F] px-5 py-8 sm:p-8 md:p-16 shadow-[6px_6px_0px_0px_rgba(249,115,22,0.15)] md:shadow-[8px_8px_0px_0px_rgba(249,115,22,0.15)] relative z-10">
        <div className="flex items-center gap-2 text-[0.65rem] sm:text-xs font-[JetBrains_Mono] text-[#F59E0B] tracking-widest uppercase mb-4">
          <span>{text.id}</span>
        </div>

        <h1 className="font-[Plus_Jakarta_Sans] text-[3.8rem] sm:text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.85] mb-6 uppercase">
          {text.name}
          <span className="text-[#F97316]">_</span>
        </h1>

       <p className="font-[Plus_Jakarta_Sans] text-[1.8rem] sm:text-3xl md:text-5xl text-white font-black leading-[0.95] tracking-tight mb-8 uppercase">
  {text.lineStart}{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
    {text.highlightOne}
  </span>{" "}
  {text.middle}{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
    {text.highlightTwo}
  </span>
  .
</p>

        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl leading-[1.75] font-[Inter] border-l-4 border-amber-950/80 pl-4 sm:pl-6 my-8">
         {text.bodyOne}
          <br />
          <br className="sm:hidden" />
          {text.bodyTwo}
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm font-[JetBrains_Mono] text-[#F59E0B] font-bold tracking-wider">
          <span className="w-fit bg-[#F59E0B]/10 px-3 py-1 border border-[#F59E0B]/30 animate-pulse">
            {text.status}
          </span>
          <span>{text.scroll}</span>
        </div>
      </div>
    </section>
  );
}

export default memo(Introduction);