const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");

// GET user profile
router.get("/", getProfile);

// POST updates profile with avatar
router.post("/", upload.single("avatar"), updateProfile);

module.exports = router;
