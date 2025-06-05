const db = require("../db");
function createNBAPlayersModel(db) {
  function getPaginatedNBAPlayers(limit, offset) {
    return db
      .prepare(`SELECT * FROM nba_players LIMIT ? OFFSET ?`)
      .all(limit, offset);
  }

  function getTotalNBAPlayers() {
    return db.prepare(`SELECT COUNT (*) AS count FROM nba_players`).get().count;
  }

  return { getPaginatedNBAPlayers, getTotalNBAPlayers };
}
module.exports = createNBAPlayersModel;
