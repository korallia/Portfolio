import { memo } from "react";

import DetailBlockTitle from "./DetailBlockTitle";

function BranchModulesSection({ modules, branchTheme }) {
  return (
    <section className="relative z-10 border-b border-[#26221F]/60 bg-[#050607]/70 px-8 py-8 md:px-12">
      <div className="mb-6">
        <DetailBlockTitle title="modules_touched" theme={branchTheme} />

        <p className="mt-2 max-w-2xl font-[Inter] text-[15px] leading-7 text-[#8F7A68]">
          Les modules ci-dessous représentent les parties du système qui portent
          la logique principale du projet.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {modules.map((module) => (
          <article
            key={module.id || module.name}
            className="border border-[#26221F]/80 bg-[#0B0D0F] p-4"
          >
            <p
              className={`font-[JetBrains_Mono] text-sm font-bold uppercase tracking-[0.14em] ${branchTheme.text}`}
            >
              /src/{module.name}
            </p>

            <p className="mt-3 font-[Inter] text-[15px] leading-7 text-[#BBAA9A]">
              {module.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(BranchModulesSection);