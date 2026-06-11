import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLanguage } from "../../context/language/useLanguage";
import { journalArticleContent } from "../../content/journal/journalArticleContent";
import { getJournalArticleForRoute } from "../../services/journalCache";

import JournalArticleBody from "../journal/article/JournalArticleBody";
import JournalArticleHeader from "../journal/article/JournalArticleHeader";
import JournalArticleShell from "../journal/article/JournalArticleShell";
import JournalArticleState from "../journal/article/JournalArticleState";
import JournalArticleTopBar from "../journal/article/JournalArticleTopBar";

function JournalArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { lang } = useLanguage();
  const text = journalArticleContent[lang] ?? journalArticleContent.fr;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const articleRef = useRef(null);
const loadingDelayRef = useRef(null);

useEffect(() => {
  articleRef.current = article;
}, [article]);

  useEffect(() => {
  let isActive = true;

  const loadArticle = async () => {
    const isInitialLoad = !articleRef.current;

    try {
      setError("");

      if (isInitialLoad) {
        loadingDelayRef.current = setTimeout(() => {
          if (isActive) {
            setLoading(true);
          }
        }, 220);
      }

      const { article: data, resolvedSlug } = await getJournalArticleForRoute(
        lang,
        slug
      );

      if (!isActive) return;

      if (loadingDelayRef.current) {
        clearTimeout(loadingDelayRef.current);
        loadingDelayRef.current = null;
      }

      setArticle(data);
      setLoading(false);

      if (resolvedSlug !== slug) {
        navigate(`/journal/${resolvedSlug}`, { replace: true });
      }
    } catch (err) {
      console.error(err);

      if (!isActive) return;

      if (loadingDelayRef.current) {
        clearTimeout(loadingDelayRef.current);
        loadingDelayRef.current = null;
      }

      setArticle(null);
      setError(err.message);
      setLoading(false);
    }
  };

  loadArticle();

  return () => {
    isActive = false;

    if (loadingDelayRef.current) {
      clearTimeout(loadingDelayRef.current);
      loadingDelayRef.current = null;
    }
  };
}, [lang, slug, navigate]);

  const backToArchives = () => {
    navigate("/journal#archives");
  };

  if (loading) {
    return <JournalArticleState type="loading" text={text} />;
  }

  if (error || !article) {
    return (
      <JournalArticleState
        type="error"
        text={text}
        onBack={() => navigate("/journal")}
      />
    );
  }

  return (
    <JournalArticleShell>
      <div className="w-full border-b border-[#F97316]/25 bg-gradient-to-b from-[#0B0D0F] via-[#0B0D0F] to-[#050607] pb-10 shadow-[0_1px_0_rgba(249,115,22,0.12)]">
        <JournalArticleTopBar
          article={article}
          text={text}
          onBack={backToArchives}
        />

        <JournalArticleHeader article={article} />
      </div>

      <JournalArticleBody html={article.content_html} />
    </JournalArticleShell>
  );
}

export default JournalArticle;