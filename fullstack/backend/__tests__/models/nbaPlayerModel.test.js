const db = require("../../db/test");
const createNBAPlayersModel = require("../../models/nbaPlayersModel");
const { getPaginatedNBAPlayers, getTotalNBAPlayers } =
  createNBAPlayersModel(db);

beforeEach(() => {
  db.prepare("DELETE FROM nba_players").run();

  const insert = db.prepare(`
    INSERT INTO nba_players (first_name, last_name, position, height, weight)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (let i = 1; i <= 12; i++) {
    insert.run(`Test${i}`, `Player${i}`, "G", "6-3", "190");
  }
});

afterAll(() => {
  db.close();
});

describe("NBA Players Model", () => {
  it("returns a paginated list of players", () => {
    const players = getPaginatedNBAPlayers(5, 5);
    expect(players.length).toBe(5);
    expect(players[0].first_name).toBe("Test6");
  });

  it("returns total number of NBA players", () => {
    const total = getTotalNBAPlayers();
    expect(total).toBe(12);
  });
});
