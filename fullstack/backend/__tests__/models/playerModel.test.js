const db = require("../../db");
const playerModel = require("../../models/playerModel");

describe("playerModel", () => {
  beforeAll(() => {
    // Optional: reset or prep the test DB if needed
  });

  beforeEach(() => {
    db.prepare("DELETE FROM players").run();
    db.prepare("INSERT INTO players (name, points) VALUES (?, ?)").run(
      "LeBron James",
      38
    );
    db.prepare("INSERT INTO players (name, points) VALUES (?, ?)").run(
      "Stephen Curry",
      30
    );
  });

  test("getAllPlayers returns all players in the database", () => {
    const players = playerModel.getAllPlayers();
    expect(players).toHaveLength(2);
    expect(players[0]).toHaveProperty("name", "LeBron James");
    expect(players[1]).toHaveProperty("name", "Stephen Curry");
  });

  test("addPlayer inserts a new player and returns the player object", () => {
    const newPlayer = playerModel.addNewPlayer("Giannis Antetokounmpo", 29);
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

    const result = playerModel.deletePlayer(targetId);
    const playersAfter = playerModel.getAllPlayers();

    expect(result).toBe(true);
    expect(playersAfter).toHaveLength(playersBefore.length - 1);
    expect(playersAfter.find((p) => p.id === targetId)).toBeUndefined();
  });

  test("deletePlayer returns false if no player matches ID", () => {
    const result = playerModel.deletePlayer(9999); // non-existent ID
    expect(result).toBe(false);
  });
});
