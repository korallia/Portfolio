import { memo } from "react";

function JournalArchiveState({ type, text, error }) {
  const isError = type === "error";

  return (
    <section className="relative left-1/2 mt-10 mb-32 w-[calc(100vw-2rem)] -translate-x-1/2 sm:w-[min(78rem,calc(100vw-4rem))]">
      <div
        className={`border-2 bg-[#0B0D0F] p-12 font-[JetBrains_Mono] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)] ${
          isError
            ? "border-[#2A211C] border-t-[#EF4444] text-[#EF4444] shadow-[8px_8px_0px_0px_rgba(239,68,68,0.12)]"
            : "border-[#2A211C] border-t-[#F97316] text-[#F59E0B]"
        }`}
      >
        {isError ? `${text.errorLabel} ${error}` : text.loading}
      </div>
    </section>
  );
}

export default memo(JournalArchiveState);