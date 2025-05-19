const db = require("../db");

function getAllPlayers() {
  const stmt = db.prepare("SELECT * FROM players");
  return stmt.all();
}

function playerExists(name) {
  const stmt = db.prepare(
    "SELECT COUNT(*) AS count FROM players WHERE LOWER(name) = LOWER(?)"
  );
  const result = stmt.get(name);
  return result.count > 0;
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

module.exports = { getAllPlayers, addNewPlayer, deletePlayer, playerExists };
