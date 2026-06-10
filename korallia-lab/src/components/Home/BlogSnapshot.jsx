import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { blogSnapshotContent } from "../../content/home/blogSnapshotContent";
import { useLanguage } from "../../context/useLanguage";

function getLocalizedField(item, field, lang) {
  return item?.[`${field}_${lang}`] ?? item?.[`${field}_fr`] ?? item?.[field] ?? "";
}

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

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/journal/archive`
        );

        if (!response.ok) {
          throw new Error(text.fetchError);
        }

        const data = await response.json();

        if (isMounted) {
          setLatestArticle(data?.[0] || null);
        }
      } catch (err) {
        console.error(err);

        if (isMounted) {
          setArticleError(err.message);
        }
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
  }, [text.fetchError]);

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

  const articleTitle = getLocalizedField(latestArticle, "title", lang);
  const articleExcerpt = getLocalizedField(latestArticle, "excerpt", lang);

  return (
    <section className="min-h-screen w-full bg-[#0E0D0C] flex flex-col justify-center items-center p-6 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.35] pointer-events-none" />

      <div className="max-w-2xl w-full text-center border-t-4 border-b-4 border-[#F97316] py-12 px-6 bg-[#0B0D0F]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative z-10">
        <div className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4 font-[JetBrains_Mono]">
          {text.eyebrow}
        </div>

        <h2 className="font-[Plus_Jakarta_Sans] text-4xl md:text-5xl text-white font-black uppercase tracking-tight mb-6 leading-none">
          {articleTitle}
        </h2>

        <p className="text-slate-300 text-base md:text-lg font-[Inter] leading-relaxed mb-8 italic text-left border-l-2 border-amber-950 pl-4">
          {articleExcerpt}
        </p>

        <button
          type="button"
          onClick={() => navigate(`/journal/${latestArticle.slug}`)}
          className="inline-block font-[JetBrains_Mono] text-sm font-bold text-white bg-[#F97316] hover:bg-white hover:text-black px-8 py-4 uppercase tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
        >
          {text.cta}
        </button>
      </div>
    </section>
  );
}

export default memo(BlogSnapshot);