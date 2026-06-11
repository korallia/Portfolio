import { memo } from "react";

function JournalArticleState({ type, text, onBack }) {
  const isError = type === "error";

  if (!isError) {
    return (
      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#0E0D0C] p-4 pt-24">
        <div className="border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] p-12 font-[JetBrains_Mono] text-[#F59E0B] uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
          {text.loading}
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#0E0D0C] p-4 pt-24">
      <div className="w-full max-w-md border-2 border-[#2A211C] border-t-[#EF4444] bg-[#0B0D0F] p-12 shadow-[8px_8px_0px_0px_rgba(239,68,68,0.12)]">
        <p className="mb-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#EF4444]">
          {text.errorLabel}
        </p>

        <h1 className="mb-6 font-[Plus_Jakarta_Sans] text-xl font-bold uppercase tracking-tight text-white">
          {text.errorTitle}
        </h1>

        <button
          type="button"
          onClick={onBack}
          className="border border-[#F59E0B]/40 px-4 py-2 font-[JetBrains_Mono] text-xs uppercase tracking-wider text-[#F59E0B] transition hover:bg-[#F59E0B]/10"
        >
          {text.errorButton}
        </button>
      </div>
    </section>
  );
}

export default memo(JournalArticleState);