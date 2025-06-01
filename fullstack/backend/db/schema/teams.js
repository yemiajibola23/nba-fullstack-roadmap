module.exports = function createTeamsTable(db) {
  db.exec(
    `CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY,
            conference TEXT,
            division TEXT,
            city TEXT,
            name TEXT,
            full_name TEXT UNIQUE,
            abbreviation TEXT UNIQUE
        )`
  );
};
