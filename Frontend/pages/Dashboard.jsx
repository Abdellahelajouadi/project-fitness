// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("token"); // Remove the token
navigate("/login"); // Return to the login page
};

const handleAddWorkout = () => {
navigate("/add-workout"); // Go to the workout add page (we'll set it up later)
};

return (
<div style={{ padding: "20px" }}>
<h2>🏋️‍♀️ Dashboard</h2>
<p>Welcome to your dashboard!</p>

<button onClick={handleAddWorkout} style={{ marginRight: "10px" }}>
➕ Add Workout
</button>
<button onClick={handleLogout} style={{ backgroundColor: "white", color: "black" }}>
🔐 Logout
</button>
</div>
);
};

export default Dashboard;