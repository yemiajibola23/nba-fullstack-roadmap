require("dotenv").config();
const fetch = require("node-fetch");
const db = require("../fullstack/backend/db");

async function seedTeams() {
  const url = "https://api.balldontlie.io/v1/teams/";
  const apiKey = process.env.BALLDONTLIE_API_KEY;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const insert = db.prepare(`
    INSERT OR IGNORE INTO teams (
        id, conference, division, city, name, full_name, abbreviation
    ) VALUES(?, ?, ?, ?, ?, ?, ?)`);

  for (const team of data.data) {
    insert.run(
      team.id,
      team.conference,
      team.division,
      team.city,
      team.name,
      team.full_name,
      team.abbreviation
    );
  }

  if (!data.data || !Array.isArray(data.data)) {
    console.error("❌ Unexpected API response structure");
  } else {
    console.log(`✅ Seeded ${data.data.length} teams into the database.`);
  }
}

// seedTeams().catch(console.error);

async function seedPlayers() {
  const url = "https://api.balldontlie.io/v1/players?per_page=100&page=1";
  const apiKey = process.env.BALLDONTLIE_API_KEY;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const insert = db.prepare(`INSERT OR IGNORE INTO nba_players (
    id, first_name, last_name, position, height, weight, jersey_number, college, country, draft_year, draft_round, draft_number, team_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  for (const p of data.data) {
    insert.run(
      p.id,
      p.first_name,
      p.last_name,
      p.position || null,
      p.height || null,
      p.weight || null,
      p.jersey_number || null,
      p.college || null,
      p.country || null,
      p.draft_year || null,
      p.draft_round || null,
      p.draft_number || null,
      p.team?.id || null
    );
  }

  console.log(`✅ Seeded ${data.data.length} players into the database.`);
}

async function main() {
  await seedTeams();
  await seedPlayers();
}

main().catch(console.error);
