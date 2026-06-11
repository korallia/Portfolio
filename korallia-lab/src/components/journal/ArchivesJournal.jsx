import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../../context/language/useLanguage";
import { journalArchiveContent } from "../../content/journal/journalArchiveContent";

import JournalArchiveEntry from "./JournalArchiveEntry";
import JournalArchiveHeader from "./JournalArchiveHeader";
import JournalArchiveState from "./JournalArchiveState";

function ArchivesJournal({ entries = [], loading, error }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const text = journalArchiveContent[lang] ?? journalArchiveContent.fr;

  const openEntry = useCallback(
    (slug) => {
      navigate(`/journal/${slug}`);
    },
    [navigate]
  );

  if (loading) {
    return <JournalArchiveState type="loading" text={text} />;
  }

  if (error) {
    return <JournalArchiveState type="error" text={text} error={error} />;
  }

  return (
    <section
      id="archives"
      className="relative left-1/2 mt-10 mb-32 w-[calc(100vw-2rem)] -translate-x-1/2 sm:w-[min(78rem,calc(100vw-4rem))]"
    >
      <div className="relative border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
        <div className="absolute -right-2 top-2 h-full w-2 bg-[#3A1F0B]/70" />
        <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#3A1F0B]/70" />

        <JournalArchiveHeader text={text} />

        <div className="relative z-10 bg-[#050607]/65 pb-2">
          {entries.map((entry) => (
            <JournalArchiveEntry
              key={entry.slug}
              entry={entry}
              onOpenEntry={openEntry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ArchivesJournal);