
function TerminalSnapshot() {
  return (
             <section className="min-h-screen w-full bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] flex flex-col justify-center p-4 md:p-16 border-t-4 border-b-4 border-[#24201E]">
          <div className="w-full max-w-6xl mx-auto">
            
            <div className="flex items-center justify-between border-4 border-[#00E676] bg-[#0B0D0F] p-4 mb-8 font-[JetBrains_Mono] shadow-[4px_4px_0px_0px_rgba(0,230,118,0.2)]">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-none bg-[#00E676] shadow-[0_0_15px_#00E676] inline-block animate-pulse"></span>
                <span className="text-[#00E676] text-base font-black tracking-widest">⚡ ENGINE::RUNNING_PROJEKTS</span>
              </div>
              <div className="text-xs text-[#00E676]/60 font-bold hidden md:block">
                CORE_LOAD: ACTIVE
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-[JetBrains_Mono]">
              
              <div className="lg:col-span-5 bg-[#0B0D0F] border-2 border-[#26221F] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                <div>
                  <span className="text-xs text-slate-500 block mb-2">// INTERFACE_NAME</span>
                  <h2 className="text-white text-3xl font-black tracking-tighter mb-4 uppercase">Custom_Git_Manager</h2>
                  <p className="text-slate-400 text-sm font-[Inter] leading-relaxed">
                    Bâtir un gestionnaire de version maison ultra-léger pour court-circuiter l'affichage standard de Git et visualiser le code en temps réel.
                  </p>
                </div>
                
                <div className="mt-8 lg:mt-0 border-t-2 border-dashed border-[#26221F] pt-6">
                  <div className="text-xs text-[#00E676] font-bold mb-2">⚡ OBSTACLE_TECHNIQUE:</div>
                  <div className="text-[#00E676] text-sm bg-[#00E676]/5 border-2 border-[#00E676] p-3 font-bold">
                    ↳ CRITICAL: Optimiser l'asynchronisme du Diff-Viewer pour les gros volumes de données.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#020304] border-4 border-[#26221F] p-6 text-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E676]/10 animate-pulse"></div>
                
                <div className="flex justify-between items-center border-b-2 border-[#26221F] pb-3 mb-4 text-slate-500 text-xs font-bold">
                  <span>STREAMING_COMMITS // MAIN_BRANCH</span>
                  <span className="text-[#00E676]">ONLINE</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start bg-[#00E676]/5 p-2 border-l-4 border-[#00E676]">
                    <span className="text-[#00E676] font-bold">▶</span>
                    <div>
                      <div className="text-white font-bold">commit_fa89c: "Optimisé le parser de différentiels"</div>
                      <div className="text-[#A7F3D0] text-xs mt-1 font-bold">Modifié: src/diff-viewer.ts (+42, -12)</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start opacity-70 pl-3">
                    <span className="text-slate-600">○</span>
                    <div>
                      <div className="text-[#A7F3D0]/80">commit_bd412: "Fix du memory leak sur le rafraîchissement"</div>
                      <div className="text-slate-500 text-xs mt-1">Modifié: src/hooks/useData.ts (+8, -2)</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start opacity-40 pl-3">
                    <span className="text-slate-700">○</span>
                    <div>
                      <div className="text-[#A7F3D0]/60">commit_90e1a: "Initialisation de la structure du projet"</div>
                      <div className="text-slate-600 text-xs mt-1">Créé: architecture_globale.md</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex items-center gap-2 text-xs text-[#00E676]">
                    <span className="font-bold">korallia-lab@system:~$ </span>
                    <span className="w-3 h-5 bg-[#00E676] inline-block animate-ping shadow-[0_0_10px_#00E676]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default TerminalSnapshot