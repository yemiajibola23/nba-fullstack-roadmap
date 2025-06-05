const Database = require("better-sqlite3");
const initializeSchema = require('./schema')

db = new Database(":memory:")
initializeSchema(db);

module.exports = db;
