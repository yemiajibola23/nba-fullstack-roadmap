const db = require("../db");

function getPlayersByUser(userId) {
  const stmt = db.prepare(
    `SELECT 
      players.id,
      players.name,
      players.points,
      players.team_id,
      players.user_id,
      teams.name AS team_name
    FROM players
    LEFT JOIN teams ON players.team_id = teams.id
    WHERE players.user_id = ?`
  );

  const allPlayers = db
    .prepare(
      `SELECT 
      players.id,
      players.name,
      players.points,
      players.team_id,
      players.user_id,
      teams.name AS team_name
    FROM players
    LEFT JOIN teams ON players.team_id = teams.id`
    )
    .all();
  console.log("📦 All players in DB:", allPlayers);

  return allPlayers;
}

function playerExists(name) {
  const stmt = db.prepare(
    "SELECT COUNT(*) AS count FROM players WHERE LOWER(name) = LOWER(?)"
  );
  const result = stmt.get(name);
  return result.count > 0;
}

function addNewPlayer(name, points, userId, teamId) {
  const stmt = db.prepare(
    "INSERT INTO players (name, points, user_id, team_id) VALUES(?, ?, ?, ?)"
  );
  const result = stmt.run(name, points, userId, teamId);

  return {
    id: result.lastInsertRowid,
    name,
    points,
    user_id: userId,
    team_id: teamId,
  };
}

function deletePlayer(id) {
  const stmt = db.prepare("DELETE FROM players WHERE id = ?");
  const result = stmt.run(id);

  return result.changes > 0;
}

module.exports = {
  getPlayersByUser,
  addNewPlayer,
  deletePlayer,
  playerExists,
};
