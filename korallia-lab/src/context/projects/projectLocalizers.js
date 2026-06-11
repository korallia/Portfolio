function pickLangValue(frValue, enValue, lang) {
  if (lang === "en") {
    return enValue || frValue || "";
  }

  return frValue || "";
}

export function localizeProject(project, lang) {
  if (!project) return null;

  return {
    ...project,
    name: pickLangValue(project.name, project.name_en, lang),
    description: pickLangValue(project.description, project.description_en, lang),
    summary: pickLangValue(project.summary, project.summary_en, lang),
    branches: (project.branches || []).map((branch) =>
      localizeBranch(branch, lang)
    ),
  };
}

export function localizeBranch(branch, lang) {
  if (!branch) return null;

  return {
    ...branch,
    name: pickLangValue(branch.name, branch.name_en, lang),
    label: pickLangValue(branch.label, branch.label_en, lang),
    objective: pickLangValue(branch.objective, branch.objective_en, lang),
    obstacle: pickLangValue(branch.obstacle, branch.obstacle_en, lang),
    decision: pickLangValue(branch.decision, branch.decision_en, lang),
    result: pickLangValue(branch.result, branch.result_en, lang),
    modules: (branch.modules || []).map((module) =>
      localizeModule(module, lang)
    ),
    next_steps: (branch.next_steps || []).map((step) =>
      localizeNextStep(step, lang)
    ),
  };
}

export function localizeModule(module, lang) {
  if (!module) return null;

  return {
    ...module,
    name: pickLangValue(module.name, module.name_en, lang),
    description: pickLangValue(
      module.description,
      module.description_en,
      lang
    ),
  };
}

export function localizeNextStep(step, lang) {
  if (!step) return null;

  return {
    ...step,
    text: pickLangValue(step.text, step.text_en, lang),
  };
}

export function getDefaultBranch(project) {
  if (!project?.branches?.length) return null;

  return (
    project.branches.find(
      (branch) => String(branch.id) === String(project.default_branch_id)
    ) ||
    project.branches[0] ||
    null
  );
}