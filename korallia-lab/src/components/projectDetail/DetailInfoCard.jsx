import { memo } from "react";

function DetailInfoCard({ children, important = false, theme }) {
  return (
    <div
      className={`border border-[#26221F]/80 bg-[#0B0D0F] px-4 py-4 ${
        important && theme ? `border-l-2 ${theme.important}` : ""
      }`}
    >
      <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
        {children}
      </p>
    </div>
  );
}

export default memo(DetailInfoCard);