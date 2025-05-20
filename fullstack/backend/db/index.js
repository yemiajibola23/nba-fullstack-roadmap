const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "nba.db");
const db = new Database(dbPath, { verbose: console.log });

db.pragma("foreign_keys = ON");
const RESET_SCHEMA = false;

if (RESET_SCHEMA) {
  console.log("⚠️ Resetting database schema...");
  db.exec(`
    DROP TABLE IF EXISTS players;
    DROP TABLE IF EXISTS teams;
    `);
}

db.exec(
  `CREATE TABLE IF NOT EXISTS teams (
        id  INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        points INTEGER NOT NULL,
        team_id INTEGER,
        FOREIGN KEY (team_id) REFERENCES teams(id)
    );`
);

console.log("✅ Database schema initialized with foreign key support");
module.exports = db;
