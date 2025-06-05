const db = require("../../db");
const playerModel = require("../../models/playersModel");
const request = require("supertest");
const app = require("../../app");

xdescribe("playerModel", () => {
  beforeAll(() => {
    // Optional: reset or prep the test DB if needed
  });

  beforeEach(() => {
    db.prepare("DELETE FROM players").run();
    db.prepare("DELETE FROM users").run();
    db.prepare(
      "INSERT INTO users (id, username, password) VALUES (?, ?, ?)"
    ).run(1, "testuser", "hashedpassword");

    db.prepare(
      "INSERT INTO players (name, points, user_id) VALUES (?, ?, ?)"
    ).run("LeBron James", 38, 1);
    db.prepare(
      "INSERT INTO players (name, points, user_id) VALUES (?, ?, ?)"
    ).run("Stephen Curry", 30, 1);
  });

  test("getAllPlayers returns all players in the database", () => {
    const players = playerModel.getAllPlayers();
    expect(players).toHaveLength(2);
    expect(players[0]).toHaveProperty("name", "LeBron James");
    expect(players[1]).toHaveProperty("name", "Stephen Curry");
  });

  test("addPlayer inserts a new player and returns the player object", () => {
    const newPlayer = playerModel.addNewPlayer("Giannis Antetokounmpo", 29, 1);
    const players = playerModel.getAllPlayers();

    expect(newPlayer).toMatchObject({
      name: "Giannis Antetokounmpo",
      points: 29,
    });

    expect(players).toHaveLength(3); // 2 seeded + 1 new
    expect(players.map((p) => p.name)).toContain("Giannis Antetokounmpo");
  });

  test("deletePlayer removes the player with the given ID", () => {
    const playersBefore = playerModel.getAllPlayers();
    const targetId = playersBefore[0].id;

    const result = playerModel.deletePlayer(targetId, 1);
    const playersAfter = playerModel.getAllPlayers();

    expect(result).toBe(true);
    expect(playersAfter).toHaveLength(playersBefore.length - 1);
    expect(playersAfter.find((p) => p.id === targetId)).toBeUndefined();
  });

  test("deletePlayer returns false if no player matches ID", () => {
    const result = playerModel.deletePlayer(9999); // non-existent ID
    expect(result).toBe(false);
  });

  it("should not allow duplicate player submissions", async () => {
    const player = { name: "LeBron James", points: 30 };
    await request(app).post("/api/players").send(player);
    const res = await request(app).post("/api/players").send(player);

    expect(res.statusCode).toBe(409);
    expect(res.body.error).toBe("Player already exists");
  });
});
