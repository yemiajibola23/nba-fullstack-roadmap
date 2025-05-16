const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "nba.db"); // or nba.sqlite3 if you renamed it
const db = new Database(dbPath, { verbose: console.log });

module.exports = db;
