const db = require("./index");

if (process.env.NODE_ENV == "test") {
  console.log("🧪 Skipping seed during test mode.");
  return;
}

// Check if teams or players already exist
const teamsCount = db
  .prepare(`SELECT COUNT(*) AS count FROM teams`)
  .get().count;
const playersCount = db
  .prepare(`SELECT COUNT(*) AS count FROM players`)
  .get().count;

if (playersCount === 0 && teamsCount === 0) {
  // Insert teams
  const insertTeam = db.prepare(`INSERT INTO teams (name) VALUES (?)`);
  const teams = ["Lakers", "Celtics", "Warriors", "Bucks"];
  const teamIds = teams.map((name) => insertTeam.run(name).lastInsertRowid);

  // Create a test user
  const insertUser = db.prepare(
    "INSERT INTO users (username, password) VALUES (?, ?)"
  );
  const userId = insertUser.run("seeduser", "password").lastInsertRowid; // NOT hashed — dev only

  // Insert players associated with that user
  const insertPlayer = db.prepare(`
    INSERT INTO players (name, points, team_id, user_id) VALUES (?, ?, ?, ?)
  `);
  insertPlayer.run("LeBron James", 38, teamIds[0], userId);
  insertPlayer.run("Jayson Tatum", 27, teamIds[1], userId);
  insertPlayer.run("Stephen Curry", 30, teamIds[2], userId);
  insertPlayer.run("Giannis Antetokounmpo", 11, teamIds[3], userId);
  insertPlayer.run("Austin Reaves", 15, teamIds[0], userId);

  console.log("✅ Seed data inserted (teams, user, and players).");
} else {
  console.log("ℹ️ Seed skipped — data already exists.");
}

// Print result for confirmation
console.log("🔍 Players:");
console.log(db.prepare("SELECT * FROM players").all());
