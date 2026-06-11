import { useState } from "react";

import WhoamiTerminal from "../whoami/WhoamiTerminal";
import TechStack from "../whoami/TechStack";
import SideQuest from "../whoami/SideQuest";
import ExperienceBuilds from "../whoami/ExperienceBuilds";
import CVConsoleModal from "../whoami/CVConsoleModal";

const Portfolio = () => {
  const [isCvConsoleOpen, setIsCvConsoleOpen] = useState(false);
  const [cvConsoleLines, setCvConsoleLines] = useState([]);

  return (
    <div className="min-h-screen w-full bg-[#0E0D0C] bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] text-slate-300 p-4 md:p-12 font-mono selection:bg-[#F97316]/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start pt-6">
        
        <div className="lg:col-span-7 flex flex-col gap-8">
          <WhoamiTerminal />

          <div className="lg:max-w-[92%]">
            <SideQuest />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-14">
          <TechStack />

          <div className="lg:mt-2">
            <ExperienceBuilds setCvConsoleOpen={setIsCvConsoleOpen} />
          </div>

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