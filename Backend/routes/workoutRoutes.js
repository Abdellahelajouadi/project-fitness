const express = require('express');
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const protect = require('../middleware/authMiddleware');

router.use(protect); // حماية جميع المسارات

router.post('/', workoutController.createWorkout);
router.get('/', workoutController.getUserWorkouts);
router.patch('/:id', workoutController.updateWorkout);
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;
