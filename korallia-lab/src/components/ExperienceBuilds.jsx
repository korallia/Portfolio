
    function ExperienceBuilds( {setCvConsoleOpen}) {

        const experienceBuilds = [
        {
        key: "PANASSOR",
        color: "text-orange-400 border-orange-500/30",
        text: "co-founder · CTO · product strategy · ops · e-commerce · production systems",
        },
        {
        key: "PHOENIX_GN",
        color: "text-cyan-400 border-cyan-500/30",
        text: "frontend modernization · UX structure · custom portal rebuild",
        },
        {
        key: "BLAX",
        color: "text-green-400 border-green-500/30",
        text: "full-stack development · debugging · releases · product reliability",
        },
        {
        key: "MICRO_FOCUS",
        color: "text-slate-300 border-slate-500/30",
        text: "enterprise Java · software maintenance · technical use cases",
        },
    ];
  return (
        <div className="bg-[#020304] border-2 border-[#26221F] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]">
            <div className="border-b-2 border-[#26221F] px-4 py-2 bg-[#0B0D0F] flex justify-between items-center">
              <span className="text-xs font-bold">[ /var/log/experience_builds ]</span>
                <button
                    onClick={() => setCvConsoleOpen(true)}
                    className="text-[12px] text-orange-400 border border-orange-500/50 bg-orange-500/5 px-2 py-0.5 hover:bg-orange-500/15 hover:border-orange-400 transition-all font-bold cursor-pointer shadow-[2px_2px_0px_0px_rgba(249,115,22,0.08)] flex items-center h-full"
                >
                    ./RUN_CV.sh
                </button>
            </div>

            <div className="p-5 space-y-3 text-[10px] md:text-xs font-mono">
              {experienceBuilds.map((item) => (
                <div
                  key={item.key}
                  className={`grid grid-cols-[95px_1fr] gap-3 border-l pl-3 ${item.color}`}
                >
                  <span className="font-bold">{item.key}</span>
                  <span className="text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
        </div>
  )
}

export default ExperienceBuilds