import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useLanguage } from "../language/useLanguage";
import { ProjectsContext } from "./projectsContext";
import { getDefaultBranch, localizeProject } from "./projectLocalizers";

export function ProjectsProvider({ children }) {
  const { lang } = useLanguage();

  const projectsCacheRef = useRef(null);

  const [rawProjects, setRawProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  const loadProjects = useCallback(async () => {
    if (projectsCacheRef.current) {
      setRawProjects(projectsCacheRef.current);
      setProjectsError(null);
      setIsLoadingProjects(false);
      return;
    }

    try {
      setIsLoadingProjects(true);
      setProjectsError(null);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/full`
      );

      if (!response.ok) {
        throw new Error("Error while loading projects.");
      }

      const data = await response.json();

      projectsCacheRef.current = data;
      setRawProjects(data);
    } catch (err) {
      console.error(err);
      setProjectsError(err.message);
      setRawProjects([]);
    } finally {
      setIsLoadingProjects(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const projects = useMemo(
    () => rawProjects.map((project) => localizeProject(project, lang)),
    [rawProjects, lang]
  );

  const featuredProject = projects[0] ?? null;

  const featuredBranch = useMemo(
    () => getDefaultBranch(featuredProject),
    [featuredProject]
  );

  const getProjectBySlug = useCallback(
    (slug) => {
      return projects.find((project) => project.slug === slug) ?? null;
    },
    [projects]
  );

  const value = useMemo(
    () => ({
      projects,
      featuredProject,
      featuredBranch,
      isLoadingProjects,
      projectsError,
      reloadProjects: loadProjects,
      getProjectBySlug,
    }),
    [
      projects,
      featuredProject,
      featuredBranch,
      isLoadingProjects,
      projectsError,
      loadProjects,
      getProjectBySlug,
    ]
  );

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}