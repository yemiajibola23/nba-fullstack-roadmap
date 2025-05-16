const express = require("express");
const router = express.Router();
const { getPlayers, addPlayer, deletePlayer } = require("../controllers/playerController");

// GET /api/players
router.get("/", getPlayers);

// POST /api/players
router.post("/", addPlayer);

//DELETE /api/players
router.delete("/:id", deletePlayer);

module.exports = router;
