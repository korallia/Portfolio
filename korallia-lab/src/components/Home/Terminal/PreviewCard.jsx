import { memo } from "react";

function PreviewCard({ label, value }) {
  console.log("PreviewCard received:", label, value);
  return (
    <article className="border border-[#26221F]/80 border-l-2 border-l-[#F97316] bg-[#0B0D0F] p-4">
      <p className="mb-3 font-[JetBrains_Mono] text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
        {label}
      </p>

      <p className="font-[Inter] text-[14px] leading-7 text-[#C8B8A8]">
        {value}
      </p>
    </article>
  );
}

export default memo(PreviewCard);