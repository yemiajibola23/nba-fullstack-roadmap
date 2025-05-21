const bcrypt = require("bcrypt");
const { createUser, findUserByUsername } = require("../models/userModel");

async function signup(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds
    const user = createUser(username, password);
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      res.status(400).json({ error: "Username already exists" });
    } else {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password." });
  }

  const user = findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ id: user.id, username: user.username });
}

module.exports = { signup, login };
