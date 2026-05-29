import express from "express";
import process from "node:process";
import cors from "cors";
import dotenv from "dotenv";
import journalRoutes from "./routes/journal.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/journal", journalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});