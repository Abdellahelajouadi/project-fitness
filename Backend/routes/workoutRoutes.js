const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createWorkout } = require("../controllers/workoutController");

router.post("/", protect, createWorkout);

module.exports = router;
