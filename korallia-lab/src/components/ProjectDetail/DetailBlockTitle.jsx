import { memo } from "react";

function DetailBlockTitle({ title, theme }) {
  return (
    <p
      className={`mb-4 font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.16em] ${
        theme?.text || "text-[#00E676]"
      }`}
    >
      {title}
    </p>
  );
}

export default memo(DetailBlockTitle);