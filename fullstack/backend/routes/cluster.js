const express = require("express");
const { clusterPlayers } = require("../controllers/clusterController");

const router = express.Router();

// POST /api/cluster
router.post("/", clusterPlayers);

module.exports = router;
