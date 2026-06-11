import express from "express";
import pool from "../db.js";

const router = express.Router();



router.get("/full", async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        p.id,
        p.slug,
        p.name,
        p.name_en,
        p.category,
        p.status,
        p.path,
        p.default_branch_id,
        p.description,
        p.description_en,
        p.summary,
        p.summary_en,
        p.stack,
        p.display_order,
        p.created_at,
        p.updated_at,

        COALESCE(
          jsonb_agg(
            jsonb_build_object(
              'id', b.id,
              'project_id', b.project_id,
              'slug', b.slug,
              'name', b.name,
              'name_en', b.name_en,
              'label', b.label,
              'label_en', b.label_en,
              'status', b.status,
              'theme', b.theme,
              'objective', b.objective,
              'objective_en', b.objective_en,
              'obstacle', b.obstacle,
              'obstacle_en', b.obstacle_en,
              'decision', b.decision,
              'decision_en', b.decision_en,
              'result', b.result,
              'result_en', b.result_en,
              'display_order', b.display_order,

              'modules', COALESCE(
                (
                  SELECT jsonb_agg(
                    jsonb_build_object(
                      'id', m.id,
                      'branch_id', m.branch_id,
                      'name', m.name,
                      'name_en', m.name_en,
                      'description', m.description,
                      'description_en', m.description_en,
                      'display_order', m.display_order
                    )
                    ORDER BY m.display_order ASC
                  )
                  FROM branch_modules m
                  WHERE m.branch_id = b.id
                ),
                '[]'::jsonb
              ),

              'next_steps', COALESCE(
                (
                  SELECT jsonb_agg(
                    jsonb_build_object(
                      'id', ns.id,
                      'branch_id', ns.branch_id,
                      'text', ns.text,
                      'text_en', ns.text_en,
                      'display_order', ns.display_order
                    )
                    ORDER BY ns.display_order ASC
                  )
                  FROM branch_next_steps ns
                  WHERE ns.branch_id = b.id
                ),
                '[]'::jsonb
              )
            )
            ORDER BY b.display_order ASC
          ) FILTER (WHERE b.id IS NOT NULL),
          '[]'::jsonb
        ) AS branches

      FROM projects p

      LEFT JOIN project_branches b
        ON b.project_id = p.id

      GROUP BY p.id

      ORDER BY p.display_order ASC;
      `
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching full projects payload:", error);
    res.status(500).json({ error: "Failed to fetch full projects payload" });
  }
});

export default router;