import ArchivesJournal from "../journal/ArchivesJournal";
import JournalHero from "../journal/JournalHero";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useLanguage } from "../../context/language/useLanguage";
import { getJournalArchive } from "../../services/journalCache";

const Journal = () => {
  const { lang } = useLanguage();
  const location = useLocation();

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  let isActive = true;

  const loadArchives = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getJournalArchive(lang);

      if (!isActive) return;

      setEntries(data);
    } catch (err) {
      console.error(err);

      if (!isActive) return;

      setEntries([]);
      setError(err.message);
    } finally {
      if (isActive) {
        setLoading(false);
      }
    }
  };

  loadArchives();

  return () => {
    isActive = false;
  };
}, [lang]);

  useEffect(() => {
    if (location.hash === "#archives") {
      setTimeout(() => {
        const section = document.getElementById("archives");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0E0D0C] bg-[linear-gradient(to_right,rgba(36,32,30,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,32,30,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] font-mono text-slate-200 selection:bg-orange-500/30">
      <JournalHero />

      <ArchivesJournal entries={entries} loading={loading} error={error} />
    </div>
  );
};

export default Journal;