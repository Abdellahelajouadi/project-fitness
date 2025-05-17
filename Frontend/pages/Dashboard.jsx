// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/workouts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setWorkouts(res.data);
      } catch (err) {
        console.error("Failed to fetch workouts:", err);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🏋️‍♀️ Your Workouts</h2>

      {workouts.length === 0 ? (
        <p className="btn-not">No workouts yet.</p>
      ) : (
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li key={workout._id} className="workout-card">
              <h3>{workout.title}</h3>
              <p>Reps: {workout.reps}</p>
              <p>Load: {workout.load} kg</p>
              <p className="date">{new Date(workout.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}

      {/* ✅ زر الإضافة تحت */}
      <Link to="/add-workout">
        <button className="add-btn">➕ Add a Workout</button>
      </Link>
    </div>
  );
};

export default Dashboard;
