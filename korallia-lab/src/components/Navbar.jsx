import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItemClass = (path) => {
    const isActive = location.pathname === path;

    return isActive
      ? "text-[#F97316] bg-[#F97316]/5 border-2 border-[#F97316]/40 px-4 py-2 uppercase transition-all shadow-[2px_2px_0px_0px_rgba(249,115,22,0.1)]"
      : "text-slate-400 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 border-2 border-transparent hover:border-[#26221F] px-4 py-2 uppercase transition-all";
  };

  const mobileNavItemClass = (path) => {
    const isActive = location.pathname === path;

    return isActive
      ? "w-full text-left text-[#F97316] bg-[#F97316]/5 border-2 border-[#F97316]/40 px-4 py-3 uppercase transition-all shadow-[2px_2px_0px_0px_rgba(249,115,22,0.1)]"
      : "w-full text-left text-slate-400 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 border-2 border-transparent hover:border-[#26221F] px-4 py-3 uppercase transition-all";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D0F] border-b-4 border-[#26221F] font-[JetBrains_Mono] shadow-[0_4px_35px_rgba(0,0,0,0.95)]">
      <div className="h-20 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => goTo("/")}
            className="text-white font-black text-2xl tracking-tighter uppercase"
          >
            K<span className="text-[#F97316]">_</span>LAB
          </button>

          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 tracking-widest border-l-4 border-[#26221F] pl-6 font-bold">
            <span className="h-2 w-2 bg-[#00E676] shadow-[0_0_10px_#00E676] inline-block animate-pulse" />
            <span className="text-slate-400">SYS_STABLE</span>
            <span className="text-slate-700">//</span>
            <span className="text-[#F59E0B] tracking-[0.2em]">
              CREATIVE_CORE_ACTIVE
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 text-sm lg:text-base font-black tracking-wide">
          <button onClick={() => goTo("/")} className={navItemClass("/")}>
            [ Accueil ]
          </button>


          <button
            onClick={() => goTo("/whoami")}
            className={navItemClass("/whoami")}
          >
            [ WHOAMI ]
          </button>
          
          <button
            onClick={() => goTo("/repertoire")}
            className={navItemClass("/repertoire")}
          >
            [ Répertoire ]
          </button>
          
          <button
            onClick={() => goTo("/journal")}
            className={navItemClass("/journal")}
          >
            [ Journal ]
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen((current) => !current)}
          className="md:hidden border-2 border-[#26221F] px-4 py-2 text-sm font-black uppercase tracking-wide text-slate-400 transition-all hover:border-[#F97316]/40 hover:bg-[#F97316]/5 hover:text-[#F59E0B]"
        >
          {isMenuOpen ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-[#26221F] bg-[#0B0D0F] px-6 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.95)]">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="h-2 w-2 bg-[#00E676] shadow-[0_0_10px_#00E676] inline-block animate-pulse" />
            <span className="text-slate-400">SYS_STABLE</span>
            <span className="text-slate-700">//</span>
            <span className="text-[#F59E0B]">CREATIVE_CORE_ACTIVE</span>
          </div>

          <div className="flex flex-col gap-2 text-sm font-black tracking-wide">
            <button
              onClick={() => goTo("/")}
              className={mobileNavItemClass("/")}
            >
              [ Accueil ]
            </button>
            <button
              onClick={() => goTo("/whoami")}
              className={mobileNavItemClass("/whoami")}
            >
              [ WHOAMI ]
            </button>

            <button
              onClick={() => goTo("/repertoire")}
              className={mobileNavItemClass("/repertoire")}
            >
              [ Répertoire ]
            </button>

           

            <button
              onClick={() => goTo("/journal")}
              className={mobileNavItemClass("/journal")}
            >
              [ Journal ]
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;