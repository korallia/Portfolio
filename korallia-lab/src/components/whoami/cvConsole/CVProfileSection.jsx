import { memo } from "react";

function CVProfileSection({ profile }) {
  return (
    <section className="border-b-2 border-b-[#F97316]/45 border-t-2 border-t-[#F97316] px-6 py-7 md:px-8">
      <p className="mb-5 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
        {profile.sectionLabel}
      </p>

      <div className="grid gap-6 md:grid-cols-[0.85fr_1.35fr]">
        <div>
          <h2 className="font-[Plus_Jakarta_Sans] text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white">
            {profile.name}
          </h2>

          <p className="mt-3 font-[JetBrains_Mono] text-xs font-bold uppercase tracking-[0.12em] text-[#F59E0B]">
            {profile.headline}
          </p>
        </div>

        <div>
          <p className="font-[Inter] text-sm leading-relaxed text-[#CDB9A5]">
            {profile.summary}
          </p>

          <div className="mt-5 grid gap-4 font-[JetBrains_Mono] text-[11px] uppercase tracking-[0.12em] md:grid-cols-3">
            {profile.details.map((detail) => (
              <div key={detail.label}>
                <p className="text-[#8F7A68]">{detail.label}</p>
                <p className="text-[#D8C7B8]">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CVProfileSection);