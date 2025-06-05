const request = require("supertest");
const app = require("../../app");
const db = require("../../db/test");

beforeEach(() => {
  db.prepare("DELETE FROM players").run();
});

afterAll(() => {
  db.close();
});

xdescribe("GET /api/players", () => {
  it("should return a list of players", async () => {
    const res = await request(app).get("/api/players");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

xdescribe("POST /api/players", () => {
  it("should create a new player and return it", async () => {
    const newPlayer = {
      name: "Test Player",
      points: 42,
      user_id: 1,
    };

    const res = await request(app).post("/api/players").send(newPlayer);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe(newPlayer.name);
    expect(res.body.points).toBe(newPlayer.points);
  });
});

xdescribe("DELETE /api/players", () => {
  it("should delete a new player and return confirmation", async () => {
    const newPlayer = {
      name: "Kobe Bryant",
      points: 33000,
      user_id: 1,
    };

    const res = await request(app).post("/api/players").send(newPlayer);
    const id = res.body.id;

    console.log("POST response:", res.body);

    const deleteRes = await request(app).delete(`/api/players/${id}`);
    expect(deleteRes.statusCode).toBe(200);

    const getRes = await request(app).get("/api/players");
    const playerIds = getRes.body.map((player) => player.id);
    expect(playerIds).not.toContain(id);
  });
});
