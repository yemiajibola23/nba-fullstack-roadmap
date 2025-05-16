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

const deletePlayer = (req, res) => {
  const { id } = req.params;
  try {
    const stmt = db.prepare("DELETE FROM players WHERE id = ?");
    const result = stmt.run(id);

    if (result.changes == 0) {
      return res.status(404).json({ error: "Player not found " });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("DB DELETE failure:", err.message);
    res.status(500).json({ error: "Failure to delete player", details: err.message });
  }
};

module.exports = { getPlayers, addPlayer, deletePlayer };
