const express = require("express");
const router = express.Router();
const {
  getPaginatedNBAPlayers,
} = require("../controllers/nbaPlayersController");

// GET /api/nba_players
router.get("/", getPaginatedNBAPlayers);

module.exports = router;
