import { memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { navBarContent } from "../../src/content/layout/navBarContent";
import { useLanguage } from "../context/useLanguage";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = navBarContent[lang] ?? navBarContent.fr;

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

  const langButtonClass =
    "border-2 border-[#26221F] px-4 py-2 uppercase transition-all text-slate-400 hover:text-[#00E676] hover:bg-[#00E676]/5 hover:border-[#00E676]/40";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D0F] border-b-4 border-[#26221F] font-[JetBrains_Mono] shadow-[0_4px_35px_rgba(0,0,0,0.95)]">
      <div className="h-20 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => goTo("/")}
            className="text-white font-black text-2xl tracking-tighter uppercase"
          >
            K<span className="text-[#F97316]">_</span>LAB
          </button>

          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 tracking-widest border-l-4 border-[#26221F] pl-6 font-bold">
            <span className="h-2 w-2 bg-[#00E676] shadow-[0_0_10px_#00E676] inline-block animate-pulse" />
            <span className="text-slate-400">{text.status}</span>
            <span className="text-slate-700">//</span>
            <span className="text-[#F59E0B] tracking-[0.2em]">
              {text.core}
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 text-sm lg:text-base font-black tracking-wide">
          <button type="button" onClick={() => goTo("/")} className={navItemClass("/")}>
            {text.home}
          </button>

          <button
            type="button"
            onClick={() => goTo("/whoami")}
            className={navItemClass("/whoami")}
          >
            {text.whoami}
          </button>

          <button
            type="button"
            onClick={() => goTo("/repertoire")}
            className={navItemClass("/repertoire")}
          >
            {text.repertoire}
          </button>

          <button
            type="button"
            onClick={() => goTo("/journal")}
            className={navItemClass("/journal")}
          >
            {text.journal}
          </button>

          <button
            type="button"
            onClick={toggleLang}
            aria-label={text.langLabel}
            className={langButtonClass}
          >
            {text.langButton}
          </button>
        </div>

        {/* MOBILE MENU BUTTONS */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={text.langLabel}
            className="border-2 border-[#26221F] px-3 py-2 text-sm font-black uppercase tracking-wide text-slate-400 transition-all hover:border-[#00E676]/40 hover:bg-[#00E676]/5 hover:text-[#00E676]"
          >
            {text.langButton}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="border-2 border-[#26221F] px-4 py-2 text-sm font-black uppercase tracking-wide text-slate-400 transition-all hover:border-[#F97316]/40 hover:bg-[#F97316]/5 hover:text-[#F59E0B]"
          >
            {isMenuOpen ? text.menuClose : text.menuOpen}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-[#26221F] bg-[#0B0D0F] px-6 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.95)]">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="h-2 w-2 bg-[#00E676] shadow-[0_0_10px_#00E676] inline-block animate-pulse" />
            <span className="text-slate-400">{text.status}</span>
            <span className="text-slate-700">//</span>
            <span className="text-[#F59E0B]">{text.core}</span>
          </div>

          <div className="flex flex-col gap-2 text-sm font-black tracking-wide">
            <button
              type="button"
              onClick={() => goTo("/")}
              className={mobileNavItemClass("/")}
            >
              {text.home}
            </button>

            <button
              type="button"
              onClick={() => goTo("/whoami")}
              className={mobileNavItemClass("/whoami")}
            >
              {text.whoami}
            </button>

            <button
              type="button"
              onClick={() => goTo("/repertoire")}
              className={mobileNavItemClass("/repertoire")}
            >
              {text.repertoire}
            </button>

            <button
              type="button"
              onClick={() => goTo("/journal")}
              className={mobileNavItemClass("/journal")}
            >
              {text.journal}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default memo(NavBar);