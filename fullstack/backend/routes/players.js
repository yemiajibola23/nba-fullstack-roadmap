const express = require("express");
const router = express.Router();
const {
  getPlayers,
  addPlayer,
  deletePlayer,
} = require("../controllers/playersController");

const requireLogin = require("../middleware/authMiddleware");

// GET /api/players
router.get("/", getPlayers);

// POST /api/players
router.post("/", requireLogin, addPlayer);

//DELETE /api/players
router.delete("/:id", deletePlayer);

module.exports = router;
