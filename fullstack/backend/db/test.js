const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "nba.test.db");
const db = new Database(dbPath); // No verbose for tests

// Ensure schema exists (you can extract this if needed)
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    points INTEGER NOT NULL
  );
`);

module.exports = db;
