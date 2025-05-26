const fetch = require("node-fetch");

async function clusterPlayers(req, res) {
  try {
    const { players } = req.body;
    console.log("➡️ Incoming players to cluster:", players);

    const response = await fetch("http://localhost:8000/cluster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ players }),
    });

    const data = response.json();
    res.json(data);
    console.log("⬅️ Response from FastAPI:", data);
  } catch (error) {
    console.log("❌ Error calling FastAPI cluster endpoint:", error);
    res.status(500).json({ error: "Failed to fetch clustering data" });
  }
}

module.exports = { clusterPlayers };
