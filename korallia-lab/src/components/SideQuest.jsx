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
    <div className="group bg-[#020304]/85 border border-[#26221F] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.55)] w-full overflow-hidden transition-all duration-200 hover:border-[#3A302B]">
      <div className="border-b border-[#26221F] px-4 py-2 bg-[#0B0D0F]/90 flex justify-between items-center select-none min-h-[36px]">
        <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-300 transition-colors">
          [ ~/side-quests ]
        </span>

        <span className="text-[9px] text-slate-600 font-bold tracking-wide select-none cursor-default group-hover:text-slate-500 transition-colors">
          [ SIDE_LOG ]
        </span>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px] md:text-[11px] font-mono">
        {sideQuests.map((quest) => (
          <div
            key={quest.title}
            className="relative border border-fuchsia-950/35 bg-fuchsia-950/[0.015] p-3 pl-4 transition-all duration-200 group-hover:border-fuchsia-900/60 group-hover:bg-fuchsia-950/[0.035]"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-fuchsia-400/20 transition-all duration-200 group-hover:bg-fuchsia-400/40" />

            <p className="text-fuchsia-400/65 font-bold tracking-wide mb-1.5 transition-colors duration-200 group-hover:text-fuchsia-400/90">
              ○ {quest.title}
            </p>

            <p className="text-slate-600 leading-relaxed transition-colors duration-200 group-hover:text-slate-400">
              {quest.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideQuest;