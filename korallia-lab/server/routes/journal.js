import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        number,
        slug,
        title,
        excerpt,
        category,
        read_time,
        cover_image_url,
        cover_image_alt,
        cover_image_caption,
        status,
        is_featured,
        published_at
      FROM journal_articles
      WHERE status = 'published'
      ORDER BY published_at DESC;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching journal articles:", error);
    res.status(500).json({ error: "Failed to fetch journal articles" });
  }
});
router.get("/archive", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        number,
        slug,
        title,
        excerpt,
        category,
        read_time
      FROM journal_articles
      WHERE status = 'published'
      ORDER BY published_at DESC;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching journal archive:", error);
    res.status(500).json({ error: "Failed to fetch journal archive" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        number,
        slug,
        title,
        excerpt,
        category,
        read_time,
        cover_image_url,
        cover_image_alt,
        cover_image_caption,
        content_html,
        status,
        is_featured,
        published_at
      FROM journal_articles
      WHERE slug = $1
      AND status = 'published'
      LIMIT 1;
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching journal article:", error);
    res.status(500).json({ error: "Failed to fetch journal article" });
  }
});

export default router;