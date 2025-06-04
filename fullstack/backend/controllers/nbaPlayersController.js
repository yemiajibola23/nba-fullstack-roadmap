const db = require("../db");

const getPaginatedNBAPlayers = (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const query1 = `SELECT * FROM nba_players LIMIT ? OFFSET ?`;
    const query2 = `SELECT COUNT (*) AS count FROM nba_players`;

    const players = db.prepare(query1).all(limit, offset);
    const total = db.prepare(query2).get().count;

    res.status(200).json({ players, total });
  } catch (err) {
    console.error("💥 Error in getPaginatedNBAPlayers:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getPaginatedNBAPlayers };
