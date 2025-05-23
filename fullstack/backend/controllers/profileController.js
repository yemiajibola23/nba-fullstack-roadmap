const db = require("../db");

function getProfile(req, res) {
  const userId = req.session.user?.id;
  if (!userId) return res.status(401).json({ error: "Not authenticated" });

  const stmt = db.prepare(
    "SELECT id, username, avatar FROM users WHERE id = ?"
  );
  const user = stmt.get(userId);

  if (!user) return res.status(404).json({ error: "User not found." });

  res.json(user);
}

function updateProfile(req, res) {
  const userId = req.session.user?.id;
  if (!userId) return res.status(401).json({ error: "Not authenticated" });

  const { username } = req.body;
  const avatar = req.file ? req.file.filename : null;

  const stmt = db.prepare(`
    UPDATE users SET 
    username = COALESCE(?, username),
    avatar = COALESCE(?, avatar)
    WHERE id = ?
    `);
  const result = stmt.run(username, avatar, userId);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Profile update failed." });
  }

  res.json({ success: true, username, avatar });
}

module.exports = { getProfile, updateProfile };
