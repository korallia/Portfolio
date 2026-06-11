import { memo } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { journalHeroContent } from "../../content/journal/journalHeroContent";

function GradientWord({ children }) {
  return (
    <span className="bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function JournalHero() {
  const { lang } = useLanguage();
  const text = journalHeroContent[lang] ?? journalHeroContent.fr;

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-[#0E0D0C] p-4 md:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35]" />

      <div className="relative z-10 w-full max-w-5xl border-4 border-[#F97316] bg-[#0B0D0F] p-8 shadow-[8px_8px_0px_0px_rgba(249,115,22,0.15)] md:p-16">
        <div className="mb-4 flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#F59E0B]">
          <span>{text.eyebrow}</span>
        </div>

        <h1 className="mb-6 font-[Plus_Jakarta_Sans] text-6xl font-extrabold uppercase tracking-tighter text-white md:text-8xl">
          {text.title}
          <span className="text-[#F97316]">_</span>
        </h1>

        <p className="mb-8 max-w-4xl font-[Plus_Jakarta_Sans] text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
          {text.headlineBeforeCode} <GradientWord>{text.codeWord}</GradientWord>{" "}
          {text.headlineMiddle}{" "}
          <GradientWord>{text.systemsWord}</GradientWord>.
        </p>

        <p className="ml-0 mt-8 mb-10 max-w-4xl border-l-4 border-[#F97316]/45 pl-6 font-[Inter] text-lg leading-relaxed text-slate-300 md:ml-1 md:text-xl">
          {text.description}
        </p>

        <div className="mt-12 flex items-center gap-3 font-[JetBrains_Mono] text-sm font-bold tracking-wider text-[#F59E0B]">
          <span className="animate-pulse border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1">
            {text.status}
          </span>
          <span>{text.scrollHint}</span>
        </div>
      </div>
    </section>
  );
}

export default memo(JournalHero);