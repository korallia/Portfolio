import { memo } from "react";

function CVBootSequence({ lines, isBootDone }) {
  return (
    <section className="border border-[#1F1A17] bg-[#050607] p-5 font-[JetBrains_Mono] text-xs">
      <div className="space-y-2">
        {lines.map((line, index) => {
          if (line.kind === "command") {
            return (
              <p
                key={`${line.prompt}-${line.command}-${index}`}
                className={`${line.color} animate-in fade-in slide-in-from-left-1 duration-200`}
              >
                <span className="text-[#F97316]">{line.prompt}</span>{" "}
                <span>{line.command}</span>
              </p>
            );
          }

          return (
            <p
              key={`${line.text}-${index}`}
              className={`${line.color} animate-in fade-in slide-in-from-left-1 duration-200`}
            >
              {line.text}
            </p>
          );
        })}

        {!isBootDone && lines.length > 0 && (
          <span className="ml-1 inline-block h-4 w-2 animate-ping bg-green-400 shadow-[0_0_10px_#00E676]" />
        )}
      </div>
    </section>
  );
}

export default memo(CVBootSequence);