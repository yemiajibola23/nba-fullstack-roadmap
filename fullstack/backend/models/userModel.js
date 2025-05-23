const db = require("../db");

function createUser(username, hashedPassword) {
  const stmt = db.prepare(
    "INSERT INTO users (username, password) VALUES (?, ?)"
  );
  const result = stmt.run(username, hashedPassword);

  return { id: result.lastInsertRowid, username };
}

function findUserByUsername(username) {
  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  return stmt.get(username);
}

function findUserById(id) {
  const stmt = db.prepare("SELECT * FROM users WHERE id = ?");
  return stmt.get(id);
}

module.exports = { createUser, findUserByUsername, findUserById };
