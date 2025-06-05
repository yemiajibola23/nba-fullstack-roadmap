const express = require("express");
const createNBAPlayersModel = require("../models/nbaPlayersModel");
const createNBAPlayersController = require("../controllers/nbaPlayersController");

module.exports = function (dbInstance) {
  const router = express.Router();

  const model = createNBAPlayersModel(dbInstance);
  const controller = createNBAPlayersController(model);

  // GET /api/nba_players
  router.get("/", controller.getPaginatedNBAPlayers);

  return router;
};
