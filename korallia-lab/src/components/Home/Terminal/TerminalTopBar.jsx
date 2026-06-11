import { memo } from "react";

import TerminalButton from "./TerminalButton";

function TerminalTopBar({ label, buttonLabel, onOpenDirectory }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-4 border-[#00E676] bg-[#0B0D0F] p-4 font-[JetBrains_Mono] shadow-[4px_4px_0px_0px_rgba(0,230,118,0.2)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="inline-block h-4 w-4 shrink-0 bg-[#00E676] shadow-[0_0_15px_#00E676]" />

        <span className="text-sm font-black uppercase tracking-[0.16em] text-[#00E676] md:text-base md:tracking-[0.18em]">
          {label}
        </span>
      </div>

      <TerminalButton onClick={onOpenDirectory}>{buttonLabel}</TerminalButton>
    </div>
  );
}

export default memo(TerminalTopBar);