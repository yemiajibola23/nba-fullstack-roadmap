// db/schema.js
module.exports = function initializeSchema(db) {
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS teams (
      id INTEGER PRIMARY KEY,
      conference TEXT,
      division TEXT,
      city TEXT,
      name TEXT,
      full_name TEXT UNIQUE,
      abbreviation TEXT UNIQUE
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY,
      name TEXT,
      points REAL,  
      team_id INTEGER,
      user_id INTEGER
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS nba_players (
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
    )
  `);
};
