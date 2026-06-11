import { memo, useState } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { whoamiTerminalContent } from "../../content/whoami/whoamiTerminalContent";

function TerminalLine({ label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[#F97316]">$</span>

      <p>
        <span className="font-bold text-[#F3E7D0]">{label}</span>{" "}
        {children}
      </p>
    </div>
  );
}

function EnvItem({ item }) {
  return (
    <div className="flex items-start gap-2 py-3">
      <span className="font-bold text-[#C97A2B]">↳</span>

      <p className="leading-relaxed">
        <span className="font-bold text-[#C97A2B]">{item.key}=</span>

        {item.link ? (
          <>
            <span className="text-slate-300">"{item.value}</span>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FFB86B] underline decoration-[#F97316]/70 underline-offset-4 transition-colors hover:text-[#FFD08A] hover:decoration-[#FFD08A]"
            >
              {item.linkLabel}
            </a>

            <span className="text-slate-300">"</span>
          </>
        ) : (
          <span className="text-slate-300">"{item.value}"</span>
        )}
      </p>
    </div>
  );
}

function EnvSection({ text, isExpanded, onToggle }) {
  return (
    <div className="mt-5 space-y-1 border-t border-gray-800 pt-5">
      <div className="flex items-center gap-3">
        <span className="text-[#F97316]">$</span>
        <span className="font-bold text-[#F3E7D0]">{text.envLabel}</span>

        <button
          type="button"
          onClick={onToggle}
          className="cursor-pointer select-none border border-[#A85518]/80 bg-[#3A1F0B]/80 px-3 py-1 text-[12px] font-bold text-[#F6C177] shadow-[0_0_8px_rgba(249,115,22,0.16)] transition-all hover:border-[#F97316] hover:bg-[#5A2A0A] hover:text-[#FFE1A8]"
        >
          {isExpanded ? text.hideEnv : text.loadEnv}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-3 space-y-3 border-amber-500/20 bg-amber-500/[0.025] pl-4 animate-in slide-in-from-top-1 duration-200">
          {text.envItems.map((item) => (
            <EnvItem key={item.key} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function WhoamiTerminal() {
  const { lang } = useLanguage();
  const text = whoamiTerminalContent[lang] ?? whoamiTerminalContent.fr;

  const [isEnvExpanded, setIsEnvExpanded] = useState(false);

  return (
    <div className="overflow-hidden border-4 border-[#F97316] bg-[#0B0D0F] shadow-[6px_6px_0px_0px_rgba(249,115,22,0.15)]">
      <div className="flex items-center justify-between border-b-2 border-[#F97316] bg-[#24201E] px-4 py-2 text-xs font-bold text-[#F59E0B]">
        <span>{text.command}</span>

        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/40" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <span className="h-2 w-2 rounded-full bg-green-500/40" />
        </div>
      </div>

      <div className="p-6 text-sm md:text-base">
        <div className="space-y-5">
          <TerminalLine label={text.operatorLabel}>
            {text.operatorName}
            <span className="terminal-wait-cursor ml-0.5 inline-block font-black text-white">
              _
            </span>
          </TerminalLine>

          <TerminalLine label={text.coreStackLabel}>
            {text.coreStack}
          </TerminalLine>
        </div>

        <EnvSection
          text={text}
          isExpanded={isEnvExpanded}
          onToggle={() => setIsEnvExpanded((current) => !current)}
        />

        <div className="mt-5 space-y-5 border-t border-gray-800 pt-5">
          <TerminalLine label={text.philosophyLabel}>
            {text.philosophyLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </TerminalLine>

          <TerminalLine label={text.targetLabel}>
            {text.target}
          </TerminalLine>
        </div>

        <div className="mt-6 cursor-default select-none border-t border-[#26221F] pt-4 text-xs text-green-400/70">
          <div className="sys-status-pulse flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-none bg-green-500" />
            <span>{text.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WhoamiTerminal);