const express = require('express');
const router = express.Router();


// Temporary hardcoded player data
const players = require('../data/players.json');


// GET /api/players
router.get('/', (req, res) => {
    res.json(players);
});

module.exports = router;
