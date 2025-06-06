const express = require("express");
const router = express.Router();
const { getTeams } = require("../controllers/teamsController"); // or move to teamController later

router.get("/", getTeams); // GET /api/teams

module.exports = router;
