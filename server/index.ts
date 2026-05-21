import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public (built by Vite)
const staticPath = path.join(__dirname, "..", "dist", "public");

console.log(`[Server] Serving static files from: ${staticPath}`);

app.use(express.static(staticPath));

// SPA fallback: All routes serve index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[Server] Running on http://localhost:${port}/`);
});

