const playerModel = require("../models/playersModel");

const getPlayers = (req, res) => {
  const userId = req.session.user?.id;
  console.log("🧠 Logged in user ID:", userId);
  // if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const players = playerModel.getPlayersByUser(userId);
  console.log("List of players from backend:", players);
  res.json(players);
};

const addPlayer = (req, res) => {
  const { name, points, team_id } = req.body;
  const userId = req.session.user?.id;

  if (!name || !points || !userId) {
    return res
      .status(400)
      .json({ error: "Missing player name or points, or user session" });
  }

  if (playerModel.playerExists(name)) {
    return res.status(409).json({ error: "Player already exists" });
  }

  const result = playerModel.addNewPlayer(name, points, userId, team_id);

  res.status(201).json(result);
};

const deletePlayer = (req, res) => {
  const id = req.params.id;
  const success = playerModel.deletePlayer(id);

  if (success) {
    res.json({ message: "Player deleted." });
  } else {
    return res.status(404).json({ error: "Player not found " });
  }
};

module.exports = { getPlayers, addPlayer, deletePlayer };
