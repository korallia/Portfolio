import { memo } from "react";

function TerminalButton({ children, onClick, full = false }) {
  const baseClass =
    "border border-[#00E676]/70 bg-[#00E676]/5 px-4 py-2 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.14em] text-[#00E676] transition hover:bg-[#00E676]/10 hover:shadow-[0_0_12px_rgba(0,230,118,0.18)] md:text-[11px]";

  const fullClass = full
    ? "w-full border-2 py-3 text-left text-xs tracking-[0.12em]"
    : "w-fit";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${fullClass}`}
    >
      {children}
    </button>
  );
}

export default memo(TerminalButton);