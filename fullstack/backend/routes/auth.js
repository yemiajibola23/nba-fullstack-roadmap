const express = require("express");
const bcrypt = require("bcrypt");
const {
  signup,
  login,
  logout,
  getCurrentUser,
} = require("../controllers/userController");

const router = express.Router();

// POST /api/login
router.post("/login", login);
// POST /api/signup
router.post("/signup", signup);
// POST /api/logout
router.post("/logout", logout);
// GET /api/me
router.get("/me", getCurrentUser);

module.exports = router;
