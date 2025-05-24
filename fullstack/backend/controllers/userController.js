const bcrypt = require("bcrypt");
const {
  createUser,
  findUserByUsername,
  findUserById,
} = require("../models/userModel");

async function signup(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds
    const user = createUser(username, hashedPassword);
    req.session.user.id = user.id;
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

function getCurrentUser(req, res) {
  if (!req.session.user?.id) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const user = findUserById(req.session.user?.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ userId: user.id, username: user.username });
}

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password." });
  }

  const user = findUserByUsername(username);
  console.log("DB password:", user.password);
  console.log("Attempted password:", password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const match = await bcrypt.compareSync(password, user.password);
  console.log(`Comparing ${user.password} with ${password}`);
  console.log("Match result:", match);
  if (!match) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  req.session.user = { id: user.id, username: user.username };

  req.session.save(() => {
    res.json({
      message: "Login successful",
      userId: user.id,
      username: user.username,
    });
  });
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout error", err);
      return res.status(500).json({ error: "Could not log out" });
    }

    res.clearCookie("connect.sid");
    res.json({ message: "Logout successful" });
  });
}

module.exports = { signup, login, logout, getCurrentUser };
