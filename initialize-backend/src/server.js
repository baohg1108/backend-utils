import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.DEV_APP_PORT || 3000;
const HOST = process.env.DEV_APP_HOST;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
