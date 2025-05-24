const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const requireLogin = require("../middleware/authMiddleware");

// GET user profile
router.get("/", requireLogin, getProfile);

// POST updates profile with avatar
router.post("/", requireLogin, upload.single("avatar"), updateProfile);

module.exports = router;
