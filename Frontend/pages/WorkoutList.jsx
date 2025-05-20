import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement initial des workouts
  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/api/workouts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorkouts(response.data);
    } catch (error) {
      console.error("Failed to fetch workouts:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workout-list-container">
      <h2>📋 Vos Workouts</h2>

      {loading ? (
        <p>Chargement en cours...</p>
      ) : workouts.length === 0 ? (
        <p>Aucun workout trouvé.</p>
      ) : (
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li key={workout._id} className="workout-item">
              <div className="workout-info">
                <strong>{workout.title}</strong> - {workout.reps} répétitions @ {workout.load} kg
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;
