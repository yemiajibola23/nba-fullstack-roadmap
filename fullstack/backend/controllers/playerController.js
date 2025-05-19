const playerModel = require("../models/playerModel");

const getPlayers = (req, res) => {
  const players = playerModel.getAllPlayers();
  res.json(players);
};

const addPlayer = (req, res) => {
  const { name, points } = req.body;
  if (!name || !points) {
    return res.status(400).json({ error: "Missing player name or points" });
  }

  if (playerModel.playerExists(name)) {
    return res.status(409).json({ error: "Player already exists" });
  }

  const result = playerModel.addNewPlayer(name, points);

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
