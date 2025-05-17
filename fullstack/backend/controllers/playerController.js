const playerModel = require("../models/playerModel");

const getPlayers = (req, res) => {
  const players = playerModel.getAllPlayers();
  res.json(players);
};

const addPlayer = (req, res) => {
  const { name, points } = req.body;
  const result = playerModel.addNewPlayer(name, points);

  res.status(201).json(result);
};

const deletePlayer = (req, res) => {
  const id = req.params.id;
  const success = playerModel.deletePlayer(id);

  if (success) {
    res.json( { message: "Player deleted." });
  } else {
    return res.status(404).json({ error: "Player not found " });
  }
};

module.exports = { getPlayers, addPlayer, deletePlayer };
