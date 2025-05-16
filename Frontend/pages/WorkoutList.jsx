import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://localhost:5000/api/workouts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWorkouts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch workouts:", error.response?.data || error);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="workout-list-container">
      <h2>📋 Your Workouts</h2>
      {loading ? (
        <p>Loading workouts...</p>
      ) : workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <strong>{workout.title}</strong> - {workout.reps} reps @ {workout.load} kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;
