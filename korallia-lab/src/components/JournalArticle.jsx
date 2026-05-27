import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

function JournalArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(`/api/journal/${slug}`);
        if (!response.ok) throw new Error("Article introuvable.");
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger l’article.");
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [slug]);

  const getCategoryTextColor = (category) => {
    switch (category) {
      case "RECOIL_LOGS": return "text-orange-400";
      case "CREATIVE_CORE": return "text-amber-500";
      case "MAKER_NOTES": return "text-red-400";
      default: return "text-[#F59E0B]";
    }
  };

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-5rem)] bg-[#0E0D0C] flex items-center justify-center p-4 pt-24">
        <div className="border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] p-12 font-[JetBrains_Mono] text-[#F59E0B] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)] uppercase tracking-widest">
          [ LOADING_CORE_DATA... ]
        </div>
      </section>
    );
  }

  if (error || !article) {
    return (
      <section className="min-h-[calc(100vh-5rem)] bg-[#0E0D0C] flex items-center justify-center p-4 pt-24">
        <div className="border-2 border-[#2A211C] border-t-[#EF4444] bg-[#0B0D0F] p-12 shadow-[8px_8px_0px_0px_rgba(239,68,68,0.12)] max-w-md w-full">
          <p className="font-[JetBrains_Mono] text-xs text-[#EF4444] mb-2 uppercase tracking-widest">[ ERROR_LOG_404 ]</p>
          <h1 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-white mb-6 uppercase tracking-tight">Article introuvable ou corrompu.</h1>
          <button
            onClick={() => navigate("/journal")}
            className="font-[JetBrains_Mono] text-xs text-[#F59E0B] border border-[#F59E0B]/40 px-4 py-2 hover:bg-[#F59E0B]/10 transition uppercase tracking-wider"
          >
            ← RETOUR_AUX_ARCHIVES
          </button>
        </div>
      </section>
    );
  }

  const cleanHtml = DOMPurify.sanitize(article.content_html);

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-start justify-center overflow-hidden bg-[#0E0D0C] p-4 md:p-12 pt-28 pb-32 selection:bg-[#F97316]/20 selection:text-white">
      {/* Grille de fond */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35]" />

      {/* CONTAINER PRINCIPAL HORIZONTAL */}
      <div className="relative w-full max-w-4xl border-2 border-[#2A211C] border-t-[#F97316] bg-[#050607] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)] overflow-hidden">
        <div className="absolute -right-2 top-2 h-full w-2 bg-[#3A1F0B]/70 pointer-events-none" />
        <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#3A1F0B]/70 pointer-events-none" />
        
        {/* ================= ZONE EN-TÊTE EN DÉGRADÉ PROGRESSIF ================= */}
        <div className="bg-gradient-to-b from-[#0B0D0F] via-[#0B0D0F] to-[#050607] w-full pb-10 border-b border-[#26221F]/30">
          
          {/* TOP BAR */}
          <div className="relative z-10 px-6 md:px-12 pt-8 pb-6 border-b border-[#26221F]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.14em]">
              <span className="text-[#8F7A68]">[ ID: {article.number} ]</span>
              <span className={getCategoryTextColor(article.category)}>{article.category}</span>
              <span className="text-[#8F7A68]/60 font-normal normal-case italic">{article.read_time}</span>
            </div>

            <button
               onClick={() => navigate("/journal#archives")}
              className="border border-[#F59E0B]/35 bg-[#F59E0B]/5 px-4 py-1.5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B] transition hover:border-[#F97316] hover:bg-[#F97316]/15 hover:text-[#F97316]"
            >
              [ ← ARCHIVES ]
            </button>
          </div>

          {/* EN-TÊTE CENTRÉ */}
          <header className="px-4 md:px-12 pt-14 pb-4 text-center w-full max-w-3xl mx-auto">
            <h1 className="font-[Plus_Jakarta_Sans] text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.02em] leading-[1.1] text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]">
                {article.title}
              </span>
              <span className="text-[#F97316]">_</span>
            </h1>

            {article.excerpt && (
              <p className="mt-9 font-[JetBrains_Mono] text-sm md:text-base font-medium uppercase tracking-wider text-[#A39081] leading-relaxed max-w-2xl mx-auto">
                // {article.excerpt}
              </p>
            )}
          </header>
        </div>

        {/* ================= ZONE DE LECTURE (NOIR ABYSSAL PUR) ================= */}
        <div className="w-full px-4 md:px-12 pt-12 pb-24 flex flex-col items-center">
          
          {/* FLUX DE LECTURE DIRECT */}
          <div className="relative w-full max-w-3xl">
            <div className="journal-article-body">
              <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
            </div>
          </div>

        </div>
      </div>

      {/* STYLES ÉDITORIAUX CORRIGÉS SANS DÉTRUIRE LE O */}
      <style>
        {`
          .journal-article-body {
            font-family: Georgia, Cambria, "Times New Roman", Times, serif;
            font-size: 1.125rem;
            line-height: 1.75;
            color: #E2D5C5; 
            letter-spacing: -0.005em;
          }

          @media (min-width: 768px) {
            .journal-article-body {
              font-size: 1.2rem;
              line-height: 1.8;
            }
          }

          .journal-article-body p {
            margin: 0 0 1.8rem;
            text-align: left;
          }

          /* LE PREMIER PARAGRAPHE GLISSE À GAUCHE SANS CHANGER DE DISPLAY */
          .journal-article-body p:first-of-type {
            float: left;
            margin: 0 0.35rem 0 0; /* Pas de marge en bas pour coller la suite */
            color: #F3EAE0;
          }

          /* LETTRINE PROTO-STABLE (Le O garde sa forme parfaite) */
          .journal-article-body p:first-of-type::first-letter {
            display: inline-block;
            font-family: "Plus Jakarta Sans", sans-serif;
            font-weight: 900;
            color: #F97316;
            font-size: 3.5rem;
            line-height: 1; 
            vertical-align: baseline; 
            margin-right: 0.25rem; 
            text-shadow: 2px 2px 0px rgba(245, 158, 11, 0.15);
          }

          /* LE DEUXIÈME PARAGRAPHE S'ENROULE NATURELLEMENT À LA SUITE */
          .journal-article-body p:first-of-type + p {
            display: block;
            margin-bottom: 1.8rem;
          }

          /* NETTOYAGE : Coupe le float pour que le 3ème paragraphe retourne en dessous normalement */
          .journal-article-body p:first-of-type + p + p {
            clear: both;
          }

          .journal-article-body h2 {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            color: #F8F8F8;
            margin: 4rem 0 1.5rem;
            text-align: left;
          }

          .journal-article-body h2::before {
            content: "// ";
            color: #F97316;
          }

          .journal-article-body h3 {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 1.25rem;
            line-height: 1.3;
            font-weight: 900;
            text-transform: uppercase;
            color: #F59E0B;
            margin: 3rem 0 1.2rem;
            text-align: left;
          }

          .journal-article-body blockquote {
            margin: 3rem 0;
            padding: 0.5rem 1.5rem;
            border-left: 3px solid #F97316;
            font-style: italic;
            color: #F3EAE0;
            text-align: left;
          }

          .journal-article-body img {
            display: block;
            width: 100%;
            border: 2px solid #2A211C;
            background: #050607;
            padding: 0.5rem;
            box-shadow: 6px 6px 0 rgba(249, 115, 22, 0.12);
          }

          .journal-article-body figcaption {
            margin-top: 0.85rem;
            font-family: "JetBrains Mono", monospace;
            font-size: 0.7rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #8F7A68;
            text-align: center;
          }

          .journal-article-body a {
            color: #F97316;
            text-decoration: none;
            border-bottom: 1px dashed rgba(249, 115, 22, 0.5);
            transition: all 0.2s ease;
          }

          .journal-article-body a:hover {
            color: #F59E0B;
            border-bottom: 1px solid #F59E0B;
          }
        `}
      </style>
    </section>
  );
}

export default JournalArticle;