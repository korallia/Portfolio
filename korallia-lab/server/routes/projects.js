import express from "express";
import pool from "../db.js";

const router = express.Router();

/**
 * GET /api/projects
 * Liste courte pour la page répertoire
 */


router.get("/archive", async (req, res) => {
  try {
    const result = await pool.query(`
     SELECT
  id,
  slug,
  name,
  category,
  status,
  path,
  description,
  stack,
  display_order
FROM projects
ORDER BY display_order ASC;
      ;

    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching projects archive:", error);
    res.status(500).json({ error: "Failed to fetch projects archive" });
  }
});

/**
 * GET /api/projects/:id
 * Détail global du projet
 */
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const projectResult = await pool.query(
      `
      SELECT
        id,
        slug,
        name,
        category,
        status,
        path,
        default_branch_id,
        description,
        summary,
        stack,
        display_order,
        created_at,
        updated_at
      FROM public.projects
      WHERE slug = $1
      LIMIT 1;
      `,
      [slug]
    );

    if (projectResult.rows.length === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const project = projectResult.rows[0];

    const branchesResult = await pool.query(
      `
      SELECT
        b.id,
        b.project_id,
        b.slug,
        b.name,
        b.label,
        b.status,
        b.theme,
        b.objective,
        b.obstacle,
        b.decision,
        b.result,
        b.display_order,

        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object(
              'id', m.id,
              'name', m.name,
              'description', m.description,
              'display_order', m.display_order
            )
          ) FILTER (WHERE m.id IS NOT NULL),
          '[]'
        ) AS modules,

        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object(
              'id', ns.id,
              'text', ns.text,
              'display_order', ns.display_order
            )
          ) FILTER (WHERE ns.id IS NOT NULL),
          '[]'
        ) AS next_steps

      FROM public.project_branches b

      LEFT JOIN public.branch_modules m
        ON m.branch_id = b.id

      LEFT JOIN public.branch_next_steps ns
        ON ns.branch_id = b.id

      WHERE b.project_id = $1

      GROUP BY b.id

      ORDER BY b.display_order ASC;
      `,
      [project.id]
    );

    const branches = branchesResult.rows.map((branch) => ({
      ...branch,
      modules: [...branch.modules].sort(
        (a, b) => a.display_order - b.display_order
      ),
      next_steps: [...branch.next_steps].sort(
        (a, b) => a.display_order - b.display_order
      ),
    }));

    res.json({
      project,
      branches,
    });
  } catch (error) {
    console.error("Error fetching project detail:", error);
    res.status(500).json({ error: "Failed to fetch project detail" });
  }
});

export default router;