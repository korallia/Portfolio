import { memo } from "react";

function JournalArticleHeader({ article }) {
  return (
    <header className="mx-auto w-full max-w-3xl px-4 pt-14 pb-4 text-center md:px-12">
      <h1 className="font-[Plus_Jakarta_Sans] text-3xl font-black uppercase leading-[1.1] tracking-[0.02em] text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444] bg-clip-text text-transparent">
          {article.title}
        </span>
        <span className="text-[#F97316]">_</span>
      </h1>

      {article.excerpt && (
        <p className="mx-auto mt-9 max-w-2xl font-[JetBrains_Mono] text-sm font-medium uppercase leading-relaxed tracking-wider text-[#A39081] md:text-base">
          // {article.excerpt}
        </p>
      )}
    </header>
  );
}

export default memo(JournalArticleHeader);