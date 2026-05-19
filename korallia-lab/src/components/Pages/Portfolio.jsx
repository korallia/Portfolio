import { useState, } from "react";

import WhoamiTerminal from "../WhoamiTerminal";
import TechStack from "../TechStack";
import SideQuest from "../SideQuest";
import ExperienceBuilds from "../ExperienceBuilds";
import CVConsoleModal from "../CVConsoleModal";
const Portfolio = () => {
   const [isCvConsoleOpen, setIsCvConsoleOpen] = useState(false);
   const [cvConsoleLines, setCvConsoleLines] = useState([]);

  return (
    <div className="min-h-screen w-full bg-[#0E0D0C] bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] text-slate-300 p-4 md:p-12 font-mono selection:bg-[#F97316]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <WhoamiTerminal/>
          <SideQuest/>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <TechStack/>
          <ExperienceBuilds setCvConsoleOpen = {setIsCvConsoleOpen}/>
          <CVConsoleModal
            isCvConsoleOpen={isCvConsoleOpen}
            setCvConsoleLines={setCvConsoleLines}
            cvConsoleLines={cvConsoleLines}
            setIsCvConsoleOpen={setIsCvConsoleOpen}
          />
        </div> 
      </div>
    </div>


     
  );
};

export default Portfolio;