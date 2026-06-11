import { memo, useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLanguage } from "../../context/useLanguage";
import { useProjects } from "../../context/projects/useProjects";
import { projectDetailContent } from "../../content/projectDetail/projectDetailContent";
import { statusStyles, branchThemes } from "../../data/techStyles";

import BranchAnalysisGrid from "../ProjectDetail/BranchAnalysisGrid";
import BranchModulesSection from "../ProjectDetail/BranchModulesSection";
import BranchNextStepsSection from "../ProjectDetail/BranchNextStepsSection";
import BranchSelector from "../ProjectDetail/BranchSelector";
import ProjectDetailHeader from "../ProjectDetail/ProjectDetailHeader";
import ProjectDetailState from "../ProjectDetail/ProjectDetailState";
import ProjectDetailTopBar from "../ProjectDetail/ProjectDetailTopBar";
import ProjectSummaryStack from "../ProjectDetail/ProjectSummaryStack";

const fixedGreenTheme = branchThemes.green;

function getBranchById(branches, branchId) {
  if (!branchId) return null;

  return (
    branches.find((branch) => String(branch.id) === String(branchId)) || null
  );
}

function getDefaultBranch(project, branches) {
  if (!branches.length) return null;

  return (
    getBranchById(branches, project?.default_branch_id) ||
    branches[0] ||
    null
  );
}

function getBranchTheme(branch) {
  return branchThemes[branch?.theme || "green"] || branchThemes.green;
}

function getStatusTag(status) {
  return statusStyles[status] || statusStyles.ACTIVE;
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { lang } = useLanguage();
  const text = projectDetailContent[lang] ?? projectDetailContent.fr;

  const { getProjectBySlug, isLoadingProjects, projectsError } = useProjects();

  const [selectedBranchId, setSelectedBranchId] = useState("");

  const project = useMemo(
    () => getProjectBySlug(slug),
    [getProjectBySlug, slug]
  );

  const branches = project?.branches || [];

  const defaultBranch = useMemo(
    () => getDefaultBranch(project, branches),
    [project, branches]
  );

  const selectedBranch = useMemo(
    () => getBranchById(branches, selectedBranchId) || defaultBranch,
    [branches, selectedBranchId, defaultBranch]
  );

  const selectedBranchValue = selectedBranch?.id
    ? String(selectedBranch.id)
    : "";

  const branchTheme = useMemo(
    () => getBranchTheme(selectedBranch),
    [selectedBranch]
  );

  const statusTag = useMemo(
    () => getStatusTag(project?.status),
    [project?.status]
  );

  const openRepertoire = useCallback(() => {
    navigate("/repertoire");
  }, [navigate]);




  if (isLoadingProjects) {
    return <ProjectDetailState type="loading" text={text} />;
  }

  if (projectsError || !project) {
    return (
      <ProjectDetailState
        type="error"
        error={projectsError}
        text={text}
        onBack={openRepertoire}
      />
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#050607] px-4 py-16 text-slate-300 selection:bg-[#00E676]/30 md:px-12">
      <section className="relative left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div
          className={`relative border-2 border-[#2A211C] ${fixedGreenTheme.top} bg-[#0B0D0F] ${fixedGreenTheme.glow}`}
        >
          <div className="absolute -right-2 top-2 h-full w-2 bg-[#062818]/70" />
          <div className="absolute -bottom-2 left-2 h-2 w-full bg-[#062818]/70" />

          <ProjectDetailTopBar
            fixedTheme={fixedGreenTheme}
            statusTag={statusTag}
            status={project.status}
            text={text}
          />

          <ProjectDetailHeader
            project={project}
            selectedBranch={selectedBranch}
            onBack={openRepertoire}
          />

          <BranchSelector
            branches={branches}
              text={text}
            selectedBranchValue={selectedBranchValue}
            branchTheme={branchTheme}
            fixedTheme={fixedGreenTheme}
            onSelectBranch={setSelectedBranchId}
          />

          <ProjectSummaryStack project={project} fixedTheme={fixedGreenTheme} />

          <BranchAnalysisGrid
            branchTheme={branchTheme}
            objective={selectedBranch?.objective || ""}
            obstacle={selectedBranch?.obstacle || ""}
            decision={selectedBranch?.decision || ""}
          />

          <BranchModulesSection
            modules={selectedBranch?.modules || []}
            branchTheme={branchTheme}
          />

          <BranchNextStepsSection
            result={selectedBranch?.result || ""}
            nextSteps={selectedBranch?.next_steps || []}
            branchTheme={branchTheme}
          />
        </div>
      </section>
    </main>
  );
}

export default memo(ProjectDetailPage);