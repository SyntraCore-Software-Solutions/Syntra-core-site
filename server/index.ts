import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public
// In production (Vercel), __dirname points to dist/ folder
// In local dev, we adjust the path accordingly
const isProduction = process.env.NODE_ENV === "production";
const staticPath = isProduction 
  ? path.join(__dirname, "public") 
  : path.join(__dirname, "..", "dist", "public");

console.log(`[Server] NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`[Server] __dirname: ${__dirname}`);
console.log(`[Server] Serving static files from: ${staticPath}`);

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  console.log(`[Server] Sending: ${indexPath}`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`[Server] Error sending file: ${err.message}`);
      res.status(500).send("Error loading page");
    }
  });
});

// Only start listening if not in Vercel environment
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[Server] Running on http://localhost:${port}/`);
  });
}
