const express = require("express");
const router = express.Router();
const { getTeams } = require("../controllers/playerController"); // or move to teamController later

router.get("/", getTeams); // GET /api/teams

module.exports = router;
