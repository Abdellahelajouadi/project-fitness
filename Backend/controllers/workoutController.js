const Workout = require("../models/Workout");

// إنشاء تمرين جديد
const createWorkout = async (req, res) => {
  try {
    console.log("✅ User from token:", req.user);
    const { title, reps, load } = req.body;

    const workout = new Workout({
      title,
      reps,
      load,
      user_id: req.user.id,
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    console.error("Error creating workout:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// جلب تمارين المستخدم
const getUserWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user_id: req.user.id }).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// تعديل تمرين
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user.id },
      req.body,
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    console.error("Error updating workout:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// حذف تمرين
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    console.error("Error deleting workout:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createWorkout,
  getUserWorkouts,
  updateWorkout,
  deleteWorkout,
};
