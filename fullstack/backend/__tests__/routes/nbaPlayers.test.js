const request = require("supertest");
const app = require("../../app");
const db = require("../../db/test");

// ✅ Setup the DB before each test
beforeEach(() => {
  // Clean out the nba_players table
  db.prepare("DELETE FROM nba_players").run();

  // Create dummy players for testing pagination
  const insert = db.prepare(`
    INSERT INTO nba_players (first_name, last_name, position, height, weight, ppg, apg, rpg, fg_pct, fg3_pct)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insert.run("Steph", "Curry", "G", "6-2", "185", 27.3, 6.1, 4.5, 49.2, 42.7);
  insert.run(
    "Nikola",
    "Jokic",
    "C",
    "6-11",
    "284",
    26.4,
    9.0,
    11.8,
    56.7,
    33.3
  );
  for (let i = 1; i <= 12; i++) {
    insert.run(
      `Player${i}`,
      `Last${i}`,
      "G",
      "6-3",
      "190",
      10.0,
      2.5,
      3.1,
      45.6,
      32.7
    );
  }
});

// ✅ Clean up DB after all tests
afterAll(() => {
  db.close();
});

describe("GET /api/nba_players with pagination", () => {
  it("returns paginated results and total count", async () => {
    const res = await request(app).get("/api/nba_players?page=2&limit=5");

    console.log("Test received:", res.body);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.players)).toBe(true);
    expect(res.body.players.length).toBe(5);
    expect(res.body.total).toBe(14);
  });

  it("defaults to page 1 and limit 10 if query is missing", async () => {
    const res = await request(app).get("/api/nba_players");

    expect(res.statusCode).toBe(200);
    expect(res.body.players.length).toBe(10);
    expect(res.body.players[0].first_name).toBe("Steph");
    expect(res.body.total).toBe(14);
  });

  it("returns empty array if page is out of bounds", async () => {
    const res = await request(app).get("/api/nba_players?page=5&limit=10");

    expect(res.statusCode).toBe(200);
    expect(res.body.players.length).toBe(0);
    expect(res.body.total).toBe(14);
  });
});

describe("GET /api/nba_players stats format", () => {
  it("includes player stats fields in each result", async () => {
    const res = await request(app).get("/api/nba_players");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.players)).toBe(true);

    const player = res.body.players[0];
    expect(player).toHaveProperty("ppg");
    expect(player).toHaveProperty("rpg");
    expect(player).toHaveProperty("apg");
    expect(player).toHaveProperty("fg_pct");
    expect(player).toHaveProperty("fg3_pct");
  });
});
