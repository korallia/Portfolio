import ArchivesJournal from "../ArchivesJournal";
import JournalHero from "../JournalHero";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Journal = () => {
  
const [entries, setEntries] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const location = useLocation();


useEffect(() => {
  const loadArchives = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/journal/archive`)

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des archives.");
      }

      const data = await response.json();
      setEntries(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  loadArchives();
}, []);

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
    <div className="min-h-screen bg-[#0E0D0C] bg-[linear-gradient(to_right,rgba(36,32,30,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,32,30,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] text-slate-200 font-mono selection:bg-orange-500/30 overflow-x-hidden">    
    <JournalHero/>
   <ArchivesJournal entries={entries} loading={loading} error={error} />
    </div>
  );
};

export default Journal;