const request = require("supertest");
const app = require("../../app");
const db = require("../../db/test");

// ✅ Setup the DB before each test
beforeEach(() => {
  // Clean out the nba_players table
  db.prepare("DELETE FROM nba_players").run();

  // Create dummy players for testing pagination
  const insert = db.prepare(`
    INSERT INTO nba_players (first_name, last_name, position, height, weight)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (let i = 1; i <= 12; i++) {
    insert.run(`Player${i}`, `Last${i}`, "G", "6-3", "190");
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
    expect(res.body.total).toBe(12);
  });

  it("defaults to page 1 and limit 10 if query is missing", async () => {
    const res = await request(app).get("/api/nba_players");

    expect(res.statusCode).toBe(200);
    expect(res.body.players.length).toBe(10);
    expect(res.body.players[0].first_name).toBe("Player1");
    expect(res.body.total).toBe(12);
  });

  it("returns empty array if page is out of bounds", async () => {
    const res = await request(app).get("/api/nba_players?page=5&limit=10");

    expect(res.statusCode).toBe(200);
    expect(res.body.players.length).toBe(0);
    expect(res.body.total).toBe(12);
  });
});
