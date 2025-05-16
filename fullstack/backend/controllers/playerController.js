const db = require("../db");

const getPlayers = (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM players").all();
    res.json(rows);
  } catch (err) {
    console.error("DB SELECT error:", err.message);
    res.status(500).json({ error: "Failed to fetch players." });
  }
};

const addPlayer = (req, res) => {
  const { name, points } = req.body;

  try {
    const stmt = db.prepare("INSERT INTO players (name, points) VALUES (?, ?)");
    const result = stmt.run(name, points);
    res.status(201).json({ id: result.lastInsertRowid, name, points });
  } catch (err) {
    console.error("DB INSERT error:", err.message);
    res
      .status(500)
      .json({ error: "Database insert failed.", details: err.message });
  }
};

module.exports = { getPlayers, addPlayer };
