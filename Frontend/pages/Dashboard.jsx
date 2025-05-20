import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  const fetchWorkouts = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:5000/api/workouts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorkouts(res.data);
    } catch (err) {
      console.error("Failed to fetch workouts:", err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (!window.confirm("Are you sure you want to delete this workout?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/workouts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorkouts(workouts.filter((w) => w._id !== id));
    } catch (err) {
      console.error("Failed to delete workout:", err);
      alert("Failed to delete workout");
    }
  };

  // تعديل handleEdit ليعمل توجيه لصفحة التعديل
  const handleEdit = (id) => {
    navigate(`/edit-workout/${id}`);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🏋️‍♀️ Your Workouts</h2>

      {workouts.length === 0 ? (
        <p className="btn-not">No workouts yet...</p>
      ) : (
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li key={workout._id} className="workout-card">
              <h3>{workout.title}</h3>
              <p>Reps: {workout.reps}</p>
              <p>Load: {workout.load} kg</p>
              <p className="date">{new Date(workout.createdAt).toLocaleString()}</p>
              <div>
                <button onClick={() => handleEdit(workout._id)} className="edit-btn">✏️ Edit</button>
                <button onClick={() => handleDelete(workout._id)} className="delete-btn">🗑️ Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link to="/add-workout">
        <button className="add-btn">➕ Add a Workout</button>
      </Link>
    </div>
  );
};

export default Dashboard;
