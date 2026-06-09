import express from "express";
import process from "node:process";
import cors from "cors";
import dotenv from "dotenv";
import journalRoutes from "./routes/journal.js";
import projectsRouter from "./routes/projects.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/journal", journalRoutes);
app.use("/api/projects", projectsRouter);

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API running on ${PORT}`);
});