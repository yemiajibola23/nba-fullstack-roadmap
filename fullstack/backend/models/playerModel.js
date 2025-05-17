const db = require("../db");

function getAllPlayers() {
  const stmt = db.prepare("SELECT * FROM players");
  return stmt.all();
}

function addNewPlayer(name, points) {
  const stmt = db.prepare("INSERT INTO players (name, points) VALUES(?, ?)");
  const result = stmt.run(name, points);

  return {
    id: result.lastInsertRowid,
    name,
    points,
  };
}

function deletePlayer(id) {
  const stmt = db.prepare("DELETE FROM players WHERE id = ?");
  const result = stmt.run(id);

  return result.changes > 0;
}

module.exports = { getAllPlayers, addNewPlayer, deletePlayer };