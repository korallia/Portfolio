import { memo } from "react";

function CVOutputStatus({ text, onOpenCv }) {
  return (
    <section className="mb-6 border border-[#1F1A17] bg-[#050607] px-5 py-4">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="font-[JetBrains_Mono] text-xs">
          <p className="font-bold uppercase tracking-[0.16em] text-green-400">
            {text.readyLabel}
          </p>

          <p className="mt-1 uppercase tracking-[0.14em] text-[#8F7A68]">
            {text.statusLine}
          </p>

          <p className="mt-3 text-[#8F7A68]">
            {text.prompt}{" "}
            <span className="inline-block h-5 w-3 animate-ping bg-[#00E676] shadow-[0_0_10px_#00E676]" />
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          <button
            type="button"
            onClick={onOpenCv}
            className="group relative border border-[#B45309]/80 bg-[#B45309]/10 px-4 py-2 font-[JetBrains_Mono] text-xs font-black uppercase tracking-[0.14em] text-[#F59E0B] shadow-[3px_3px_0px_0px_rgba(180,83,9,0.14)] transition-all duration-200 hover:-translate-y-px hover:border-[#F97316] hover:bg-[#F97316]/15 hover:text-[#FFD08A]"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-[#F97316]/60 opacity-0 transition group-hover:opacity-100" />
            {text.openCvLabel}
          </button>

          {text.links?.map((link) => {
            const isEmail = link.href.startsWith("mailto:");

            return (
              <a
                key={link.label}
                href={link.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="group relative border border-[#00E676]/25 bg-[#00E676]/[0.025] px-3.5 py-2 font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.14em] text-[#00E676]/75 transition-all duration-200 hover:-translate-y-px hover:border-[#00E676]/55 hover:bg-[#00E676]/[0.06] hover:text-[#00E676]"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(CVOutputStatus);