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

router.post('/', (req, res) => {
      console.log('✅ req.body:', req.body);
    const { name, points } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a string.' });
    }

    if (!Number.isInteger(points) || points < 0) {
        return res.status(400).json({ error: 'Points must be a non-negative integer.' });
    }

    // Insert into db and return new record
   const sql = 'INSERT INTO players (name, points) VALUES(?, ?)';
   const params = [name.trim(), points];

   db.run(sql, params, function(err) {
    if (err) {
        console.error('❌ DB Insert Failed:', err.message);
        return res.status(500).json({ error: 'Database insert failed.'});
    }

    // Return newly created player (with auto generated id)
    res.status(201).json({
        id: this.lastID,
        name: name.trim(),
        points
    })
   })

});

module.exports = router;
