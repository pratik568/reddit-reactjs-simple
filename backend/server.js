const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/reddit", async (req, res) => {
  try {
    const r = await fetch("https://www.reddit.com/r/reactjs.json?raw_json=1");
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Reddit" });
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend server running on PORT: " + PORT);
});
