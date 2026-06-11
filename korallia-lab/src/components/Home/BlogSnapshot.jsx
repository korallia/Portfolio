import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { blogSnapshotContent } from "../../content/home/blogSnapshotContent";
import { useLanguage } from "../../context/language/useLanguage";
import { getJournalArchive } from "../../services/journalCache";

function BlogSnapshot() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const text = blogSnapshotContent[lang] ?? blogSnapshotContent.fr;

  const [latestArticle, setLatestArticle] = useState(null);
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);
  const [articleError, setArticleError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadLatestArticle = async () => {
      try {
        setIsLoadingArticle(true);
        setArticleError(null);

        const data = await getJournalArchive(lang);

        if (!isMounted) return;

        setLatestArticle(data?.[0] || null);
      } catch (err) {
        console.error(err);

        if (!isMounted) return;

        setLatestArticle(null);
        setArticleError(err.message);
      } finally {
        if (isMounted) {
          setIsLoadingArticle(false);
        }
      }
    };

    loadLatestArticle();

    return () => {
      isMounted = false;
    };
  }, [lang]);

  if (isLoadingArticle) {
    return (
      <section className="border border-[#26221F]/80 bg-[#0B0D0F] p-5">
        <p className="font-[JetBrains_Mono] text-xs uppercase tracking-[0.16em] text-[#00E676]">
          {text.loading}
        </p>
      </section>
    );
  }

  if (articleError || !latestArticle) {
    return (
      <section className="border border-[#26221F]/80 bg-[#0B0D0F] p-5">
        <p className="font-[JetBrains_Mono] text-xs uppercase tracking-[0.16em] text-[#8F7A68]">
          {text.empty}
        </p>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#0E0D0C] p-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.35]" />

      <div className="relative z-10 w-full max-w-2xl border-t-4 border-b-4 border-[#F97316] bg-[#0B0D0F]/95 px-6 py-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="mb-4 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          {text.eyebrow}
        </div>

        <h2 className="mb-6 font-[Plus_Jakarta_Sans] text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
          {latestArticle.title}
        </h2>

        <p className="mb-8 border-l-2 border-amber-950 pl-4 text-left font-[Inter] text-base italic leading-relaxed text-slate-300 md:text-lg">
          {latestArticle.excerpt}
        </p>

        <button
          type="button"
          onClick={() => navigate(`/journal/${latestArticle.slug}`)}
          className="inline-block bg-[#F97316] px-8 py-4 font-[JetBrains_Mono] text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-black hover:shadow-none"
        >
          {text.cta}
        </button>
      </div>
    </section>
  );
}

export default memo(BlogSnapshot);