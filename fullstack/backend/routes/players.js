const express = require('express');
const db = require('../db');

const router = express.Router();

// GET /api/players
router.get('/', (req, res) => {
   db.all('SELECT * FROM players ORDER BY points DESC', [], (err, rows) => {
    if (err) {
        console.error('❌ Failed to fetch players:', err.message);
        res.status(500).json({ error : 'Internal server error'});
    } else {
        res.json(rows);
    }
   });
});

module.exports = router;
