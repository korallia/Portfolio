import { memo } from "react";

import DetailBlockTitle from "./DetailBlockTitle";

function BranchSelector({
  text,
  branches,
  selectedBranchValue,
  branchTheme,
  fixedTheme,
  onSelectBranch,
}) {
  return (
    <section className="relative z-10 grid border-b border-t-2 border-[#26221F]/60 border-t-[#3A302A] bg-[#050607]/70 px-8 py-6 md:px-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <DetailBlockTitle title={text.branchReload} theme={fixedTheme} />

          <p className="mt-2 font-[Inter] text-[15px] leading-7 text-[#8F7A68]">
            {text.branchReloadText}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="w-full md:w-[340px]">
            <label className="mb-2 block font-[JetBrains_Mono] text-[10px] font-bold uppercase tracking-[0.16em] text-[#8F7A68]">
              {text.selectedBranch}
            </label>

            <select
              value={selectedBranchValue}
              onChange={(event) => onSelectBranch(event.target.value)}
              className={`w-full border bg-[#0B0D0F] px-4 py-3 font-[JetBrains_Mono] text-xs font-black uppercase tracking-[0.12em] outline-none transition ${branchTheme.active}`}
            >
              {branches.map((branch) => (
                <option
                  key={branch.id}
                  value={String(branch.id)}
                  className="bg-[#0B0D0F] text-[#BBAA9A]"
                >
                  {branch.label} // {branch.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BranchSelector);