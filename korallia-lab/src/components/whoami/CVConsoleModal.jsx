import { memo, useCallback, useEffect, useRef } from "react";

import { useLanguage } from "../../context/language/useLanguage";
import { cvConsoleContent } from "../../content/whoami/cvConsoleContent";

import CVBootSequence from "./cvConsole/CVBootSequence";
import CVExperienceSection from "./cvConsole/CVExperienceSection";
import CVOutputStatus from "./cvConsole/CVOutputStatus";
import CVProfileSection from "./cvConsole/CVProfileSection";
import CVSkillEducationSection from "./cvConsole/CVSkillEducationSection";
import CVWindowBar from "./cvConsole/CVWindowBar";

function CVConsoleModal({
  setCvConsoleLines,
  isCvConsoleOpen,
  cvConsoleLines,
  setIsCvConsoleOpen,
}) {
  const { lang } = useLanguage();
  const text = cvConsoleContent[lang] ?? cvConsoleContent.fr;

  const hasBootPlayedRef = useRef(false);
  const bootStartedRef = useRef(false);
  const cachedBootLangRef = useRef(null);
  const bootTimersRef = useRef([]);

  const closeModal = useCallback(() => {
    setIsCvConsoleOpen(false);
  }, [setIsCvConsoleOpen]);

  const openAndDownloadCv = useCallback(() => {
    window.open(text.cvFilePath, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = text.cvFilePath;
    link.download = text.cvDownloadName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [text.cvDownloadName, text.cvFilePath]);

  useEffect(() => {
    if (!isCvConsoleOpen) {
      bootTimersRef.current.forEach(clearTimeout);
      bootTimersRef.current = [];
      bootStartedRef.current = false;

      if (!hasBootPlayedRef.current) {
        setCvConsoleLines([]);
      }

      return;
    }

    if (hasBootPlayedRef.current) {
      const shouldRefreshCachedLines = cachedBootLangRef.current !== lang;

      if (shouldRefreshCachedLines) {
        setCvConsoleLines(text.bootLines);
        cachedBootLangRef.current = lang;
      }

      return;
    }

    if (bootStartedRef.current) return;

    bootStartedRef.current = true;
    setCvConsoleLines([]);

    const timers = text.bootLines.map((line, index) =>
      setTimeout(() => {
        setCvConsoleLines((currentLines) => [...currentLines, line]);

        const isLastLine = index === text.bootLines.length - 1;

        if (isLastLine) {
          hasBootPlayedRef.current = true;
          cachedBootLangRef.current = lang;
          bootTimersRef.current = [];
        }
      }, line.delay)
    );

    bootTimersRef.current = timers;

    return () => {
      bootTimersRef.current.forEach(clearTimeout);
      bootTimersRef.current = [];
    };
  }, [isCvConsoleOpen, lang, setCvConsoleLines, text.bootLines]);

  if (!isCvConsoleOpen) {
    return null;
  }

  const isBootDone = cvConsoleLines.some(
    (line) => line.text === text.bootDoneMarker
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#020304]/95 p-4 text-slate-300 backdrop-blur-sm md:p-10">
      <div className="mx-auto w-full max-w-5xl border-2 border-[#2A211C] border-t-[#F97316] bg-[#0B0D0F] shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]">
        <CVWindowBar
          title={text.windowTitle}
          closeLabel={text.closeLabel}
          onClose={closeModal}
        />

        <div className="p-5 md:p-8">
          <CVBootSequence lines={cvConsoleLines} isBootDone={isBootDone} />

          {isBootDone && (
            <div className="mt-8 animate-in fade-in duration-300">
              <CVOutputStatus
                text={text.outputStatus}
                onOpenCv={openAndDownloadCv}
              />

              <div className="border border-[#26221F] bg-[#080A0C]">
                <CVProfileSection profile={text.profile} />

                <CVExperienceSection
                  title={text.experienceSectionLabel}
                  experiences={text.experiences}
                />

                <CVSkillEducationSection
                  skillTitle={text.skillSectionLabel}
                  educationTitle={text.educationSectionLabel}
                  skills={text.skillMatrix}
                  education={text.education}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CVConsoleModal);