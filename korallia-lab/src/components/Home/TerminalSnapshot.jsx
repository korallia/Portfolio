import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { terminalSnapshotContent } from "../../content/home/terminalSnapshotContent";
import { useLanguage } from "../../context/useLanguage";

import FeaturedProjectPanel from "./terminal/FeaturedProjectPanel";
import ProjectPreviewPanel from "./terminal/ProjectPreviewPanel";
import TerminalTopBar from "./terminal/TerminalTopBar";

function truncateText(text = "", maxLength = 220) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function TerminalSnapshot() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const text = terminalSnapshotContent[lang] ?? terminalSnapshotContent.fr;

  const projectSnapshotCacheRef = useRef({});

  const [featuredProject, setFeaturedProject] = useState(null);
  const [featuredBranch, setFeaturedBranch] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  const featuredProjectSlug = featuredProject?.slug;

  const openDirectory = useCallback(() => {
    navigate("/repertoire");
  }, [navigate]);

  const openFeaturedProject = useCallback(() => {
    if (!featuredProjectSlug) return;
    navigate(`/repertoire/${featuredProjectSlug}`);
  }, [navigate, featuredProjectSlug]);

  useEffect(() => {
    const cachedSnapshot = projectSnapshotCacheRef.current[lang];

    if (cachedSnapshot) {
      setFeaturedProject(cachedSnapshot.featuredProject);
      setFeaturedBranch(cachedSnapshot.featuredBranch);
      setProjectsError(null);
      setIsLoadingProjects(false);
      return;
    }

    let isMounted = true;

    const loadProjects = async () => {
      try {
        setIsLoadingProjects(true);
        setProjectsError(null);

        const archiveResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects/archive`
        );

        if (!archiveResponse.ok) {
          throw new Error(
            terminalSnapshotContent[lang]?.fetchProjectsError ??
              terminalSnapshotContent.fr.fetchProjectsError
          );
        }

        const archiveProjects = await archiveResponse.json();
        const firstProject = archiveProjects[0] ?? null;

        let defaultBranch = null;

        if (firstProject?.slug) {
          const detailResponse = await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects/${firstProject.slug}`
          );

          if (detailResponse.ok) {
            const detailData = await detailResponse.json();
            const branches = detailData.branches || [];

            defaultBranch =
              branches.find(
                (branch) =>
                  String(branch.id) ===
                  String(detailData.project.default_branch_id)
              ) ||
              branches[0] ||
              null;
          }
        }

        projectSnapshotCacheRef.current[lang] = {
          featuredProject: firstProject,
          featuredBranch: defaultBranch,
        };

        if (isMounted) {
          setFeaturedProject(firstProject);
          setFeaturedBranch(defaultBranch);
        }
      } catch (err) {
        console.error(err);

        if (isMounted) {
          setProjectsError(err.message);
          setFeaturedProject(null);
          setFeaturedBranch(null);
        }
      } finally {
        if (isMounted) {
          setIsLoadingProjects(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, [lang]);

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