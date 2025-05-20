const db = require("./index");

//  Check if teams or players already exist
const teamsCount = db
  .prepare(`SELECT COUNT(*) AS count FROM teams`)
  .get().count;
const playersCount = db
  .prepare(`SELECT COUNT(*) AS count FROM players`)
  .get().count;

if (playersCount == 0 && teamsCount == 0) {
  // Insert some teams
  const insertTeam = db.prepare(`INSERT INTO teams (name) VALUES (?)`);
  const teams = ["Lakers", "Celtics", "Warriors", "Bucks"];
  const teamIds = teams.map((name) => insertTeam.run(name).lastInsertRowid);

  // Insert some players with team associations
  const insertPlayer = db.prepare(`
    INSERT INTO players (name, points, team_id) VALUES (?, ?, ?)
`);
  insertPlayer.run("LeBron James", 38, teamIds[0]);
  insertPlayer.run("Jayson Tatum", 27, teamIds[1]);
  insertPlayer.run("Stephen Curry", 30, teamIds[2]);
  insertPlayer.run("Giannis Antetokounmpo", 11, teamIds[3]);
  insertPlayer.run("Austin Reaves", 15, teamIds[0]);

  console.log("✅ Seed data inserted.");
} else {
  console.log("ℹ️ Seed skipped — data already exists.");
}

console.log(db.prepare("SELECT * FROM players").all());
