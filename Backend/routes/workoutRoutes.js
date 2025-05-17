const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createWorkout, getUserWorkouts } = require("../controllers/workoutController");

router.post("/", protect, createWorkout);
router.get("/", protect, getUserWorkouts);


module.exports = router;
