module.exports = function createNBAPlayersTable(db) {
  db.exec(
    `CREATE TABLE IF NOT EXISTS nba_players (
        id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        position TEXT,
        height TEXT,
        weight TEXT,
        jersey_number TEXT,
        college TEXT,
        country TEXT,
        draft_year INTEGER,
        draft_round INTEGER,
        draft_number INTEGER,
        team_id INTEGER,
        FOREIGN KEY(team_id) REFERENCES teams(id)
    )`
  );
};
