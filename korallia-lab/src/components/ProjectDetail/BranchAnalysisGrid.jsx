import { memo } from "react";

import DetailBlockTitle from "./DetailBlockTitle";
import DetailInfoCard from "./DetailInfoCard";

function BranchAnalysisGrid({ branchTheme, objective, obstacle, decision }) {
  return (
    <div className="relative z-10 grid border-b border-[#26221F]/60 bg-[#050607]/70 md:grid-cols-3">
      <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
        <DetailBlockTitle title="objective" theme={branchTheme} />
        <DetailInfoCard>{objective}</DetailInfoCard>
      </section>

      <section className="border-b border-[#26221F]/60 px-8 py-8 md:border-b-0 md:border-r md:px-12">
        <DetailBlockTitle title="technical_obstacle" theme={branchTheme} />
        <DetailInfoCard important theme={branchTheme}>
          {obstacle}
        </DetailInfoCard>
      </section>

      <section className="px-8 py-8 md:px-12">
        <DetailBlockTitle title="architecture_decision" theme={branchTheme} />
        <DetailInfoCard>{decision}</DetailInfoCard>
      </section>
    </div>
  );
}

export default memo(BranchAnalysisGrid);