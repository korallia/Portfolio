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
    <div className="bg-[#020304] border-2 border-[#26221F] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)] w-full overflow-hidden">
      <div className="border-b-2 border-[#26221F] px-4 py-2 bg-[#0B0D0F] flex justify-between items-center select-none min-h-[38px]">
        <span className="text-xs font-bold text-slate-300">
          [ ~/side-quests ]
        </span>

        <span className="text-[10px] text-slate-400 font-bold tracking-wide select-none cursor-default">
          [ SIDE_LOG ]
        </span>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] md:text-xs font-mono">
        {sideQuests.map((quest) => (
          <div
            key={quest.title}
            className="relative border border-fuchsia-950/60 bg-fuchsia-950/[0.035] p-4 pl-5"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-fuchsia-400/30" />

            <p className="text-fuchsia-400/80 font-bold tracking-wide mb-2">
  ○ {quest.title}
</p>
            <p className="text-slate-300 leading-relaxed">
              {quest.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideQuest;