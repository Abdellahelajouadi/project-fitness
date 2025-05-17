// controllers/workoutController.js

const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;

    const workout = new Workout({
      title,
      reps,
      load,
      user_id: req.user.id, // ✔ متوافق مع model ديالك
    });

    await workout.save();

    res.status(201).json(workout);
  } catch (error) {
    console.error("Error creating workout:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getUserWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user_id: req.user.id }).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ هنا كندير export للنِّيْن
module.exports = { createWorkout, getUserWorkouts };
