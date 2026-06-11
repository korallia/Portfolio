import { memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { terminalSnapshotContent } from "../../content/home/terminalSnapshotContent";
import { useLanguage } from "../../context/language/useLanguage";
import { useProjects } from "../../context/projects/useProjects";

import FeaturedProjectPanel from "./Terminal/FeaturedProjectPanel";
import ProjectPreviewPanel from "./Terminal/ProjectPreviewPanel";
import TerminalTopBar from "./Terminal/TerminalTopBar";

function truncateText(text = "", maxLength = 220) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function TerminalSnapshot() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const {
    featuredProject,
    featuredBranch,
    isLoadingProjects,
    projectsError,
  } = useProjects();

  const text = terminalSnapshotContent[lang] ?? terminalSnapshotContent.fr;

  const featuredProjectSlug = featuredProject?.slug;

  const openDirectory = useCallback(() => {
    navigate("/repertoire");
  }, [navigate]);

  const openFeaturedProject = useCallback(() => {
    if (!featuredProjectSlug) return;
    navigate(`/repertoire/${featuredProjectSlug}`);
  }, [navigate, featuredProjectSlug]);

  const previewModel = useMemo(
    () => ({
      summary: truncateText(
        featuredProject?.summary || text.projectSummaryFallback,
        260
      ),
      items: [
        {
          label: text.objective,
          value: truncateText(featuredBranch?.objective, 170),
        },
        {
          label: text.technicalObstacle,
          value: truncateText(featuredBranch?.obstacle, 170),
        },
        {
          label: text.resultImpact,
          value: truncateText(featuredBranch?.result, 170),
        },
        {
          label: text.architectureDecision,
          value: truncateText(featuredBranch?.decision, 170),
        },
      ],
    }),
    [
      featuredProject?.summary,
      featuredBranch?.objective,
      featuredBranch?.obstacle,
      featuredBranch?.result,
      featuredBranch?.decision,
      text.projectSummaryFallback,
      text.objective,
      text.technicalObstacle,
      text.resultImpact,
      text.architectureDecision,
    ]
  );

  return (
    <section className="w-full overflow-visible border-y-4 border-[#24201E] bg-[#07080a] bg-[linear-gradient(to_right,#141612_1px,transparent_1px),linear-gradient(to_bottom,#141612_1px,transparent_1px)] bg-[size:2rem_2rem] px-4 py-16 md:min-h-screen md:px-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <TerminalTopBar
          label={text.topLabel}
          buttonLabel={text.openDirectory}
          onOpenDirectory={openDirectory}
        />

        <div className="grid grid-cols-1 gap-8 font-[JetBrains_Mono] lg:grid-cols-12">
          <FeaturedProjectPanel
            text={text}
            isLoading={isLoadingProjects}
            error={projectsError}
            project={featuredProject}
            onOpenProject={openFeaturedProject}
          />

          <ProjectPreviewPanel
            text={text}
            isLoading={isLoadingProjects}
            error={projectsError}
            project={featuredProject}
            branch={featuredBranch}
            previewModel={previewModel}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(TerminalSnapshot);