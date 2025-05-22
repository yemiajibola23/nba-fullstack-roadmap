const express = require("express");
const bcrypt = require("bcrypt");
const { signup, login, logout } = require("../controllers/userController");

const router = express.Router();

// POST /api/login
router.post("/login", login);
router.post("/signup", signup);
router.post('/logout', logout)

module.exports = router;
