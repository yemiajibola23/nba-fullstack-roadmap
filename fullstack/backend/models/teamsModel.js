const db = require("../db");

function getAllTeams() {
  const stmt = db.prepare("SELECT * FROM teams");
  return stmt.all();
}
