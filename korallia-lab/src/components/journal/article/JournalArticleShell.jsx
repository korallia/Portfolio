import { memo } from "react";

function JournalArticleShell({ children }) {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-start justify-center overflow-hidden bg-[#0E0D0C] p-4 pt-28 pb-32 selection:bg-[#F97316]/20 selection:text-white md:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#24201E_1px,transparent_1px),linear-gradient(to_bottom,#24201E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35]" />

      <div className="relative w-full max-w-4xl overflow-hidden border-2 border-[#2A211C] border-t-[#F97316] bg-[#050607] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
        <div className="pointer-events-none absolute -right-2 top-2 h-full w-2 bg-[#3A1F0B]/70" />
        <div className="pointer-events-none absolute -bottom-2 left-2 h-2 w-full bg-[#3A1F0B]/70" />

        {children}
      </div>
    </section>
  );
}

export default memo(JournalArticleShell);