const express = require("express");
const router = express.Router();
const { getPlayers, addPlayer } = require("../controllers/playerController");

// GET /api/players
router.get("/", getPlayers);

// POST /api/players
router.post("/", addPlayer);

module.exports = router;
