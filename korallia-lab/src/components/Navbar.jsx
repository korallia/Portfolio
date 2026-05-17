
function NavBar() {
  return (
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#0B0D0F] border-b-4 border-[#26221F] z-50 font-[JetBrains_Mono] px-6 md:px-16 flex items-center justify-between shadow-[0_4px_35px_rgba(0,0,0,0.95)]">
        
        <div className="flex items-center gap-8">
          <div className="text-white font-black text-2xl tracking-tighter uppercase">
            K<span className="text-[#F97316]">_</span>LAB
          </div>
          
          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 tracking-widest border-l-4 border-[#26221F] pl-6 font-bold">
            <span className="h-2 w-2 bg-[#00E676] shadow-[0_0_10px_#00E676] inline-block animate-pulse"></span>
            <span className="text-slate-400">SYS_STABLE</span>
            <span className="text-slate-700">//</span>
            <span className="text-[#F59E0B] tracking-[0.2em]">CREATIVE_CORE_ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base font-black tracking-wide">
          <a href="#" className="text-[#F97316] bg-[#F97316]/5 border-2 border-[#F97316]/40 px-4 py-2 uppercase transition-all shadow-[2px_2px_0px_0px_rgba(249,115,22,0.1)]">
            [ Accueil ]
          </a>
          <a href="#" className="text-slate-400 hover:text-[#00E676] hover:bg-[#00E676]/5 border-2 border-transparent hover:border-[#26221F] px-4 py-2 uppercase transition-all">
            [ Répertoire ]
          </a>
          <a href="#" className="text-slate-400 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 border-2 border-transparent hover:border-[#26221F] px-4 py-2 uppercase transition-all">
            [ Journal ]
          </a>
        </div>
      </nav>
  )
}

export default NavBar