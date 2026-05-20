
    function SideQuest() {

        const sideQuests = [
            {
            title: "HARDWARE & MAKER",
            text: "PCB, électronique embarquée, microcontrôleurs et prototypes physiques.",
            },
            {
            title: "FICTION, WORLDBUILDING & RPG",
            text: "Écriture, création d’univers, personnages, mythologies personnelles et structures narratives.",
            },
        ];
    return (
        <div className="bg-[#050407] border border-[#26221F]/70 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.65)] w-full max-w-2xl">
            <div className="border-b border-[#2B2030]/70 px-4 py-2 bg-[#09070C] flex justify-between items-center">
                <span className="text-xs font-bold text-purple-400">
                [ ~/side-quests ]
                </span>

                <span className="text-[9px] text-purple-400 border border-[#2B2030]/70 px-2 py-0.5 select-none cursor-default">
                OPTIONAL
                </span>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] md:text-xs font-mono">
                {sideQuests.map((quest) => (
                <div
                    key={quest.title}
                    className="border-l border-purple-900/40 pl-3"
                >
                    <p className="text-purple-300 font-bold tracking-wide mb-1">
                    ○ {quest.title}
                    </p>

                    <p className="text-slate-600 leading-relaxed">
                    {quest.text}
                    </p>
                </div>
             ))}
            </div>
        </div>

  )
}

export default SideQuest