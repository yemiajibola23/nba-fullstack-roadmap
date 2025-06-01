const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "nba.db");
const db = new Database(dbPath, { verbose: console.log });

db.pragma("foreign_keys = ON");

const RESET_SCHEMA = false;
if (RESET_SCHEMA) {
  console.log("⚠️ Resetting database schema...");
  db.exec(`
    DROP TABLE IF EXISTS nba_players;
    DROP TABLE IF EXISTS teams;
    `);
}

require("./schema/teams")(db);
require("./schema/nba_players")(db);

console.log("✅ Database schema initialized with foreign key support");
module.exports = db;
