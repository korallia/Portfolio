import { memo } from "react";

import DetailBlockTitle from "./DetailBlockTitle";
import DetailInfoCard from "./DetailInfoCard";

function BranchNextStepsSection({ result, nextSteps, branchTheme }) {
  return (
    <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-[1fr_1fr]">
      <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
        <DetailBlockTitle title="result_impact" theme={branchTheme} />
        <DetailInfoCard important theme={branchTheme}>
          {result}
        </DetailInfoCard>
      </section>

      <section className="px-8 py-8 md:px-12">
        <DetailBlockTitle title="next_steps" theme={branchTheme} />

        <div className="space-y-3">
          {nextSteps.map((step) => (
            <div
              key={step.id || step.text}
              className="border border-[#26221F]/80 bg-[#0B0D0F] px-4 py-3"
            >
              <p className="font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
                <span className={`mr-2 ${branchTheme.text}`}>›</span>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default memo(BranchNextStepsSection);