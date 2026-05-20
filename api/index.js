// api/index.js - Vercel serverless handler
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// In Vercel, static files are in the root dist/public folder
const staticPath = path.join(__dirname, "..", "dist", "public");

console.log(`[Vercel Handler] __dirname: ${__dirname}`);
console.log(`[Vercel Handler] staticPath: ${staticPath}`);

app.use(express.static(staticPath));

// Handle client-side routing
app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`[Vercel Handler] Error: ${err.message}`);
      res.status(500).send("Error loading page");
    }
  });
});

export default app;
