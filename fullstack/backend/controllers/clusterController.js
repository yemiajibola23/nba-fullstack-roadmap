const fetch = require("node-fetch");

async function clusterPlayers(req, res) {
  try {
    const { players } = req.body;
    if (!Array.isArray(players) || players.length === 0) {
      return res
        .status(400)
        .json({ error: "Invalid or missing players array." });
    }

    console.log("➡️ Incoming players to cluster:", players);

    const response = await fetch("http://localhost:8000/cluster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ players }),
    });

    const contentType = response.headers.get("content-type");
    const isJSON = contentType && contentType.includes("application/json");

    if (!response.ok) {
      const errorMessage = isJSON
        ? await response.json()
        : await response.text();
      console.error("❌ FastAPI returned error:", errorMessage);
      return res.status(response.status).json({
        error: "AI Service Error",
        details: errorMessage,
      });
    }

    const data = response.json();
    res.json(data);
    console.log("⬅️ Response from FastAPI:", data);
  } catch (error) {
    console.log("❌ Error calling FastAPI cluster endpoint:", error);
    res.status(500).json({ error: "Failed to fetch clustering data" });
  }
}

module.exports = { clusterPlayers };
