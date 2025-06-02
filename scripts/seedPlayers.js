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

seedTeams().catch(console.error);
