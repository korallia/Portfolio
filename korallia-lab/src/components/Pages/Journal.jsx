import ArchivesJournal from "../archivesJournal";
import JournalHero from "./JournalHero";
const Journal = () => {
  

  return (
    <div className="min-h-screen bg-[#0E0D0C] bg-[linear-gradient(to_right,rgba(36,32,30,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,32,30,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] text-slate-200 font-mono selection:bg-orange-500/30 overflow-x-hidden">    
    <JournalHero/>
    <ArchivesJournal/>
    </div>
  );
};

export default Journal;