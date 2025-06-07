const express = require("express");
const router = express.Router();
const { getTeams } = require("../controllers/teamsController");

router.get("/", getTeams); // GET /api/teams

module.exports = router;
