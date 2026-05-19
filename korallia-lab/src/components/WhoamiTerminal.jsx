import { useState } from "react";
  function WhoamiTerminal() {
      const panassorDetails = [
        {
          title: "UNIQUE LARP GEAR & KITS",
          text: "Création d'équipements et trousses uniques pour les archétypes de Grandeur Nature sous-représentés : chirurgiens, tortionnaires, alchimistes.",
        },
        {
          title: "MOLDING & PRODUCTION PIPELINE",
          text: "Maîtrise des techniques de moulage et gestion complète de la chaîne de production physique, du lab jusqu'au stock final.",
        },
        {
          title: "STARTUP OPS & E-COMMERCE",
          text: "Gestion globale d’une jeune entreprise, incluant l'administration, le développement et la maintenance de l'infrastructure de vente en ligne.",
        },
      ];
        const [isEnvExpanded, setIsEnvExpanded] = useState(false);
        const [isPanassorExpanded, setIsPanassorExpanded] = useState(false);
  return (
          <div className="bg-[#0B0D0F] border-4 border-[#F97316] shadow-[6px_6px_0px_0px_rgba(249,115,22,0.15)] overflow-hidden">

            {/* TOP BAR */}
            <div className="bg-[#24201E] border-b-2 border-[#F97316] px-4 py-2 flex items-center justify-between text-xs text-[#F59E0B] font-bold">
              <span>~/korallia-lab $ whoami</span>

              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/40" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <span className="h-2 w-2 rounded-full bg-green-500/40" />
              </div>
            </div>

            {/* TERMINAL BODY */}
            <div className="p-6 space-y-5 text-sm md:text-base">

              {/* OPERATOR */}
              <div className="flex gap-3">
                <span className="text-[#F97316]">▶</span>
                <p>
                  <span className="text-white font-bold">OPERATOR:</span>{" "}
                  Korallia Frenette_
                </p>
              </div>

              {/* CORE STACK */}
              <div className="flex gap-3">
                <span className="text-[#F97316]">▶</span>
                <p>
                  <span className="text-white font-bold">CORE_STACK:</span>{" "}
                  Full-Stack Dev // Entrepreneur // Maker
                </p>
              </div>

              {/* ENV SECTION */}
              <div className="pt-2 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">ENV:</span>

                  <button
                    onClick={() => setIsEnvExpanded(!isEnvExpanded)}
                    className="text-[10px] bg-amber-500/10 border border-amber-500/40 px-2 py-0.5 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400/70 transition-all font-bold cursor-pointer select-none shadow-[2px_2px_0px_0px_rgba(245,158,11,0.08)]"
                  >
                    {isEnvExpanded ? "[-] HIDE_ENV" : "[+] LOAD_ENV"}
                  </button>
                </div>

                {isEnvExpanded && (
                  <div className="mt-3 pl-4 space-y-4 border-l border-amber-500/20 animate-in slide-in-from-top-2 duration-200">

                    {/* FULL STACK ENV */}
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">↳</span>
                      <p className="leading-relaxed">
                        <span className="text-blue-400 font-bold">FULL_STACK_DEV=</span>
                        <span className="text-orange-300">
                          "idées brutes, trop d’onglets ouverts, pseudo-code et intuition logique"
                        </span>
                      </p>
                    </div>

                    {/* ENTREPRENEUR ENV */}
                    <div className="group">
                      <div
                        onClick={() => setIsPanassorExpanded(!isPanassorExpanded)}
                        className="cursor-pointer flex items-start gap-2 text-orange-300 hover:text-white transition-colors"
                      >
                        <span className="text-blue-400 font-bold">↳</span>

                        <p className="leading-relaxed">
                          <span className="text-blue-400 font-bold">ENTREPRENEUR=</span>
                          <span>"Co-fondatrice @ </span>

                          <a
                            href="https://www.panassor.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F97316] font-bold hover:underline"
                            onClick={(event) => event.stopPropagation()}
                          >
                            panassor.ca | Kits Médiévaux Uniques↗
                          </a>

                          <span>"</span>

                          <span className="ml-2 text-[15px] text-green-600 group-hover:text-green-400 font-bold">
                            [{isPanassorExpanded ? "-" : "+"}]
                          </span>
                        </p>
                      </div>

                      {isPanassorExpanded && (
                        <div className="mt-2 ml-6 p-4 bg-[#020304] border border-green-500/30 text-xs text-slate-400 animate-in slide-in-from-top-2 duration-150">
                          <ul className="space-y-4 text-sm">
                            {panassorDetails.map((item) => (
                              <li key={item.title} className="flex gap-3 items-start">
                                <span className="text-[#F97316] font-bold">↳</span>

                                <div>
                                  <span className="text-white font-bold block mb-1">
                                    {item.title}
                                  </span>
                                  <span className="text-slate-400 text-xs">
                                    {item.text}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* MAKER ENV */}
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">↳</span>
                      <p className="leading-relaxed">
                        <span className="text-blue-400 font-bold">MAKER=</span>
                        <span className="text-orange-300">
                          "esprit ingénieur, microcontrôleurs, schémas, circuits et PCB"
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* PHILOSOPHY */}
              <div className="flex gap-3 pt-2">
                <span className="text-[#F97316]">▶</span>
                <p>
                  <span className="text-white font-bold">PHILOSOPHY:</span>{" "}
                  Aucune séparation entre l’imaginaire et la structure.
                  <br />
                  La créativité ouvre la vision, la structure donne le comment,
                  <br />
                  puis l’ingéniosité fait tenir l’ensemble.
                </p>
              </div>

              {/* TARGET */}
              <div className="flex gap-3 pt-2">
                <span className="text-[#F97316]">▶</span>
                <p>
                  <span className="text-white font-bold">TARGET:</span>{" "}
                  donner vie aux idées créatives et faire tenir les systèmes qui les rendent possibles
                </p>
              </div>

              {/* STATUS */}
              <div className="pt-4 border-t border-[#26221F] text-xs text-green-400/70 select-none cursor-default">
              <div className="flex items-center gap-2 animate-[pulse_2.8s_ease-in-out_infinite]">
                <span className="h-2 w-2 bg-green-500 rounded-none inline-block" />
                <span>SYS_STATUS: ACTIVE // COMPILE_SUCCESSFUL</span>
              </div>
            </div>
            </div>
          </div>
  )
}

export default WhoamiTerminal