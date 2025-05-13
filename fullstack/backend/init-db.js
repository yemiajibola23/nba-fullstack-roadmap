const fs = require('fs');
const path = require('path');
const db = require('./db');

const initSQL = fs.readFileSync(path.join(__dirname, 'data.sql'), 'utf-8');

db.exec(initSQL, (err) => {
    if (err) {
        console.error('❌ Failed to initialize database:', err.message);
    } else {
        console.log('✅ Database initialized and seeded successfully.');
    }

    db.close();
});